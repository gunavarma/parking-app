"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocation } from "../../context/LocationContext";
import { createClient } from "@/utils/supabase/client";

export default function ListParkingOnboarding() {
  const router = useRouter();
  const { requestLocation, location } = useLocation();
  const [step, setStep] = useState<"intro" | "auth" | "details" | "complete">(
    "intro",
  );

  const supabase = createClient();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        // If already logged in, skip to details if in auth step, or just stay.
        // But if we are reloading, we might want to go to details.
        if (step === "auth" || step === "intro") {
          setStep("details");
        }
      }
    };
    checkSession();
  }, [step]); // Check on step change too? No, just mount is fine usually, but if step matches...

  // Form State
  const [listingData, setListingData] = useState({
    title: "",
    address: "",
    totalSlots: 1,
    pricePerHour: "",
  });

  /* New State for Email/Password Auth */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const handleNext = () => {
    if (step === "intro") setStep("auth");
    else if (step === "auth") setStep("details");
    else if (step === "details") setStep("complete");
  };

  const handleAuthGoogle = async () => {
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/onboarding/list`,
      },
    });
    if (error) {
      console.error("Google Auth Error:", error);
      alert(`Google Sign-In failed: ${error.message}`);
    }
    setIsAuthLoading(false);
  };

  const handleAuthEmailPassword = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    setIsAuthLoading(true);

    let error;

    if (authMode === "signup") {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/onboarding/list`,
        },
      });
      error = res.error;
      if (!error && !res.data.session) {
        alert("Please check your email to confirm your account.");
        setIsAuthLoading(false);
        return;
      }
    } else {
      const res = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      error = res.error;
    }

    setIsAuthLoading(false);

    if (error) {
      console.error("Auth Error:", error);
      alert(
        `${authMode === "signup" ? "Sign up" : "Login"} failed: ${error.message}`,
      );
    } else {
      // Check session will handle transition in useEffect
    }
  };

  const handleFinish = async () => {
    try {
      // 1. Mark onboarding as complete (Host role)
      const res = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "host" }),
      });
      if (!res.ok) throw new Error("Failed to update profile");

      // 2. Ideally create the listing here too, but for now we redirect to dashboard
      // where they can manage listings.
      // (We'd need to map form data to API schema exactly).

      router.push("/my-listings");
    } catch (err) {
      console.error(err);
      alert("Error finishing setup. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Progress Bar */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                (step === "intro" && i === 1) ||
                (step === "auth" && i <= 2) ||
                (step === "details" && i <= 3) ||
                (step === "complete" && i <= 4)
                  ? "bg-secondary"
                  : "bg-zinc-200 dark:bg-zinc-800"
              }`}
            ></div>
          ))}
        </div>

        {step === "intro" && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="relative size-64 mx-auto mb-8">
              <img
                src="https://placehold.co/400x300/png?text=Earn+Cash"
                alt="Earn Money"
                className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg animate-bounce">
                <p className="font-black text-secondary text-2xl">+$250</p>
                <p className="text-xs text-zinc-500 uppercase font-bold">
                  Monthly Avg.
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Turn Space into Income
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                <span className="material-symbols-outlined text-secondary text-xl">
                  add_location_alt
                </span>
                <div>
                  <h4 className="font-bold">List your spot</h4>
                  <p className="text-xs text-zinc-500">
                    Set availability and rules.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                <span className="material-symbols-outlined text-secondary text-xl">
                  payments
                </span>
                <div>
                  <h4 className="font-bold">Get Paid Securely</h4>
                  <p className="text-xs text-zinc-500">
                    Direct deposits to your bank.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-secondary text-[#111811] py-4 rounded-xl font-bold shadow-lg hover:shadow-secondary/20 transition-all"
            >
              Start Listing
            </button>
          </div>
        )}

        {step === "auth" && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-3xl font-bold">
              {showEmailInput
                ? authMode === "signup"
                  ? "Create Host Account"
                  : "Welcome Back"
                : "Create Host Account"}
            </h2>
            <p className="text-zinc-500">
              {showEmailInput
                ? authMode === "signup"
                  ? "Sign up to start listing."
                  : "Log in to manage your spaces."
                : "You need an account to manage listings and receive payments."}
            </p>
            <div className="space-y-4">
              <div className="space-y-4">
                <button
                  onClick={handleAuthGoogle}
                  disabled={isAuthLoading}
                  className="w-full py-4 rounded-xl font-bold bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 transition-all disabled:opacity-50"
                >
                  Continue with Google
                </button>

                {!showEmailInput ? (
                  <button
                    onClick={() => setShowEmailInput(true)}
                    className="w-full py-4 rounded-xl font-bold bg-secondary text-[#111811] hover:shadow-lg transition-all"
                  >
                    Continue with Email
                  </button>
                ) : (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 text-left">
                    {/* Auth Mode Toggle */}
                    <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-lg">
                      <button
                        onClick={() => setAuthMode("signup")}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                          authMode === "signup"
                            ? "bg-white dark:bg-zinc-800 shadow text-zinc-900 dark:text-white"
                            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        Sign Up
                      </button>
                      <button
                        onClick={() => setAuthMode("login")}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                          authMode === "login"
                            ? "bg-white dark:bg-zinc-800 shadow text-zinc-900 dark:text-white"
                            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                        }`}
                      >
                        Log In
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-bold uppercase text-zinc-500 ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-4 mt-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border-transparent focus:border-secondary focus:ring-0 outline-none"
                          autoFocus
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-zinc-500 ml-1">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full p-4 mt-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border-transparent focus:border-secondary focus:ring-0 outline-none"
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleAuthEmailPassword}
                      disabled={!email || !password || isAuthLoading}
                      className="w-full bg-secondary text-[#111811] py-4 rounded-xl font-bold shadow-lg hover:shadow-secondary/20 transition-all disabled:opacity-50"
                    >
                      {isAuthLoading
                        ? "Processing..."
                        : authMode === "signup"
                          ? "Create Account"
                          : "Log In"}
                    </button>
                    <button
                      onClick={() => setShowEmailInput(false)}
                      className="w-full text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 py-2"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Details</h2>
              <p className="text-zinc-500">Tell us about your parking spot.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">
                  Spot Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Driveway on Elm St"
                  className="w-full p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border-transparent focus:border-secondary focus:ring-0 outline-none"
                  value={listingData.title}
                  onChange={(e) =>
                    setListingData({ ...listingData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">
                  Address
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 outline-none"
                    value={listingData.address}
                    onChange={(e) =>
                      setListingData({
                        ...listingData,
                        address: e.target.value,
                      })
                    }
                  />
                  <button
                    onClick={requestLocation}
                    className="p-4 bg-secondary/10 text-secondary rounded-xl"
                  >
                    <span className="material-symbols-outlined">
                      my_location
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">
                    Price / Hour
                  </label>
                  <input
                    type="number"
                    placeholder="$5.00"
                    className="w-full p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 outline-none"
                    value={listingData.pricePerHour}
                    onChange={(e) =>
                      setListingData({
                        ...listingData,
                        pricePerHour: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">
                    Total Slots
                  </label>
                  <input
                    type="number"
                    value={listingData.totalSlots}
                    onChange={(e) =>
                      setListingData({
                        ...listingData,
                        totalSlots: parseInt(e.target.value),
                      })
                    }
                    className="w-full p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-secondary text-[#111811] py-4 rounded-xl font-bold shadow-lg hover:shadow-secondary/20 transition-all mt-4"
            >
              Publish Listing
            </button>
          </div>
        )}

        {step === "complete" && (
          <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="size-32 bg-secondary text-[#111811] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <span className="material-symbols-outlined text-6xl">
                celebration
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-zinc-900 dark:text-white">
                Your parking is live!
              </h2>
              <p className="text-lg text-zinc-500">
                You are now ready to earn.
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleFinish}
                className="w-full bg-secondary text-[#111811] text-lg font-bold py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform"
              >
                View My Parking
              </button>
              <button
                onClick={() => router.push("/")}
                className="w-full bg-transparent text-zinc-500 py-4 font-bold hover:text-zinc-900"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
