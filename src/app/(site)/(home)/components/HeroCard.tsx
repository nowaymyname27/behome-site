// file: src/app/(site)/(home)/components/HeroCard.tsx
"use client";

import Link from "next/link";
import { useLocale } from "../../../../i18n/locale-context";
import { tHeroCard } from "../i18n";

export default function HeroCard() {
  const { locale } = useLocale();
  const i = tHeroCard(locale);

  return (
    <aside
      aria-label={i.aria.promotion}
      className="w-full max-w-xs md:max-w-sm
                 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70
                 text-foreground shadow-lg p-5 md:p-6 rounded-2xl
                 flex flex-col space-y-5"
    >
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight">
          {i.heading}
        </h3>
        <p className="mt-1 text-sm opacity-90 font-medium">{i.subheading}</p>
      </div>

      {/* Vertical stack of sections */}
      <div className="flex flex-col space-y-3 text-left">
        {i.sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border/40 bg-background/60 p-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="text-sm md:text-base font-semibold text-foreground">
              {section.title}
            </h4>
            <p className="mt-1 text-xs md:text-sm text-foreground/80 leading-snug">
              {section.description}
            </p>
            <Link
              href={section.cta.href}
              className="btn btn-FL mt-3 text-xs md:text-sm px-3 py-1.5 self-start"
            >
              {section.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
