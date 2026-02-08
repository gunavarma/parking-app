import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals.css";
// import { AuthProvider } from "./context/AuthContext";
// import { SuperTokensProvider } from "./components/SupertokensProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ParkPlace - Marketplace",
  description: "Find the perfect parking spot",
};

import QueryProvider from "./providers/QueryProvider";
import { LocationProvider } from "./context/LocationContext";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-background-light dark:bg-background-dark text-zinc-900 dark:text-white min-h-screen`}
      >
        <QueryProvider>
          <LocationProvider>{children}</LocationProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
