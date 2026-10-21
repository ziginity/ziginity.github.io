import Link from "next/link";

import { games } from "@/lib/games";

import Logo from "./logo";

const LINK = "text-white/60 transition hover:text-white";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className={border ? "border-t border-white/10" : ""}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between md:py-14">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A small independent game studio. One idea, made simple: keep it
              simple, make it fun.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 text-sm">
            <div>
              <p className="eyebrow mb-4">Games</p>
              <ul className="space-y-2.5">
                {games.map((game) => (
                  <li key={game.slug}>
                    <Link className={LINK} href={`/${game.slug}/`}>
                      {game.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">About</p>
              <ul className="space-y-2.5">
                <li>
                  <Link className={LINK} href="/privacy-policy/">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className={LINK} href="/term-of-use/">
                    Terms
                  </Link>
                </li>
                <li>
                  <a className={LINK} href="mailto:ziginity@gmail.com">
                    ziginity@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/10 py-6 text-[13px] text-white/55">
          <span>&copy; {new Date().getFullYear()} Ziginity</span>
          <span>Made with care, played offline.</span>
        </div>
      </div>
    </footer>
  );
}
