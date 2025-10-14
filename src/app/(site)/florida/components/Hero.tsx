// File: src/app/(site)/florida/components/Hero.tsx
"use client";

import type { Locale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";
import heroPoster from "../images/hero/Greensboro.jpg";

// Narrow safely without `any`
function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}
function getHeroTitle(i: unknown): string {
  if (!isRecord(i)) return "";
  if (typeof i.title === "string") return i.title;
  const hero = i.hero;
  if (isRecord(hero) && typeof hero.title === "string") return hero.title;
  return "";
}

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
          poster={heroPoster.src}
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
            {getHeroTitle(i)}
          </h1>
        </div>
      </div>
    </section>
  );
}
