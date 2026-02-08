import Link from "next/link";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col transition-colors duration-200">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex justify-center py-10 px-4 relative z-10">
        <div className="w-full max-w-[800px] bg-white dark:bg-zinc-900 rounded-xl shadow-xl flex flex-col overflow-hidden border border-zinc-200 dark:border-white/10">
          {/* Filter Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-200 dark:border-white/10">
            <h2 className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">
              Filters
            </h2>
            <button className="text-slate-400 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          {/* Filter Sections (Scrollable) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-8 py-4">
            {/* Sort By */}
            <section className="mb-8">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
                Sort By
              </h3>
              <div className="flex gap-3 flex-wrap">
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-secondary text-white px-5 cursor-pointer border-2 border-secondary shadow-sm">
                  <span className="material-symbols-outlined text-lg">
                    near_me
                  </span>
                  <p className="text-sm font-bold leading-normal">Nearest</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-lg">
                    payments
                  </span>
                  <p className="text-sm font-medium leading-normal">Cheapest</p>
                </div>
                <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <span className="material-symbols-outlined text-lg">
                    event_available
                  </span>
                  <p className="text-sm font-medium leading-normal">
                    Most Available
                  </p>
                </div>
              </div>
            </section>
            {/* Price Slider */}
            <section className="mb-8">
              <div className="flex w-full items-center justify-between mb-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Price per hour
                </h3>
                <p className="text-secondary font-bold text-lg">$25</p>
              </div>
              <div className="flex h-6 w-full items-center gap-4">
                <div className="flex h-2 flex-1 rounded-full bg-zinc-200 dark:bg-white/10 relative">
                  <div className="h-full w-[45%] rounded-full bg-secondary"></div>
                  <div className="absolute left-[45%] top-1/2 -translate-y-1/2 size-6 rounded-full bg-secondary border-4 border-white dark:border-zinc-900 shadow-md cursor-pointer"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-white/40 font-medium">
                <span>$0</span>
                <span>$100+</span>
              </div>
            </section>
            {/* Distance Slider */}
            <section className="mb-8">
              <div className="flex w-full items-center justify-between mb-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Distance
                </h3>
                <p className="text-secondary font-bold text-lg">1.5 km</p>
              </div>
              <div className="flex h-6 w-full items-center gap-4">
                <div className="flex h-2 flex-1 rounded-full bg-zinc-200 dark:bg-white/10 relative">
                  <div className="h-full w-[30%] rounded-full bg-secondary"></div>
                  <div className="absolute left-[30%] top-1/2 -translate-y-1/2 size-6 rounded-full bg-secondary border-4 border-white dark:border-zinc-900 shadow-md cursor-pointer"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-white/40 font-medium">
                <span>500 m</span>
                <span>10 km+</span>
              </div>
            </section>
            {/* Availability Toggle */}
            <section className="mb-8 flex items-center justify-between p-4 bg-zinc-50 dark:bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold leading-tight">
                    Available now only
                  </p>
                  <p className="text-sm text-slate-500 dark:text-white/60">
                    Only show spaces ready for immediate booking
                  </p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  defaultChecked
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
              </div>
            </section>
            {/* Parking Type */}
            <section className="mb-4">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
                Parking Type
              </h3>
              <div className="flex gap-3 flex-wrap">
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-secondary/10 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-secondary">
                  <p className="text-sm font-bold">Mall</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <p className="text-sm font-medium">Public Lot</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <p className="text-sm font-medium">Private Garage</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <p className="text-sm font-medium">Street Parking</p>
                </div>
                <div className="flex h-10 items-center justify-center gap-x-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-slate-900 dark:text-white px-5 cursor-pointer border-2 border-transparent hover:border-secondary/30 transition-all">
                  <p className="text-sm font-medium">Hospital</p>
                </div>
              </div>
            </section>
          </div>
          {/* Sticky Bottom Bar */}
          <div className="px-8 py-6 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 flex items-center justify-between">
            <button className="text-slate-900 dark:text-white text-base font-bold underline hover:text-red-500 transition-colors">
              Clear Filters
            </button>
            <div className="flex gap-4">
              <button className="hidden md:flex min-w-[120px] items-center justify-center rounded-xl h-12 px-6 border-2 border-zinc-200 dark:border-white/10 text-slate-900 dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                Cancel
              </button>
              <button className="flex min-w-[200px] items-center justify-center rounded-xl h-12 px-8 bg-secondary text-[#111811] text-base font-bold shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Background Image Map Hint (Subtle) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-50"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEwb9LsmqkhYu2IlPEd5Rqcx4CLsTs1svzoACqi8op-JrFgGYihX7MaoS6rbXum-rWyp6XsF8dlZvMCdcR334TfU5pFAP4CAd3y6qrT30G8peMAPQ8h9AF07YE3lrQvfnLHmNf2L7qjkJ2nH8Bgm03P-GCquaTn3h3TC3kcXVbHt6UlhTwSM0aQK7Z1OlVxNM52gOxvP2VOQH8nlxSQSVol2x5_JP2PQTttLeIJu_Ib1-tMt1taGWjco3L9YZ0KyesciHceJz5IsBd")',
          }}
        ></div>
      </div>
    </div>
  );
}
