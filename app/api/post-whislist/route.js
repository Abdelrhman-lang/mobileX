import { db } from "@/config/db";
import { whislistItemsTable, whislistTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, externalId, name, price, image } = await req.json();

    let [whislist] = await db
      .select()
      .from(whislistTable)
      .where(eq(whislistTable.userId, userId));

    if (!whislist) {
      const [newWhislist] = await db
        .insert(whislistTable)
        .values({
          userId,
        })
        .returning();
      whislist = newWhislist;
    }

    const existingItem = await db
      .select()
      .from(whislistItemsTable)
      .where(
        and(
          eq(whislistItemsTable.whislistId),
          eq(whislistItemsTable.externalId, externalId)
        )
      );
    if (existingItem.length > 0) {
      // ممنوع نعمل update → نرجع error
      return NextResponse.json(
        { error: "Product already exists in whishlist" },
        { status: 400 }
      );
    }
    const [inserted] = await db
      .insert(whislistItemsTable)
      .values({
        whislistId: whislist.id,
        externalId,
        name,
        price,
        image,
      })
      .returning();

    return NextResponse.json(inserted);
  } catch (err) {
    console.error("Error adding to whislist :", err);
    return NextResponse.json(
      { error: "Error adding to whislist" },
      { status: 500 }
    );
  }
}
