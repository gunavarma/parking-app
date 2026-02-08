"use server";

import { db } from "../db";
import { listings } from "../db/schema";
import { eq, desc, like, and, gte, lte } from "drizzle-orm";
import { getAuthenticatedUserId } from "../lib/auth";

export type CreateListingData = {
  title: string;
  description: string;
  address: string;
  pricePerHour: string;
  latitude?: string;
  longitude?: string;
  features?: string[];
  images?: string[];
};

export async function createListing(data: CreateListingData) {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  const [listing] = await db
    .insert(listings)
    .values({
      hostId: userId,
      title: data.title,
      description: data.description,
      address: data.address,
      pricePerHour: data.pricePerHour,
      latitude: data.latitude,
      longitude: data.longitude,
      features: data.features,
      images: data.images,
    })
    .returning();

  return listing;
}

export async function getListings(search?: string) {
  // Basic search implementation
  if (search) {
    return await db
      .select()
      .from(listings)
      .where(like(listings.title, `%${search}%`))
      .orderBy(desc(listings.createdAt));
  }
  return await db.select().from(listings).orderBy(desc(listings.createdAt));
}

export async function getListing(id: string) {
  const [listing] = await db.select().from(listings).where(eq(listings.id, id));
  return listing;
}

export async function getMyListings() {
  const userId = await getAuthenticatedUserId();
  if (!userId) throw new Error("Unauthorized");

  return await db
    .select()
    .from(listings)
    .where(eq(listings.hostId, userId))
    .orderBy(desc(listings.createdAt));
}
