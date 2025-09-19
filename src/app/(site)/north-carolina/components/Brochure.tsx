// File: src/app/(site)/north-carolina/components/Brochure.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/locale-context";
import { tNorthCarolina } from "@/app/(site)/north-carolina/i18n";
import Panel from "@/components/site-wide/Panel";
import PanelOverlay from "@/components/site-wide/PanelOverlay";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";

export default function Brochure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { locale } = useLocale();
  const i = tNorthCarolina(locale).brochure;
  const slides = tNorthCarolina(locale).brochureSlides;

  const gapPx = 16;
  const cardClass = "w-60 sm:w-72 md:w-80 lg:w-96 aspect-[2/3]";

  function scrollByPanel(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    const w = child?.clientWidth ?? 0;
    el.scrollBy({ left: dir * (w + gapPx), behavior: "smooth" });
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex !== null) {
        if (e.key === "Escape") setOpenIndex(null);
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByPanel(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByPanel(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="w-full bg-chrome text-chrome-foreground">
      <div className="px-6 lg:px-8 py-6">
        <h2 className="h2 text-center">{i.left.title}</h2>
      </div>

      {/* Carousel with even left/right padding */}
      <div className="relative px-6 md:px-10 lg:px-16">
        <div
          ref={trackRef}
          className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
            [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2
            [&::-webkit-scrollbar-track]:bg-chrome/30
            [&::-webkit-scrollbar-thumb]:bg-background/40
          "
          aria-label={i.aria.panels}
        >
          {slides.map((s, idx) => (
            <Panel
              key={idx}
              src={s.src}
              title={s.title}
              caption={s.caption}
              onOpen={() => setOpenIndex(idx)}
              className={cardClass}
            />
          ))}
        </div>

        <ScrollChevron
          dir={-1}
          side="left"
          ariaLabel={i.aria.previous}
          onClick={() => scrollByPanel(-1)}
        />
        <ScrollChevron
          dir={1}
          side="right"
          ariaLabel={i.aria.next}
          onClick={() => scrollByPanel(1)}
        />
      </div>

      {openIndex !== null && (
        <PanelOverlay
          slide={slides[openIndex]}
          onClose={() => setOpenIndex(null)}
          closeLabel={i.aria.close}
        />
      )}
    </section>
  );
}
