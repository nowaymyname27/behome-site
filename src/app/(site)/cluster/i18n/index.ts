// file: src/app/(site)/cluster/i18n/index.ts
import type { Locale, ClusterDescriptionStrings } from "./types";
import { clusterDescriptionCopy } from "./description";

export type { Locale, ClusterDescriptionStrings } from "./types";

export function tClusterDescription(locale: Locale): ClusterDescriptionStrings {
  return locale === "es"
    ? clusterDescriptionCopy.es
    : clusterDescriptionCopy.en;
}
export { tInvestmentHero } from "./hero";
export type { InvestmentHeroStrings } from "./types";
