import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HistoryPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-zinc-900 dark:text-white transition-colors duration-200 flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-40 py-8">
        <div className="max-w-[960px] mx-auto space-y-8">
          {/* Page Heading */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">
                Parking History
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Review your past sessions, receipts, and rebook favorites.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                search
              </span>
              <input
                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none text-base"
                placeholder="Search by parking name (e.g. Grand Mall)"
                type="text"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button className="whitespace-nowrap bg-secondary text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                All Time{" "}
                <span className="material-symbols-outlined text-base">
                  expand_more
                </span>
              </button>
              <button className="whitespace-nowrap bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10">
                Completed
              </button>
              <button className="whitespace-nowrap bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10">
                Cancelled
              </button>
              <button className="whitespace-nowrap bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-50 dark:hover:bg-white/10">
                Active
              </button>
            </div>
          </div>

          {/* Session List */}
          <div className="space-y-4">
            {/* Session Card 1 */}
            <div className="group bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-xl hover:shadow-secondary/5 transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="size-16 rounded-xl bg-cover bg-center shrink-0 border border-zinc-100 dark:border-white/5"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAecajD32uwjiXq5zVmtgDUhAExKsVJTd2sPO7hdFNUUWgOie7aplKw-0kKWLJgJmmlbHVooUryfsAmXWPAmCAcgr80vo6sjWM0ZyOo97ASUksLyyjf1XYz6zeJcD5HXf4iTO3oETStAGlSsVXJh3s2eGoc3Rk6WQTZQ4RJYSDiQBWE5y7xb9KqQ5cO1t96L67hXpxHbIG6Bh1M9ZZVagivGqS5cnBvQyMboSrLeppFSzSQX7SskF_FDZaKr7gQxt50cW6OIaWpvXWk")',
                    }}
                  ></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-secondary/20 text-secondary dark:text-secondary">
                        Completed
                      </span>
                      <span className="text-xs text-zinc-500">#PM-88219</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
                      Grand Mall
                    </h3>
                    <p className="text-sm text-zinc-500 flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-base">
                        calendar_today
                      </span>
                      Oct 24, 2023
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 md:flex items-center gap-4 md:gap-12 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Duration
                    </p>
                    <p className="text-base font-semibold">2h 15m</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Cost
                    </p>
                    <p className="text-xl font-black text-secondary">$11.25</p>
                  </div>
                  <div className="flex justify-end col-span-1">
                    <button className="size-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        receipt_long
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Card 2 */}
            <div className="group bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-xl hover:shadow-secondary/5 transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="size-16 rounded-xl bg-cover bg-center shrink-0 border border-zinc-100 dark:border-white/5"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0lMqtBPps6IBzFA3oMroPL-RoCBBSTuBR4tG7i9mveDh23DFNSE6Ts7C-w_pHI2eEs0yeT4Pny5w_Si0I2h_kwxyB-cKJs3g47-riytNDXTw0KDji9reM7JCwxfLm6KODquoJwFHhqXuZw-QawPce0mJurPKTCoUX042euWtEuGCb8tbjxleJJjnHGUktH2Oisohcy0XzKWJvZVVUVXfELRVLBhrg25m0jpKSFfCyQh4IOfKkC9PBvBJSFNXTx-J6Eq0Qt7UfqjHw")',
                    }}
                  ></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-secondary/20 text-secondary dark:text-secondary">
                        Completed
                      </span>
                      <span className="text-xs text-zinc-500">#PM-88104</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
                      Downtown Plaza
                    </h3>
                    <p className="text-sm text-zinc-500 flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-base">
                        calendar_today
                      </span>
                      Oct 18, 2023
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 md:flex items-center gap-4 md:gap-12 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Duration
                    </p>
                    <p className="text-base font-semibold">1h 45m</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Cost
                    </p>
                    <p className="text-xl font-black text-secondary">$8.50</p>
                  </div>
                  <div className="flex justify-end col-span-1">
                    <button className="size-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        receipt_long
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Card 3 (Cancelled) */}
            <div className="group bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 opacity-80 hover:opacity-100 transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="size-16 rounded-xl bg-cover bg-center shrink-0 grayscale"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGzlW4Sg-1Wy2ZtEWztU0BhLlrVLCFFcoHRnySxR-n4J2c9jEiSdhC4dy7gkjFunvUXNt7u9RjI5tZir6YU2Qa6ByKxT97Ad25P370Bk1G_Axn6ED7mZNPFuP0gpt8SxsYznzkBHYyQqMnNPhw6weB0X9PTcKKpQOuhRKOYay-KVhhC6s2zJ9sk0jciTX1i7ZyYbdsRp5mDzd1bwWyxIyKgCPq1_ux7YPUKt04-XQ4UCYlocj53rS7EuHXN0Fqocv_84NPk6TEOZmQ")',
                    }}
                  ></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                        Cancelled
                      </span>
                      <span className="text-xs text-zinc-500">#PM-88002</span>
                    </div>
                    <h3 className="text-lg font-bold">Central Station</h3>
                    <p className="text-sm text-zinc-500 flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-base">
                        calendar_today
                      </span>
                      Oct 15, 2023
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 md:flex items-center gap-4 md:gap-12 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Duration
                    </p>
                    <p className="text-base font-semibold">--</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Cost
                    </p>
                    <p className="text-xl font-black text-zinc-400">$0.00</p>
                  </div>
                  <div className="flex justify-end col-span-1">
                    <button className="size-10 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-lg">
                        block
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Card 4 */}
            <div className="group bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-xl hover:shadow-secondary/5 transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="size-16 rounded-xl bg-cover bg-center shrink-0 border border-zinc-100 dark:border-white/5"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxAC39FurqKUSwgho8CPTmafjPOsmEj8OzQF9MtrvHO0KmoJIMx8ecE8NpAhxEJbIHyAKb2GQNLIxKXoIojCL98AJ_Zkb9LWHN6vg-ZkT-fmWX0i8j2MoWkk5yYVMggJfGfoPLqUEq-NmRpyV7jzpMFLPiuCl05uQIy7oiKs-ixFyz6fMGLRBINxZPuOwuWUqHHLDAcZHK0nHsXwNxNDiF4g3AVU1YfNuZv_A0a5nwFSw2Y55q7D1veqIEXnuJCN620ozPqHj9_vW-")',
                    }}
                  ></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-secondary/20 text-secondary dark:text-secondary">
                        Completed
                      </span>
                      <span className="text-xs text-zinc-500">#PM-87950</span>
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-secondary transition-colors">
                      Beachside Lot
                    </h3>
                    <p className="text-sm text-zinc-500 flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-base">
                        calendar_today
                      </span>
                      Oct 10, 2023
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 md:flex items-center gap-4 md:gap-12 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800 pt-4 md:pt-0">
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Duration
                    </p>
                    <p className="text-base font-semibold">4h 00m</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-zinc-400 font-bold mb-1">
                      Cost
                    </p>
                    <p className="text-xl font-black text-secondary">$20.00</p>
                  </div>
                  <div className="flex justify-end col-span-1">
                    <button className="size-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        receipt_long
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-8 pb-12">
            <button className="bg-background-dark text-white dark:bg-secondary dark:text-background-dark px-10 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg">
              Load more activity
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-zinc-200 dark:border-white/10 px-4 md:px-40 py-10 mt-auto">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-secondary">
                <span className="material-symbols-outlined text-3xl">
                  local_parking
                </span>
              </div>
              <h2 className="text-lg font-bold">ParkPlace</h2>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              The marketplace for easy city parking. Discover and list spaces
              effortlessly.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-zinc-400">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a className="hover:text-secondary" href="#">
                  Find Parking
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  List Space
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Business Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-zinc-400">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a className="hover:text-secondary" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Safety
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-zinc-400">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a className="hover:text-secondary" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[960px] mx-auto pt-10 mt-10 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            © 2024 ParkShare Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-secondary">
              language
            </span>
            <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-secondary">
              share
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
