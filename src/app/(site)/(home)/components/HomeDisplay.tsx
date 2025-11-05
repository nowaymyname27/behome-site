// File: src/app/(site)/(home)/components/HomeDisplay.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // ✅ small, elegant icon
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeDisplay } from "../i18n";

const VIDEO_SRC = "/hero.mp4";

export default function HomeDisplay() {
  const { locale } = useLocale();
  const i = tHomeDisplay(locale);
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-accent">
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
        <div className="absolute inset-0 bg-accent/90" />
      </div>

      {/* ===== CONTENT GRID ===== */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 min-h-screen">
        {/* LEFT COLUMN (text) */}
        <aside className="flex flex-col justify-center px-6 sm:px-10 py-16 text-foreground z-10 h-full max-w-3xl">
          <div
            className="rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl 
                       p-8 sm:p-10 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Heading */}
            <h2 className="h2 text-balance text-foreground">{i.heading}</h2>

            {/* Description */}
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-foreground/90">
              {i.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-border/40" />

            {/* Points with hover expansion and chevron */}
            <div className="space-y-4">
              {i.points.map((p, idx) => (
                <div
                  key={idx}
                  className="group border-b border-border/40 pb-3 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-tight uppercase text-foreground transition-colors group-hover:text-foreground">
                      {p.title}
                    </div>
                    <ChevronDown
                      className="w-5 h-5 text-foreground/60 transform transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </div>

                  <p
                    className="mt-2 text-base leading-relaxed text-foreground/80 opacity-0 max-h-0 overflow-hidden
                               group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 ease-in-out"
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
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
