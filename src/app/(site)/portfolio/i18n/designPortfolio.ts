import type { Locale, DesignPortfolioStrings } from "./types";

const en: DesignPortfolioStrings = {
  title: "Design Your Portfolio",
  description:
    "Select how many units you want to model. Returns are based on projected performance for the SF1 model.",
  unitSingular: "1 unit",
  unitPlural: "{{n}} units",
  modelFinish: "Flagship Model",
  estimatedRates: "Estimated market rates",
  labels: {
    capital: "Capital Needed",
    rent: "Rent (Monthly)",
    cap: "Cap Rate",
  },
};

const es: DesignPortfolioStrings = {
  title: "Diseñe su portafolio",
  description:
    "Seleccione cuántas unidades desea modelar. Los rendimientos se basan en el desempeño proyectado para el modelo SF1.",
  unitSingular: "1 unidad",
  unitPlural: "{{n}} unidades",
  modelFinish: "Modelo Flagship",
  estimatedRates: "Tarifas de mercado estimadas",
  labels: {
    capital: "Capital Necesario",
    rent: "Renta (Mensual)",
    cap: "Tasa Cap",
  },
};

export function tDesignPortfolio(locale: Locale): DesignPortfolioStrings {
  return locale === "es" ? es : en;
}
