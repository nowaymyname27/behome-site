// File: src/app/(site)/(home)/components/MapProduct/MapProductsGrid.tsx
"use client";

import { ReactNode } from "react";

export default function MapProductsGrid({
  heading,
  left,
  rightTop,
  rightBottom,
  height = 820,
  edgeToEdge = false,
  float = true,
}: {
  heading?: string;
  left: ReactNode;
  rightTop: ReactNode;
  rightBottom: ReactNode;
  height?: number;
  edgeToEdge?: boolean;
  float?: boolean;
}) {
  const floatBox = float
    ? "rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-black/5 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10"
    : "";

  return (
    <section className="w-full bg-background text-foreground">
      <div
        className={
          edgeToEdge ? "w-full py-10" : "mx-auto w-full px-6 lg:px-8 py-10"
        }
      >
        {heading && (
          <h2 className="mb-8 text-center text-4xl font-semibold tracking-tight">
            {heading}
          </h2>
        )}

        <div
          className={[
            "grid w-full gap-6 items-stretch",
            "lg:[grid-template-columns:minmax(0,1fr)_clamp(320px,28vw,380px)]",
          ].join(" ")}
        >
          <div style={{ height }}>
            <div className={`h-full ${floatBox}`}>{left}</div>
          </div>

          <div style={{ height }}>
            <div className="grid h-full grid-rows-2 gap-6">
              <div className={floatBox}>{rightTop}</div>
              <div className={floatBox}>{rightBottom}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
