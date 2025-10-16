// File: src/app/(site)/(home)/components/HomeDisplay.tsx
"use client";

import { useState } from "react";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeDisplay } from "../i18n";

const VIDEO_SRC = "/hero.mp4";

export default function HomeDisplay() {
  const { locale } = useLocale();
  const i = tHomeDisplay(locale);
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative w-full min-h-screen">
      {/* ===== MOBILE/TABLET BACKGROUND VIDEO ===== */}
      <div className="absolute inset-0 md:hidden">
        <video
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={i.media.videoAria}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 min-h-screen">
        {/* LEFT COLUMN (text) */}
        <aside className="flex flex-col justify-center px-6 sm:px-10 py-12 bg-transparent md:bg-background text-foreground z-10 h-full">
          <h2 className="h2">{i.heading}</h2>
          <div className="mt-10 space-y-10 max-w-md">
            {i.points.map((p, idx) => (
              <div key={idx}>
                <div className="text-lg font-semibold tracking-tight uppercase">
                  {p.title}
                </div>
                <p className="mt-3 text-base leading-relaxed opacity-90">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT COLUMN (desktop-only video) */}
        <div
          className="relative col-span-2 overflow-hidden hidden md:block h-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <video
            src={VIDEO_SRC}
            autoPlay={!paused}
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-label={i.media.videoAria}
          />
        </div>
      </div>
    </section>
  );
}
