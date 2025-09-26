// File: /components/florida/Hero.tsx
"use client";

import type { Locale } from "@/i18n/locale-context";
import { tFlorida } from "@/app/(site)/florida/i18n";
import type { StaticImageData } from "next/image";
import heroPoster from "@/app/(site)/florida/images/hero/Greensboro.jpg";

export default function Hero({ locale }: { locale: Locale }) {
  const i = tFlorida(locale).hero;

  return (
    <section id="florida" className="relative w-full">
      {/* Video background (keep the file in /public/videos) */}
      <div className="h-[52vh] w-full sm:h-[64vh] md:h-[72vh] lg:h-[84vh]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={(heroPoster as StaticImageData).src}
          aria-hidden
        >
          {/* Put your file at /public/videos/fl-hero.mp4 */}
          {/* <source src="/videos/fl-hero.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* Title overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-start">
        <div className="m-8 rounded-2xl bg-black/40 px-6 py-4 backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {/* Use whichever your i18n provides */}
            {("title" in i ? (i as any).title : i?.hero?.title) ?? ""}
          </h1>
        </div>
      </div>
    </section>
  );
}
