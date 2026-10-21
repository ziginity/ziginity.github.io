import type { StoreLink } from "@/lib/games";

/* Store marks from Simple Icons (CC0). */
const STORES = {
  "apps.apple.com": {
    lead: "Download on the",
    path: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
  },
  "play.google.com": {
    lead: "Get it on",
    path: "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z",
  },
} as const;

export default function StoreLinks({
  links,
  className = "",
}: {
  links: StoreLink[];
  className?: string;
}) {
  if (links.length === 0) {
    return (
      <p
        className={`inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/60 ${className}`}
      >
        <span className="h-2 w-2 rounded-full bg-ember-400 shadow-[0_0_10px_2px_rgba(226,84,26,0.6)]" />
        Coming soon
      </p>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => {
        const store =
          STORES[new URL(link.href).hostname as keyof typeof STORES];
        return (
          <a
            key={link.href}
            href={link.href}
            className="group inline-flex h-[54px] items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] pl-4 pr-5 text-left backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ember-500/50 hover:bg-white/[0.1] hover:shadow-[0_18px_40px_-20px_rgba(226,84,26,0.65)] active:translate-y-0"
          >
            {store && (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 fill-white/90 transition group-hover:fill-white"
                aria-hidden="true"
              >
                <path d={store.path} />
              </svg>
            )}
            <span className="leading-none">
              {store && (
                <span className="mb-1 block text-[11px] tracking-normal text-white/55">
                  {store.lead}
                </span>
              )}
              <span className="block text-[17px] font-semibold text-white">
                {link.label}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
