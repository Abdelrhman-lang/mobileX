import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const recentProducts = await db
      .select()
      .from(productsTable)
      .orderBy(desc(productsTable.createdAt))
      .limit(5);
    return NextResponse.json(recentProducts);
  } catch (err) {
    console.error("Error Fetching Recent Products", err);
    return NextResponse.json(
      { error: "Faild to Fetch Recent Products" },
      { status: 500 }
    );
  }
}
