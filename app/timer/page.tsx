import Link from "next/link";
import Navbar from "../components/Navbar";

export default function TimerPage() {
  return (
    <div className="flex h-full grow flex-col bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="flex-1 flex justify-center py-8 px-4">
        <div className="flex flex-col max-w-[1024px] flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 p-4 mb-2">
            <a
              className="text-secondary text-base font-medium leading-normal flex items-center gap-1"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">
                dashboard
              </span>{" "}
              Dashboard
            </a>
            <span className="text-gray-400 text-base font-medium leading-normal">
              /
            </span>
            <span className="text-zinc-900 dark:text-white text-base font-medium leading-normal flex items-center gap-1">
              Live Session{" "}
              <span className="size-2 rounded-full bg-secondary animate-pulse inline-block"></span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {/* Left/Main Column: Timer Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center text-center">
                <span className="px-4 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Active Session
                </span>
                <h1 className="text-zinc-900 dark:text-white tracking-tight text-4xl md:text-5xl font-extrabold mb-2">
                  Nexus Mall Parking
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>{" "}
                  Level 2, Slot:{" "}
                  <span className="font-bold text-zinc-900 dark:text-white">
                    B-12
                  </span>
                </p>

                {/* Live Timer */}
                <div className="flex gap-4 py-8 w-full max-w-md mx-auto">
                  <div className="flex grow basis-0 flex-col items-stretch gap-4">
                    <div className="flex h-24 grow items-center justify-center rounded-xl px-3 bg-background-light dark:bg-background-dark border border-secondary/20">
                      <p
                        className="text-zinc-900 dark:text-white text-4xl font-black"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        01
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-semibold uppercase tracking-tighter">
                        Hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-4xl font-bold pb-10">
                    :
                  </div>
                  <div className="flex grow basis-0 flex-col items-stretch gap-4">
                    <div className="flex h-24 grow items-center justify-center rounded-xl px-3 bg-background-light dark:bg-background-dark border border-secondary/20">
                      <p
                        className="text-zinc-900 dark:text-white text-4xl font-black"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        24
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-semibold uppercase tracking-tighter">
                        Minutes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-4xl font-bold pb-10">
                    :
                  </div>
                  <div className="flex grow basis-0 flex-col items-stretch gap-4">
                    <div className="flex h-24 grow items-center justify-center rounded-xl px-3 bg-background-light dark:bg-background-dark border border-secondary/20">
                      <p
                        className="text-zinc-900 dark:text-white text-4xl font-black text-secondary"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        15
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-500 text-sm font-semibold uppercase tracking-tighter">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-secondary w-2/3 rounded-full"></div>
                </div>
                <p className="text-sm text-gray-500 mt-2 italic">
                  Session started at 14:30 PM
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800">
                  <p className="text-gray-500 dark:text-gray-400 text-base font-medium">
                    Current Cost
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-zinc-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                      $7.50
                    </p>
                    <p className="text-green-600 text-sm font-bold bg-green-600/10 px-2 py-0.5 rounded">
                      LIVE
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs">Rate: $5.00 / hour</p>
                </div>
                <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800">
                  <p className="text-gray-500 dark:text-gray-400 text-base font-medium">
                    Estimated End
                  </p>
                  <p className="text-zinc-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                    17:30
                  </p>
                  <p className="text-gray-400 text-xs">
                    Based on current wallet balance
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-6 rounded-xl text-xl flex items-center justify-center gap-3 shadow-lg transition-transform active:scale-[0.98] cursor-pointer">
                  <span className="material-symbols-outlined">stop_circle</span>
                  End Parking & Pay
                </button>
                <div className="flex gap-4">
                  <button className="flex-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">
                      add_circle
                    </span>{" "}
                    Extend Time
                  </button>
                  <button className="flex-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">report</span>{" "}
                    Report Issue
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar Info */}
            <div className="flex flex-col gap-6">
              {/* Map Preview */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <span className="material-symbols-outlined text-4xl text-gray-500">
                      map
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white p-3 rounded-lg shadow-md flex items-center gap-3">
                    <div className="bg-secondary/20 p-2 rounded">
                      <span className="material-symbols-outlined text-secondary">
                        directions_car
                      </span>
                    </div>
                    <div>
                      <p className="text-zinc-900 text-xs font-bold">Vehicle</p>
                      <p className="text-zinc-900 text-sm">
                        Tesla Model 3 • ABC-1234
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking Rules */}
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    gavel
                  </span>
                  <span className="font-bold text-lg">Parking Rules</span>
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm">
                    <span className="material-symbols-outlined text-gray-400">
                      check_circle
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Max height: 2.1m
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="material-symbols-outlined text-gray-400">
                      check_circle
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Keep receipt for exit gate
                    </span>
                  </li>
                  <li className="flex gap-3 text-sm text-red-500 font-medium">
                    <span className="material-symbols-outlined">warning</span>
                    <span>Unauthorized parking in Slot B-13 will be towed</span>
                  </li>
                </ul>
              </div>

              {/* Help Widget */}
              <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-secondary text-4xl mb-2">
                  support_agent
                </span>
                <h4 className="font-bold text-zinc-900 dark:text-white">
                  Need help?
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Contact the facility manager
                </p>
                <button className="w-full bg-secondary text-white font-bold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity cursor-pointer">
                  Call Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-400 text-xs">
        <p>© 2024 ParkShare Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}
