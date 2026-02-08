import Link from "next/link";
import Navbar from "../components/Navbar";

export default function PaymentsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-40 py-8">
        <div className="max-w-[960px] mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">
                Payments & Earnings
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Manage your payment methods and view your transaction history.
              </p>
            </div>
            <button className="bg-secondary text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-transform active:scale-95">
              + Add Method
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Balance Card */}
            <div className="bg-zinc-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <p className="text-zinc-400 font-medium mb-1 relative z-10">
                Total Earnings
              </p>
              <h2 className="text-4xl font-black mb-4 relative z-10">
                $1,240.50
              </h2>
              <div className="flex gap-2 relative z-10">
                <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Withdraw
                </button>
                <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                  Statement
                </button>
              </div>
            </div>

            {/* Payment Method 1 */}
            <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="material-symbols-outlined">credit_card</span>
                </div>
                <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase rounded-full">
                  Primary
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg">•••• 4242</p>
                <p className="text-sm text-zinc-500">Visa ending in 4242</p>
              </div>
            </div>

            {/* Payment Method 2 */}
            <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between opacity-50 hover:opacity-100 transition-opacity cursor-pointer border-dashed">
              <div className="flex items-center justify-center h-full flex-col gap-2 text-zinc-400">
                <span className="material-symbols-outlined text-3xl">
                  add_circle
                </span>
                <p className="font-bold">Add New Card</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold pt-4">Recent Transactions</h3>
          <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border-b last:border-0 border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined">
                      arrow_downward
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Main Street Garage</p>
                    <p className="text-xs text-zinc-500">Oct {20 + i}, 2023</p>
                  </div>
                </div>
                <p className="font-bold text-zinc-900 dark:text-white">
                  -$12.00
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
