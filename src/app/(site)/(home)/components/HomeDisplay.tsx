// File: src/app/(site)/(home)/components/HomeDisplay.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ScrollChevron from "../../../../components/site-wide/primitives/ScrollChevron";

import { useLocale } from "../../../../i18n/locale-context";
import { tHome, getHomeDisplaySlides } from "../i18n"; // <-- updated import

/** ====== CONFIG ====== */
const USE_VIDEO = true; // toggle between video and image carousel
const VIDEO_SRC = "/hero.mp4";
/** ==================== */

export default function HomeDisplay() {
  const { locale } = useLocale();
  const i = tHome(locale).display;
  const SLIDES = getHomeDisplaySlides(locale); // readonly array

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const count = SLIDES.length;

  // Stable callbacks
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  // Auto-advance (image mode only)
  useEffect(() => {
    if (USE_VIDEO || count < 2 || paused) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, 4000);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [paused, count, next]);

  const nextSrc = useMemo(
    () => (count ? SLIDES[(index + 1) % count].src : ""),
    [index, count, SLIDES]
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
            aria-label={i.media.videoAria}
          />
        ) : (
          <>
            {SLIDES.map((s, idx) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                fill
                sizes="100vw"
                className={[
                  "absolute inset-0 object-cover transition-opacity duration-700",
                  idx === index ? "opacity-100" : "opacity-0",
                ].join(" ")}
                priority={idx === index}
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
              aria-label={i.media.videoAria}
            />
          ) : (
            <>
              {SLIDES.map((s, idx) => (
                <Image
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width:1024px) 66vw, 100vw"
                  className={[
                    "absolute inset-0 object-cover transition-opacity duration-700",
                    idx === index ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  priority={idx === index}
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
                    ariaLabel={i.aria.previous}
                    onClick={prev}
                  />
                  <ScrollChevron
                    dir={1}
                    side="right"
                    ariaLabel={i.aria.next}
                    onClick={next}
                  />
                </>
              )}

              {count > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {SLIDES.map((_, dot) => (
                    <button
                      key={dot}
                      onClick={() => setIndex(dot)}
                      aria-label={i.aria.goToSlide(dot + 1)}
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        dot === index
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
