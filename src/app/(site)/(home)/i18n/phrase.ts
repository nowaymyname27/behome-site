// File: src/app/(site)/(home)/i18n/phrase.ts
import type { Locale } from "./types"; // ✅ from local types

const en = {
  text: "Stability. Community. Real Returns.",
  attribution: "— RentPortfolio",
} as const;

type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };

type PhraseSchema = DeepString<typeof en>;

const es: PhraseSchema = {
  text: "Estabilidad. Comunidad. Rentabilidad Real.",
  attribution: "— RentPortfolio",
};

export const dict = { en: en as PhraseSchema, es } as const;
export type HomePhraseI18n = typeof dict.en;

// ✅ Helper
export const tHomePhrase = (locale: Locale) => dict[locale];
