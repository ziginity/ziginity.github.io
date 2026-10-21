/** A feature icon from lib/games.ts: stroked paths on a 16×16 grid. */
export default function FeatureIcon({
  d,
  className = "",
}: {
  d: string;
  className?: string;
}) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
