import { db } from "@/config/db";
import { whislistItemsTable } from "@/config/schema";

import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Missing Product Id" },
        { status: 400 }
      );
    }

    await db
      .delete(whislistItemsTable)
      .where(eq(whislistItemsTable.id, Number(productId)));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log("Faild to delete product", err);
    return NextResponse.json(
      { error: "fai to delete product" },
      { status: 500 }
    );
  }
}
