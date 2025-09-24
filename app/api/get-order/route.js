import { db } from "@/config/db";
import { ordersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId"); // هسيبو string عشان هو جاي من clerk string

    if (!userId) {
      return NextResponse.json({ error: "Missing user id" }, { status: 400 });
    }

    const result = await db
      .select()
      .from(ordersTable)
      .where(eq(ordersTable.userId, userId));

    if (result.length === 0) {
      return NextResponse.json({ error: "no orders found" }, { status: 404 });
    }
    return NextResponse.json(result);
  } catch (err) {
    console.log("Error get order");
    return NextResponse.json({ error: "Error get order" }, { status: 500 });
  }
}
