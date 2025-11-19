import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.role, "user"));
    return NextResponse.json(users);
  } catch (err) {
    console.error("Error Fetching Users", err);
    return NextResponse.json(
      { error: "Faild to Fetch Users" },
      { status: 500 }
    );
  }
}
