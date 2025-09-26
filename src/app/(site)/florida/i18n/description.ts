// File: src/app/(site)/florida/i18n/description.ts
import type { Locale } from "@/i18n/locale-context";

// EN = source of truth for keys/shape
const en = {
  desc: {
    title: "Thoughtfully designed townhomes",
    body: "Our North Carolina collection brings elegance and efficiency together—light-filled layouts, smart storage, and high-quality finishes in thriving neighborhoods.",
  },
} as const;

// Widen leaves to `string`, keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type NcDescriptionSchema = DeepString<typeof en>;

const es: NcDescriptionSchema = {
  desc: {
    title: "Townhouses diseñadas con intención",
    body: "Nuestra colección en Carolina del Norte combina elegancia y eficiencia—espacios luminosos, almacenamiento inteligente y acabados de alta calidad en vecindarios prósperos.",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as NcDescriptionSchema, es } as const;
export type NcDescriptionI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tNcDescription = (locale: Locale) => dict[locale];
