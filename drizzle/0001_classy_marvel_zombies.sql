ALTER TABLE "users" ADD COLUMN "role" text DEFAULT 'renter';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "has_completed_onboarding" boolean DEFAULT false;