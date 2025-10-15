// File: src/app/(site)/(home)/i18n/index.ts
import type { Locale, HomeStrings } from "./types";
import { homeCopy } from "./copy";

export type { Locale, HomeStrings } from "./types";

export function tHome(locale: Locale): HomeStrings {
  return locale === "es" ? homeCopy.es : homeCopy.en;
}
export { tHeroCard, getHeroCardCtas } from "./hero-card";
export { getHomePhilosophySlides } from "./philosophy-slides";
export { getHomeDisplaySlides } from "./display-slides";
export { getHomeFeatureCards } from "./feature-cards";
