// File: src/app/(site)/(home)/i18n/index.ts
import type {
  Locale,
  HomeDisplayStrings,
  HomeFeatureCard,
  FloridaStrings,
} from "./types";

// --- Section imports ---
import { tHomeHero } from "./hero";
import { tHomePhrase } from "./phrase";
import { tHomePhilosophy, getHomePhilosophySlides } from "./philosophy";
import { homeDisplayCopy } from "./display";
import { homeFeatureCardsCopy } from "./feature-cards";
import { project } from "./project";
import { brochure } from "./brochure";
import { hero } from "./hero2";
import { description } from "./description";
import { map } from "./map";
import { tHeroCard } from "./hero-card"; // updated import

const dict = {
  en: {
    heading: "Florida Portfolio",
    hero: hero.en,
    description: description.en,
    map: map.en,
    project: project.en,
    brochure: brochure.en,
  } satisfies FloridaStrings,
  es: {
    heading: "Portafolio de Florida",
    hero: hero.es,
    description: description.es,
    map: map.es,
    project: project.es,
    brochure: brochure.es,
  } satisfies FloridaStrings,
} as const;

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
export { tHeroCard } from "./hero-card"; // cleaned up

// re-export types
export type { Locale, HomeFeatureCard } from "./types";

export function tFlorida(locale: Locale): FloridaStrings {
  return locale === "es" ? dict.es : dict.en;
}
