import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { inArray } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const admins = await db
      .select()
      .from(usersTable)
      .where(inArray(usersTable.role, ["super admin", "admin"]));
    return NextResponse.json(admins);
  } catch (err) {
    console.error("Error Fetching Admins", err);
    return NextResponse.json(
      { error: "Faild to Fetch Admins" },
      { status: 500 }
    );
  }
}
