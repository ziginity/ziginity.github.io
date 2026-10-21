# ziginity.github.io

Source for **https://ziginity.github.io** — the Ziginity studio website, the
pages for *Chess Bang* and *Chess Bang: The Mystical East*, and their legal pages.

Built with **Next.js** (App Router, static export) and **Tailwind CSS v4**, based
on the free [Cruip "Simple Light"](https://simple.cruip.com/) landing template.

## Pages

| URL | File |
|---|---|
| https://ziginity.github.io/ | `app/(default)/page.tsx` |
| https://ziginity.github.io/chess-bang/ | `app/(default)/chess-bang/page.tsx` |
| https://ziginity.github.io/mystical-east/ | `app/(default)/mystical-east/page.tsx` |
| https://ziginity.github.io/privacy-policy/ | `app/(default)/privacy-policy/page.tsx` |
| https://ziginity.github.io/term-of-use/ | `app/(default)/term-of-use/page.tsx` |

Game copy, screenshots, store links and feature icons live in `lib/games.ts`;
both game pages render `components/game-detail.tsx`.

## Development

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static output in ./out
```

The build uses `output: "export"`, so `pnpm build` produces a plain static site
in `out/` — no server runtime required.

## Deploying

GitHub Pages is built and deployed by the workflow in
`.github/workflows/deploy.yml`: push to `main`, GitHub Actions runs
`pnpm build` and publishes `out/`.

Because the deploy uses a workflow, set **Settings → Pages → Source** to
**GitHub Actions** once.

## Privacy notes

The site makes **no third-party requests on page load**, which is what the
Privacy Policy promises:

- The Inter typeface is self-hosted by `next/font` (downloaded at build time,
  served from `/_next/static/media/`). No Google Fonts at runtime.
- No analytics, no CDNs, no external images.
- Every external `href` (App Store, Google Play, the policies it cites) is a
  user-initiated link, not an automatic request.
- Trailers use a click-to-play facade (`components/trailer.tsx`); YouTube
  (youtube-nocookie.com) loads only after the visitor presses play, as the
  Privacy Policy states.

## For AI agents / editors

- Never add CDN `<link>`/`<script>` tags or Google Fonts. Self-host instead.
- Keep `public/app-ads.txt` — it is served at the site root, where AdMob
  verifies it.
- Update the "Last updated" date in the privacy policy when its content changes,
  and keep the data practices in sync with the AdMob and RevenueCat
  integrations described in the game repository.
