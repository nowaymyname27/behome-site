// File: src/app/(site)/(home)/components/HomeBrochure.tsx
"use client";

import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";
import { getHomePhilosophySlides } from "@/app/(site)/(home)/i18n/philosophy-slides";

import Brochure, { useBrochure } from "@/components/site-wide/Brochure";
import Panel from "@/components/site-wide/Panel";
import ScrollChevron from "@/components/site-wide/primitives/ScrollChevron";
import type { StaticImageData } from "next/image";

export default function HomeBrochure() {
  const { locale } = useLocale();
  const i = tHome(locale).philosophy;
  const slides = getHomePhilosophySlides(locale); // ensure each slide has {src, title, caption, body?}

  return (
    <Brochure>
      <Brochure.Grid>
        <Brochure.Left>
          <h2 className="h2">{i.left.title}</h2>
          <p className="mt-3 text-lg max-w-sm">
            <span className="text-accent font-semibold">{i.left.leadEm}</span>{" "}
            {i.left.leadRest}
          </p>
          <p className="mt-3 text-sm opacity-80">
            Tip: tap a card to read more.
          </p>
        </Brochure.Left>

        <Brochure.Right>
          <Brochure.Track ariaLabel={i.aria.panels}>
            <PanelsList slides={slides} />
          </Brochure.Track>

          <Chevrons prevLabel={i.aria.previous} nextLabel={i.aria.next} />
        </Brochure.Right>
      </Brochure.Grid>
    </Brochure>
  );
}

/* --- helpers (inside provider) --- */

type HomeSlide = {
  src: string | StaticImageData;
  title: string;
  caption: string;
  body?: string;
};

function PanelsList({ slides }: { slides: HomeSlide[] }) {
  const { openIndex, setOpenIndex } = useBrochure();

  return (
    <>
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
    </>
  );
}

function Chevrons({
  prevLabel,
  nextLabel,
}: {
  prevLabel: string;
  nextLabel: string;
}) {
  const { scrollByPanel } = useBrochure();
  return (
    <>
      <ScrollChevron
        dir={-1}
        side="left"
        ariaLabel={prevLabel}
        onClick={() => scrollByPanel(-1)}
      />
      <ScrollChevron
        dir={1}
        side="right"
        ariaLabel={nextLabel}
        onClick={() => scrollByPanel(1)}
      />
    </>
  );
}
