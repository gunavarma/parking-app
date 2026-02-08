import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  integer,
  numeric,
  jsonb,
} from "drizzle-orm/pg-core";

// Users Table
// We use 'text' for id to match SuperTokens' string-based IDs
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  avatarUrl: text("avatar_url"),
  bio: text("bio"),
  phone: text("phone"),
  isVerified: boolean("is_verified").default(false),

  // Onboarding & Role
  role: text("role", { enum: ["renter", "host", "admin"] }).default("renter"),
  hasCompletedOnboarding: boolean("has_completed_onboarding").default(false),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Listings Table
export const listings = pgTable("listings", {
  id: uuid("id").primaryKey().defaultRandom(),
  hostId: text("host_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  latitude: numeric("latitude"), // For maps
  longitude: numeric("longitude"), // For maps
  pricePerHour: numeric("price_per_hour").notNull(),
  currency: text("currency").default("USD").notNull(),

  // Features (stored as simple columns or JSON)
  features: jsonb("features"), // e.g. ["CCTV", "Covered", "EV Charging"]

  // Images
  images: text("images").array(), // Array of URLs

  status: text("status", { enum: ["active", "inactive", "rented"] })
    .default("active")
    .notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Bookings Table
export const bookings = pgTable("bookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  listingId: uuid("listing_id")
    .notNull()
    .references(() => listings.id, { onDelete: "cascade" }),
  renterId: text("renter_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),

  totalPrice: numeric("total_price").notNull(),
  status: text("status", {
    enum: ["pending", "confirmed", "cancelled", "completed"],
  })
    .default("pending")
    .notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Messages Table (Simplified)
export const messages = pgTable("messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  senderId: text("sender_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  receiverId: text("receiver_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  listingId: uuid("listing_id").references(() => listings.id), // Optional context

  content: text("content").notNull(),
  isRead: boolean("is_read").default(false),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relationships/Types can be inferred here if needed via drizzle-zod or manually
