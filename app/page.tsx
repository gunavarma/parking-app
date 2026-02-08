"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import { useQuery } from "@tanstack/react-query";

const fetchListings = async () => {
  const res = await fetch("/api/listings");
  if (!res.ok) throw new Error("Failed to fetch listings");
  return res.json();
};

import { useEffect } from "react";
import { useLocation } from "./context/LocationContext";

export default function Home() {
  const { requestLocation } = useLocation();
  const router = useRouter();

  useEffect(() => {
    // Server-Side Onboarding Check
    const checkUserStatus = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        // If no user or not onboarded, redirect
        if (!data.user || !data.user.hasCompletedOnboarding) {
          router.push("/onboarding");
        } else {
          requestLocation();
        }
      } catch (error) {
        console.error("Auth check failed", error);
        router.push("/onboarding");
      }
    };

    if (typeof window !== "undefined") {
      checkUserStatus();
    }
  }, []);

  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["listings"],
    queryFn: fetchListings,
  });

  return (
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-40 py-8">
        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">
            Explore Categories
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
            {[
              { icon: "storefront", label: "Mall", active: false },
              { icon: "corporate_fare", label: "Commercial", active: false },
              { icon: "apartment", label: "Apartment", active: true },
              { icon: "public", label: "Public", active: false },
              { icon: "ev_station", label: "EV Charging", active: false },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 min-w-[80px] group cursor-pointer"
              >
                <div
                  className={`size-14 rounded-xl flex items-center justify-center transition-all ${
                    cat.active
                      ? "bg-white dark:bg-zinc-900 border border-secondary bg-secondary/10"
                      : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-secondary group-hover:bg-secondary/5"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${
                      cat.active
                        ? "text-secondary"
                        : "group-hover:text-secondary text-zinc-900 dark:text-white"
                    }`}
                  >
                    {cat.icon}
                  </span>
                </div>
                <span
                  className={`text-xs font-semibold ${
                    cat.active
                      ? "text-secondary"
                      : "text-zinc-900 dark:text-gray-300"
                  }`}
                >
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Listings Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Recommended for you
            </h2>
            <button className="text-sm font-semibold text-secondary flex items-center gap-1 cursor-pointer">
              See all{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
              <div className="col-span-full py-10 text-center text-zinc-500">
                Loading listings...
              </div>
            ) : listings.length === 0 ? (
              <div className="col-span-full py-10 text-center text-zinc-500">
                No listings found.
              </div>
            ) : (
              listings.map((listing: any) => (
                <Link
                  key={listing.id}
                  href={`/parking/${listing.id}`}
                  className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer block"
                >
                  <div className="relative h-48 w-full bg-slate-200">
                    <Image
                      className="w-full h-full object-cover"
                      alt={listing.title}
                      src={
                        listing.images?.[0] ||
                        "https://placehold.co/400x300?text=No+Image"
                      }
                      width={400}
                      height={300}
                    />
                    {listing.featured && (
                      <div className="absolute top-3 left-3 bg-secondary text-[#111811] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-3 right-3 size-8 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg text-zinc-900 dark:text-white">
                        favorite
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-base truncate pr-2 text-zinc-900 dark:text-white">
                        {listing.title}
                      </h3>
                      <span className="text-lg font-bold text-secondary">
                        ${listing.pricePerHour}/hr
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mb-3">
                      <span className="material-symbols-outlined text-xs">
                        location_on
                      </span>
                      {listing.address}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold">
                        {listing.slots || 0} Slots Available
                      </div>
                      <span className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400">
                        {/* {listing.time} */}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 rounded-xl font-bold transition-colors cursor-pointer">
            Load more spaces
          </button>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 md:bottom-8 right-8 z-[100] group">
        <Link
          href="/post-ad"
          className="size-16 bg-secondary text-[#111811] rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer block"
        >
          <span className="material-symbols-outlined text-4xl font-bold">
            add
          </span>
        </Link>
        {/* Tooltip */}
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#111811] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Post Parking Space
        </span>
      </div>

      {/* Mobile Footer Navigation */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-3 flex justify-between items-center z-50">
        <Link
          href="/"
          className="flex flex-col items-center text-secondary cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <div className="flex flex-col items-center text-zinc-500 cursor-pointer hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[10px] font-medium">Search</span>
        </div>
        <div className="flex flex-col items-center text-zinc-500 cursor-pointer hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-medium">Saved</span>
        </div>
        <Link
          href="/profile"
          className="flex flex-col items-center text-[#618961] cursor-pointer hover:text-secondary transition-colors"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </footer>
    </>
  );
}
