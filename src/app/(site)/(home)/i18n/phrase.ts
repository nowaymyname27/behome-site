// File: src/app/(site)/(home)/i18n/phrase.ts
import type { Locale } from "../../../../i18n/locale-context";

// EN source of truth
const en = {
  text: "“Homes built for how people really live.”",
  attribution: "— Your Company Philosophy",
} as const;

// Widen leaves to string, keep shape
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type PhraseSchema = DeepString<typeof en>;

const es: PhraseSchema = {
  text: "“Hogares construidos para cómo vive realmente la gente.”",
  attribution: "— Filosofía de Tu Empresa",
};

// Export a single dict for the aggregator
export const dict = { en: en as PhraseSchema, es } as const;
export type HomePhraseI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHomePhrase = (locale: Locale) => dict[locale];
