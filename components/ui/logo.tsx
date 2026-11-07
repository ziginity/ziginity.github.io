import { useId } from "react";
import Link from "next/link";

/* Zig-finity: an infinity loop drawn in one stroke, sharp on the left
   (zig) and round on the right (infinity). One strand passes under the
   other at the crossing: the twist. Drawn in a 100×100 box, then set
   inside a thin gradient ring. The ring is only for places we render
   ourselves; avatars and app icons go without it, since platforms crop
   them to a circle or rounded square that frames the mark anyway. */
const MARK =
  "M55.15 44.55L60.37 39.02A16 16 0 1 1 60.37 60.98L50 50L33 32L15 50L33 68L44.85 55.45";

/**
 * Liquid-glass mark in a thin ring: the stroke is a mask over a teal → indigo → violet
 * gradient (the night colors), with a diagonal highlight, a thin bright rim
 * (the stroke minus an eroded copy of itself) and a soft drop shadow.
 * Same artwork as app/icon.svg (which has no ring); ids are scoped so two logos can share a page.
 */
function GlassMark({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const ref = (name: string) => `url(#${id}${name})`;
  const stroke = (
    <path
      d={MARK}
      fill="none"
      stroke="#fff"
      strokeWidth="10"
      strokeLinejoin="round"
    />
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7ee8f5" stopOpacity=".96" />
          <stop offset=".5" stopColor="#5b6cff" stopOpacity=".9" />
          <stop offset="1" stopColor="#a45cff" stopOpacity=".92" />
        </linearGradient>
        <linearGradient id={`${id}spec`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset=".38" stopColor="#fff" stopOpacity=".04" />
          <stop offset=".75" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#fff" stopOpacity=".28" />
        </linearGradient>
        <mask
          id={`${id}mask`}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          {stroke}
        </mask>
        <filter id={`${id}shadow`} x="-30%" y="-30%" width="160%" height="160%">
          <feFlood floodColor="#120a40" floodOpacity=".55" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feGaussianBlur stdDeviation="2.5" />
          <feOffset dy="3" />
        </filter>
        <filter id={`${id}rim`} x="-10%" y="-10%" width="120%" height="120%">
          <feMorphology in="SourceAlpha" operator="erode" radius="1.6" result="in" />
          <feComposite in="SourceAlpha" in2="in" operator="out" result="edge" />
          <feGaussianBlur in="edge" stdDeviation=".5" result="soft" />
          <feFlood floodColor="#fff" floodOpacity=".75" />
          <feComposite in2="soft" operator="in" />
        </filter>
      </defs>
      {/* Ring, then the mark: shadow, glass body, highlight, rim. */}
      <circle cx="50" cy="50" r="46" fill="none" stroke={ref("glass")} strokeWidth="4" />
      <g transform="translate(50 50) scale(.8) translate(-50 -50)">
        <g filter={ref("shadow")}>{stroke}</g>
        <rect x="0" y="20" width="100" height="60" fill={ref("glass")} mask={ref("mask")} />
        <rect x="0" y="20" width="100" height="60" fill={ref("spec")} mask={ref("mask")} />
        <g filter={ref("rim")}>{stroke}</g>
      </g>
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Ziginity"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <GlassMark className="size-8 transition duration-300 group-hover:-translate-y-px group-hover:brightness-110" />
      <span className="text-[15px] font-semibold tracking-tight text-fg">
        Ziginity
      </span>
    </Link>
  );
}
