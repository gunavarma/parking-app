import Link from "next/link";

export default function Navbar() {
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

        {/* Search and Location Area */}
        <div className="flex flex-1 items-center gap-2 max-w-2xl">
          {/* Location Selector */}
          <div className="relative min-w-[140px] hidden md:block">
            <div className="flex items-center gap-1 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg cursor-pointer">
              <span className="material-symbols-outlined text-secondary text-xl">
                location_on
              </span>
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                Downtown
              </span>
              <span className="material-symbols-outlined text-sm text-zinc-900 dark:text-white">
                expand_more
              </span>
            </div>
          </div>
          {/* Search Bar */}
          <div className="flex-1">
            <label className="flex items-center w-full h-11 bg-[#f0f4f0] dark:bg-[#1a2e1a] rounded-lg px-3 group focus-within:ring-2 focus-within:ring-secondary/50 transition-all">
              <span className="material-symbols-outlined text-zinc-500 dark:text-zinc-400">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-full text-[#618961] dark:text-[#a0b0a0] ml-2 text-zinc-900 dark:text-white"
                placeholder="Search parking area or name"
                type="text"
              />
            </label>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/my-listings"
            className="hidden lg:block text-sm font-semibold hover:text-secondary transition-colors text-zinc-900 dark:text-white"
          >
            My Listings
          </Link>
          <Link
            href="/post-ad"
            className="bg-secondary text-[#111811] px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:brightness-110 transition-all"
          >
            Sell Space
          </Link>
          <Link
            href="/profile"
            className="size-10 rounded-full bg-cover bg-center border-2 border-secondary/20"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw8wKWpywGHmtqa5gKFXCsuT4Z90jD2OJ5svn8voixOMm0i-PPONuk8SfUvSwTNHG_wFhcYumVOKojueRXlzwVogDDEoJi0EE70CWzVs-4nUztxLU6o5fLILDBjCfgXdoXZtD2c8Zoi5Y5oZncPRVhiPaQYHe2ezgn-d7aYhTDmk-9g7YIlKZzybh0TVriSBGvF1NoAj5D9w-aDlXy7kutPOZVuF9UJ4sF23l0S9GrmvB8ypQFYXpr-qiIu9u78HPc2CkeagUnKXVy')",
            }}
            title="User profile"
          ></Link>
        </div>
      </div>
    </header>
  );
}
