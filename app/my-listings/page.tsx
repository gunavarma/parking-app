"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function MyListingsPage() {
  const router = useRouter();
  const myListings = [
    {
      id: 1,
      title: "Private Garage - 5th Ave",
      price: "$15/day",
      location: "5th Ave, Downtown Manhattan",
      occupancy: "3/5",
      status: "Active",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDwbj06aFCAmFHmXGZRGMNpEM5qfyWDEO2AErFBMXgkzLYmm4BU_OFx_9xmSaOnia9zTemkQ31Ri0QRflY0Yr1yVynQKmC7skcyC_1IWPDacY847Hr0TS48V5XjkxUEkmAWf3jMQ6lI3O4Sd6uJwQwH-oTzRIXIOg6x3ZgrMkqBuQu99_OnuueBcwc2UDJ0VNGVhHtXMgEBXFGq0YVUjLY-_BAsTQag3UXlH0eKvkiHisMN38CXdIWWdd0fg7_c_zKYGnWtdx4vUx5v",
    },
    {
      id: 2,
      title: "Downtown Secure Spot",
      price: "$20/day",
      location: "Broadway St, Financial District",
      occupancy: "10/10",
      status: "Full",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCar-Eb2wd5_8Zj7LLGuVNJAWPBPbmRDDMMOeY00eci_EfuRcey0Po_31hw5Ru2eiC9RstB350xY-KK2ittHgXXd1GXPnObWDQvqUMjSNXwu1fZg4pJAA77q2mUgycFhAS-mSbOSCw-yY5TWlA4SDtKaeM2TQxMhl2qWYCPeGDmRzf1M4F7Xodfc9Zk0f9S1UBDzINa0yFj--EDzutXaBHpqwTj5RXsjtm1bicN6o1mXKTTqAPWH6LlENARQ82MY9JBwVLnAFJmDHzE",
    },
    {
      id: 3,
      title: "Suburban Driveway",
      price: "$8/day",
      location: "Oak Lane, Brooklyn",
      occupancy: "0/1",
      status: "Active",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmIOKddZdpBDn-IJi3U7GWn_tLhqri4qaWPFomGdAxgb3Or3I_nrh4ma5G56yuveIfD0jcBw7PCk_YUtpMvrNfGfuue8qIZnwAJb9gRSIIRXJWQBbE3Uu_zJxfXjNASQb46StPLDzMu0syR7K9bxs257NqXft8gO-Wye6Xtd37HuqQjH-p1Wk-8UZkoPTQE5Z3B4lvUefpT6ftvRHvbM41aAQ5qMtiYgPnBGv2XuN_mWu57dVdeS4Gyxg7LVn5OnHu8yKgyq3D8wDq",
    },
    {
      id: 4,
      title: "Corporate Plaza P3",
      price: "$25/day",
      location: "6th Ave, Midtown",
      occupancy: "12/20",
      status: "Active",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZB88BHhmnrag_k63s4LboUNoTRASOANNGsvW0MN0hS7RDU5RwFLbUUsjly38QXXwcXZx2YIK9qpEv3vFqEZd6sgWN2viJYgwYTnmLkzSWFAqsZUlcohgp7En9UPx12BjQwNiFcuShihy9SUaa3-cuPyeHHXAHsO0_wOo7Nmj7vjDfzEyCPOfWzl-LLvB6_DqckVuf280Siu7U0ywKys2wQMLDkPG_3TGc-jDs6ckN5EuxMPePxxpQrJgfQ9LqwSrv1NEY39gKx8tV",
    },
    {
      id: 5,
      title: "Westside Market Lot",
      price: "$10/day",
      location: "Westside Highway, Chelsea",
      occupancy: "15/30",
      status: "Active",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAudbKixxfQXOmXZ8oYhOjJu8zXlWJTIuEu8QB9Mht04uBL2KRc3e3AYeXhhcqvFTE7UmFac1iYJ0lt9cToQIB7ALTYvrPtRgx1XOTC2GBSVsZlHAXFy-XBc1K6sBA-GkxO5vgKSaoJPB9zT1VVJVMl58oHWDp0rpzs2BmPv_Kt8jMeQOJmAfXG7_suW_ggqglZ09_yuyx7bHJdAX5z8BPuDqVuXZ-0xwvxwRgsRTJ_LJiue9axNixEz6Rq6sVWX3RhFdDoQRKx5b7_",
    },
    {
      id: 6,
      title: "Harlem Community Spot",
      price: "$5/day",
      location: "125th St, Harlem",
      occupancy: "1/2",
      status: "Active",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXGlZ1tUUJRxEFSghiZddVusvNBq8N_hH_yhrdXulj0t-JJ8k14G_KB-5LZG-wqLTDD43Lm5QLc2Y24TWul1FPvDum4jqfh8YrQc7FkZD-KCX7McB_RBWqc9Q9Pm6E_0o8JqCzX3s1pkavloQ94STJIkimbm-QrF4eWwUe10T1CAZ8SOYgHtjKGXfv3niMd2FOE0SAAUUQieCfKPV5u3jV_DUdAadE6gNG2zTWFpjTLwgj-sOf4XxxvzS38VA7VeizMY2ntKno9Sc",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-zinc-900 dark:text-zinc-50 min-h-screen">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-8">
        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-zinc-900 dark:text-zinc-50 text-4xl font-black leading-tight tracking-tight">
              My Listed Parkings
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium">
              Manage and track your parking assets (8 total)
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm font-bold transition-colors hover:bg-secondary/20 cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">
                filter_list
              </span>
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Status Tabs */}
        <div className="mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-8">
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-secondary text-zinc-900 dark:text-white pb-3"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">All Listings</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-zinc-500 hover:text-secondary pb-3 transition-all"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Active (5)</p>
            </a>
            <a
              className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-zinc-500 hover:text-secondary pb-3 transition-all"
              href="#"
            >
              <p className="text-sm font-bold tracking-wide">Full (3)</p>
            </a>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myListings.map((listing) => (
            <Link
              key={listing.id}
              href={`/parking/${listing.id}`}
              className="group bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden p-5 shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-5 cursor-pointer block"
            >
              <div
                className="w-full md:w-48 aspect-[4/3] md:aspect-square bg-cover bg-center rounded-xl relative shrink-0"
                style={{
                  backgroundImage: `url('${listing.image}')`,
                }}
                title={listing.title}
              >
                <span
                  className={`absolute top-2 left-2 text-zinc-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-sm ${
                    listing.status === "Active"
                      ? "bg-secondary"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {listing.status}
                </span>
              </div>
              <div className="flex flex-col justify-between grow">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {listing.title}
                    </h3>
                    <span className="text-secondary font-black">
                      {listing.price}
                    </span>
                  </div>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      location_on
                    </span>
                    {listing.location}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div
                      className={`px-2 py-1 rounded flex items-center gap-2 ${
                        listing.status === "Full"
                          ? "bg-red-500/10"
                          : "bg-secondary/10 dark:bg-secondary/5"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[16px] ${
                          listing.status === "Full"
                            ? "text-red-500"
                            : "text-secondary"
                        }`}
                      >
                        {listing.status === "Full"
                          ? "warning"
                          : "directions_car"}
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          listing.status === "Full"
                            ? "text-red-500"
                            : "text-zinc-500"
                        }`}
                      >
                        {listing.occupancy} Occupied
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white h-10 rounded-lg text-sm font-bold hover:brightness-95 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      analytics
                    </span>
                    Usage
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 h-10 rounded-lg text-sm font-bold hover:bg-secondary/20 transition-all cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      router.push(`/edit-listing/${listing.id}`);
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      edit
                    </span>
                    Edit
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl bg-secondary text-white font-bold">
            1
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            2
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            3
          </button>
          <button className="size-10 flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-secondary/10 transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 py-10 px-6 lg:px-40 bg-white/50 dark:bg-zinc-950/50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-60">
            <div className="size-5 text-secondary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="text-sm font-medium">© 2024 ParkShare Marketplace</p>
          </div>
          <div className="flex gap-8 text-sm font-medium opacity-60">
            <a className="hover:text-secondary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Support
            </a>
            <a className="hover:text-secondary transition-colors" href="#">
              Owner FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
