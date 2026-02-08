"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BookingForm from "../../components/BookingForm";

const fetchListing = async (id: string) => {
  const res = await fetch(`/api/listings/${id}`);
  if (!res.ok) throw new Error("Failed to fetch listing");
  return res.json();
};

export default function ParkingDetail() {
  const { id } = useParams() as { id: string };
  const {
    data: listing,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listing", id],
    queryFn: () => fetchListing(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-red-500">Error loading listing</p>
        <Link href="/" className="text-secondary hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl min-h-[400px] md:min-h-[500px] shadow-sm transition-transform duration-300"
                style={{
                  backgroundImage: listing.images?.[0]
                    ? `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("${listing.images[0]}")`
                    : 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://placehold.co/800x600?text=No+Image")',
                }}
              >
                <div className="p-6">
                  <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
                    {listing.title}
                  </h1>
                  <p className="text-white/90 flex items-center gap-1 mt-2">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    {listing.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
                {listing.description}
              </p>

              {listing.features && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {Array.isArray(listing.features) &&
                    listing.features.map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>{" "}
                        {feature}
                      </span>
                    ))}
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              {/* Placeholder maps for now */}
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 aspect-video rounded-xl overflow-hidden relative flex items-center justify-center">
                <p className="text-zinc-500">Map View (Coming Soon)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <BookingForm
                listingId={listing.id}
                pricePerHour={Number(listing.pricePerHour)}
              />

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-zinc-400">
                      person
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Hosted by User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
