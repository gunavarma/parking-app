"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<"welcome" | "intent">("welcome");

  const handleStart = () => {
    setStep("intent");
  };

  const handleIntent = (intent: "find" | "list") => {
    // Save intent to local storage or cookie if needed
    localStorage.setItem("userIntent", intent);
    if (intent === "find") {
      router.push("/onboarding/find");
    } else {
      router.push("/onboarding/list");
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md z-10">
        {step === "welcome" ? (
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="relative size-64 mb-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <Image
                src="https://placehold.co/400x400/png?text=Parking+App"
                alt="Parking Illustration"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                Parking made <span className="text-secondary">simple</span>.
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                Find nearby parking spots instantly or earn passive income by
                listing your empty space.
              </p>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-secondary text-[#111811] text-lg font-bold py-4 rounded-2xl shadow-xl shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-right-10 duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                What would you like to do?
              </h2>
              <p className="text-zinc-500">
                Select your primary goal to get started.
              </p>
            </div>

            <div className="grid gap-4">
              <button
                onClick={() => handleIntent("find")}
                className="group relative flex flex-col items-center text-center p-8 bg-white dark:bg-zinc-900/50 border-2 border-zinc-100 dark:border-zinc-800 rounded-3xl hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
              >
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-zinc-900 dark:text-white group-hover:text-secondary">
                    directions_car
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Find Parking
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Search and book nearby parking spots effortlessly.
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleIntent("list")}
                className="group relative flex flex-col items-center text-center p-8 bg-white dark:bg-zinc-900/50 border-2 border-zinc-100 dark:border-zinc-800 rounded-3xl hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
              >
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-zinc-900 dark:text-white group-hover:text-secondary">
                    garage_home
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  List Your Space
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Turn your empty parking space into extra income.
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </div>
              </button>
            </div>

            <p className="text-center text-xs text-zinc-400 mt-8">
              You can switch between roles at any time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
