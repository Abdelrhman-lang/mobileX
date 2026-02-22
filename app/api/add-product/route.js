import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, category, price, quantity, image } = body;

    if (!title || !description || !category || !price || !quantity) {
      return NextResponse.json(
        { error: "Missing requierd data" },
        { status: 400 }
      );
    }
    const newProduct = await db
      .insert(productsTable)
      .values({
        title,
        description,
        category,
        price: Number(price),
        quantity: Number(quantity),
        image,
      })
      .returning();
    return NextResponse.json({
      message: "Product added successfully",
      newProduct,
    });
  } catch (err) {
    console.error("Error Adding Product", err);
    return NextResponse.json(
      { error: "Faild to Add Product" },
      { status: 500 }
    );
  }
}
