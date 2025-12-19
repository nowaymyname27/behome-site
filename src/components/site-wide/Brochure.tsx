// file: src/components/site-wide/Brochure.tsx
"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import ScrollChevron from "./primitives/ScrollChevron";
import Panel from "./Panel";
import type { StaticImageData } from "next/image";

export type BrochureSlide = {
  src: string | StaticImageData;
  title: string;
  caption: string;
  body?: string;
};

type BrochureProps = {
  title: string;
  leadEm: string;
  leadRest: string;
  tip: string;
  slides: ReadonlyArray<BrochureSlide>;
  ariaPanels: string;
  ariaPrev: string;
  ariaNext: string;
};

export default function Brochure({
  title,
  leadEm,
  leadRest,
  tip,
  slides,
  ariaPanels,
  ariaPrev,
  ariaNext,
}: BrochureProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByPanel = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const width = first?.clientWidth ?? 0;
    el.scrollBy({ left: dir * (width + 16), behavior: "smooth" });
  };

  // keyboard: left / right scroll, esc closes
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (openIndex !== null) {
        if (e.key === "Escape") setOpenIndex(null);
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByPanel(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByPanel(-1);
      }
    };

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [openIndex]);

  return (
    <section className="w-full bg-chrome text-chrome-foreground py-16 pr-2 pl-6 lg:pl-24">
      <div className="max-w-none mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Left text */}
        <aside>
          <h2 className="h2 font-serif">{title}</h2>
          <p className="mt-6 text-lg max-w-sm">
            <span className="text-accent font-semibold">{leadEm}</span>{" "}
            {leadRest}
          </p>
          <p className="mt-3 text-sm opacity-80">{tip}</p>
        </aside>

        {/* Right side */}
        <div className="md:col-span-2 relative">
          <div
            ref={trackRef}
            aria-label={ariaPanels}
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:thin]
              [&::-webkit-scrollbar]:h-2
              [&::-webkit-scrollbar-track]:bg-chrome/30
              [&::-webkit-scrollbar-thumb]:bg-background/40
              pb-2
            "
          >
            {slides.map((s, idx) => {
              const flipped = openIndex === idx;
              return (
                <Panel
                  key={idx}
                  src={s.src}
                  title={s.title}
                  caption={s.caption}
                  body={s.body}
                  isFlipped={flipped}
                  onOpen={() => setOpenIndex(flipped ? null : idx)}
                  className="
                    relative snap-start shrink-0
                    w-[80%] sm:w-[60%] lg:w-[42%] xl:w-[32%]
                    aspect-[2/3]
                  "
                />
              );
            })}
          </div>

          {/* Chevrons */}
          <ScrollChevron
            dir={-1}
            side="left"
            ariaLabel={ariaPrev}
            onClick={() => scrollByPanel(-1)}
          />
          <ScrollChevron
            dir={1}
            side="right"
            ariaLabel={ariaNext}
            onClick={() => scrollByPanel(1)}
          />
        </div>
      </div>
    </section>
  );
}
