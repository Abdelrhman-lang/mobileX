import { db } from "@/config/db";
import {
  cartItemsTable,
  cartTable,
  orderItemsTable,
  ordersTable,
} from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, userEmail } = await req.json();

    if (!userId || !userEmail) {
      return NextResponse.json(
        { error: "Missing user id or email" },
        { status: 400 }
      );
    }

    const [cart] = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.userId, userId));

    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }

    const cartItems = await db
      .select()
      .from(cartItemsTable)
      .where(eq(cartItemsTable.cartId, cart.id));

    if (cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is Empty" }, { status: 400 });
    }

    const [order] = await db
      .insert(ordersTable)
      .values({
        userId,
      })
      .returning();

    const orderItems = cartItems.map((item) => ({
      orderId: order.id,
      externalId: item.externalId,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: item.quantity,
    }));
    await db.insert(orderItemsTable).values(orderItems);
    await db.delete(cartItemsTable).where(eq(cartItemsTable.cartId, cart.id));

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (err) {
    console.log("Error Createing Order", err);
    return NextResponse.json(
      { erroe: "Faild to Create Order" },
      { status: 500 }
    );
  }
}
