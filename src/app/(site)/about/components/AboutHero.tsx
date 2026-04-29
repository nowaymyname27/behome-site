"use client";

import Link from "next/link";
import { useMemo } from "react";

import { useLocale } from "../../../../i18n/locale-context";
import { getHeaderNav } from "../../../../i18n/site-wide/header";
import { tAboutHero } from "../i18n";

export default function AboutHero() {
  const { locale } = useLocale();
  const i = tAboutHero(locale);
  const nav = useMemo(() => getHeaderNav(locale), [locale]);
  const heroNav = useMemo(
    () => nav.filter((item) => ["/btr", "/portfolio", "/sarahomes"].includes(item.href)),
    [nav]
  );

  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-chrome text-chrome-foreground">
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-FL/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative px-6 sm:px-12 lg:px-24 py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">
          {i.eyebrow}
        </p>

        <h1 className="mx-auto mt-5 max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold leading-[0.95] text-white">
          {i.title}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
          {i.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {heroNav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold transition-colors",
                index === 0
                  ? "bg-white text-chrome hover:bg-white/90"
                  : "border border-white/45 text-white hover:border-white/70 hover:bg-white/10",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
