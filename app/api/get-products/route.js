import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.select().from(productsTable);
    return NextResponse.json(products);
  } catch (err) {
    console.error("Error Fetching Products");
    return NextResponse.json(
      { error: "Faild to fetch Products" },
      { status: 500 }
    );
  }
}
