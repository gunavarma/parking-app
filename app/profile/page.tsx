import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-zinc-900 dark:text-zinc-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation Bar */}
          <Navbar />

          {/* Main Content Container */}
          <main className="flex-1 flex justify-center py-10 px-4">
            <div className="w-full max-w-[640px] flex flex-col gap-6">
              {/* Profile Header Card */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <div className="flex p-8 flex-col items-center gap-4">
                  <div className="relative">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-secondary/10"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxqoNRrv77yJR4ONmQh_PNqjEZWv1UQLB8DbO_z56OtaUZy1PXR_qKDTvQMK7-i_MFc-LgH4a466Y2tnc_lGR2QMQbkHkAdbW359h6ZoEuWWpiT-6WcY9rklfYZzX3IIJpS0nJGENkI7LvVs0hUi4Hiu1lqAt02nblbrIiK-c9TGtFals_tenZKMHl0ZiDobKVwa8tN2yzPB4T34eVX5o1zzjNadl639Yba-6oy2se5035_pf3yaSHIoIxNWHNTsdrSgfzx1G43rjS")',
                      }}
                      title="Large profile picture of John Doe"
                    ></div>
                    <button className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">
                        edit
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2">
                      <p className="text-zinc-900 dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em]">
                        John Doe
                      </p>
                      <span
                        className="material-symbols-outlined text-secondary text-xl"
                        title="Verified User"
                      >
                        verified
                      </span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-base font-normal leading-normal">
                      Member since Oct 2022 • Professional Host
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                      4.9 ★ Rating
                    </div>
                    <div className="px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      12 Total Spots
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Menu */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
                <h3 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight px-6 pt-6 pb-2">
                  Account Settings
                </h3>
                <div className="flex flex-col">
                  {/* Menu Item: My Parkings */}
                  <Link
                    className="flex items-center gap-4 px-6 min-h-[64px] justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-zinc-100 dark:border-zinc-800"
                    href="/my-listings"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-secondary flex items-center justify-center rounded-lg bg-secondary/10 shrink-0 size-10">
                        <span className="material-symbols-outlined">
                          directions_car
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-base font-semibold flex-1 truncate">
                        My Parkings
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold">
                        3 Active
                      </div>
                      <span className="material-symbols-outlined text-zinc-400">
                        chevron_right
                      </span>
                    </div>
                  </Link>
                  {/* Menu Item: Parking History */}
                  <a
                    className="flex items-center gap-4 px-6 min-h-[64px] justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-zinc-100 dark:border-zinc-800"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-600 dark:text-zinc-300 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-10">
                        <span className="material-symbols-outlined">
                          history
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-base font-semibold flex-1 truncate">
                        Parking History
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="material-symbols-outlined text-zinc-400">
                        chevron_right
                      </span>
                    </div>
                  </a>
                  {/* Menu Item: Payments */}
                  <a
                    className="flex items-center gap-4 px-6 min-h-[64px] justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-zinc-100 dark:border-zinc-800"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-600 dark:text-zinc-300 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-10">
                        <span className="material-symbols-outlined">
                          payments
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-base font-semibold flex-1 truncate">
                        Payments & Earnings
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="material-symbols-outlined text-zinc-400">
                        chevron_right
                      </span>
                    </div>
                  </a>
                  {/* Menu Item: Settings */}
                  <a
                    className="flex items-center gap-4 px-6 min-h-[64px] justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-zinc-100 dark:border-zinc-800"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-600 dark:text-zinc-300 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-10">
                        <span className="material-symbols-outlined">
                          settings
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-base font-semibold flex-1 truncate">
                        Settings
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="material-symbols-outlined text-zinc-400">
                        chevron_right
                      </span>
                    </div>
                  </a>
                  {/* Menu Item: Help */}
                  <a
                    className="flex items-center gap-4 px-6 min-h-[64px] justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-zinc-600 dark:text-zinc-300 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0 size-10">
                        <span className="material-symbols-outlined">
                          help_outline
                        </span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-200 text-base font-semibold flex-1 truncate">
                        Help & Support
                      </p>
                    </div>
                    <div className="shrink-0">
                      <span className="material-symbols-outlined text-zinc-400">
                        chevron_right
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Logout Button */}
              <button className="w-full bg-white dark:bg-zinc-900 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors shadow-sm mb-10 cursor-pointer">
                <span className="material-symbols-outlined">logout</span>
                Log out
              </button>
            </div>
          </main>

          {/* Bottom Footer (Simple) */}
          <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-zinc-400 text-sm">
              © 2024 ParkPlace Inc. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 mt-2">
              <a
                href="#"
                className="text-zinc-400 hover:text-secondary text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-secondary text-xs"
              >
                Terms of Service
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
