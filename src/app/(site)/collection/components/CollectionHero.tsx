// File: src/app/(site)/(invest)/components/CollectionHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import { useLocale } from "../../../../i18n/locale-context";
import { tInvestmentHero } from "../i18n";

export default function CollectionHero() {
  const { locale } = useLocale();
  const i = tInvestmentHero(locale);

  return (
    <Hero
      title={i.title}
      subtitle={i.subtitle}
      scrim="bg-black/50"
      background="https://res.cloudinary.com/dsdkxdwvf/video/upload/v1764628020/jblrcy6jjl7pzu8m81kg.mp4"
    ></Hero>
  );
}
