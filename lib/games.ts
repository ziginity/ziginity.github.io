import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

import { SITE_URL } from "@/lib/site";

import CbIcon from "@/public/images/games/chess-bang/icon.png";
import CbHome from "@/public/images/games/chess-bang/1_home.webp";
import CbBoard from "@/public/images/games/chess-bang/2_board.webp";
import CbChainPirate from "@/public/images/games/chess-bang/3_chain_pirate.webp";
import CbSkins from "@/public/images/games/chess-bang/4_skins.webp";
import CbChainFrost from "@/public/images/games/chess-bang/5_chain_frost.webp";
import CbChallenges from "@/public/images/games/chess-bang/6_challenges.webp";
import CbTrailerPoster from "@/public/images/games/chess-bang/trailer-poster.webp";

import MeIcon from "@/public/images/games/mystical-east/icon.png";
import MeHome from "@/public/images/games/mystical-east/1_home.webp";
import MeJourney from "@/public/images/games/mystical-east/2_journey.webp";
import MeBoard from "@/public/images/games/mystical-east/3_board.webp";
import MeChain from "@/public/images/games/mystical-east/4_chain.webp";
import MeSolved from "@/public/images/games/mystical-east/5_solved.webp";
import MeRegion from "@/public/images/games/mystical-east/6_region.webp";
import MeNight from "@/public/images/games/mystical-east/7_night.webp";
import MeLantern from "@/public/images/games/mystical-east/8_lantern.webp";

export type Shot = { src: StaticImageData; alt: string };
export type Feature = { title: string; body: string; icon: string };
export type StoreLink = { label: string; href: string };
/** A headline number shown as a strip under the game hero. */
export type Stat = { value: string; label: string };

export type Game = {
  slug: string;
  name: string;
  /** Short label used in nav / footer / cross-links. */
  shortName: string;
  tag: string;
  subtitle: string;
  /** One-liner for the home card. */
  short: string;
  intro: string[];
  stats: Stat[];
  features: Feature[];
  icon: StaticImageData;
  hero: Shot[];
  gallery: Shot[];
  /** Store listings; only live ones are shown (see lib/store-status.ts). */
  links: StoreLink[];
  trailer?: { id: string; poster: StaticImageData };
};

/* Feature icons: stroked paths on a 16×16 grid (see game-detail.tsx). */
const ICON = {
  burst:
    "M8 1v2.5M8 12.5V15M1 8h2.5M12.5 8H15M3 3l1.8 1.8M11.2 11.2 13 13M13 3l-1.8 1.8M4.8 11.2 3 13M8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
  target: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2ZM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
  prism: "M1 8h2.5M6 5.5 8.5 8 6 10.5 3.5 8ZM8.5 8 14 3.5M8.5 8l5.5 4.5",
  steps: "M1 14h4v-4h4V6h4V2h2",
  clock: "M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2ZM8 5v3l2 2",
  grid: "M2 2h4.5v4.5H2zM9.5 2H14v4.5H9.5zM2 9.5h4.5V14H2zM9.5 9.5H14V14H9.5z",
  disc: "M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 4.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z",
  mountains: "M1 13.5 5.5 6l3 4.5 2-3 4.5 6Z",
  lantern:
    "M8 1v1.5M8 12v3M6 2.5h4c1.5 0 2.5 2 2.5 4.75S11.5 12 10 12H6c-1.5 0-2.5-2-2.5-4.75S4.5 2.5 6 2.5ZM3.5 7.25h9",
  music:
    "M6 12.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0V3l8-2v9.5m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  leaf: "M3 13C3 6 7 3 14 2c-1 7-4 11-11 11Zm0 0 6-6",
  palette:
    "M8 1.5a6.5 6.5 0 1 0 0 13c.9 0 1.5-.6 1.5-1.4 0-1 .7-1.6 1.7-1.6h1.3c1.1 0 2-.9 2-2 0-4.4-2.9-8-6.5-8ZM5 8h.01M6.5 5h.01M10 4.8h.01",
} as const;

