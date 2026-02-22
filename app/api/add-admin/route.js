import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, role } = body;

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Missing Requierd Data" },
        { status: 400 }
      );
    }

    const exsitingAdmin = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (exsitingAdmin.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          name,
          email,
          role: "admin",
        })
        .returning();
      return NextResponse.json(result[0]);
    }
    return NextResponse.json(exsitingAdmin[0]);
  } catch (err) {
    console.error("Error Adding Admin", err);
    return NextResponse.json({ error: "Faild to Add Admin" }, { status: 500 });
  }
}
