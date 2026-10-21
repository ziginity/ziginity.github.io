import ShotCard from "@/components/shot-card";
import StoreLinks from "@/components/store-links";
import { getGame } from "@/lib/games";
import { withLiveLinks } from "@/lib/store-status";

/* Small proof points pulled from the game itself. */
const PROOF = [
  "150+ levels",
  "Play offline",
  "4 board skins",
  "4 challenge modes",
];

export default async function HeroHome() {
  // The hero sells Chess Bang (the game you can download today), so the
  // mockup shows only Chess Bang; The Mystical East appears in the Games list.
  const game = await withLiveLinks(getGame("chess-bang"));
  const [first, second] = game.hero;

  return (
    <section className="relative overflow-hidden">
      {/* Backdrop: ember halo + fading blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-22rem] h-[44rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(226,84,26,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.045),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_25%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-20 pt-32 text-center md:pb-28 md:pt-44">
          <p className="eyebrow animate-rise justify-center">{game.name}</p>

          <h1 className="animate-rise mt-6 text-5xl font-bold tracking-tighter text-white [animation-delay:80ms] md:text-7xl">
            Every piece is a{" "}
            <span className="bg-gradient-to-br from-ember-300 via-ember-400 to-ember-600 bg-clip-text text-transparent">
              bomb
            </span>
            .
          </h1>

          <p className="animate-rise mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55 [animation-delay:160ms]">
            A chain-reaction chess puzzle. Place your pieces, fire one BANG, and
            watch the chain clear the board.
          </p>

          <div className="animate-rise mt-10 flex justify-center [animation-delay:240ms]">
            <StoreLinks links={game.links} />
          </div>

          <ul className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13px] text-white/55 [animation-delay:320ms]">
            {PROOF.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-white/20"
                  />
                )}
                {item}
              </li>
            ))}
          </ul>

          <div className="animate-rise-sm mt-16 flex items-start justify-center gap-4 [animation-delay:360ms] sm:gap-8 md:mt-20">
            <ShotCard
              src={first.src}
              alt={first.alt}
              priority
              className="w-[42%] max-w-[260px] animate-float-slow"
            />
            <ShotCard
              src={second.src}
              alt={second.alt}
              priority
              className="w-[42%] max-w-[260px] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
