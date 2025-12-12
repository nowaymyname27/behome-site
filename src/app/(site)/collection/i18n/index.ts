// File: src/app/(site)/collection/i18n/index.ts

import type { Locale } from "../../../../i18n/locale-context";
import type {
  InvestmentHeroStrings,
  CollectionDescriptionText,
  CollectionHighlightsText,
  CollectionHeroStrings,
  CollectionSectionStrings,
  CollectionCardStrings,
} from "./types";

import { tCollectionHero } from "./hero";
import { tCollectionDescription } from "./collectionDescription";
import { tCollectionHighlights } from "./collectionHighlights";
import { tCollectionSection } from "./section";
import { tCollectionCard } from "./card";

export {
  tCollectionHero,
  tCollectionDescription,
  tCollectionHighlights,
  tCollectionSection,
  tCollectionCard,
};
export type {
  Locale,
  InvestmentHeroStrings,
  CollectionDescriptionText,
  CollectionHighlightsText,
  CollectionHeroStrings,
  CollectionSectionStrings,
  CollectionCardStrings,
};
