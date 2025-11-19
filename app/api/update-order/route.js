import { db } from "@/config/db";
import { ordersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { status, orderId } = await req.json();
    if (!status || !orderId) {
      return NextResponse.json(
        { error: "missing requierd data" },
        { status: 400 }
      );
    }
    const updatedOrder = await db
      .update(ordersTable)
      .set({
        status,
      })
      .where(eq(ordersTable.id, Number(orderId)))
      .returning();
    return NextResponse.json(updatedOrder);
  } catch (err) {
    console.error("Error Updating Order", err);
    return NextResponse.json(
      { error: "Faild to Update Order" },
      { status: 500 }
    );
  }
}
