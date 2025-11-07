// File: src/app/(site)/collection/i18n/index.ts

import type { Locale } from "../../../../i18n/locale-context";
import type {
  InvestmentHeroStrings,
  CollectionDescriptionText,
  CollectionHighlightsText,
} from "./types";

import { tInvestmentHero } from "./hero";
import { tCollectionDescription } from "./collectionDescription";
import { tCollectionHighlights } from "./collectionHighlights";

export { tInvestmentHero, tCollectionDescription, tCollectionHighlights };
export type {
  Locale,
  InvestmentHeroStrings,
  CollectionDescriptionText,
  CollectionHighlightsText,
};
