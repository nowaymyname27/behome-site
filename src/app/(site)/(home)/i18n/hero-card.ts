// file: src/app/(site)/(home)/i18n/hero-card.ts
import type { Locale, HeroCardStrings, Cta } from "./types";

// Define hrefs once
const BASE_CTAS = {
  exploreFlorida: { href: "/florida" },
} as const;

// Locale text
const HERO_CARD_COPY = {
  en: {
    // kept for backward-compat (component now uses heading/subheading/tabs)
    title: "Thoughtfully designed homes across Florida",
    aria: { promotion: "Promotion" },
    heading: "Sarasota County – Florida’s Gulf Coast",
    subheading: "SaraHomes by RentPortfolio",
    tabs: ["No-HOA Homes", "Dollar Cash Flow", "Management Included"],
  },
  es: {
    title: "Hogares diseñados con cuidado en toda Florida",
    aria: { promotion: "Promoción" },
    heading: "Sarasota County – Costa Oeste de Florida",
    subheading: "SaraHomes by RentPortfolio",
    tabs: ["Casas sin HOA", "Flujo en dólares", "Administración incluida"],
  },
} satisfies Record<Locale, HeroCardStrings>;

const LABELS = {
  en: { exploreFlorida: { label: "Explore Florida" } },
  es: { exploreFlorida: { label: "Explorar Florida" } },
} as const;

// Main getters
export function tHeroCard(locale: Locale): HeroCardStrings {
  return HERO_CARD_COPY[locale];
}

export function getHeroCardCtas(locale: Locale): { exploreFlorida: Cta } {
  const dict = LABELS[locale];
  return {
    exploreFlorida: {
      href: BASE_CTAS.exploreFlorida.href,
      label: dict.exploreFlorida.label,
    },
  };
}
