// File: /components/site-wide/primitives/ScrollChevron.tsx
"use client";

export default function ScrollChevron({
  dir,
  onClick,
  ariaLabel,
  side = "left",
  className = "",
}: {
  dir: -1 | 1; // direction (-1 = left, 1 = right)
  onClick: () => void; // handler from parent
  ariaLabel: string; // accessibility label
  side?: "left" | "right"; // which side to anchor
  className?: string; // optional extra classes
}) {
  const isLeft = side === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={[
        "absolute top-1/2 -translate-y-1/2 z-10",
        isLeft ? "left-3" : "right-3",
        "text-background opacity-40",
        "hover:opacity-100 hover:text-accent",
        "focus:opacity-100 focus:text-accent",
        "transition focus:outline-none",
        className,
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
        <path
          d={isLeft ? "M15 6l-6 6 6 6" : "M9 18l6-6-6-6"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
