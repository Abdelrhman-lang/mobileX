import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const { email, phone, address } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const result = await db
      .update(usersTable)
      .set({
        phone,
        address,
      })
      .where(eq(usersTable.email, email))
      .returning();
    return NextResponse.json(result[0]);
  } catch (err) {
    console.log("Error Updating user", err);
    return NextResponse.json(
      { error: "Faild to Update User Data" },
      { status: 500 }
    );
  }
}
