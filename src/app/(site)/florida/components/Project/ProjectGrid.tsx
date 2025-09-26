// File: src/app/(site)/florida/components/Project/ProjectGrid.tsx
"use client";

import { ReactNode } from "react";

/**
 * Two-column grid:
 * - Stacks on mobile
 * - On lg+: 3 columns where left spans 2/3, right spans 1/3
 * - Both sides get the same fixed height
 */
export default function ProjectGrid({
  left,
  right,
  height = 640,
  edgeToEdge = false,
}: {
  left: ReactNode;
  right: ReactNode;
  height?: number;
  edgeToEdge?: boolean;
}) {
  return (
    <section className="w-full bg-background text-foreground">
      <div
        className={
          edgeToEdge ? "w-full py-10" : "mx-auto w-full px-6 lg:px-8 py-10"
        }
      >
        <div className="grid w-full gap-6 lg:grid-cols-3 items-stretch">
          {/* Left: spans 2/3 on large screens */}
          <div className="lg:col-span-2" style={{ height }}>
            <div className="h-full">{left}</div>
          </div>

          {/* Right: spans 1/3 */}
          <div className="lg:col-span-1" style={{ height }}>
            <div className="h-full">{right}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
