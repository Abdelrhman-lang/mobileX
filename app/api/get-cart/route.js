import { db } from "@/config/db";
import { cartItemsTable, cartTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const [cart] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.userId, userId));

    if (!cart) {
      return NextResponse.json({ items: [] });
    }

    const items = await db
      .select()
      .from(cartItemsTable)
      .where(eq(cartItemsTable.cartId, cart.id));
    return NextResponse.json({
      cartId: cart.id,
      items,
    });
  } catch (err) {
    console.error("Error fetching cart:", err);
    return NextResponse.json({ error: "Error fetching cart" }, { status: 500 });
  }
}
