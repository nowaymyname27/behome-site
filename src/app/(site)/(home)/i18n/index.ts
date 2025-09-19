// File: src/app/(site)/(home)/i18n/index.ts
import type { Locale } from "@/i18n/locale-context";

import { dict as hero } from "./hero";
import { dict as map } from "./map";
import { dict as philosophy } from "./philosophy";
import { dict as phrase } from "./phrase";
import { dict as productSection } from "./product-section";
import { dict as philosophySlides } from "./philosophy-slides";

export type HomeI18n = {
  hero: typeof hero.en;
  map: typeof map.en;
  philosophy: typeof philosophy.en;
  phrase: typeof phrase.en;
  productSection: typeof productSection.en;
  philosophySlides: typeof philosophySlides.en;
};

export const tHome = (l: Locale): HomeI18n => ({
  hero: hero[l],
  map: map[l],
  philosophy: philosophy[l],
  phrase: phrase[l],
  productSection: productSection[l],
  philosophySlides: philosophySlides[l],
});
