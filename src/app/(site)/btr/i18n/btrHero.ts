import type { Locale, BtrHeroStrings } from "./types";

const en: BtrHeroStrings = {
  title: "Follow The Smart Money",
  subtitle: "Build. Rent. Earn.",
  videoAria: "Build to rent background videos",
};

const es: BtrHeroStrings = {
  title: "Siga el dinero inteligente",
  subtitle: "Construya. Rente. Gane.",
  videoAria: "Videos de fondo de construcción para alquiler",
};

export function tBtrHero(locale: Locale): BtrHeroStrings {
  return locale === "es" ? es : en;
}
