// File: src/app/(site)/(home)/i18n/index.ts
import type {
  Locale,
  OldHomeDisplayStrings,
  FloridaStrings,
} from "./types";

// --- Section imports ---
import { tOldHomeHero } from "./hero";
import { tOldHomePhrase } from "./phrase";
import { tOldHomePhilosophy } from "./philosophy";
import { oldHomeDisplayCopy } from "./display";
import { oldHomeFeatureCardsCopy } from "./feature-cards";
import { project } from "./project";
import { brochure } from "./brochure";
import { description } from "./description";
import { map } from "./map";
import { tOldHomeBTRExplained } from "./btrExplained";
import { tOldHomeHeroCard } from "./heroCard";

const dict = {
  en: {
    heading: "Florida Portfolio",
    hero: tOldHomeHero("en"),
    description: description.en,
    map: map.en,
    project: project.en,
    brochure: brochure.en,
  } satisfies FloridaStrings,
  es: {
    heading: "Portafolio de Florida",
    hero: tOldHomeHero("es"),
    description: description.es,
    map: map.es,
    project: project.es,
    brochure: brochure.es,
  } satisfies FloridaStrings,
} as const;

// --- Section helpers (exported to components) ---
export {
  tOldHomeHero,
  tOldHomePhilosophy,
  tOldHomePhrase,
  tOldHomeBTRExplained,
  tOldHomeHeroCard,
};

// display
export function tOldHomeDisplay(locale: Locale): OldHomeDisplayStrings {
  return locale === "es" ? oldHomeDisplayCopy.es : oldHomeDisplayCopy.en;
}

// feature cards
export function tOldHomeFeatureCards(locale: Locale) {
  return locale === "es" ? oldHomeFeatureCardsCopy.es : oldHomeFeatureCardsCopy.en;
}

// builder exports
export { getOldHomeFeatureCards } from "./feature-cards";
export { getOldHomePhilosophySlides } from "./philosophy";

// re-export types
export type { Locale } from "./types";

export function tFlorida(locale: Locale): FloridaStrings {
  return locale === "es" ? dict.es : dict.en;
}
