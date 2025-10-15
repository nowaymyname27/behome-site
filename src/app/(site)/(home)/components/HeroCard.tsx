// file: src/(home)/components/HeroCard.tsx
"use client";

import Link from "next/link";
import { useLocale } from "../../../../i18n/locale-context";
import { tHeroCard, getHeroCardCtas } from "../i18n";

export default function HeroCard() {
  const { locale } = useLocale();
  const i = tHeroCard(locale);
  const ctas = getHeroCardCtas(locale);

  return (
    <aside
      aria-label={i.aria.promotion}
      className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 text-foreground
                 shadow-xl p-8 md:p-10 rounded-2xl text-center
                 max-w-3xl mx-auto min-h-[320px] flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {i.heading}
      </h3>

      {/* Sub-heading (logo/brand line) */}
      <div className="mt-2">
        <span className="inline-flex items-center gap-2 text-sm md:text-base opacity-90 font-medium">
          {/* Place a small SVG logo here later if you wish */}
          <span>{i.subheading}</span>
        </span>
      </div>

      {/* Tabs-as-buttons with vertical separators: word | word | word */}
      <div className="mt-5">
        <div
          role="group"
          aria-label={i.aria.promotion}
          className="inline-flex items-stretch text-xs md:text-sm"
        >
          {i.tabs.map((label, idx) => (
            <div key={idx} className="inline-flex items-center">
              <span
                className="inline-flex items-center justify-center rounded-full
                           border border-border/70 bg-background/70 px-3 py-1.5
                           font-medium shadow-sm"
                aria-hidden="false"
              >
                {label}
              </span>

              {/* Vertical divider (|) between items */}
              {idx < i.tabs.length - 1 && (
                <span
                  className="px-2 md:px-3 select-none opacity-50"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <Link
          href={ctas.exploreFlorida.href}
          className="btn btn-FL text-sm md:text-base px-5 md:px-6 py-2.5"
        >
          {ctas.exploreFlorida.label}
        </Link>
      </div>
    </aside>
  );
}
