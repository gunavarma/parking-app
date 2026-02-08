"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const createListing = async (data: any) => {
  const res = await fetch("/api/listings", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.details || errorData.error || "Failed to create listing",
    );
  }
  return res.json();
};

export default function PostAdPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    city: "",
    address: "",
    type: "Underground",
    slots: 1,
    pricePerHour: "",
  });

  const mutation = useMutation({
    mutationFn: createListing,
    onSuccess: () => {
      router.push("/my-listings");
    },
    onError: (error) => {
      alert("Failed to create listing: " + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      // Default values for now
      latitude: 0,
      longitude: 0,
      features: [],
      images: [],
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name || "type"]: e.target.value });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200">
      {/* Navigation */}
      <Navbar />

      <main className="max-w-[960px] mx-auto px-4 py-8">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-zinc-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Post your parking space
          </h1>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Section: Basic Info */}
          <section className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                info
              </span>
              Parking Details
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  Parking Name
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-base focus:outline-none"
                  placeholder="e.g. Downtown Secure Spot (max 70 chars)"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary p-4 text-base focus:outline-none"
                  placeholder="Tell us more about your space (security, accessibility, etc.)"
                  rows={4}
                ></textarea>
              </div>
            </div>
          </section>

          {/* Section: Location */}
          <section className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                location_on
              </span>
              Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  City
                </label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-base focus:outline-none"
                  placeholder="e.g. San Francisco"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  Address
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-base focus:outline-none"
                  placeholder="Street name and number"
                  type="text"
                  required
                />
              </div>
            </div>
          </section>

          {/* Section: Pricing */}
          <section className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                payments
              </span>
              Pricing
            </h3>
            <div className="flex flex-col gap-2 max-w-sm">
              <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                Price per Hour ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  $
                </span>
                <input
                  name="pricePerHour"
                  value={formData.pricePerHour}
                  onChange={handleChange}
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 pl-8 pr-4 text-lg font-semibold focus:outline-none"
                  placeholder="0.00"
                  step="0.5"
                  type="number"
                  required
                />
              </div>
            </div>
          </section>

          {/* Submit Button Container */}
          <div className="pt-6 pb-12">
            <button
              className="w-full bg-secondary hover:bg-secondary/90 text-zinc-900 font-bold text-lg py-5 rounded-xl transition-all shadow-lg shadow-secondary/20 active:scale-[0.98] cursor-pointer disabled:opacity-50"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Posting..." : "Post My Space"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
