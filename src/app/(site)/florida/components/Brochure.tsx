// File: src/app/(site)/florida/components/Brochure.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/i18n/locale-context";
import { tFlorida } from "@/app/(site)/florida/i18n";
import Panel from "@/components/site-wide/Panel";
import PanelOverlay from "@/components/site-wide/PanelOverlay";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";

export default function Brochure() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { locale } = useLocale();
  const i = tFlorida(locale).brochure;
  const slides = tFlorida(locale).brochureSlides;

  function scrollByPanel(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const child = el.firstElementChild as HTMLElement | null;
    const childWidth = child?.clientWidth ?? 0;
    el.scrollBy({ left: dir * (childWidth + 16), behavior: "smooth" });
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollByPanel(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollByPanel(-1);
        }
      } else if (e.key === "Escape") {
        setOpenIndex(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="w-full bg-chrome text-chrome-foreground section-pad">
      <div className="px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        {/* Left rail */}
        <aside className="md:col-span-1">
          <h2 className="h2">{i.left.title}</h2>
          {i.left.description && (
            <p className="mt-3 text-lg max-w-sm text-muted-foreground">
              {i.left.description}
            </p>
          )}
        </aside>

        {/* Right: panels */}
        <div className="md:col-span-2 relative">
          <div
            ref={trackRef}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2
              [&::-webkit-scrollbar-track]:bg-chrome/30
              [&::-webkit-scrollbar-thumb]:bg-background/40
              pb-2
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
                className="
                  relative snap-start shrink-0
                  w-[80%] sm:w-[60%] lg:w-[42%] xl:w-[32%]
                  aspect-[2/3]
                "
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
      </div>

      {/* Overlay */}
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
