"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";

const fetchMyListings = async () => {
  const res = await fetch("/api/listings?my=true");
  if (!res.ok) throw new Error("Failed to fetch listings");
  return res.json();
};

export default function MyListingsPage() {
  const router = useRouter();
  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["my-listings"],
    queryFn: fetchMyListings,
  });

  if (isLoading) {
    return (
      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center">
        <p className="text-zinc-500 dark:text-zinc-400">Loading listings...</p>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-zinc-900 dark:text-zinc-50 min-h-screen">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-zinc-900 dark:text-zinc-50 text-4xl font-black leading-tight tracking-tight">
              My Listed Parkings
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
              Manage and track your parking assets (8 total)
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm font-bold transition-colors hover:bg-secondary/20 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                filter_list
              </span>
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-8">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-secondary text-zinc-900 dark:text-white pb-3"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">All Listings</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-zinc-500 hover:text-secondary pb-3 transition-all"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Active (5)</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-zinc-500 hover:text-secondary pb-3 transition-all"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Full (3)</p>
            </a>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {listings.length === 0 ? (
            <div className="col-span-full py-20 text-center">
              <p className="text-zinc-500 mb-4">
                You haven't listed any parking spots yet.
              </p>
              <Link
                href="/post-ad"
                className="inline-block bg-secondary text-[#111811] px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
              >
                Post a Parking Spot
              </Link>
            </div>
          ) : (
            listings.map((listing: any) => (
              <Link
                key={listing.id}
                href={`/parking/${listing.id}`}
                className="group bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden p-5 shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-5 cursor-pointer block"
              >
                <div
                  className="w-full md:w-48 aspect-[4/3] md:aspect-square bg-cover bg-center rounded-xl relative shrink-0"
                  style={{
                    backgroundImage: `url('${listing.image}')`,
                  }}
                  title={listing.title}
                >
                  <span
                    className={`absolute top-2 left-2 text-zinc-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-sm ${
                      listing.status === "Active"
                        ? "bg-secondary"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {listing.status}
                  </span>
                </div>
                <div className="flex flex-col justify-between grow">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {listing.title}
                      </h3>
                      <span className="text-secondary font-black">
                        {listing.price}
                      </span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                      {listing.location}
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <div
                        className={`px-2 py-1 rounded flex items-center gap-2 ${
                          listing.status === "Full"
                            ? "bg-red-500/10"
                            : "bg-secondary/10 dark:bg-secondary/5"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            listing.status === "Full"
                              ? "text-red-500"
                              : "text-secondary"
                          }`}
                        >
                          {listing.status === "Full"
                            ? "warning"
                            : "directions_car"}
                        </span>
                        <span
                          className={`text-xs font-bold ${
                            listing.status === "Full"
                              ? "text-red-500"
                              : "text-zinc-500"
                          }`}
                        >
                          {listing.occupancy} Occupied
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white h-10 rounded-lg text-sm font-bold hover:brightness-95 transition-all cursor-pointer">
                      <span className="material-symbols-outlined text-[18px]">
                        analytics
                      </span>
                      Usage
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 h-10 rounded-lg text-sm font-bold hover:bg-secondary/20 transition-all cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        router.push(`/edit-listing/${listing.id}`);
                      }}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        edit
                      </span>
                      Edit
                    </button>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl bg-secondary text-white font-bold">
            1
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            2
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            3
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 py-10 px-6 lg:px-40 bg-white/50 dark:bg-zinc-950/50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-60">
            <div className="size-5 text-secondary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-medium">© 2024 ParkShare Marketplace</p>
          </div>
          <div className="flex gap-8 text-sm font-medium opacity-60">
            <a className="hover:text-secondary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Support
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Owner FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
