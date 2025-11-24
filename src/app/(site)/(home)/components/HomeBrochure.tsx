// File: src/app/(site)/(home)/components/HomeBrochure.tsx
"use client";

import { useLocale } from "../../../../i18n/locale-context";
import { tHomePhilosophy, getHomePhilosophySlides } from "../i18n";
import Brochure from "../../../../components/site-wide/Brochure";

export default function HomeBrochure() {
  const { locale } = useLocale();
  const i = tHomePhilosophy(locale);

  const slides = getHomePhilosophySlides(locale);

  return (
    <Brochure
      title={i.left.title}
      leadEm={i.left.leadEm}
      leadRest={i.left.leadRest}
      tip={i.tip}
      slides={slides}
      ariaPanels={i.aria.panels}
      ariaPrev={i.aria.previous}
      ariaNext={i.aria.next}
    />
  );
}
