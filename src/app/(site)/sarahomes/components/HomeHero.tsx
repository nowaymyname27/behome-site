// File: src/app/(site)/sarahomes/components/HomeHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import MultiVideoBackground from "../../../../components/site-wide/MultiVideoBackground";
import { useLocale } from "../../../../i18n/locale-context";
import { tHomeHero } from "../i18n";

// Add your additional videos to this array
const homeVideos = [
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313683/vaupkigpz90ksedgac13.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313663/zk987xgzmsnu1ceexrao.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313658/v5fu1ai77i0twlyibh1w.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313654/puuguifdkgz3ubithoxk.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313652/f675jqhxruqlslckene9.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313648/i3bijjqnxtnjlov6tago.mp4",
  {
    label: "Sarahome Edited Video",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1790180393/aw6ksw77qahgbyucichc.mp4",
  },
  {
    label: "Family Having Dinner",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313517/iliwmjowfritogglhwqe.mp4",
  },
  {
    label: "Mother & Daughter Pool",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313522/bdoxf0zz72qrvmqjciuv.mp4",
  },
  {
    label: "Aerial Ocean Waves",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313575/jchrmhq4qkmkyx5pdyfp.mp4",
  },
];

export default function HomeHero() {
  const { locale } = useLocale();
  const t = tHomeHero(locale);

  return (
    <Hero
      title={t.title}
      eyebrow={t.eyebrow}
      subtitle={t.subtitle}
      supportingText={t.supportingText}
      scrim="bg-transparent"
      backgroundNode={
        <MultiVideoBackground
          videos={homeVideos}
          ariaLabel={t.videoAria}
        />
      }
    />
  );
}
