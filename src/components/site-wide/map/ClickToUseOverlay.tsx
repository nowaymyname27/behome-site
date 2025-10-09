// src/components/site-wide/map/ClickToUseOverlay.tsx
"use client";

import * as React from "react";

export function ClickToUseOverlay({
  locked,
  onUnlock,
  label = "Click to use",
  className = "",
}: {
  locked: boolean;
  onUnlock: () => void;
  label?: string;
  className?: string;
}) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!locked) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onUnlock();
    }
  };

  const onClick = () => {
    if (locked) onUnlock();
  };

  return (
    <div
      className={[
        "absolute inset-0 z-10 flex items-center justify-center",
        locked ? "pointer-events-auto cursor-pointer" : "pointer-events-none",
        className,
      ].join(" ")}
      role={locked ? "button" : undefined}
      tabIndex={locked ? 0 : -1}
      aria-label={locked ? label : undefined}
      aria-hidden={!locked}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {/* Subtle backdrop */}
      <div
        className={[
          "absolute inset-0 rounded-xl transition-opacity duration-200",
          locked ? "bg-black/20 opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* White overlay text */}
      {locked && (
        <span
          className={[
            "relative z-10 select-none",
            "text-white text-base font-medium",
            "drop-shadow-md", // optional, keeps text readable over map
          ].join(" ")}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export default ClickToUseOverlay;
