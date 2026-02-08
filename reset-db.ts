import postgres from "postgres";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const resetDb = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const sql = postgres(process.env.DATABASE_URL, { max: 1 });

  console.log("🔥 Dropping tables...");

  await sql`DROP TABLE IF EXISTS "bookings" CASCADE`;
  await sql`DROP TABLE IF EXISTS "messages" CASCADE`;
  await sql`DROP TABLE IF EXISTS "listings" CASCADE`;
  await sql`DROP TABLE IF EXISTS "users" CASCADE`;
  // Add other tables if necessary

  console.log("✅ Tables dropped.");

  await sql.end();
  process.exit(0);
};

resetDb().catch((err) => {
  console.error("❌ Reset failed");
  console.error(err);
  process.exit(1);
});
