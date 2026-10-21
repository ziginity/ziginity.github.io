/** A small right arrow for links and buttons; nudges right on group hover. */
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
