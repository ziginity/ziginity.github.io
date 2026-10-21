import Image from "next/image";
import Link from "next/link";

import Arrow from "@/components/ui/arrow";
import { games } from "@/lib/games";
import { withLiveLinks } from "@/lib/store-status";

export default async function Games() {
  const list = await Promise.all(games.map(withLiveLinks));

  return (
    <section id="games" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-white/10 py-20 md:py-28">
          <div
            className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
            data-aos="fade-up"
          >
            <div>
              <p className="eyebrow">Our games</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Two boards, one idea
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-white/60 md:text-right">
              Both games turn chess pieces into bombs. Same rule, two completely
              different moods.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {list.map((game, i) => (
              <Link
                key={game.slug}
                href={`/${game.slug}/`}
                className="group block"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
                  {/* Screenshot well */}
                  <div className="relative flex items-end justify-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.07] to-transparent px-6 pt-10 sm:px-8">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(226,84,26,0.25),transparent)] blur-2xl transition opacity-70 group-hover:opacity-100"
                    />
                    {game.hero.map((shot) => (
                      <Image
                        key={shot.alt}
                        src={shot.src}
                        alt=""
                        className="-mb-3 w-[40%] max-w-[190px] rounded-t-xl ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1.5"
                      />
                    ))}
                  </div>

                  <div className="flex items-start gap-4 px-3 pb-2 pt-6">
                    <Image
                      src={game.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-xl ring-1 ring-white/15"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          {game.name}
                        </h3>
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition group-hover:border-ember-500/60 group-hover:bg-ember-500/15 group-hover:text-ember-300">
                          <Arrow />
                        </span>
                      </div>
                      <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[15px] text-white/60">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                          {game.tag}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-1 w-1 rounded-full bg-white/20"
                        />
                        {game.links.length ? game.subtitle : "Coming soon"}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
