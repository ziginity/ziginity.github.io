import "./css/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SITE_URL } from "@/lib/site";
import SharePoster from "@/public/images/games/chess-bang/trailer-poster.webp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ziginity — Independent games, made simple",
    template: "%s — Ziginity",
  },
  description:
    "Ziginity is a small independent game studio. We build thoughtful, focused games around one idea: keep it simple, make it fun.",
  // Pages without their own og:title fall back to <title>.
  openGraph: {
    type: "website",
    siteName: "Ziginity",
    images: [SharePoster.src],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-inter tracking-tight text-white antialiased">
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
