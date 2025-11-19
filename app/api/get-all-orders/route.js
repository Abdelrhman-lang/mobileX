import { db } from "@/config/db";
import { ordersTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orders = await db.select().from(ordersTable);
    return NextResponse.json(orders);
  } catch (err) {
    console.error("Error Fetching Orders", err);
    return NextResponse.json(
      { error: "Faild to Fetch Orders" },
      { status: 500 }
    );
  }
}
