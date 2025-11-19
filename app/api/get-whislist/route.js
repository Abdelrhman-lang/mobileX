import { db } from "@/config/db";
import { whislistItemsTable, whislistTable } from "@/config/schema";

import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userEmail = searchParams.get("userEmail");

    if (!userEmail) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const [whislist] = await db
      .select()
      .from(whislistTable)
      .where(eq(whislistTable.userEmail, userEmail));

    if (!whislist) {
      return NextResponse.json({ items: [] });
    }

    const items = await db
      .select()
      .from(whislistItemsTable)
      .where(eq(whislistItemsTable.whislistId, whislist.id));
    return NextResponse.json({
      whislistId: whislist.id,
      items,
    });
  } catch (err) {
    console.error("Error fetching cart:", err);
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 });
  }
}
