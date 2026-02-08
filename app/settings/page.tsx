import Link from "next/link";
import Navbar from "../components/Navbar";

export default function SettingsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-40 py-8">
        <div className="max-w-[720px] mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">
              Settings
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Manage your account preferences and app settings.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-white/5">
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-500">
                  Account
                </h3>
              </div>
              <div className="p-2">
                <button className="w-full text-left p-4 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-xl flex items-center justify-between transition-colors">
                  <div>
                    <p className="font-bold">Personal Information</p>
                    <p className="text-xs text-zinc-500">
                      Name, email, and phone number
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-zinc-400">
                    chevron_right
                  </span>
                </button>
                <button className="w-full text-left p-4 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-xl flex items-center justify-between transition-colors">
                  <div>
                    <p className="font-bold">Security</p>
                    <p className="text-xs text-zinc-500">Password and 2FA</p>
                  </div>
                  <span className="material-symbols-outlined text-zinc-400">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-white/5">
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-500">
                  Preferences
                </h3>
              </div>
              <div className="p-2">
                <div className="w-full text-left p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold">Notifications</p>
                    <p className="text-xs text-zinc-500">
                      Push and email alerts
                    </p>
                  </div>
                  <div className="w-12 h-6 bg-secondary rounded-full relative cursor-pointer">
                    <div className="size-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                  </div>
                </div>
                <div className="w-full text-left p-4 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                  <div>
                    <p className="font-bold">Dark Mode</p>
                    <p className="text-xs text-zinc-500">Toggle app theme</p>
                  </div>
                  <div className="w-12 h-6 bg-zinc-200 dark:bg-white/10 rounded-full relative cursor-pointer">
                    <div className="size-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button className="w-full py-4 text-red-500 font-bold border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
                Log Out
              </button>
              <p className="text-center text-xs text-zinc-400 mt-4">
                App Version 2.0.1
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
