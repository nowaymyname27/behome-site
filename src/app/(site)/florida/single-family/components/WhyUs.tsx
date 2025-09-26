// File: src/app/(site)/florida/single-family/components/WhyUs.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import Panel from "@/components/site-wide/Panel";
import PanelOverlay from "@/components/site-wide/PanelOverlay";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";

// Corrected imports
import imgLight from "../images/why-us/light.jpg";
import imgMaterials from "../images/why-us/materials.jpg";
import imgStorage from "../images/why-us/storage.jpg";
import imgInterior from "../images/why-us/interior.png";
import imgLock from "../images/why-us/lock.jpg";
import imgCommunity from "../images/why-us/community.jpg";

type Slide = {
  src: StaticImageData | string;
  title: string;
  caption: string;
  body: string;
};

const slides: Slide[] = [
  {
    src: imgLight,
    title: "Light-first layouts",
    caption: "Daylight that saves",
    body: "We orient windows and rooms for natural light throughout the day—better mood, lower energy usage, and spaces that feel alive.",
  },
  {
    src: imgMaterials,
    title: "Durable finishes",
    caption: "Built for real life",
    body: "From floors that shrug off scratches to easy-clean surfaces, materials are chosen to look great longer and reduce maintenance costs.",
  },
  {
    src: imgStorage,
    title: "Smart storage",
    caption: "Space that works",
    body: "Entry drop zones, pantry space, and laundry adjacencies are placed where you actually need them—no wasted square footage.",
  },
  {
    src: imgInterior,
    title: "Quiet by design",
    caption: "Calm interiors",
    body: "Thoughtful wall assemblies, door choices, and layout separation help keep living areas peaceful and private.",
  },
  {
    src: imgLock,
    title: "HOA-managed exteriors",
    caption: "Lock-and-leave",
    body: "Community standards and exterior care keep the neighborhood looking sharp—ideal for investors and busy owners.",
  },
  {
    src: imgCommunity,
    title: "Location fundamentals",
    caption: "Close to everything",
    body: "Proximity to daily needs and commuting corridors supports healthy occupancy and strong long-term value.",
  },
];

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
        <aside className="md:col-span-1">
          <h2 className="h2">Why choose us</h2>
          <p className="mt-3 text-lg max-w-sm">
            <span className="text-accent font-semibold">
              Designed to hold value.
            </span>{" "}
            We build for comfort, longevity, and daily livability—qualities that
            attract great residents and reduce long-term costs.
          </p>
        </aside>

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
            aria-label="Why Us panels"
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
            ariaLabel="Previous"
            onClick={() => scrollByPanel(-1)}
          />
          <ScrollChevron
            dir={1}
            side="right"
            ariaLabel="Next"
            onClick={() => scrollByPanel(1)}
          />
        </div>
      </div>

      {openIndex !== null && (
        <PanelOverlay
          slide={slides[openIndex]}
          onClose={() => setOpenIndex(null)}
          closeLabel="Close"
        />
      )}
    </section>
  );
}
