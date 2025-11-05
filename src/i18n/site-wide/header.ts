// File: /i18n/site-wide/header.ts
export type Locale = "en" | "es";

export type HeaderNavItem = {
  label: string;
  href: string;
};

type HeaderStrings = {
  brand: string;
  langToggleAria: string;
};

// 1) Static base nav (hrefs defined once)
const BASE_NAV: Array<{
  id: "singleFamily" | "btr" | "pf";
  href: string;
}> = [
  { id: "pf", href: "/portfolio" },
  { id: "btr", href: "/btr" },
  { id: "singleFamily", href: "/single-family" },
];

// 2) Labels per locale
const LABELS = {
  en: {
    pf: "Portfolio",
    btr: "Build-to-rent",
    singleFamily: "360 Collection",
  },
  es: {
    pf: "Portafolio",
    btr: "Build-to-rent",
    singleFamily: "360 Colleccion",
  },
} as const;

const enStrings: HeaderStrings = {
  brand: "Rent Portfolio",
  langToggleAria: "Toggle language between English and Spanish",
};

const esStrings: HeaderStrings = {
  brand: "Rent Portfolio",
  langToggleAria: "Cambiar idioma entre inglés y español",
};

export function tHeader(locale: Locale): HeaderStrings {
  return locale === "es" ? esStrings : enStrings;
}

// 3) Combine base hrefs with translated labels
export function getHeaderNav(locale: Locale): HeaderNavItem[] {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_NAV.map(({ id, href }) => ({
    label: dict[id],
    href,
  }));
}
