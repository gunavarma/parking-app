import { createClient } from "@/utils/supabase/server";

export async function getAuthenticatedUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Auth error:", error);
  }
  if (!user) {
    console.log("No authenticated user found.");
  }

  return { user, error };
}

export async function getAuthenticatedUserId(): Promise<string | null> {
  const { user } = await getAuthenticatedUser();
  return user?.id || null;
}
