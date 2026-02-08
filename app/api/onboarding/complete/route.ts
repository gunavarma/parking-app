import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { users } from "@/app/db/schema";
import { getAuthenticatedUser } from "@/app/lib/auth";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { user, error } = await getAuthenticatedUser();

    if (error || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { role } = body;

    // Validate role
    if (role && !["renter", "host"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Upsert user (in case they don't exist in DB yet, though specific auth triggers should handle this,
    // it's safe to ensure they exist here).
    // Note: In a strict Supabase flow, a trigger might create the user.
    // But we'll use onConflictDoUpdate or just Update if we assume existence.
    // Let's assume we need to update.

    // Check if user exists first to decide on insert vs update (or use onConflict if supported well)
    // Drizzle's onConflictDoUpdate is good.

    await db
      .insert(users)
      .values({
        id: user.id,
        email: user.email!,
        role: role || "renter",
        hasCompletedOnboarding: true,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: users.id,
        set: {
          role: role || "renter",
          hasCompletedOnboarding: true,
          updatedAt: new Date(),
        },
      });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
