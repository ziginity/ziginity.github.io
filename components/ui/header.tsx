"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Logo from "./logo";

const NAV = "text-sm text-white/60 transition hover:text-white";

export default function Header() {
  // The header gains a solid glass surface once the page scrolls under it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`mt-3 flex h-14 items-center justify-between gap-3 rounded-2xl px-3 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border border-white/10 bg-black/70 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <nav className="flex items-center gap-5 sm:gap-7">
            <a className={`${NAV} hidden sm:inline-flex`} href="/#games">
              Games
            </a>
            <a className={NAV} href="mailto:ziginity@gmail.com">
              Contact
            </a>
            <Link href="/chess-bang/" className="btn-sm btn-primary">
              Download
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
