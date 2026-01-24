import Link from "next/link";
import Navbar from "../components/Navbar";

export default function PostAdPage() {
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
          <div className="flex items-center gap-2 mt-2">
            <span className="text-secondary font-semibold text-base">
              Step 1 of 2: Basic Info
            </span>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-secondary"></div>
            </div>
          </div>
        </div>

        <form className="space-y-8">
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
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-base focus:outline-none"
                  placeholder="e.g. Downtown Secure Spot (max 70 chars)"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  Description
                </label>
                <textarea
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
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-base focus:outline-none"
                  placeholder="Street name and number"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden h-48 bg-gray-100 dark:bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-50 grayscale">
                <span className="material-symbols-outlined text-4xl">map</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
            </div>
          </section>

          {/* Section: Type & Capacity */}
          <section className="bg-white dark:bg-background-dark/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="text-zinc-900 dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                garage
              </span>
              Capacity &amp; Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300 mb-3 block">
                  Parking Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative flex items-center justify-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-secondary/5 has-[:checked]:border-secondary has-[:checked]:bg-secondary/10 group transition-all">
                    <input
                      defaultChecked
                      className="hidden peer"
                      name="parking_type"
                      type="radio"
                    />
                    <span className="text-sm font-medium peer-checked:text-secondary">
                      Underground
                    </span>
                  </label>
                  <label className="relative flex items-center justify-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-secondary/5 has-[:checked]:border-secondary has-[:checked]:bg-secondary/10 group transition-all">
                    <input
                      className="hidden peer"
                      name="parking_type"
                      type="radio"
                    />
                    <span className="text-sm font-medium peer-checked:text-secondary">
                      Open Lot
                    </span>
                  </label>
                  <label className="relative flex items-center justify-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-secondary/5 has-[:checked]:border-secondary has-[:checked]:bg-secondary/10 group transition-all">
                    <input
                      className="hidden peer"
                      name="parking_type"
                      type="radio"
                    />
                    <span className="text-sm font-medium peer-checked:text-secondary">
                      Private Garage
                    </span>
                  </label>
                  <label className="relative flex items-center justify-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl cursor-pointer hover:bg-secondary/5 has-[:checked]:border-secondary has-[:checked]:bg-secondary/10 group transition-all">
                    <input
                      className="hidden peer"
                      name="parking_type"
                      type="radio"
                    />
                    <span className="text-sm font-medium peer-checked:text-secondary">
                      Driveway
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-gray-300">
                  Total Slots
                </label>
                <div className="flex items-center gap-2">
                  <button
                    className="size-14 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all text-secondary"
                    type="button"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <input
                    className="form-input flex-1 text-center rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 px-4 text-xl font-bold focus:outline-none"
                    type="number"
                    defaultValue="1"
                  />
                  <button
                    className="size-14 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all text-secondary"
                    type="button"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
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
                  className="form-input w-full rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-gray-900 focus:border-secondary focus:ring-1 focus:ring-secondary h-14 pl-8 pr-4 text-lg font-semibold focus:outline-none"
                  placeholder="0.00"
                  step="0.5"
                  type="number"
                />
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Recommended: $3.00 - $6.00 in your area
              </p>
            </div>
          </section>

          {/* Submit Button Container */}
          <div className="pt-6 pb-12">
            <button
              className="w-full bg-secondary hover:bg-secondary/90 text-zinc-900 font-bold text-lg py-5 rounded-xl transition-all shadow-lg shadow-secondary/20 active:scale-[0.98] cursor-pointer"
              type="submit"
            >
              Post My Space
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              By posting, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </main>

      {/* Simple Footer for Desktop */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-background-dark py-8 px-4">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-secondary">
            <span className="font-bold text-lg">ParkShare</span>
            <span className="text-gray-400 text-sm">
              © 2024 Marketplace Inc.
            </span>
          </div>
          <div className="flex gap-6">
            <a className="text-sm text-gray-500 hover:text-secondary" href="#">
              Help Center
            </a>
            <a className="text-sm text-gray-500 hover:text-secondary" href="#">
              Safety Tips
            </a>
            <a className="text-sm text-gray-500 hover:text-secondary" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
