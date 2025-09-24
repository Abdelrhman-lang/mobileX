import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, name } = await req.json();

    // check if the user exisist
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    //   if ther is no users
    if (existingUser.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          name: name,
          email: email,
        })
        .returning();
      return NextResponse.json(result[0]);
    }
    return NextResponse.json(existingUser[0]);
  } catch (err) {
    console.log("Error Post User", err);
    return NextResponse.json({ error: "Error in user api" }, { status: 500 });
  }
}
