import Link from "next/link";
import Navbar from "../components/Navbar";

export default function SupportPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-40 py-8">
        <div className="max-w-[720px] mx-auto space-y-8">
          <div className="text-center py-10">
            <span className="material-symbols-outlined text-6xl text-secondary mb-4">
              support_agent
            </span>
            <h1 className="text-4xl font-black tracking-tight mb-2">
              How can we help?
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Search for articles or contact our support team.
            </p>

            <div className="mt-8 relative max-w-lg mx-auto">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                search
              </span>
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-white/5 focus:ring-2 focus:ring-secondary/20 outline-none shadow-lg shadow-zinc-100 dark:shadow-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "assignment", label: "Booking Guide" },
              { icon: "payments", label: "Billing & Refunds" },
              { icon: "account_circle", label: "Account Options" },
              { icon: "security", label: "Trust & Safety" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl hover:shadow-lg hover:border-secondary/50 hover:text-secondary cursor-pointer transition-all flex flex-col items-center text-center gap-3 group"
              >
                <span className="material-symbols-outlined text-4xl text-zinc-400 group-hover:text-secondary transition-colors">
                  {item.icon}
                </span>
                <p className="font-bold">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-center mt-8">
            <h3 className="text-xl font-bold mb-2">Still need help?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
              Our support team is available 24/7 to assist you with any parking
              issues.
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-secondary/20">
              Chat with Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