export const games: Game[] = [
  {
    slug: "chess-bang",
    name: "Chess Bang: Bomb Puzzle",
    shortName: "Bomb Puzzle",
    tag: "Chapter one",
    subtitle: "Chain-reaction brain teaser",
    short:
      "Every chess piece is a bomb. Place them, fire one BANG, and watch the chain clear the board.",
    intro: [
      "A chess puzzle game with a twist: every piece is a bomb, and its blast follows how that piece moves. Place your bombs, fire one BANG and clear the board in a single chain reaction.",
      "A brain teaser for chess fans and logic puzzle lovers, playable offline.",
    ],
    stats: [
      { value: "150+", label: "Hand-made levels" },
      { value: "4", label: "Board skins" },
      { value: "4", label: "Challenge modes" },
      { value: "1", label: "BANG per level" },
    ],
    features: [
      {
        title: "Place. Aim. BANG.",
        body: "Rook, Bishop and Queen fire rays across the board. The Knight leaps over walls; the Pawn blasts its four diagonal neighbours.",
        icon: ICON.burst,
      },
      {
        title: "One BANG per level",
        body: "Plan the whole chain before you commit. Every wave is computed on the board at the start of that wave, so breaking a crate now opens the line for the next wave.",
        icon: ICON.target,
      },
      {
        title: "Mirrors, prisms, gateways",
        body: "Mirrors bend rays and swing after every wave. Glass mirrors shatter after one bounce, prisms split a ray in two, gateways carry it across the board.",
        icon: ICON.prism,
      },
      {
        title: "150+ hand-made levels",
        body: "Every chapter teaches a new mechanism, from the first spark to clockwork mirrors and a looking-glass finale.",
        icon: ICON.steps,
      },
      {
        title: "Rush and Siege",
        body: "Rush: solve fresh boards before the clock runs out. Siege: no BANG button, every bomb explodes at once while targets keep marching in.",
        icon: ICON.clock,
      },
      {
        title: "Challenges: four ways to play",
        body: "Missing Piece, Pick the Trigger, Predict the Bang and Spot the Flaw — four mini games built from levels you have already cleared.",
        icon: ICON.grid,
      },
      {
        title: "Pirate, Frost and Gatsby skins",
        body: "Dress the board as a pirate deck, a frosty winter table or a Gatsby salon of marble and jade. Every skin brings its own explosions and sounds, and you can try each one free for a level.",
        icon: ICON.palette,
      },
    ],
    icon: CbIcon,
    hero: [
      {
        src: CbChainPirate,
        alt: "Chess Bang: a chain reaction on the Pirate skin",
      },
      {
        src: CbChainFrost,
        alt: "Chess Bang: a chain reaction on the Frost skin",
      },
    ],
    gallery: [
      { src: CbHome, alt: "Chess Bang home screen" },
      { src: CbBoard, alt: "Chess Bang level board on the Classic skin" },
      {
        src: CbChainPirate,
        alt: "Chess Bang chain reaction on the Pirate skin",
      },
      {
        src: CbSkins,
        alt: "Chess Bang skin picker: Classic, Pirate, Frost and Gatsby",
      },
      { src: CbChainFrost, alt: "Chess Bang chain reaction on the Frost skin" },
      { src: CbChallenges, alt: "Chess Bang challenge modes" },
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/chess-bang-bomb-puzzle/id6815748598",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ziginity.chessbang",
      },
    ],
    trailer: { id: "gT8nlJOrQIs", poster: CbTrailerPoster },
  },
  {
    slug: "mystical-east",
    name: "Chess Bang: The Mystical East",
    shortName: "The Mystical East",
    tag: "Chapter two",
    subtitle: "A calm xiangqi puzzle",
    short:
      "Chinese chess pieces are bombs. Set them, fire one BANG, and clear the board — in ink on rice paper.",
    intro: [
      "A calm, turn-based logic puzzle painted in ink on rice paper. Every Chinese chess (xiangqi) piece is a bomb, and its blast follows the way that piece moves.",
      "Set your bombs, choose the one that fires first, and press BANG. Each blast sets off every bomb it reaches, wave after wave, until the chain runs out. Clear every enemy piece in a single BANG, and keep your own General safe.",
    ],
    stats: [
      { value: "144", label: "Hand-made puzzles" },
      { value: "12", label: "Regions" },
      { value: "4", label: "Piece sets" },
      { value: "0", label: "Timers, ever" },
    ],
    features: [
      {
        title: "Seven pieces, seven blasts",
        body: "The Chariot burns down straight roads. The Soldier only marches forward, until it wades the river. The Horse leaps crooked paths, yet one stalk beside it holds it back. The Cannon speaks only across a screen.",
        icon: ICON.disc,
      },
      {
        title: "A journey through twelve regions",
        body: "144 hand-made puzzles, from the Ferryman's Shore to the Summit of Two Kings. Each region teaches one new idea: firecrackers, moon gates, bamboo shoots, bronze mirrors, a stream that carries bombs downstream.",
        icon: ICON.mountains,
      },
      {
        title: "The Lantern Path",
        body: "An endless road of fresh boards, one lantern for each board you clear. No timer, no rush.",
        icon: ICON.lantern,
      },
      {
        title: "Ink, paper and music",
        body: "Hand-drawn brush pieces, a warm orchestral score, and a Night Ink palette for evening play. Unlock the Wood, Porcelain and Gongbi piece sets.",
        icon: ICON.music,
      },
      {
        title: "No timers. No pressure.",
        body: "Think as long as you like. A missed chain tells you where it broke, never the answer. When you are stuck, a hint lays the winning line on the board.",
        icon: ICON.leaf,
      },
    ],
    icon: MeIcon,
    hero: [
      { src: MeBoard, alt: "The Mystical East: a level board" },
      { src: MeNight, alt: "The Mystical East: Night Ink palette" },
    ],
    gallery: [
      { src: MeHome, alt: "The Mystical East home screen" },
      { src: MeJourney, alt: "The Mystical East journey map" },
      { src: MeBoard, alt: "The Mystical East level board" },
      { src: MeChain, alt: "The Mystical East chain reaction" },
      { src: MeSolved, alt: "The Mystical East solved board" },
      { src: MeRegion, alt: "The Mystical East region view" },
      { src: MeNight, alt: "The Mystical East Night Ink palette" },
      { src: MeLantern, alt: "The Mystical East Lantern Path" },
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/chess-bang-the-mystical-east/id6822012412",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ziginity.chessbang.east",
      },
    ],
  },
];

