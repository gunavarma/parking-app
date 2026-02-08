// Force rebuild
import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { users } from "@/app/db/schema";
import { getAuthenticatedUser } from "@/app/lib/auth";
import { eq } from "drizzle-orm";

export async function GET() {
  const { user } = await getAuthenticatedUser();

  if (!user) {
    return NextResponse.json({ user: null });
  }

  // Fetch from DB
  const dbUser = await db.query.users.findFirst({
    where: eq(users.id, user.id),
  });

  return NextResponse.json({
    user: {
      ...user,
      hasCompletedOnboarding: dbUser?.hasCompletedOnboarding || false,
      role: dbUser?.role,
    },
  });
}
