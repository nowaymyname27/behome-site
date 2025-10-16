// File: src/app/(site)/(home)/i18n/index.ts
import type { Locale, HomeDisplayStrings, HomeFeatureCard } from "./types";

// --- Section imports ---
import { tHomeHero } from "./hero";
import { tHomePhrase } from "./phrase";
import { tHomePhilosophy, getHomePhilosophySlides } from "./philosophy";
import { homeDisplayCopy } from "./display";
import { homeFeatureCardsCopy } from "./feature-cards";

// --- Section helpers (exported to components) ---
export { tHomeHero, tHomePhilosophy, tHomePhrase };

// display
export function tHomeDisplay(locale: Locale): HomeDisplayStrings {
  return locale === "es" ? homeDisplayCopy.es : homeDisplayCopy.en;
}

// feature cards
export function tHomeFeatureCards(locale: Locale) {
  return locale === "es" ? homeFeatureCardsCopy.es : homeFeatureCardsCopy.en;
}

// builder exports
export { getHomeFeatureCards } from "./feature-cards";
export { getHomePhilosophySlides } from "./philosophy";
export { tHeroCard, getHeroCardCtas } from "./hero-card";

// re-export types
export type { Locale, HomeFeatureCard } from "./types";
