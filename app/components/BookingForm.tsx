"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface BookingFormProps {
  listingId: string;
  pricePerHour: number;
}

export default function BookingForm({
  listingId,
  pricePerHour,
}: BookingFormProps) {
  const router = useRouter();
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1); // Hours

  const totalPrice = duration * pricePerHour;

  const createBooking = async () => {
    const start = new Date(startTime);
    const end = new Date(start.getTime() + duration * 60 * 60 * 1000);

    const res = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        listingId,
        startTime: start.toISOString(),
        endTime: end.toISOString(),
        totalPrice,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to book");
    }
    return res.json();
  };

  const mutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      // Redirect to a confirmation or active session page
      // For now, let's go to the timer page (even if static for now, we will make it dynamic later)
      // Or maybe just a success alert and redirect to home?
      // Let's go to dashboard or bookings list.
      router.push("/timer");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startTime) return;
    mutation.mutate();
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-lg">
      <div className="mb-6">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">Total Cost</p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">${totalPrice.toFixed(2)}</span>
          <span className="text-zinc-500 dark:text-zinc-400">
            / {duration} hour{duration > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Start Time
          </label>
          <input
            type="datetime-local"
            required
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:ring-secondary focus:border-secondary"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            Duration (Hours)
          </label>
          <select
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 text-sm focus:ring-secondary focus:border-secondary"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 12, 24].map((h) => (
              <option key={h} value={h}>
                {h} Hour{h > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-4 px-6 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50"
        >
          {mutation.isPending ? (
            "Processing..."
          ) : (
            <>
              <span className="material-symbols-outlined">event_available</span>
              Book Now
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-center text-zinc-500 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
}
