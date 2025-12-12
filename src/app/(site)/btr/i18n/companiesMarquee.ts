import type { Locale, CompaniesMarqueeStrings } from "./types";

const en: CompaniesMarqueeStrings = {
  title: "We Are in Good Company",
  groupValuedAt: "Group valued at",
  logoAlt: "logo",
};

const es: CompaniesMarqueeStrings = {
  title: "Estamos en buena compañía",
  groupValuedAt: "Grupo valorado en",
  logoAlt: "logotipo",
};

export function tCompaniesMarquee(locale: Locale): CompaniesMarqueeStrings {
  return locale === "es" ? es : en;
}
