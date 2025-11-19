import { db } from "@/config/db";
import { productsTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json({ error: "Product not Found" }, { status: 400 });
    }
    await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(productId)));
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error Deleting Product", err);
    return NextResponse.json(
      { error: "Faild to Delete Product" },
      { status: 500 }
    );
  }
}
