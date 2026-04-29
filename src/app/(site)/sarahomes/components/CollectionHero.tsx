// File: src/app/(site)/(invest)/components/CollectionHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import MultiVideoBackground from "../../../../components/site-wide/MultiVideoBackground";
import { useLocale } from "../../../../i18n/locale-context";
import { tCollectionHero } from "../i18n"; // We will create this next

// Add your additional videos to this array
const collectionVideos = [
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313683/vaupkigpz90ksedgac13.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313663/zk987xgzmsnu1ceexrao.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313658/v5fu1ai77i0twlyibh1w.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313654/puuguifdkgz3ubithoxk.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313652/f675jqhxruqlslckene9.mp4",
  // "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313648/i3bijjqnxtnjlov6tago.mp4",
  "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1768071248/eiinufupufwfyqxwr7sh.mp4",
];

export default function CollectionHero() {
  const { locale } = useLocale();
  const t = tCollectionHero(locale);

  return (
    <Hero
      title={t.title}
      subtitle={t.subtitle}
      scrim="bg-black/20"
      backgroundNode={
        <MultiVideoBackground
          videos={collectionVideos}
          ariaLabel={t.videoAria}
        />
      }
    />
  );
}
