import type { Locale, HeroCardStrings } from "./types";

const en: HeroCardStrings = {
  title: "Ready to invest in BTR properties?",
  subtitle: "Choose the path that fits your goals:",
  buttonText: "Learn More",
};

const es: HeroCardStrings = {
  title: "¿Listo para invertir en propiedades BTR?",
  subtitle: "Elija el camino que se ajuste a sus objetivos:",
  buttonText: "Más información",
};

export function tHeroCard(locale: Locale): HeroCardStrings {
  return locale === "es" ? es : en;
}
