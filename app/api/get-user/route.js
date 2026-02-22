import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const result = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    return NextResponse.json(result[0], { status: 200 });
  } catch (err) {
    console.log("Faild to Get User Data", err);
    return NextResponse.json(
      { error: "Faild to Get User Data" },
      { status: 500 }
    );
  }
}
