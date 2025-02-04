"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { Sidebar } from "@/components/custom/Sidebar";
import { MorePanel } from "@/components/custom/MorePanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-white">
          <Sidebar onMoreClick={() => setIsMoreOpen(true)} />
          <main className="flex-1 overflow-auto relative">
            {children}
            <MorePanel
              isOpen={isMoreOpen}
              onClose={() => setIsMoreOpen(false)}
            />
          </main>
        </div>
      </body>
    </html>
  );
}
