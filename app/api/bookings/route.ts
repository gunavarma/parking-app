import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { bookings } from "@/app/db/schema";
import { eq, desc } from "drizzle-orm";
import { getAuthenticatedUserId } from "@/app/lib/auth";

export async function GET(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await db
    .select()
    .from(bookings)
    .where(eq(bookings.renterId, userId))
    .orderBy(desc(bookings.createdAt));

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const startTime = new Date(body.startTime);
    const endTime = new Date(body.endTime);

    // Check for overlapping bookings
    // Logic: (StartA < EndB) && (EndA > StartB)
    const existingBookings = await db
      .select()
      .from(bookings)
      .where(eq(bookings.listingId, body.listingId));

    const hasOverlap = existingBookings.some((b) => {
      // Skip cancelled bookings
      if (b.status === "cancelled") return false;

      const bStart = new Date(b.startTime);
      const bEnd = new Date(b.endTime);

      return startTime < bEnd && endTime > bStart;
    });

    if (hasOverlap) {
      return NextResponse.json(
        { error: "This time slot is already booked" },
        { status: 409 },
      );
    }

    const [booking] = await db
      .insert(bookings)
      .values({
        renterId: userId,
        listingId: body.listingId,
        startTime: startTime,
        endTime: endTime,
        totalPrice: body.totalPrice,
        status: "confirmed", // Auto-confirming for MVP
      })
      .returning();

    return NextResponse.json(booking);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
