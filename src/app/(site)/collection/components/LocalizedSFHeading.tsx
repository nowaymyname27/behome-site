// File: src/app/(site)/build-to-rent/components/LocalizedBtrHeading.tsx
"use client";

import { useLocale } from "../../../../i18n/locale-context";
import { tInvestmentHero } from "../i18n"; // reuse listHeading

export default function LocalizedBtrHeading() {
  const { locale } = useLocale();
  const i = tInvestmentHero(locale);

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-10">
      <h1 className="h2 mb-6">{i.listHeading}</h1>
    </section>
  );
}
