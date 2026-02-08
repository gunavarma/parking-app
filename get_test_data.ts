import "dotenv/config";
import { db } from "./app/db";
import { users, listings } from "./app/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  console.log("Checking for test user...");
  let [user] = await db.select().from(users).limit(1);

  if (!user) {
    console.log("No user found. Creating test user...");
    const result = await db
      .insert(users)
      .values({
        id: "test-user-1",
        email: "test@example.com",
        name: "Test User",
        isVerified: true,
      })
      .returning();
    user = result[0];
  }
  console.log(`User ID: ${user.id}`);

  console.log("Checking for test listing...");
  let [listing] = await db.select().from(listings).limit(1);

  if (!listing) {
    console.log("No listing found. Creating test listing...");
    const result = await db
      .insert(listings)
      .values({
        hostId: user.id,
        title: "Test Parking Spot",
        description: "A secure test spot",
        address: "123 Test Lane",
        pricePerHour: "10.00",
        features: ["CCTV", "Covered"],
        status: "active",
        currency: "USD",
      })
      .returning();
    listing = result[0];
  }
  console.log(`Listing ID: ${listing.id}`);
  process.exit(0);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
