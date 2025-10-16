// file: src/app/(site)/(invest)/i18n/hero.ts
import type { Locale, InvestmentHeroStrings } from "./types";

export const investmentHeroCopy: Record<Locale, InvestmentHeroStrings> = {
  en: {
    heading: "Invest in Our Cluster Homes",
    subheading:
      "Diversified exposure to new-build homes with professional operations and steady income targets.",
  },
  es: {
    heading: "Invierte en Nuestros Hogares en Clúster",
    subheading:
      "Exposición diversificada a viviendas de nueva construcción con operación profesional y objetivos de ingresos estables.",
  },
};

export function tInvestmentHero(locale: Locale): InvestmentHeroStrings {
  return investmentHeroCopy[locale] ?? investmentHeroCopy.en;
}
