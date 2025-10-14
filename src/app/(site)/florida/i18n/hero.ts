// File: src/app/(site)/florida/i18n/hero.ts
import type { Locale } from "../../../../i18n/locale-context";

// EN = source of truth
const en = {
  hero: {
    title: "Florida",
  },
} as const;

// Widen leaves to string, keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type NcHeroSchema = DeepString<typeof en>;

const es: NcHeroSchema = {
  hero: {
    title: "Florida",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as NcHeroSchema, es } as const;
export type NcHeroI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tNcHero = (locale: Locale) => dict[locale];
