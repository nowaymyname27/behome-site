// File: /components/north-carolina/Hero.tsx
"use client";

import type { Locale } from "@/i18n/locale-context";
import { tNorthCarolina } from "@/app/(site)/north-carolina/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const i = tNorthCarolina(locale).hero;

  return (
    <section id="north-carolina" className="relative w-full">
      {/* Replace with <Image> or real <video> source */}
      <div className="h-[52vh] w-full sm:h-[64vh] md:h-[72vh] lg:h-[84vh]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/north-carolina/hero/Greensboro.jpg"
          aria-hidden
        >
          {/* <source src="/videos/nc-hero.mp4" type="video/mp4" /> */}
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-start">
        <div className="m-8 rounded-2xl bg-black/40 px-6 py-4 backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {i.hero.title}
          </h1>
        </div>
      </div>
    </section>
  );
}
