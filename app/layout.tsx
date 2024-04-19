import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import { cn } from "utils/cn";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coin Watcher",
  description: "Coin Watcher"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={cn("bg-zinc-900", manrope.className)}>{children}</body>
    </html>
  );
}
