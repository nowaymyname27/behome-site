// Florida/i18n/index.ts
import type { FloridaStrings, Locale } from "./types";
import { hero } from "./hero";
import { description } from "./description";
import { map } from "./map";
import { project } from "./project";
import { brochure } from "./brochure";

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

export function tFlorida(locale: Locale): FloridaStrings {
  return locale === "es" ? dict.es : dict.en;
}
