// File: src/i18n/site-wide/header.ts
import type { Locale } from "@/i18n/locale-context";

// EN is the shape source
const en = {
  brand: "Your Company",
  nav: {
    florida: "Florida",
    northCarolina: "North Carolina",
  },
} as const;

// Widen leaves to string, keep structure identical to EN
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
type HeaderSchema = DeepString<typeof en>;

const es: HeaderSchema = {
  brand: "Tu Empresa",
  nav: {
    florida: "Florida",
    northCarolina: "Carolina del Norte",
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as HeaderSchema, es } as const;
export type HeaderI18n = typeof dict.en;

// (Optional) helper if you still use it elsewhere
export const tHeader = (locale: Locale) => dict[locale];

export function getHeaderNav(locale: Locale) {
  const i = tHeader(locale);
  return [
    { label: i.nav.florida, href: "/?state=fl", state: "fl" },
    {
      label: i.nav.northCarolina,
      href: "/north-carolina",
      state: "north-carolina",
    },
  ] as const;
}
