"use server";

import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { getAuthenticatedUserId } from "../lib/auth";

export async function getUserProfile(userId?: string) {
  const currentUserId = await getAuthenticatedUserId();
  const targetId = userId || currentUserId;

  if (!targetId) return null;

  const [user] = await db.select().from(users).where(eq(users.id, targetId));
  return user || null;
}

export async function updateUserProfile(data: {
  name?: string;
  bio?: string;
  phone?: string;
  avatarUrl?: string;
}) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  // Check if user exists, if not create (upsert logic)
  const [existing] = await db.select().from(users).where(eq(users.id, userId));

  if (existing) {
    await db
      .update(users)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(users.id, userId));
  } else {
    await db.insert(users).values({
      id: userId,
      email: "placeholder@example.com", // logic to get email from Supabase needed if we want it here
      ...data,
    });
  }

  return { success: true };
}
