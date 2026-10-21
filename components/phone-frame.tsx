import Image from "next/image";
import type { StaticImageData } from "next/image";

/** A phone mockup around a portrait game screenshot. */
export default function PhoneFrame({
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
      <div className="relative rounded-[1.9rem] border border-white/12 bg-gradient-to-b from-white/15 via-white/5 to-white/10 p-[3px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.95)] sm:rounded-[2.4rem] sm:p-[4px]">
        {/* Ambient ember glow behind the device */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(226,84,26,0.28),transparent_75%)] blur-2xl"
        />
        <div className="overflow-hidden rounded-[1.65rem] bg-ink-900 sm:rounded-[2.1rem]">
          <Image
            src={src}
            alt={alt}
            priority={priority}
            className="block w-full"
          />
        </div>
      </div>
    </div>
  );
}
