// file: src/app/(site)/(home)/components/HomeDisplay.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";

/** ====== CONFIG ====== */
const USE_VIDEO = true; // toggle between video and image carousel
const VIDEO_SRC = "/hero.mp4";

const SLIDES = [
  { src: "/images/looks/slide-1.jpg", alt: "Hardwood samples on display rack" },
  { src: "/images/looks/slide-2.jpg", alt: "Quartz countertop close-up" },
  { src: "/images/looks/slide-3.jpg", alt: "Tile layout and color swatches" },
];

const HEADING = "Looks that make life easier";
const POINTS = [
  {
    title: "Beautiful designs",
    body: "Curated styles where every color, material and detail is coordinated for you.",
  },
  {
    title: "Simple choices",
    body: "A few decisions to express your taste—applied consistently throughout the home.",
  },
  {
    title: "Honest pricing",
    body: "Clear, transparent pricing—no hidden costs or fees along the way.",
  },
];
/** ==================== */

export default function HomeDisplay() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const count = SLIDES.length;
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // Auto-advance (image mode only)
  useEffect(() => {
    if (USE_VIDEO || count < 2 || paused) return;
    timerRef.current && window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, count]);

  const nextSrc = useMemo(
    () => (count ? SLIDES[(index + 1) % count].src : ""),
    [index, count]
  );

  return (
    <section className="relative w-full min-h-screen">
      {/* MOBILE/TABLET BACKGROUND MEDIA + LIGHT WASH */}
      <div className="absolute inset-0 md:hidden">
        {USE_VIDEO ? (
          <video
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <>
            {SLIDES.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                className={[
                  "absolute inset-0 object-cover transition-opacity duration-700",
                  i === index ? "opacity-100" : "opacity-0",
                ].join(" ")}
                priority={i === index}
              />
            ))}
            {nextSrc ? <link rel="preload" as="image" href={nextSrc} /> : null}
          </>
        )}
        <div className="absolute inset-0 bg-background/90" />
      </div>

      {/* CONTENT GRID */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 min-h-screen">
        {/* LEFT COLUMN (text) */}
        <aside
          className="
        flex flex-col justify-center
        px-6 sm:px-10 py-12
        bg-transparent md:bg-background
        text-foreground
        z-10
        h-full
      "
        >
          <h2 className="h2">{HEADING}</h2>
          <div className="mt-10 space-y-10 max-w-md">
            {POINTS.map((p, i) => (
              <div key={i}>
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

        {/* RIGHT COLUMN (desktop-only media) */}
        <div
          className="relative col-span-2 overflow-hidden hidden md:block h-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {USE_VIDEO ? (
            <video
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <>
              {SLIDES.map((s, i) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width:1024px) 66vw, 100vw"
                  className={[
                    "absolute inset-0 object-cover transition-opacity duration-700",
                    i === index ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  priority={i === index}
                />
              ))}

              {nextSrc ? (
                <link rel="preload" as="image" href={nextSrc} />
              ) : null}

              {count > 1 && (
                <>
                  <ScrollChevron
                    dir={-1}
                    side="left"
                    ariaLabel="Previous image"
                    onClick={prev}
                  />
                  <ScrollChevron
                    dir={1}
                    side="right"
                    ariaLabel="Next image"
                    onClick={next}
                  />
                </>
              )}

              {count > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        i === index
                          ? "bg-accent"
                          : "bg-background/70 hover:bg-background",
                      ].join(" ")}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
