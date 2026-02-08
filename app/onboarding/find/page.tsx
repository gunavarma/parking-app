"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocation } from "../../context/LocationContext";
import { createClient } from "@/utils/supabase/client";

export default function FindParkingOnboarding() {
  const router = useRouter();
  const { requestLocation, isLoading, error } = useLocation();
  const [step, setStep] = useState<"location" | "manual" | "auth" | "complete">(
    "location",
  );
  const [manualLocation, setManualLocation] = useState("");

  const supabase = createClient();

  // Check session on mount
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setStep("complete");
        // Ideally we check if they already completed onboarding to avoid duplicate API calls
        // but for now we can just ensure the finish button calls the API or we call it here.
      }
    };
    checkSession();
  }, []);

  const handleEnableLocation = async () => {
    await requestLocation();
    setStep("auth");
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualLocation.trim()) {
      localStorage.setItem("manualLocation", manualLocation);
      setStep("auth");
    }
  };

  /* New State for Email/Password Auth */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const handleAuthGoogle = async () => {
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/onboarding/find`,
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
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/onboarding/find`,
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
      // But if we just signed up and auto-confirmed (dev) or logged in:
      // The useEffect should catch it.
    }
  };

  const completeOnboarding = async () => {
    try {
      const res = await fetch("/api/onboarding/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: "renter" }),
      });
      if (!res.ok) throw new Error("Failed to complete onboarding");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Error completing setup. Please try again.");
    }
  };

  const handleFinish = async () => {
    await completeOnboarding();
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Progress Bar */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                (step === "location" && i === 1) ||
                (step === "manual" && i === 1) ||
                (step === "auth" && i <= 2) ||
                (step === "complete" && i <= 3)
                  ? "bg-secondary"
                  : "bg-zinc-200 dark:bg-zinc-800"
              }`}
            ></div>
          ))}
        </div>

        {step === "location" && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="size-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl">
                my_location
              </span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Enable Location
            </h2>
            <p className="text-zinc-500">
              We use your location to show you the nearest available parking
              spots and navigation.
            </p>
            <div className="space-y-3 pt-4">
              <button
                onClick={handleEnableLocation}
                disabled={isLoading}
                className="w-full bg-secondary text-[#111811] py-4 rounded-xl font-bold shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="size-4 border-2 border-[#111811]/30 border-t-[#111811] rounded-full animate-spin"></span>
                    Allowing...
                  </>
                ) : (
                  "Allow Location Access"
                )}
              </button>
              <button
                onClick={() => setStep("manual")}
                className="w-full bg-transparent text-zinc-500 font-semibold py-4 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Enter Location Manually
              </button>
            </div>
          </div>
        )}

        {step === "manual" && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Where are you?
            </h2>
            <p className="text-zinc-500">
              Enter your city or area to find parking nearby.
            </p>
            <form onSubmit={handleManualSubmit} className="space-y-4">
              <input
                type="text"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                placeholder="e.g. New York, Downtown"
                className="w-full p-4 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl outline-none focus:ring-2 focus:ring-secondary/50"
                autoFocus
              />
              <button
                type="submit"
                disabled={!manualLocation.trim()}
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-xl font-bold disabled:opacity-50 transition-all"
              >
                Confirm Location
              </button>
              <button
                type="button"
                onClick={() => setStep("location")}
                className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                Back
              </button>
            </form>
          </div>
        )}

        {step === "auth" && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="size-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-4xl">lock</span>
            </div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              {showEmailInput
                ? authMode === "signup"
                  ? "Create Account"
                  : "Welcome Back"
                : "Create Account"}
            </h2>
            <p className="text-zinc-500">
              {showEmailInput
                ? authMode === "signup"
                  ? "Sign up to start booking."
                  : "Log in to continue."
                : "Sign up to book spots, make payments, and track your history."}
            </p>

            {/* Auth Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAuthGoogle}
                disabled={isAuthLoading}
                className="w-full flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all disabled:opacity-50"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="size-6"
                  alt="Google"
                />
                Continue with Google
              </button>

              {!showEmailInput ? (
                <button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full bg-secondary text-[#111811] py-4 rounded-xl font-bold shadow-lg hover:shadow-secondary/20 transition-all"
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
            <p className="text-xs text-zinc-400">
              By continuing, you agree to our Terms of Service.
            </p>
          </div>
        )}

        {step === "complete" && (
          <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
            <div className="size-32 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="material-symbols-outlined text-6xl">
                check_circle
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-zinc-900 dark:text-white">
                You're all set!
              </h2>
              <p className="text-lg text-zinc-500">
                Ready to find your perfect parking spot.
              </p>
            </div>
            <button
              onClick={handleFinish}
              className="w-full bg-secondary text-[#111811] text-lg font-bold py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              Find Parking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
