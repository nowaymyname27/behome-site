import type { Locale, HomeHeroStrings } from "./types";

const en: HomeHeroStrings = {
  eyebrow: "Featuring",
  title: "Sara Homes",
  subtitle: "New Homes in Sarasota, Florida.",
  supportingText: "Created for rental ownership and lasting long-term value.",
  videoAria: "Home background video",
};

const es: HomeHeroStrings = {
  eyebrow: "Presentamos",
  title: "Sara Homes",
  subtitle: "Casas nuevas en Sarasota, Florida.",
  supportingText: "Creadas para invertir en alquiler y generar valor duradero a largo plazo.",
  videoAria: "Video de fondo de inicio",
};

export function tHomeHero(locale: Locale): HomeHeroStrings {
  return locale === "es" ? es : en;
}
