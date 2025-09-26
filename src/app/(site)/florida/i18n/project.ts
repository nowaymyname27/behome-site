// File: src/app/(site)/florida/i18n/project.ts
import type { Locale } from "@/i18n/locale-context";

// EN = source of truth
const en = {
  project: {
    name: "Kallamdale Townhomes",
  },
  card: {
    image: "/north-carolina/project/project.jpg", // image lives in i18n
    href: "/florida/kallamdale", // link lives in i18n
    description:
      "Thoughtfully designed townhomes with real light, flow, and storage—built to live in, not just look at.",
    cta: "See details",
    aria: {
      openDetails: "Open details for Kallamdale Townhomes",
    },
  },
} as const;

type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type NcProductCardSchema = DeepString<typeof en>;

const es: NcProductCardSchema = {
  project: {
    name: "Kallamdale Townhomes",
  },
  card: {
    image: "/north-carolina/project/project.jpg",
    href: "/florida/kallamdale",
    description:
      "Townhomes diseñados con luz, fluidez y guardado reales—hechos para vivirse, no solo para verse.",
    cta: "Ver detalles",
    aria: {
      openDetails: "Abrir detalles de Kallamdale Townhomes",
    },
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as NcProductCardSchema, es } as const;
export type NcProductCardI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tNcProductCard = (locale: Locale) => dict[locale];
