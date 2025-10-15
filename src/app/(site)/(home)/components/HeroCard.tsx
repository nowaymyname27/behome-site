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
      className="card bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-6 shadow-lg text-center text-foreground"
    >
      <h3 className="text-xl font-semibold">{i.title}</h3>

      <div className="mt-4 flex justify-center gap-3">
        <Link href={ctas.exploreFlorida.href} className="btn btn-FL">
          {ctas.exploreFlorida.label}
        </Link>
      </div>
    </aside>
  );
}
