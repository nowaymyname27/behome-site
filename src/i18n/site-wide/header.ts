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
  id: "florida" | "singleFamily" | "btr" | "clusters";
  href: string;
}> = [
  { id: "florida", href: "/florida" },
  { id: "btr", href: "/build-to-rent" },
  { id: "clusters", href: "/cluster" },
  { id: "singleFamily", href: "/single-family" },
];

// 2) Labels per locale
const LABELS = {
  en: {
    florida: "Explore Florida",
    btr: "Build-to-Rent",
    clusters: "Clusters",
    singleFamily: "Single-Family Homes",
  },
  es: {
    florida: "Explorar Florida",
    btr: "Build-to-Rent",
    clusters: "Clústeres",
    singleFamily: "Casas Unifamiliares",
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
