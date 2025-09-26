// File: src/app/(site)/(home)/i18n/map.ts
import type { Locale } from "@/i18n/locale-context";

// EN is the source of truth for keys/shape
const en = {
  overlay: {
    title: "Where we build/sell",
    hint: "Click to explore the map",
  },
} as const;

// Widen leaves to string, keep nested structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type HomeMapSchema = DeepString<typeof en>;

const es: HomeMapSchema = {
  overlay: {
    title: "Dónde construimos/vendemos",
    hint: "Haz clic para explorar el mapa",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as HomeMapSchema, es } as const;
export type HomeMapI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHomeMap = (locale: Locale) => dict[locale];