export function getGame(slug: string): Game {
  const game = games.find((g) => g.slug === slug);
  if (!game) throw new Error(`Unknown game: ${slug}`);
  return game;
}

/** The App Store id from a game's store links, if it has one. */
export function appStoreId(game: Game): string | undefined {
  for (const link of game.links) {
    const id = link.href.match(/apps\.apple\.com\/.*\/id(\d+)/)?.[1];
    if (id) return id;
  }
}

/**
 * Page metadata for a game, including its link-preview image. Pass the game
 * with live links only, so Safari's Smart App Banner never points at a
 * listing that is not out yet.
 */
export function gameMetadata(game: Game): Metadata {
  const poster = game.trailer?.poster;
  const appId = appStoreId(game);
  return {
    title: game.name,
    description: game.intro[0],
    alternates: { canonical: `/${game.slug}/` },
    ...(appId && { itunes: { appId } }),
    openGraph: {
      type: "website",
      siteName: "Ziginity",
      title: game.name,
      description: game.intro[0],
      url: `/${game.slug}/`,
      images: [(poster ?? game.icon).src],
    },
    twitter: { card: poster ? "summary_large_image" : "summary" },
  };
}

/**
 * schema.org MobileApplication data for a game page. Only facts we hold:
 * no price, rating or review fields, since none are published here.
 */
export function gameJsonLd(game: Game) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: game.name,
    description: game.intro[0],
    url: `${SITE_URL}/${game.slug}/`,
    image: `${SITE_URL}${game.icon.src}`,
    screenshot: game.gallery.map((shot) => `${SITE_URL}${shot.src.src}`),
    applicationCategory: "GameApplication",
    applicationSubCategory: "Puzzle",
    operatingSystem: game.links
      .map((link) => (link.href.includes("apps.apple.com") ? "iOS" : "Android"))
      .join(", "),
    sameAs: game.links.map((link) => link.href),
    publisher: { "@type": "Organization", name: "Ziginity", url: SITE_URL },
  };
}
