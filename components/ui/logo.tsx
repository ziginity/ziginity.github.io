import { useId } from "react";
import Link from "next/link";

/* Game controller: Material Symbols "stadia_controller" (rounded, filled),
   © Google, Apache License 2.0. */
const CONTROLLER =
  "M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm351.18-370q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm80-80q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm0 160q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm80-80q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm-360.06 65q10.88 0 17.88-7.08 7-7.09 7-17.92v-45h45q10.83 0 17.92-7.12 7.08-7.11 7.08-18 0-10.88-7.08-17.88-7.09-7-17.92-7h-45v-45q0-10.83-7.12-17.92-7.11-7.08-18-7.08-10.88 0-17.88 7.08-7 7.09-7 17.92v45h-45q-10.83 0-17.92 7.12-7.08 7.11-7.08 18 0 10.88 7.08 17.88 7.09 7 17.92 7h45v45q0 10.83 7.12 17.92 7.11 7.08 18 7.08Z";

/**
 * Liquid-glass mark: the controller as a slab of tinted glass (teal to
 * indigo to violet, the night colors), lit by a soft inner rim and a bright
 * diagonal edge, casting a blurred shadow.
 * Same artwork as app/icon.svg; ids are scoped so two logos can share a page.
 */
function GlassMark({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const ref = (name: string) => `url(#${id}${name})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -880 960 800"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`${id}clip`}>
          <path d={CONTROLLER} />
        </clipPath>
        <linearGradient id={`${id}glass`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7ee8f5" stopOpacity=".95" />
          <stop offset=".5" stopColor="#5b6cff" stopOpacity=".88" />
          <stop offset="1" stopColor="#a45cff" stopOpacity=".9" />
        </linearGradient>
        <linearGradient id={`${id}edge`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset=".4" stopColor="#fff" stopOpacity=".1" />
          <stop offset=".7" stopColor="#fff" stopOpacity=".05" />
          <stop offset="1" stopColor="#fff" stopOpacity=".8" />
        </linearGradient>
        <filter id={`${id}blur`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      {/* Shadow, glass body, soft inner rim, crisp diagonal edge. */}
      <path
        d={CONTROLLER}
        fill="#1a1050"
        opacity=".35"
        transform="translate(0 26)"
        filter={ref("blur")}
      />
      <path d={CONTROLLER} fill={ref("glass")} />
      <g clipPath={ref("clip")}>
        <path
          d={CONTROLLER}
          fill="none"
          stroke="#fff"
          strokeOpacity=".6"
          strokeWidth="60"
          filter={ref("blur")}
        />
        <path d={CONTROLLER} fill="none" stroke={ref("edge")} strokeWidth="22" />
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
      <GlassMark className="h-8 w-[38px] transition duration-300 group-hover:-translate-y-px group-hover:brightness-110" />
      <span className="text-[15px] font-semibold tracking-tight text-fg">
        Ziginity
      </span>
    </Link>
  );
}
