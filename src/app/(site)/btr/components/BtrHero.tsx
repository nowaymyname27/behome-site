// file: src/app/(site)/(invest)/components/BtrHero.tsx
"use client";

import Hero from "../../../../components/site-wide/Hero";

export default function BtrHero() {
  return (
    <Hero
      title="Follow The Smart Money"
      subtitle="Build. Rent. Earn."
      scrim="bg-black/50"
      // Added f_auto,q_auto for optimization
      background="https://res.cloudinary.com/dsdkxdwvf/video/upload/f_auto,q_auto/v1764628026/iflqckr5pblro3ezmkp6.mp4"
    ></Hero>
  );
}
