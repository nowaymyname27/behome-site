// file: src/app/(site)/btr/i18n/index.ts
import type {
  Locale,
  ClusterDescriptionStrings,
  BtrBuiltForInvestorsStrings,
} from "./types";

import { clusterDescriptionCopy } from "./description";
import { tBtrBuiltForInvestors } from "./builtForInvestors";

// Re-export types so components can import them directly if needed
export type {
  Locale,
  ClusterDescriptionStrings,
  BtrBuiltForInvestorsStrings,
} from "./types";

// --- Existing cluster helper ---
export function tClusterDescription(locale: Locale): ClusterDescriptionStrings {
  return locale === "es"
    ? clusterDescriptionCopy.es
    : clusterDescriptionCopy.en;
}

// --- New BTR section helper ---
export { tBtrBuiltForInvestors };

// --- Existing exports (if any) ---
export { tInvestmentHero } from "./hero";
export type { InvestmentHeroStrings } from "./types";
