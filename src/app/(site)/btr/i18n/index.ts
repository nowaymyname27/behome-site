// file: src/app/(site)/btr/i18n/index.ts
import type {
  Locale,
  ClusterDescriptionStrings,
  BtrBuiltForInvestorsStrings,
  EvergladesShowcaseStrings,
  OtherStylesStrings,
  BtrHeroStrings, // <--- Added type import
  CompaniesMarqueeStrings,
} from "./types";

import { clusterDescriptionCopy } from "./description";
import { tBtrBuiltForInvestors } from "./builtForInvestors";
import { evergladesShowcaseCopy } from "./everglades-showcase";
import { otherStylesCopy } from "./other-styles";
import { tBtrHero } from "./btrHero"; // <--- Added file import
import { tCompaniesMarquee } from "./companiesMarquee";

// Re-export types so components can import them directly if needed
export type {
  Locale,
  ClusterDescriptionStrings,
  BtrBuiltForInvestorsStrings,
  EvergladesShowcaseStrings,
  OtherStylesStrings,
  BtrHeroStrings, // <--- Added type export
  CompaniesMarqueeStrings,
} from "./types";

// --- Existing cluster helper ---
export function tClusterDescription(locale: Locale): ClusterDescriptionStrings {
  return locale === "es"
    ? clusterDescriptionCopy.es
    : clusterDescriptionCopy.en;
}

// --- New BTR section helper ---
export { tBtrBuiltForInvestors };

// --- Everglades Showcase helper ---
export function tEvergladesShowcase(locale: Locale): EvergladesShowcaseStrings {
  return locale === "es"
    ? evergladesShowcaseCopy.es
    : evergladesShowcaseCopy.en;
}

// --- Other Styles Comparison helper ---
export function tOtherStyles(locale: Locale): OtherStylesStrings {
  return locale === "es" ? otherStylesCopy.es : otherStylesCopy.en;
}

// --- Existing exports (if any) ---
export { tInvestmentHero } from "./hero";
export type { InvestmentHeroStrings } from "./types";

// --- New Hero Export ---
export { tBtrHero }; // <--- Added function export
export { tCompaniesMarquee };
