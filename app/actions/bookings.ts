"use server";

import { db } from "../db";
import { bookings, listings } from "../db/schema";
import { eq, and, desc } from "drizzle-orm";
import { getAuthenticatedUserId } from "../lib/auth";

export async function createBooking(data: {
  listingId: string;
  startTime: Date;
  endTime: Date;
  totalPrice: string;
}) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  // TODO: Add logic to check for overlapping bookings?

  const [booking] = await db
    .insert(bookings)
    .values({
      renterId: userId,
      listingId: data.listingId,
      startTime: data.startTime,
      endTime: data.endTime,
      totalPrice: data.totalPrice,
      status: "pending", // Default
    })
    .returning();

  return booking;
}

export async function getMyBookings() {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  // Fetch bookings where user is renter
  // We can also join with listings to get details
  return await db
    .select({
      booking: bookings,
      listing: listings,
    })
    .from(bookings)
    .innerJoin(listings, eq(bookings.listingId, listings.id))
    .where(eq(bookings.renterId, userId))
    .orderBy(desc(bookings.createdAt));
}

export async function cancelBooking(bookingId: string) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  // Verify ownership
  const [booking] = await db
    .select()
    .from(bookings)
    .where(eq(bookings.id, bookingId));
  if (!booking) throw new Error("Booking not found");
  if (booking.renterId !== userId) throw new Error("Unauthorized");

  await db
    .update(bookings)
    .set({ status: "cancelled" })
    .where(eq(bookings.id, bookingId));

  return { success: true };
}
