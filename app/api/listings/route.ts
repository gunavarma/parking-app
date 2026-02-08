import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { listings } from "@/app/db/schema";
import { desc, like, eq } from "drizzle-orm";
import { getAuthenticatedUserId, getAuthenticatedUser } from "@/app/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  const my = searchParams.get("my");

  // If "my=true", return only current user's listings
  if (my === "true") {
    const userId = await getAuthenticatedUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await db
      .select()
      .from(listings)
      .where(eq(listings.hostId, userId))
      .orderBy(desc(listings.createdAt));
    return NextResponse.json(data);
  }

  // Basic search
  if (search) {
    const data = await db
      .select()
      .from(listings)
      .where(like(listings.title, `%${search}%`))
      .orderBy(desc(listings.createdAt));
    return NextResponse.json(data);
  }

  // Return all
  const data = await db
    .select()
    .from(listings)
    .orderBy(desc(listings.createdAt));
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { user, error: authError } = await getAuthenticatedUser();
  if (!user || authError) {
    return NextResponse.json(
      { error: "Unauthorized", details: authError?.message || "No user found" },
      { status: 401 },
    );
  }
  const userId = user.id;

  try {
    const body = await request.json();
    const [listing] = await db
      .insert(listings)
      .values({
        hostId: userId,
        title: body.title,
        description: body.description,
        address: body.address,
        pricePerHour: body.pricePerHour,
        latitude: body.latitude,
        longitude: body.longitude,
        features: body.features,
        images: body.images,
      })
      .returning();

    return NextResponse.json(listing);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
