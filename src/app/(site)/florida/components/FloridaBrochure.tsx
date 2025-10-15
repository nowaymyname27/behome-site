// file: src/components/florida/FloridaBrochure.tsx
"use client";

import { useLocale } from "../../../../i18n/locale-context";
import Brochure, {
  useBrochure,
} from "../../../../components/site-wide/Brochure";
import Panel from "../../../../components/site-wide/Panel";
import ScrollChevron from "../../../../components/site-wide/primitives/ScrollChevron";
import { tFlorida } from "../i18n";
import type { Slide } from "../i18n/types";

export default function FloridaBrochure() {
  const { locale } = useLocale();
  const i = tFlorida(locale).brochure;

  return (
    <Brochure>
      <Brochure.Grid>
        <Brochure.Left>
          <h2 className="h2">{i.left.title}</h2>
          <p className="mt-3 text-lg max-w-sm">
            <span className="text-accent font-semibold">{i.left.leadEm}</span>{" "}
            {i.left.leadRest}
          </p>
          <p className="mt-3 text-sm opacity-80">{i.left.tip}</p>
        </Brochure.Left>

        <Brochure.Right>
          <Brochure.Track ariaLabel={i.aria.panels}>
            <PanelsList slides={i.slides} />
          </Brochure.Track>

          <Chevrons prevLabel={i.aria.previous} nextLabel={i.aria.next} />
        </Brochure.Right>
      </Brochure.Grid>
    </Brochure>
  );
}

/* --- helpers (inside provider) --- */

function PanelsList({ slides }: { slides: ReadonlyArray<Slide> }) {
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
