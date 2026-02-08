import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { listings } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { getAuthenticatedUserId } from "@/app/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const [listing] = await db.select().from(listings).where(eq(listings.id, id));

  if (!listing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(listing);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const userId = await getAuthenticatedUserId();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const [listing] = await db.select().from(listings).where(eq(listings.id, id));

  if (!listing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (listing.hostId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await db.delete(listings).where(eq(listings.id, id));

  return NextResponse.json({ success: true });
}
