import { db } from "@/config/db";
import { cartItemsTable, cartTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, externalId, name, price, image, quantity } =
      await req.json();

    let [cart] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.userId, userId));

    if (!cart) {
      const [newCart] = await db
        .insert(cartTable)
        .values({
          userId,
        })
        .returning();
      cart = newCart;
    }

    const existingItem = await db
      .select()
      .from(cartItemsTable)
      .where(
        and(
          eq(cartItemsTable.cartId),
          eq(cartItemsTable.externalId, externalId)
        )
      );
    if (existingItem.length > 0) {
      // ممنوع نعمل update → نرجع error
      return NextResponse.json(
        { error: "Product already exists in cart" },
        { status: 400 }
      );
    }
    const [inserted] = await db
      .insert(cartItemsTable)
      .values({
        cartId: cart.id,
        externalId,
        name,
        price,
        image,
        quantity,
      })
      .returning();

    return NextResponse.json(inserted);
  } catch (err) {
    console.error("Error adding to cart :", err);
    return NextResponse.json(
      { error: "Error adding to cart" },
      { status: 500 }
    );
  }
}
