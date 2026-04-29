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
  id: "about" | "collection" | "btr" | "pf";
  href: string;
}> = [
  { id: "btr", href: "/btr" },
  { id: "pf", href: "/portfolio" },
  { id: "collection", href: "/sarahomes" },
  { id: "about", href: "/about" },
];

// 2) Labels per locale
const LABELS = {
  en: {
    about: "About Us",
    pf: "Portfolio",
    btr: "Build-to-rent",
    collection: "SaraHomes",
  },
  es: {
    about: "Sobre Nosotros",
    pf: "Portafolio",
    btr: "Build-to-rent",
    collection: "SaraHomes",
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
