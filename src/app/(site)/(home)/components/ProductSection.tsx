// File: src/app/(site)/(home)/components/ProductSection.tsx
"use client";

import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";

export default function ProductSection() {
  const { locale } = useLocale();
  const i = tHome(locale).productSection;

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {i.products.map((p) => {
          const isFL = p.region === "FL";
          const colColors = isFL
            ? "bg-FL text-FL-foreground"
            : "bg-NC text-NC-foreground";
          const btnContrast =
            "btn bg-chrome text-chrome-foreground hover:opacity-90";

          return (
            <article
              key={p.id}
              className={`${colColors} flex flex-col justify-between p-6 sm:p-8`}
            >
              {/* Region label + title */}
              <header className="text-center">
                <div className="text-sm uppercase tracking-wide opacity-80 mb-1">
                  {i.regionLabel[p.region as "FL" | "PP"]}
                </div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>
              </header>

              {/* Image well */}
              <div className="mt-6 aspect-[16/9] w-full bg-background/20 backdrop-blur-[1px]" />

              {/* Copy + CTA */}
              <div className="mt-6">
                <p className="text-center opacity-90">{p.summary}</p>
                <div className="mt-5 flex justify-center">
                  <a className={btnContrast} href={p.href}>
                    {p.cta}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
