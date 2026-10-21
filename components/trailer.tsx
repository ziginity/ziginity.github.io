"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

/**
 * Click-to-play YouTube facade.
 *
 * Nothing is requested from YouTube until the visitor presses play, so the page
 * still makes no third-party requests on load (see the Privacy Policy).
 */
export default function Trailer({
  id,
  poster,
  title,
}: {
  id: string;
  poster: StaticImageData;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // The play button unmounts on click; move focus to the player so keyboard
  // users are not dropped back to the top of the page.
  useEffect(() => {
    if (playing) iframeRef.current?.focus();
  }, [playing]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-[0_50px_120px_-50px_rgba(0,0,0,1)]">
      {playing ? (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 block h-full w-full"
          aria-label={`Play trailer: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 transition group-hover:from-black/60" />

          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <span
              aria-hidden="true"
              className="animate-halo absolute inset-0 rounded-full bg-ember-500/60"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/95 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] transition duration-300 group-hover:scale-110 group-hover:bg-white">
              <svg
                className="ml-1 h-6 w-6 fill-gray-900"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase backdrop-blur-sm transition group-hover:border-ember-500/50 group-hover:text-white">
            Watch trailer
          </span>
        </button>
      )}
    </div>
  );
}
