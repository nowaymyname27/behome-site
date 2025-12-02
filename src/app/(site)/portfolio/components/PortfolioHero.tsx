// File: src/app/(site)/(invest)/components/PortfolioHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import { useLocale } from "../../../../i18n/locale-context";
import { tInvestmentHero } from "../i18n";

export default function PortfolioHero() {
  const { locale } = useLocale();
  const i = tInvestmentHero(locale);

  return (
    <Hero
      title={i.title}
      subtitle={i.subtitle}
      scrim="bg-black/50"
      background="https://res.cloudinary.com/dsdkxdwvf/video/upload/v1764624417/rwl7xo5d77yl9o5dilai.mp4"
    ></Hero>
  );
}
