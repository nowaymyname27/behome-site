// File: src/app/(site)/(home)/i18n/hero.ts
import type { Locale } from "@/i18n/locale-context";

// EN = source of truth for keys/shape
const en = {
  title: "Find your next home",
  tagline: "Thoughtfully designed homes across Florida and North Carolina.",
  ctas: {
    florida: "Explore Florida",
    northCarolina: "Partner with us",
  },
} as const;

// Widen leaves to `string`, keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type HeroSchema = DeepString<typeof en>;

const es: HeroSchema = {
  title: "Encuentra tu próximo hogar",
  tagline: "Viviendas diseñadas con cuidado en Florida y Carolina del Norte.",
  ctas: {
    florida: "Explorar Florida",
    northCarolina: "Colabore con nosotros",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as HeroSchema, es } as const;
export type HeroI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHero = (locale: Locale) => dict[locale];
