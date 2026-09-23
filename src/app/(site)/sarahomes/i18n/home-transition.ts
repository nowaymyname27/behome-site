import type { Locale } from "./types";

const COPY = {
  en: {
    label: "Sara Homes Collection",
    heading: "Explore the Verona Home",
  },
  es: {
    label: "Colección Sara Homes",
    heading: "Descubre la Casa Verona",
  },
};

export function tHomeTransition(locale: Locale) {
  return COPY[locale];
}
