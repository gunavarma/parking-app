import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function ParkingDetail() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group">
              <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl min-h-[400px] md:min-h-[500px] shadow-sm transition-transform duration-300"
                style={{
                  backgroundImage:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHGXvNoOW7LDZsunzGJwddrgPDrcmemUl_WZnq1r7aOT3ZRgSntC9rwBFv1H1_TDHnZ23NOcZJ1084Yy2l63d7iTTaYIg05st2tOxanU_nxbM-GWmQ4VzX18N1Zq39baeA3T_tI0zGRDB5mqDv_CqXhlQ2VU5iJdG0gs56j7StEXF1skemC1TKEwRPuS8_gV2Pk9KKS3-L52TcxIpnVHCBeoHlF81DXtVn9k2wrT_8cWefyWEw_eZqtodnRAzyLV9EvIevoDxREp5o")',
                }}
              >
                <div className="p-6">
                  <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">
                    Nexus Mall Parking
                  </h1>
                  <p className="text-white/90 flex items-center gap-1 mt-2">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    123 Commercial District, Downtown
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Parking Status</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Total Slots
                  </p>
                  <p className="text-zinc-900 dark:text-white text-2xl font-bold">
                    200
                  </p>
                  <p className="text-zinc-400 text-xs font-medium">
                    Full Capacity
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg p-4 bg-secondary/10 border border-secondary/20">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Available
                  </p>
                  <p className="text-secondary text-2xl font-bold">12</p>
                  <p className="text-secondary/70 text-xs font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[10px] scale-125">
                      trending_up
                    </span>
                    Updated 2m ago
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Price
                  </p>
                  <p className="text-zinc-900 dark:text-white text-2xl font-bold">
                    $5/hr
                  </p>
                  <p className="text-zinc-400 text-xs font-medium">
                    Standard Rate
                  </p>
                </div>
                <div className="flex flex-col gap-1 rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Type
                  </p>
                  <p className="text-zinc-900 dark:text-white text-xl font-bold">
                    Commercial
                  </p>
                  <p className="text-zinc-400 text-xs font-medium">
                    Public Access
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Centrally located in the heart of the business district, Nexus
                Mall Parking offers premium, secure, and well-lit spaces for all
                vehicle types. Our facility features 24/7 surveillance, EV
                charging stations, and automated entry/exit systems for a
                seamless experience. Ideal for shoppers and office commuters
                alike.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    videocam
                  </span>{" "}
                  24/7 CCTV
                </span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    ev_station
                  </span>{" "}
                  EV Charging
                </span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    accessible
                  </span>{" "}
                  Accessible
                </span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    height
                  </span>{" "}
                  2.1m Max Height
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Location</h2>
                <button className="text-secondary text-sm font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                  Open in Maps{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
              <div
                className="w-full bg-zinc-200 dark:bg-zinc-800 aspect-video rounded-xl overflow-hidden relative"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyXGlZ1tUUJRxEFSghiZddVusvNBq8N_hH_yhrdXulj0t-JJ8k14G_KB-5LZG-wqLTDD43Lm5QLc2Y24TWul1FPvDum4jqfh8YrQc7FkZD-KCX7McB_RBWqc9Q9Pm6E_0o8JqCzX3s1pkavloQ94STJIkimbm-QrF4eWwUe10T1CAZ8SOYgHtjKGXfv3niMd2FOE0SAAUUQieCfKPV5u3jV_DUdAadE6gNG2zTWFpjTLwgj-sOf4XxxvzS38VA7VeizMY2ntKno9Sc")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-zinc-900 p-2 rounded-full shadow-lg border-2 border-secondary">
                    <span className="material-symbols-outlined text-secondary text-3xl fill-current">
                      location_on
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <div className="mb-6">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    Starting from
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">$5.00</span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      / hour
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-4 px-6 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer">
                    <span className="material-symbols-outlined">
                      directions_car
                    </span>
                    I'm Parked
                  </button>
                  <button className="w-full py-4 px-6 border-2 border-secondary text-secondary hover:bg-secondary/5 font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined">
                      navigation
                    </span>
                    Navigate
                  </button>
                </div>
                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                      <span className="material-symbols-outlined text-zinc-400">
                        person
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Nexus Management</p>
                      <p className="text-zinc-500 text-xs">Verified Operator</p>
                    </div>
                    <button className="ml-auto p-2 border border-zinc-200 dark:border-zinc-700 rounded-lg cursor-pointer">
                      <span className="material-symbols-outlined text-zinc-600 dark:text-zinc-300">
                        chat_bubble
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary">
                  info
                </span>
                <div>
                  <p className="text-sm font-semibold">Pro Tip</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    Evening slots usually fill up by 6:00 PM. Arrive early for
                    better spots on Level 1.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3">
          <button className="flex-1 py-3 px-4 border-2 border-secondary text-secondary font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-xl">
              navigation
            </span>
            Navigate
          </button>
          <button className="flex-1 py-3 px-4 bg-secondary text-white font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-xl">
              directions_car
            </span>
            I'm Parked
          </button>
        </div>
      </div>
    </div>
  );
}
