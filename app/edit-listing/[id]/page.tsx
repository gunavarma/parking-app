import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function EditListingPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#111811] dark:text-white transition-colors duration-200 font-display">
      {/* Top Navigation */}
      <Navbar />

      <main className="max-w-[960px] mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <Link
            className="text-zinc-500 dark:text-secondary/70 text-sm font-medium hover:text-secondary transition-colors"
            href="/"
          >
            Home
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">/</span>
          <Link
            className="text-zinc-500 dark:text-secondary/70 text-sm font-medium hover:text-secondary transition-colors"
            href="/my-listings"
          >
            My Listings
          </Link>
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">/</span>
          <span className="text-[#111811] dark:text-white text-sm font-medium">
            Edit Listing
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111811] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Edit Parking Listing
            </h1>
            <p className="text-zinc-500 dark:text-secondary/70 text-base font-normal">
              Listing ID: PK-{params.id || "98231"} • Last updated 2 days ago
            </p>
          </div>
          <Link
            href={`/parking/${params.id || "1"}`}
            className="flex items-center justify-center rounded-xl h-11 px-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[#111811] dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
          >
            <span className="material-symbols-outlined text-sm mr-2">
              visibility
            </span>
            View Live Listing
          </Link>
        </div>

        {/* Form Sections */}
        <div className="flex flex-col gap-8 bg-white dark:bg-zinc-900 p-6 md:p-10 rounded-xl shadow-sm border border-zinc-200 dark:border-white/10">
          {/* Media Section */}
          <section>
            <h2 className="text-[#111811] dark:text-white text-xl font-bold mb-4">
              Photos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-secondary group">
                <img
                  className="w-full h-full object-cover"
                  alt="Underground secure parking space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB197oInllcLc0lN2pPdZOKxTkxjOX-zHv-xQ6lOIwA4iEznUTiBlYMKDE0La_yAQp3S1Qt2Eef6x6FV4biOiPzf19p7OaPLCEcqhfyeTZolujsTJ6XH4qTexgQbpXPWbbifeubuftrSrtcIP1myaYGOYRsHPAXbRJYLMff_wZWCjwoVsm-TwUH7CIjLpxnDti0aplZH3bHFjmMB_KF5eS-yOkRfMiGHOxR9d0Ew_DaI7SpIIzhKSo7Jts4FGJFhMH02heBZ1bzlVrS"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <button className="bg-white rounded-full p-2 text-red-500 shadow-md hover:bg-red-50 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-white/10 group">
                <img
                  className="w-full h-full object-cover"
                  alt="Parking garage entrance"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEymA90SLKhQtWndUsTzfR-kMa6zAHkZHKbvZNTgllX6vCqQiwxaMm4omSQcwQoHT-o_dwpZDq1woZ1eSpiLwc7RoOAMnnGcEQoN5RuxK4uUfYUWtNKLcw7qB8k1NNduGC12NMFmHRKnPSBO_oNPC6o6j7OVJ3AGNKJw3KMxbQ7ZUSpt12zbHMnozPS3hUFw-oh0yxtjCHQ_l71zbVGMc56l5TikxGShxJOYuYeaD76fCj6jVwRgpALADNExFuXa_nwfHWf2c0W2yV"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <button className="bg-white rounded-full p-2 text-red-500 shadow-md hover:bg-red-50 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
              <button className="aspect-square rounded-lg border-2 border-dashed border-zinc-200 dark:border-white/10 flex flex-col items-center justify-center text-zinc-500 hover:border-secondary hover:text-secondary transition-all">
                <span className="material-symbols-outlined text-3xl">
                  add_a_photo
                </span>
                <span className="text-xs font-medium mt-2">Add Photo</span>
              </button>
            </div>
          </section>

          <hr className="border-zinc-200 dark:border-white/10" />

          {/* Basic Info Section */}
          <section className="space-y-6">
            <h2 className="text-[#111811] dark:text-white text-xl font-bold">
              Listing Details
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                  Parking Space Name
                </label>
                <input
                  className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white p-4 text-base transition-all outline-none ring-1 ring-transparent focus:ring-2"
                  placeholder="Enter a descriptive title"
                  type="text"
                  defaultValue="Secure Downtown Underground - P3 Level"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                  Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    location_on
                  </span>
                  <input
                    className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white pl-12 pr-4 py-4 text-base transition-all outline-none ring-1 ring-transparent focus:ring-2"
                    type="text"
                    defaultValue="123 Financial District, Metro City"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                  Price per Hour ($)
                </label>
                <input
                  className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white p-4 text-base outline-none ring-1 ring-transparent focus:ring-2"
                  type="number"
                  defaultValue="15.00"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                  Total Slots
                </label>
                <input
                  className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white p-4 text-base outline-none ring-1 ring-transparent focus:ring-2"
                  type="number"
                  defaultValue="10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                  Available Slots
                </label>
                <input
                  className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white p-4 text-base outline-none ring-1 ring-transparent focus:ring-2"
                  type="number"
                  defaultValue="4"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#111811] dark:text-gray-200 text-sm font-semibold">
                Description
              </label>
              <textarea
                className="w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-secondary focus:border-secondary dark:text-white p-4 text-base outline-none ring-1 ring-transparent focus:ring-2"
                rows={4}
                defaultValue="24/7 security cameras, well-lit area. Fits standard SUVs. Easy access to the main elevator bank. Remote access provided via mobile app."
              ></textarea>
            </div>
          </section>

          <hr className="border-zinc-200 dark:border-white/10" />

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-[#111811] dark:text-white text-xl font-bold">
              Amenities
            </h2>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-[#111811] dark:text-white text-sm font-medium">
                <span className="material-symbols-outlined text-lg">
                  videocam
                </span>{" "}
                CCTV
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-[#111811] dark:text-white text-sm font-medium">
                <span className="material-symbols-outlined text-lg">
                  ev_station
                </span>{" "}
                EV Charging
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-500 text-sm font-medium hover:border-secondary hover:text-secondary transition-all">
                <span className="material-symbols-outlined text-lg">
                  accessible
                </span>{" "}
                Accessible
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary bg-secondary/10 text-[#111811] dark:text-white text-sm font-medium">
                <span className="material-symbols-outlined text-lg">
                  roofing
                </span>{" "}
                Covered
              </button>
            </div>
          </section>

          {/* Actions */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-white/10">
            <button className="w-full md:w-auto text-red-500 dark:text-red-400 font-bold text-sm px-6 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">
                visibility_off
              </span>
              Deactivate Listing
            </button>
            <div className="flex w-full md:w-auto gap-3">
              <button className="flex-1 md:flex-initial px-8 py-3 rounded-xl border border-zinc-200 dark:border-white/10 text-[#111811] dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                Cancel
              </button>
              <button className="flex-1 md:flex-initial px-12 py-3 rounded-xl bg-secondary text-[#102210] font-black text-sm shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Footer Help */}
        <div className="mt-8 text-center">
          <p className="text-zinc-500 text-sm">
            Need help with your listing?{" "}
            <a
              className="text-secondary font-semibold underline underline-offset-2"
              href="#"
            >
              Contact Support
            </a>
          </p>
        </div>
      </main>

      {/* Map Preview Component (Bottom) */}
      <div className="max-w-[960px] mx-auto px-4 pb-20">
        <div className="mt-8 rounded-xl overflow-hidden border border-zinc-200 dark:border-white/10 relative h-[250px] group">
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFWieq3rKmtDqNQiZvNbAQxb7WnsWG8GF4ifZsbDFLMtLBF7JHgVknMLra_PpBBfllSzFQ7XF_zywD_h0W2MxcblQISVX_rgFeYiwtcNzntQutlE5e3x068HLizTlUNOMSb1tB28gn9Pv8S_VsSxWaw9JrCqSAPv6T9cLKoUq_NEwBbdeuTK_TAruK-U-4345u47flUJFgPjaCud1sRwrUegEt6N9huaZ7lBmQrn1raum_9H7rx-HQVN4AM-530fJwYvGP-Q02JFrj')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-secondary">
              <span className="material-symbols-outlined text-secondary">
                location_pin
              </span>
              <span className="font-bold text-sm">Location Verified</span>
            </div>
          </div>
          <button className="absolute bottom-4 right-4 bg-white dark:bg-zinc-900 p-2 rounded-full shadow-md text-[#111811] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">zoom_out_map</span>
          </button>
        </div>
      </div>
    </div>
  );
}
