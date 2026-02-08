"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-solid border-zinc-200 dark:border-zinc-800 px-4 md:px-20 lg:px-40 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="text-secondary">
            <span className="material-symbols-outlined text-3xl">
              local_parking
            </span>
          </div>
          <h1 className="text-xl font-bold leading-tight tracking-tight hidden sm:block text-zinc-900 dark:text-white">
            ParkPlace
          </h1>
        </Link>

        {/* Search and Location Area - Always visible */}
        <div className="flex flex-1 items-center gap-2 max-w-xl mx-4">
          <Link href="/search" className="flex-1 max-w-md">
            <div className="flex items-center w-full h-11 bg-zinc-100 dark:bg-zinc-900 rounded-lg px-3 group hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-zinc-500 dark:text-zinc-400">
                search
              </span>
              <span className="ml-2 text-sm text-zinc-500 dark:text-zinc-400 truncate">
                Search parking...
              </span>
            </div>
          </Link>
        </div>

        {/* User Actions - Simplified */}
        <div className="flex items-center gap-4">
          <Link
            href="/post-ad"
            className="bg-secondary text-[#111811] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:brightness-110 transition-all hidden sm:block"
          >
            Sell Space
          </Link>
          <div className="relative">
            <Link href="/profile">
              <button className="flex items-center justify-center size-10 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
