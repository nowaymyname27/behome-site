// File: src/app/(site)/single-family/i18n/hero.ts
import type { Locale } from "./types";

const INVESTMENT_HERO = {
  en: {
    title: "Turnkey Ownership. 360° Returns",
    subtitle:
      "Discover the 360 Collection — a limited selection of turnkey, income-producing homes already built, leased, and generating steady cash flow from day one. These performing assets offer investors a simple, hassle-free way to own real estate that’s already working for them. Invest today and start earning immediately.",
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
