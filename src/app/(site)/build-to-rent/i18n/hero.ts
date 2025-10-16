// File: src/app/(site)/(invest)/i18n/hero.ts
import type { Locale } from "./types";

const INVESTMENT_HERO = {
  en: {
    title: "Invest in Our Build-to-rent Homes",
    subtitle:
      "Diversified exposure to new-build homes with professional operations and steady income targets.",
    listHeading: "Build-to-Rent Homes",
  },
  es: {
    title: "Invierte en Nuestras Viviendas Build-to-rent",
    subtitle:
      "Exposición diversificada a viviendas nuevas con gestión profesional y objetivos de ingresos estables.",
    listHeading: "Viviendas Build-to-Rent",
  },
} as const;

export function tInvestmentHero(locale: Locale) {
  return locale === "es" ? INVESTMENT_HERO.es : INVESTMENT_HERO.en;
}
