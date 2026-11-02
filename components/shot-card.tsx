import Image from "next/image";
import type { StaticImageData } from "next/image";

/** A portrait game screenshot as a lifted card with a cyan glow behind it. */
export default function ShotCard({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Ambient cyan glow behind the shot */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(100,210,255,0.28),transparent_75%)] blur-2xl"
        />
        <Image
          src={src}
          alt={alt}
          priority={priority}
          className="block w-full rounded-xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)] ring-1 ring-fg/15 sm:rounded-2xl"
        />
      </div>
    </div>
  );
}
