// file: src/components/florida/FloridaBrochure.tsx
"use client";

import { useLocale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";
import Brochure from "../../../../components/site-wide/Brochure";

export default function FloridaBrochure() {
  const { locale } = useLocale();
  const i = tFlorida(locale).brochure;

  return (
    <Brochure
      title={i.left.title}
      leadEm={i.left.leadEm}
      leadRest={i.left.leadRest}
      tip={i.left.tip}
      slides={i.slides}
      ariaPanels={i.aria.panels}
      ariaPrev={i.aria.previous}
      ariaNext={i.aria.next}
    />
  );
}
