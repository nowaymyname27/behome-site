// File: src/app/(site)/(home)/components/OldHomeBrochure.tsx
"use client";

import { useLocale } from "../../../../i18n/locale-context";
import { tOldHomePhilosophy, getOldHomePhilosophySlides } from "../i18n";
import Brochure from "../../../../components/site-wide/Brochure";

export default function OldHomeBrochure() {
  const { locale } = useLocale();
  const i = tOldHomePhilosophy(locale);

  const slides = getOldHomePhilosophySlides(locale);

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
