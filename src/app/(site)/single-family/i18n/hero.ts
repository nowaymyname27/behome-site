// File: src/app/(site)/single-family/i18n/hero.ts
import type { Locale } from "./types";

const INVESTMENT_HERO = {
  en: {
    title: "Invest in Our Single Family Homes",
    subtitle:
      "Diversified exposure to new-build homes with professional operations and steady income targets.",
    listHeading: "Single Family Homes",
  },
  es: {
    title: "Invierte en Nuestras Viviendas Unifamiliares",
    subtitle:
      "Exposición diversificada a viviendas nuevas con gestión profesional y objetivos de ingresos estables.",
    listHeading: "Casas Unifamiliares",
  },
} as const;

export function tInvestmentHero(locale: Locale) {
  return locale === "es" ? INVESTMENT_HERO.es : INVESTMENT_HERO.en;
}
