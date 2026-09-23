// file: src/app/(site)/(invest)/components/BtrHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";
import MultiVideoBackground from "../../../../components/site-wide/MultiVideoBackground";
import { useLocale } from "../../../../i18n/locale-context";
import { tBtrHero } from "../i18n"; // We will create this export next

// Define your videos here.
const btrVideos = [
  {
    label: "Drone Shot Baseball Stadium",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313572/dtovclgj5ekyhzymoxmj.mp4",
  },
  {
    label: "Two Bridges Over a Lake Drone Shot",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313575/yj7ask9ce3bbynwjd39k.mp4",
  },
  {
    label: "Drone Shot Over Traffic & Sarasota Homes",
    url: "https://res.cloudinary.com/dsdkxdwvf/video/upload/v1765313631/hguwgpkv4vablxkxrkpj.mp4",
  },
];

export default function BtrHero() {
  const { locale } = useLocale();
  const t = tBtrHero(locale);

  return (
    <Hero
      title={t.title}
      subtitle={t.subtitle}
      scrim="bg-transparent"
      backgroundNode={
        <MultiVideoBackground videos={btrVideos} ariaLabel={t.videoAria} />
      }
    />
  );
}
