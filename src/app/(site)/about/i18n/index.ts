import { aboutCopy } from "./copy";

import type {
  AboutCompanyStrings,
  AboutHeroStrings,
  AboutOwnersStrings,
  Locale,
} from "./types";

export function tAboutHero(locale: Locale): AboutHeroStrings {
  return locale === "es" ? aboutCopy.es.hero : aboutCopy.en.hero;
}

export function tAboutCompany(locale: Locale): AboutCompanyStrings {
  return locale === "es" ? aboutCopy.es.company : aboutCopy.en.company;
}

export function tAboutOwners(locale: Locale): AboutOwnersStrings {
  return locale === "es" ? aboutCopy.es.owners : aboutCopy.en.owners;
}
