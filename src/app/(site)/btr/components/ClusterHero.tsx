// file: src/app/(site)/(invest)/components/BtrHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";

export default function BtrHero() {
  return (
    <Hero
      title="Follow The Smart Money"
      subtitle="Build. Rent. Earn."
      scrim="bg-black/50"
      background="/videos/cluster-hero.mp4"
    ></Hero>
  );
}
