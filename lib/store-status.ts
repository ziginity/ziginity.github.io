import type { Game, StoreLink } from "@/lib/games";

/*
 * Store buttons appear only once a listing is live. This runs at build time
 * (the site is a static export), and the deploy workflow rebuilds on a
 * schedule, so a game that passes review gets its buttons without a code
 * change. Visitors' browsers never contact the stores.
 *
 * Only a definite answer counts: Apple's lookup API returning no result, or
 * Google Play returning 404, means "not live yet". Anything else (timeouts,
 * 5xx, rate limits) is retried and then fails the build, so the deployed
 * site keeps its previous state instead of hiding buttons on a network blip.
 */

const ATTEMPTS = 3;
const TIMEOUT_MS = 15_000;

async function check(href: string): Promise<boolean> {
  const url = new URL(href);

  if (url.hostname === "apps.apple.com") {
    const id = url.pathname.match(/\/id(\d+)/)?.[1];
    if (!id) throw new Error(`No App Store id in ${href}`);
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&country=us`,
      { signal: AbortSignal.timeout(TIMEOUT_MS) },
    );
    if (!res.ok) throw new Error(`App Store lookup ${id}: HTTP ${res.status}`);
    const body = (await res.json()) as { resultCount: number };
    return body.resultCount > 0;
  }

  if (url.hostname === "play.google.com") {
    const res = await fetch(href, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (res.status === 404) return false;
    if (res.ok) return true;
    throw new Error(`Google Play ${href}: HTTP ${res.status}`);
  }

  // Not a store we know how to check: always show it.
  return true;
}

const cache = new Map<string, Promise<boolean>>();

export function isLive(href: string): Promise<boolean> {
  let result = cache.get(href);
  if (!result) {
    result = (async () => {
      for (let attempt = 1; ; attempt++) {
        try {
          return await check(href);
        } catch (err) {
          if (attempt >= ATTEMPTS) throw err;
          await new Promise((r) => setTimeout(r, 1000 * attempt));
        }
      }
    })();
    cache.set(href, result);
  }
  return result;
}

/** The game with only the store links that are live right now. */
export async function withLiveLinks(game: Game): Promise<Game> {
  const live = await Promise.all(game.links.map((l) => isLive(l.href)));
  const links: StoreLink[] = game.links.filter((_, i) => live[i]);
  return { ...game, links };
}
