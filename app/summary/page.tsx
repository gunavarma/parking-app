import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function SummaryPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-zinc-900 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-10">
        <div className="max-w-[500px] w-full flex flex-col items-center">
          {/* Success Icon & Title */}
          <div className="mb-6 flex flex-col items-center">
            <div className="w-20 h-20 bg-secondary/20 dark:bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-secondary text-5xl">
                check_circle
              </span>
            </div>
            <h1 className="text-zinc-900 dark:text-white text-[32px] font-bold leading-tight text-center">
              Parking Ended
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-center mt-2">
              A receipt has been sent to your email.
            </p>
          </div>

          {/* Summary Card */}
          <div className="w-full bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-solid border-zinc-100 dark:border-zinc-800">
            {/* Map Placeholder */}
            <div
              className="w-full h-40 bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAH6cFdeuqMPsd6xsFGMIRXyxOSx8DImdLW_yuURVmgxWPauCKpmXFSX9es-q5nGhZj2IgaEc8anp5NvMPy2g2bsi0VW6ouJCUaVTU36d1O-QpcgvFWETd-h3nnXGCqgp4F05Hxh2MlcF28onEnGq_WiqBuWdjJraQeyglMemanDvWAaQybG-qRhZE2CyB0_RNVxk0jW0vLmKykwAJfNy6h3rPEw4unKo3kQTaz01KeYCfkAsSd2t-CACFeqai55KRyDDxMUDG7zYg8")',
              }}
            ></div>
            <div className="p-6">
              <div className="flex flex-col mb-6">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-zinc-900 dark:text-white text-lg font-bold leading-tight">
                  Downtown Central Plaza - Sector 4
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  123 Market St, Financial District
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-solid border-zinc-100 dark:border-zinc-800 py-6 mb-6">
                <div className="flex flex-col">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Total Time
                  </p>
                  <p className="text-zinc-900 dark:text-white text-2xl font-bold">
                    02:15:00
                  </p>
                </div>
                <div className="flex flex-col text-right">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                    Total Cost
                  </p>
                  <p className="text-zinc-900 dark:text-white text-2xl font-bold">
                    $11.25
                  </p>
                </div>
              </div>

              {/* Rating Section */}
              <div className="flex flex-col items-center mb-8">
                <h4 className="text-zinc-500 dark:text-zinc-400 text-sm font-bold leading-normal tracking-[0.015em] mb-3">
                  How was your parking experience?
                </h4>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-secondary text-3xl cursor-pointer"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="material-symbols-outlined text-[#cbd5e1] dark:text-zinc-600 text-3xl cursor-pointer">
                    star
                  </span>
                </div>
              </div>

              {/* Primary Action */}
              <Link
                href="/"
                className="w-full flex h-14 items-center justify-center rounded-xl bg-secondary hover:bg-secondary/90 transition-colors text-zinc-900 text-lg font-bold shadow-lg shadow-secondary/20"
              >
                Done
              </Link>
            </div>
          </div>

          {/* Support link */}
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 text-center">
            Need help?{" "}
            <a
              className="text-secondary font-semibold hover:underline"
              href="#"
            >
              Contact Support
            </a>
          </p>
        </div>
      </main>

      {/* Footer decoration */}
      <footer className="mt-auto py-8 text-center text-zinc-500 dark:text-zinc-600 text-xs">
        © 2024 ParkShare Inc. All rights reserved.
      </footer>
    </div>
  );
}
