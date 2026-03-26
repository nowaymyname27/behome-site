"use client";

import Link from "next/link";

import { useLocale } from "../../../../i18n/locale-context";
import { tAboutHero } from "../i18n";

export default function AboutHero() {
  const { locale } = useLocale();
  const i = tAboutHero(locale);

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-chrome text-chrome-foreground">
      <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-FL/25 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative px-6 md:px-12 lg:px-24 py-18 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/70">
          {i.eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-white">
          {i.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-white/80">
          {i.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/collection"
            className="btn btn-primary px-6 py-3 text-sm font-semibold"
          >
            {i.ctaPrimary}
          </Link>
          <Link
            href="/btr"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/50 transition-colors"
          >
            {i.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
