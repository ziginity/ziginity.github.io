# Design System Master File — Ziginity

> **LOGIC:** When building a specific page, first check `design-system/ziginity/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file. If not, strictly follow the rules below.

---

**Project:** Ziginity — indie game studio (Chess Bang, The Mystical East)
**Last reviewed:** 2026-10-21
**Stack:** Next.js 15 (static export) + Tailwind CSS v4 · Inter via `next/font`
**Design Dials:** Variance 7/10 · Motion 5/10 · Density 2/10 (spacious, marketing site)

> ⚠️ **Override note.** The auto-generated palette below (Claymorphism + pink/gold, Varela Round)
> was **rejected**: it targets casual-children's products, not this brand. The real system is
> defined in `app/css/style.css` (`@theme` block) and documented here. Treat this file as the
> source of truth, not the generator output.

---

## 1. Brand position

A one-person studio publishing calm, offline, no-timer puzzle games. The site sells two games
that share one idea ("every chess piece is a bomb"). Voice: short, concrete, quietly confident.
Never loud, never "epic gamer" — the tone is *premium studio*, not *esports*.

## 2. Color

Dark-only site. No light mode (matches `dark-mode-oled` guidance: deep base, no `#fff` surfaces,
high-contrast text, visible focus).

| Role | Token | Value | Notes |
|------|-------|-------|-------|
| Page base | `--color-ink-950` | `#08080a` | Slightly warm black, OLED-friendly |
| Panel | `--color-ink-900` | `#0d0d10` | Feature cells, phone glass |
| Panel hover | `--color-ink-850` / `ink-800` | `#121216` / `#17171c` | |
| Text primary | `white` | `#fff` | Headings only |
| Text secondary | `white/60` | ≈5.9:1 | Body copy — **do not go below /55** |
| Text label | `white/55` | ≈5.95:1 | Eyebrows, stat labels, footer meta |
| Accent | `--color-ember-500` | `#e2541a` | Taken from the Chess Bang icon — the only accent |
| Accent on dark | `ember-400` `#ea7442` | 6.74:1 | Links, focus ring, icon chips |
| Accent CTA bg | `ember-600` `#c74414` | 4.92:1 vs white text | The only accent bg allowed under white text |
| Hairline | `white/10` | decorative | All borders. `white/12` on glass controls |
| Glass fill | `white/[0.03]`–`[0.06]` | cards, store badges | Always paired with `white/10–12` border |

**Contrast rule (enforced):** normal text ≥ 4.5:1, non-text UI (focus ring, CTA boundary) ≥ 3:1.
Verified: `ember-400` focus ring 6.74:1 · `ember-600`/white 4.92:1 · `ember-600`/base 4.06:1.
`white/35`–`/45` (2.86–4.22:1) are **banned for text**; only separators/decoration.

## 3. Typography

Inter (400/500/600/700), tight tracking. The generator suggested Russo One / Chakra Petch /
Orbitron — **rejected** (esports tone, wrong for a calm puzzle studio). Space Grotesk + DM Sans
is the closest acceptable alternative *if* a display font is ever wanted.

| Level | Rule |
|-------|------|
| H1 | `text-5xl md:text-7xl font-bold tracking-tighter` + gradient ember on the one key word |
| H2 | `text-3xl md:text-4xl font-bold tracking-tight` |
| Eyebrow | `.eyebrow` — 11px, `0.18em`, uppercase, `white/55`, ember pip |
| Body | 15px, `leading-relaxed`, `white/60`, measure capped (`max-w-xl`/`max-w-3xl`) |
| Micro-label | 11px uppercase `0.16em` `white/55` |

## 4. Layout & density (dial: 2/10 — spacious)

Container `max-w-6xl`. Section rhythm `py-20 md:py-28`. Card radius 2xl–3xl. No dense grids.
Hairline grids are built with `gap-px` + `bg-white/10` container over opaque `ink-900` cells,
and always **filled to the last cell** (render filler cells; never leave a hole in a hairline row).

## 5. Motion (dial: 5/10 — standard)

CSS-only, no GSAP (no runtime worth shipping on a static marketing page).

- Hero entrance: `.animate-rise` / `.animate-rise-sm` — pure CSS, staggered by
  `[animation-delay:80ms]` steps, `cubic-bezier(0.22,1,0.36,1)`, 700–750ms.
  Rationale: the first screen must never wait on JavaScript (AOS could leave it at `opacity:0`).
- Below-fold: AOS `fade-up`, `once: true`, disabled on phones.
- Ambient: `.animate-float`/`-slow` on mockups (6s/8s), `.animate-halo` on the trailer play button.
- **Safety net:** `[data-aos]:not(.aos-init) { opacity:1; transform:none }` — reveal is an
  enhancement, never a dependency. All animation disabled under `prefers-reduced-motion`.
- Hover transitions 150–300ms. Never shift layout on hover — translate + border + glow only.

## 6. Components

| Component | Spec |
|-----------|------|
| `.btn-primary` | `ember-600` bg, white text, glow shadow, `-translate-y-0.5` hover |
| `.btn-ghost` | `white/8` fill + `white/12` border, `white/25` border on hover |
| Store badge | 54px tall, 2xl radius, `white/[0.06]` glass, real store glyph (Simple Icons, CC0), 11px lead + 17px label, ember glow on hover |
| PhoneFrame | gradient `white/15→5→10` 3–4px ring, 1.6rem inner radius, ember radial glow behind |
| Gallery | 3 or 4 columns so the last row is full; hover: `-translate-y-1`, scale 1.04, "View" pill; lightbox: Esc/←/→, focus moved in, Tab trapped, focus restored, scroll lock, `aria-modal` |
| Header | floating 14-unit pill, transparent until scroll > 8px then `black/70` + `backdrop-blur-xl` |
| Feature icon | 40×40 chip, `white/5` fill, `ember-400` glyph, ember tint on row hover |

## 7. Accessibility (checked)

- No emoji as icons — inline SVG only (Phosphor-style, `stroke-width` consistent, `aria-hidden` when decorative).
- `button { cursor: pointer }` at base level (browser default is `default`, not `pointer`).
- Visible `:focus-visible` — 2px `ember-400`, offset 2px. Present on modal controls too.
- All images carry alt; decorative icons `aria-hidden`; icon-only controls get `aria-label`.
- Body text measured at ≥4.5:1; every text token verified (see §2).
- Check responsive layout at 390px and 1440px before shipping.

## 8. Copy & content rules

- Stats must come from real game data (`lib/games.ts` → `stats`); **never invent** numbers,
  ratings or reviews to satisfy a "social proof" pattern.
- Both games are listed with live store links only (see `lib/store-status.ts`).
- Footer columns: **Games** / **About** — never "Company" (it is a one-person studio).

## 9. Anti-patterns (avoid)

- Pink/gold Claymorphism palette, Varela Round, esports display fonts.
- Light mode or white surfaces — the site is dark-only by decision.
- Text below `white/55` opacity on the dark base.
- AOS/JS on the first screen; content that can stay invisible.
- Hollow hairline grids; unlabelled icon buttons; hover states that reflow layout.
