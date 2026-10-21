"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { Shot } from "@/lib/games";

/**
 * Screenshot grid with a click-to-enlarge lightbox.
 *
 * Keyboard: Esc closes, arrows move, Tab stays inside the lightbox. On touch
 * screens a horizontal swipe moves between shots. Focus
 * returns to the shot that opened it. Background scroll is locked while open.
 */
export default function Gallery({ shots }: { shots: Shot[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((i) =>
        i === null ? i : (i + delta + shots.length) % shots.length,
      ),
    [shots.length],
  );

  // Keyed on `open`, not `index`, so stepping between shots keeps focus put.
  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll("button");
        if (!buttons?.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [open, close, step]);

  const active = index === null ? null : shots[index];

  return (
    <>
      <div
        className={`grid grid-cols-2 gap-3 sm:gap-4 ${
          // Pick the column count that fills the last row (6 → 3, 8 → 4).
          shots.length % 4 === 0 ? "md:grid-cols-4" : "md:grid-cols-3"
        }`}
      >
        {shots.map((shot, i) => (
          // AOS sits on a wrapper: its unlayered CSS would otherwise override
          // the button's hover transition.
          <div key={shot.alt} data-aos="fade-up" data-aos-delay={(i % 3) * 60}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]"
              aria-label={`Enlarge screenshot: ${shot.alt}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                className="block w-full transition duration-500 group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
              />
              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    d="M6 2H2v4M10 14h4v-4M14 6V2h-4M2 10v4h4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View
              </span>
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            // 50px keeps a tap from counting as a swipe.
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            type="button"
            ref={closeRef}
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white sm:top-6 sm:right-6"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white sm:left-6"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next screenshot"
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white sm:right-6"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden="true"
            >
              <path
                d="M6 3l5 5-5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <figure
            className="max-h-full w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              priority
              className="mx-auto max-h-[75vh] w-auto rounded-2xl border border-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)]"
            />
            <figcaption className="mt-4 text-center text-sm text-white/60">
              {active.alt}
              <span className="ml-2 text-white/55">
                {index! + 1} / {shots.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
