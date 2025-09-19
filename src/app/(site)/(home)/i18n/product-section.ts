// File: src/app/(site)/(home)/i18n/product-section.ts
import type { Locale } from "@/i18n/locale-context";

// EN is the source of truth for shape/keys
const en = {
  regionLabel: { FL: "Florida", NC: "North Carolina" },
  products: [
    {
      id: "fl-btr",
      title: "Build-to-Rent Homes",
      region: "FL",
      summary:
        "Professionally managed single-family homes built for long-term renting in Florida communities.",
      href: "/products/build-to-rent",
      cta: "Explore",
    },
    {
      id: "fl-sfh",
      title: "Single-Family Homes (For Sale)",
      region: "FL",
      summary:
        "New construction homes for buyers seeking modern design and low-maintenance living in Florida.",
      href: "/products/single-family",
      cta: "Explore",
    },
    {
      id: "nc-th",
      title: "Townhomes (For Sale)",
      region: "NC",
      summary:
        "Thoughtfully designed townhomes close to work, schools, and weekend getaways across North Carolina.",
      href: "/products/townhomes",
      cta: "Explore",
    },
  ],
} as const;

// Widen leaves to string, keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type ProductSectionSchema = DeepString<typeof en>;

// ES copy using widened schema
const es: ProductSectionSchema = {
  regionLabel: { FL: "Florida", NC: "Carolina del Norte" },
  products: [
    {
      id: "fl-btr",
      title: "Casas Build-to-Rent",
      region: "FL",
      summary:
        "Casas unifamiliares administradas profesionalmente para alquiler a largo plazo en comunidades de Florida.",
      href: "/products/build-to-rent",
      cta: "Explorar",
    },
    {
      id: "fl-sfh",
      title: "Casas Unifamiliares (En venta)",
      region: "FL",
      summary:
        "Obra nueva para compradores que buscan diseño moderno y vida de bajo mantenimiento en Florida.",
      href: "/products/single-family",
      cta: "Explorar",
    },
    {
      id: "nc-th",
      title: "Townhouses (En venta)",
      region: "NC",
      summary:
        "Townhouses diseñadas con intención, cerca del trabajo, escuelas y escapadas de fin de semana en Carolina del Norte.",
      href: "/products/townhomes",
      cta: "Explorar",
    },
  ],
};

// Export a single dict for the aggregator
export const dict = { en: en as ProductSectionSchema, es } as const;
export type HomeProductSectionI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHomeProductSection = (locale: Locale) => dict[locale];
