import type { Locale, OldHomeHeroCardStrings } from "./types";

const en: OldHomeHeroCardStrings = {
  title: "Ready to invest in BTR properties?",
  subtitle: "Choose the path that fits your goals:",
  buttonText: "Learn More",
};

const es: OldHomeHeroCardStrings = {
  title: "¿Listo para invertir en propiedades BTR?",
  subtitle: "Elija el camino que se ajuste a sus objetivos:",
  buttonText: "Más información",
};

export function tOldHomeHeroCard(locale: Locale): OldHomeHeroCardStrings {
  return locale === "es" ? es : en;
}
