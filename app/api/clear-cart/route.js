import { db } from "@/config/db";
import { cartItemsTable, cartTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "missing user Id" }, { status: 400 });
    }

    const [cart] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.userId, userId));

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    // امسح كل العناصر من cartItemsTable
    await db.delete(cartItemsTable).where(eq(cartItemsTable.cartId, cart.id));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log("faild to clear cart", err);
    return NextResponse.json({ error: "faild to clear cart" }, { status: 500 });
  }
}
