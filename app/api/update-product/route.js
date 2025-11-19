import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Missing product ID" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { title, description, category, price, quantity } = body;

    if (!title || !description || !category || !price || !quantity) {
      return NextResponse.json(
        { error: "Missing required data" },
        { status: 400 }
      );
    }

    const updatedProduct = await db
      .update(productsTable)
      .set({
        title,
        description,
        category,
        price: Number(price),
        quantity: Number(quantity),
      })
      .where(eq(productsTable.id, Number(productId)))
      .returning();

    if (updatedProduct.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Product updated successfully",
      product: updatedProduct[0],
    });
  } catch (err) {
    console.error("Error updating product:", err);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}
