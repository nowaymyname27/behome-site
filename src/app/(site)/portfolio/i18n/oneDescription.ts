import type { Locale } from "../../../../i18n/locale-context";
import type { OneDescriptionText } from "./types";

const en: OneDescriptionText = {
  title: "Start With One",
  subtitle: "Start Small. Think Big.",
  description:
    "Major institutional investors are pouring billions into Build-to-Rent communities — and you can follow their lead on a personal scale. By investing in just one or two BTR homes, you begin building a portfolio that generates rental income and appreciates over time. As your equity grows, so does your ability to expand — transforming a single investment into a long-term wealth strategy guided by the same fundamentals driving institutional success.",
};

const es: OneDescriptionText = {
  title: "Comienza con Uno",
  subtitle: "Empieza pequeño. Piensa en grande.",
  description:
    "Los principales inversionistas institucionales están invirtiendo miles de millones en comunidades Build-to-Rent, y tú puedes seguir su ejemplo a una escala personal. Al invertir en una o dos viviendas BTR, comienzas a construir un portafolio que genera ingresos por renta y se aprecia con el tiempo. A medida que crece tu capital, también aumenta tu capacidad de expandirte, transformando una sola inversión en una estrategia de riqueza a largo plazo guiada por los mismos fundamentos que impulsan el éxito institucional.",
};

export function tOneDescription(locale: Locale): OneDescriptionText {
  return locale === "es" ? es : en;
}
