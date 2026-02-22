import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Missing Product ID" },
        { status: 400 }
      );
    }

    const product = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(productId)));
    if (product.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product[0]);
  } catch (err) {
    console.error("Error Fetching Product", err);
    return NextResponse.json(
      { error: err.message || "Faild to fetch Product" },
      { status: 500 }
    );
  }
}
