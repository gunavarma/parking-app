"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      router.push("/onboarding");
      router.refresh(); // Clear server cache
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center gap-4 px-6 min-h-[64px] w-full justify-between hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors group"
    >
      <div className="flex items-center gap-4">
        <div className="text-red-500 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20 shrink-0 size-10 group-hover:bg-red-200 dark:group-hover:bg-red-900/30 transition-colors">
          <span className="material-symbols-outlined">logout</span>
        </div>
        <p className="text-red-600 dark:text-red-400 text-base font-bold flex-1 text-left">
          {isLoading ? "Logging out..." : "Log Out"}
        </p>
      </div>
      {!isLoading && (
        <span className="material-symbols-outlined text-red-300 dark:text-red-800 group-hover:text-red-500 transition-colors">
          chevron_right
        </span>
      )}
    </button>
  );
}
