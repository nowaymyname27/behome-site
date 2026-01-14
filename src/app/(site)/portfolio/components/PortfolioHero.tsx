// File: src/app/(site)/(invest)/components/PortfolioHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import MultiVideoBackground from "../../../../components/site-wide/MultiVideoBackground";
import { useLocale } from "../../../../i18n/locale-context";
import { tInvestmentHero } from "../i18n";

// Add your additional videos to this array
const portfolioVideos = [
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765311892/jwegns3i8bnztqqo1pvo.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765311893/jbo4rifmusw68c3ygyhd.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765311908/nvvjplpfueqs67csxy85.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765311935/eetxmwezqgew4qozuv6b.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765312814/qrqtlmuncif2ilwwwawe.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765312767/n9cvhdmo44rqh9tfiviv.mp4",
];

export default function PortfolioHero() {
  const { locale } = useLocale();
  const i = tInvestmentHero(locale);

  return (
    <Hero
      title={i.title}
      subtitle={i.subtitle}
      scrim="bg-black/20"
      backgroundNode={
        <MultiVideoBackground
          videos={portfolioVideos}
          ariaLabel="Portfolio background video"
        />
      }
    />
  );
}
