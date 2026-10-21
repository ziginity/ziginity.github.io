import Image from "next/image";
import Link from "next/link";

import { gameJsonLd, type Game } from "@/lib/games";
import FeatureIcon from "@/components/feature-icon";
import Gallery from "@/components/gallery";
import PhoneFrame from "@/components/phone-frame";
import StoreLinks from "@/components/store-links";
import Trailer from "@/components/trailer";

export default function GameDetail({
  game,
  other,
}: {
  game: Game;
  other: Game;
}) {
  return (
    <article>
      <script
        type="application/ld+json"
        // Escape "<" so no string in the data can close the script tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameJsonLd(game)).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute right-[-10%] top-[-18rem] h-[38rem] w-[58rem] rounded-full bg-[radial-gradient(closest-side,rgba(226,84,26,0.2),transparent_70%)] blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 pb-16 pt-28 md:pt-36 lg:grid-cols-2 lg:gap-16">
            <div className="animate-rise">
              <Link
                className="group mb-8 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                href="/#games"
              >
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-x-0.5"
                >
                  ←
                </span>
                All games
              </Link>

              <div className="mb-6 flex items-center gap-4">
                <Image
                  src={game.icon}
                  alt={`${game.name} icon`}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl ring-1 ring-white/15 shadow-[0_16px_40px_-20px_rgba(226,84,26,0.8)]"
                />
                <div>
                  <p className="eyebrow">{game.tag}</p>
                  <p className="mt-1.5 text-sm text-white/60">
                    {game.subtitle}
                  </p>
                </div>
              </div>

              <h1 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {game.name}
              </h1>

              {game.intro.map((p) => (
                <p
                  key={p}
                  className="mb-4 max-w-xl text-[15px] leading-relaxed text-white/55"
                >
                  {p}
                </p>
              ))}

              <StoreLinks links={game.links} className="mt-8" />
            </div>

            <div className="animate-rise-sm flex items-end justify-center gap-4 [animation-delay:120ms] sm:gap-8">
              {game.hero.map((shot, i) => (
                <PhoneFrame
                  key={shot.alt}
                  src={shot.src}
                  alt={shot.alt}
                  priority
                  className={
                    i === 0
                      ? "w-[44%] max-w-[230px] animate-float-slow"
                      : "w-[44%] max-w-[230px] -translate-y-4 animate-float"
                  }
                />
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <dl className="animate-rise mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 [animation-delay:220ms] md:grid-cols-4">
            {game.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse items-center justify-center bg-ink-900 px-6 py-7 text-center"
              >
                <dt className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-24">
            <div
              className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
              data-aos="fade-up"
            >
              <p className="eyebrow justify-center">Gameplay</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                How it plays
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 md:grid-cols-3">
              {game.features.map((f, i) => {
                const last = i === game.features.length - 1;
                // An odd one out takes the full row at 2 columns (the fillers
                // below do the same job once the grid reaches 3 columns).
                const oddOut = last && game.features.length % 2 === 1;
                return (
                  // AOS on the wrapper keeps the hover transition intact.
                  <div
                    key={f.title}
                    className={`bg-ink-900 ${
                      oddOut ? "sm:col-span-2 md:col-span-1" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={(i % 3) * 60}
                  >
                    <div className="group h-full p-6 transition-colors duration-300 hover:bg-ink-850 md:p-8">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-ember-400 transition group-hover:border-ember-500/50 group-hover:bg-ember-500/10 group-hover:text-ember-300">
                        <FeatureIcon d={f.icon} />
                      </span>
                      <h3 className="mb-2 mt-5 font-semibold text-white">
                        {f.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-white/60">
                        {f.body}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Keep the hairline grid closed when the row would end short. */}
              {Array.from(
                { length: (3 - (game.features.length % 3)) % 3 },
                (_, i) => (
                  <div
                    key={`filler-${i}`}
                    className="hidden bg-ink-900 md:block"
                    aria-hidden="true"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-8 md:py-12">
            <div
              className="mx-auto max-w-3xl pb-10 text-center md:pb-14"
              data-aos="fade-up"
            >
              <p className="eyebrow justify-center">In-game</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Screenshots
              </h2>
              <p className="mt-4 text-[15px] text-white/60">
                Click any shot to enlarge it.
              </p>
            </div>
            <Gallery shots={game.gallery} />
          </div>
        </div>
      </section>

      {/* Trailer */}
      {game.trailer && (
        <section>
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="py-16 md:py-24">
              <div
                className="mx-auto max-w-3xl pb-10 text-center md:pb-14"
                data-aos="fade-up"
              >
                <p className="eyebrow justify-center">Watch</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Trailer
                </h2>
              </div>
              <div data-aos="fade-up" data-aos-delay="60">
                <Trailer
                  id={game.trailer.id}
                  poster={game.trailer.poster}
                  title={`${game.name} trailer`}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other game */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-16 md:pb-24">
            <div
              className="panel relative overflow-hidden rounded-3xl p-6 md:p-10"
              data-aos="fade-up"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-16 h-56 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(226,84,26,0.18),transparent)] blur-2xl"
              />
              <p className="eyebrow">Also from Ziginity</p>
              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={other.icon}
                    alt={`${other.name} icon`}
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 rounded-2xl ring-1 ring-white/15"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-[15px] text-white/60">
                      {other.short}
                    </p>
                  </div>
                </div>
                <Link
                  className="btn btn-ghost shrink-0"
                  href={`/${other.slug}/`}
                >
                  View game
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
