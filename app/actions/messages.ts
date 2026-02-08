"use server";

import { db } from "../db";
import { messages, users } from "../db/schema";
import { eq, or, and, desc, asc } from "drizzle-orm";
import { getAuthenticatedUserId } from "../lib/auth";

export async function sendMessage(data: {
  receiverId: string;
  content: string;
  listingId?: string;
}) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  const [message] = await db
    .insert(messages)
    .values({
      senderId: userId,
      receiverId: data.receiverId,
      content: data.content,
      listingId: data.listingId,
    })
    .returning();

  return message;
}

export async function getConversation(otherUserId: string) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  return await db
    .select()
    .from(messages)
    .where(
      or(
        and(
          eq(messages.senderId, userId),
          eq(messages.receiverId, otherUserId),
        ),
        and(
          eq(messages.senderId, otherUserId),
          eq(messages.receiverId, userId),
        ),
      ),
    )
    .orderBy(asc(messages.createdAt));
}

export async function getConversationsList() {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  // Complex query to get latest message per conversation
  // For simplicity, just fetching all messages and doing aggregation in client or simple query
  // Alternatively, just return all messages for now.
  // A proper implementation would require a Distinct On query or Group By.
  return [];
}
