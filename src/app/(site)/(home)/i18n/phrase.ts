// File: src/app/(site)/(home)/i18n/phrase.ts
import type { Locale } from "./types"; // ✅ from local types

const en = {
  text: "“Homes built for how people really live.”",
  attribution: "— Your Company Philosophy",
} as const;

type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };

type PhraseSchema = DeepString<typeof en>;

const es: PhraseSchema = {
  text: "“Hogares construidos para cómo vive realmente la gente.”",
  attribution: "— Filosofía de Tu Empresa",
};

export const dict = { en: en as PhraseSchema, es } as const;
export type HomePhraseI18n = typeof dict.en;

// ✅ Helper
export const tHomePhrase = (locale: Locale) => dict[locale];
