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
    default: "Ziginity — Every game, one twist nobody saw coming",
    template: "%s — Ziginity",
  },
  description:
    "Ziginity is an independent game studio. Every game is built around one twist nobody saw coming, like a chess puzzle where every piece is a bomb.",
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
      <body className="font-inter tracking-tight text-fg antialiased">
        <div aria-hidden="true" className="sky">
          <span />
          <span />
          <span />
        </div>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
