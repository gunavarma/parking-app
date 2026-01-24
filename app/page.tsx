import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const listings = [
    {
      id: 1,
      title: "Grand Plaza Mall",
      price: "$5/hr",
      location: "South Side, Downtown • 0.2km",
      slots: 12,
      type: "Underground",
      time: "Just now",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAudbKixxfQXOmXZ8oYhOjJu8zXlWJTIuEu8QB9Mht04uBL2KRc3e3AYeXhhcqvFTE7UmFac1iYJ0lt9cToQIB7ALTYvrPtRgx1XOTC2GBSVsZlHAXFy-XBc1K6sBA-GkxO5vgKSaoJPB9zT1VVJVMl58oHWDp0rpzs2BmPv_Kt8jMeQOJmAfXG7_suW_ggqglZ09_yuyx7bHJdAX5z8BPuDqVuXZ-0xwvxwRgsRTJ_LJiue9axNixEz6Rq6sVWX3RhFdDoQRKx5b7_",
      featured: true,
    },
    {
      id: 2,
      title: "City Park Public",
      price: "$3/hr",
      location: "North Avenue • 0.8km",
      slots: 45,
      type: "Open Lot",
      time: "2 mins ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXGlZ1tUUJRxEFSghiZddVusvNBq8N_hH_yhrdXulj0t-JJ8k14G_KB-5LZG-wqLTDD43Lm5QLc2Y24TWul1FPvDum4jqfh8YrQc7FkZD-KCX7McB_RBWqc9Q9Pm6E_0o8JqCzX3s1pkavloQ94STJIkimbm-QrF4eWwUe10T1CAZ8SOYgHtjKGXfv3niMd2FOE0SAAUUQieCfKPV5u3jV_DUdAadE6gNG2zTWFpjTLwgj-sOf4XxxvzS38VA7VeizMY2ntKno9Sc",
      featured: false,
    },
    {
      id: 3,
      title: "Skyline Residency",
      price: "$8/hr",
      location: "Financial District • 1.2km",
      slots: 5,
      type: "Private Garage",
      time: "1 hour ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZvxVbBNqPMZB1JxGDyrNK3duWo9nLgX3esszr836SjLszKQMex5tkLRNm0_skUoRDTyHfnBzq5ftJZnjGAjw1zjL2GQBoPN3-t_Tzvt-E9R_yRXpajYWb0Dr4eI9bdU3RpdZqJs9Pm9M3I0dxnSDt_6GGLAu6j6l9a5M31yh3vDCClF6bDMHZLXQ1Es_7p52jKhorcDhmFobZok4DYi3g1t7qtubtUPDyXVh5TQc-6X7BT2GY0lvbw7Q5M2ErVz3LG7yVJqHskmxP",
      featured: false,
    },
    {
      id: 4,
      title: "VoltCharge Station",
      price: "$4/hr",
      location: "East Gate Plaza • 2.5km",
      slots: 8,
      type: "EV Charging",
      time: "10 mins ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDCZSsDpOYSwwYFYembb-fixq7OlEuqnU_Xwp3TEJjHUxDJM_sZpHKWtL9LTWhA0BE5gyyb8k5o3taJx5MdG5DYPEGg5ZWv6FJSrHqPXIV8HCTdwwhSVOsgZyNpvzHr1WGjkmgpi-5UAqY3w-qF9eUATaDEUa_l4gMjCnpXoFh_l8QqziP_LrjtFsCv-XseCZm6jMbifMpgszWtu1QY0sgN4tEAQw1C3Hn2M3W2Kb9BiHkYstPZNdQim9IDeHY73ABxH9b-KbZ-a_NN",
      featured: true,
    },
    {
      id: 5,
      title: "Metro Station P2",
      price: "$2/hr",
      location: "Central Station • 0.1km",
      slots: 120,
      type: "Covered",
      time: "5 mins ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZB88BHhmnrag_k63s4LboUNoTRASOANNGsvW0MN0hS7RDU5RwFLbUUsjly38QXXwcXZx2YIK9qpEv3vFqEZd6sgWN2viJYgwYTnmLkzSWFAqsZUlcohgp7En9UPx12BjQwNiFcuShihy9SUaa3-cuPyeHHXAHsO0_wOo7Nmj7vjDfzEyCPOfWzl-LLvB6_DqckVuf280Siu7U0ywKys2wQMLDkPG_3TGc-jDs6ckN5EuxMPePxxpQrJgfQ9LqwSrv1NEY39gKx8tV",
      featured: false,
    },
    {
      id: 6,
      title: "Westside Market Lot",
      price: "$6/hr",
      location: "West End • 3.0km",
      slots: 15,
      type: "Gated",
      time: "3 mins ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCar-Eb2wd5_8Zj7LLGuVNJAWPBPbmRDDMMOeY00eci_EfuRcey0Po_31hw5Ru2eiC9RstB350xY-KK2ittHgXXd1GXPnObWDQvqUMjSNXwu1fZg4pJAA77q2mUgycFhAS-mSbOSCw-yY5TWlA4SDtKaeM2TQxMhl2qWYCPeGDmRzf1M4F7Xodfc9Zk0f9S1UBDzINa0yFj--EDzutXaBHpqwTj5RXsjtm1bicN6o1mXKTTqAPWH6LlENARQ82MY9JBwVLnAFJmDHzE",
      featured: false,
    },
    {
      id: 7,
      title: "Downtown Alley",
      price: "$2.5/hr",
      location: "Main St Back • 0.5km",
      slots: 3,
      type: "Open",
      time: "Just now",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDmIOKddZdpBDn-IJi3U7GWn_tLhqri4qaWPFomGdAxgb3Or3I_nrh4ma5G56yuveIfD0jcBw7PCk_YUtpMvrNfGfuue8qIZnwAJb9gRSIIRXJWQBbE3Uu_zJxfXjNASQb46StPLDzMu0syR7K9bxs257NqXft8gO-Wye6Xtd37HuqQjH-p1Wk-8UZkoPTQE5Z3B4lvUefpT6ftvRHvbM41aAQ5qMtiYgPnBGv2XuN_mWu57dVdeS4Gyxg7LVn5OnHu8yKgyq3D8wDq",
      featured: false,
    },
    {
      id: 8,
      title: "Tech Park Block C",
      price: "$4/hr",
      location: "Innovation Hub • 5km",
      slots: 200,
      type: "Multi-level",
      time: "20 mins ago",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVqduGYy_50AKC-08Bxo7E7O6sAI2yXZPe_QBSg8FtNQJUVm_ZFiIVDkKiLEGvAHT9u7ss1479L3dq-9todFHbnHaUjK-tfGEsrfBGgpuL-2Nv_cZ8jToriuYqkwi3F2CjuaQnKMcyohQzON2XqunCWyDkV0SEEAaD7JZj3O6xl3xuazuLsHj3c_grxt0ZbRqP2hIkeln9fk9tb9TnPHgPErzgDcCgkObvMPirHQDuPUe0drHX3aZ8ErsdQj8uRqGUFEQNJDMdjBB",
      featured: false,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-40 py-8">
        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-zinc-900 dark:text-white">
            Explore Categories
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
            {[
              { icon: "storefront", label: "Mall", active: false },
              { icon: "corporate_fare", label: "Commercial", active: false },
              { icon: "apartment", label: "Apartment", active: true },
              { icon: "public", label: "Public", active: false },
              { icon: "ev_station", label: "EV Charging", active: false },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 min-w-[80px] group cursor-pointer"
              >
                <div
                  className={`size-14 rounded-xl flex items-center justify-center transition-all ${
                    cat.active
                      ? "bg-white dark:bg-zinc-900 border border-secondary bg-secondary/10"
                      : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group-hover:border-secondary group-hover:bg-secondary/5"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${
                      cat.active
                        ? "text-secondary"
                        : "group-hover:text-secondary text-zinc-900 dark:text-white"
                    }`}
                  >
                    {cat.icon}
                  </span>
                </div>
                <span
                  className={`text-xs font-semibold ${
                    cat.active
                      ? "text-secondary"
                      : "text-zinc-900 dark:text-gray-300"
                  }`}
                >
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Listings Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Recommended for you
            </h2>
            <button className="text-sm font-semibold text-secondary flex items-center gap-1 cursor-pointer">
              See all{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/parking/${listing.id}`}
                className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className="relative h-48 w-full bg-slate-200">
                  <Image
                    className="w-full h-full object-cover"
                    alt={listing.title}
                    src={listing.image}
                    width={400}
                    height={300}
                  />
                  {listing.featured && (
                    <div className="absolute top-3 left-3 bg-secondary text-[#111811] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 size-8 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-lg text-zinc-900 dark:text-white">
                      favorite
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base truncate pr-2 text-zinc-900 dark:text-white">
                      {listing.title}
                    </h3>
                    <span className="text-lg font-bold text-secondary">
                      {listing.price}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mb-3">
                    <span className="material-symbols-outlined text-xs">
                      location_on
                    </span>
                    {listing.location}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-bold">
                      {listing.slots} Slots Available
                    </div>
                    <span className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400">
                      {listing.time}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-3 rounded-xl font-bold transition-colors cursor-pointer">
            Load more spaces
          </button>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 md:bottom-8 right-8 z-[100] group">
        <Link
          href="/post-ad"
          className="size-16 bg-secondary text-[#111811] rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer block"
        >
          <span className="material-symbols-outlined text-4xl font-bold">
            add
          </span>
        </Link>
        {/* Tooltip */}
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#111811] text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Post Parking Space
        </span>
      </div>

      {/* Mobile Footer Navigation */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-3 flex justify-between items-center z-50">
        <Link
          href="/"
          className="flex flex-col items-center text-secondary cursor-pointer"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <div className="flex flex-col items-center text-zinc-500 cursor-pointer hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">search</span>
          <span className="text-[10px] font-medium">Search</span>
        </div>
        <div className="flex flex-col items-center text-zinc-500 cursor-pointer hover:text-secondary transition-colors">
          <span className="material-symbols-outlined">favorite</span>
          <span className="text-[10px] font-medium">Saved</span>
        </div>
        <Link
          href="/profile"
          className="flex flex-col items-center text-[#618961] cursor-pointer hover:text-secondary transition-colors"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </footer>
    </>
  );
}
