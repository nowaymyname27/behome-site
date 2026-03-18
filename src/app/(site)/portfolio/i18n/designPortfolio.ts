import type { Locale, DesignPortfolioStrings } from "./types";

const en: DesignPortfolioStrings = {
  title: "Design Your Portfolio",
  description:
    "Select how many homes you want to model. Returns are based on projected performance for the Everglades model.",
  unitSingular: "1 House",
  unitPlural: "{{n}} Houses",
  modelFinish: "Flagship Model",
  estimatedRates: "Estimated market rates",
  labels: {
    capital: "Initial Capital",
    saleIncome: "Sale Income",
    profit: "Profit",
    irrExit15: "IRR (Exit month 15)",
  },
};

const es: DesignPortfolioStrings = {
  title: "Diseñe su portafolio",
  description:
    "Seleccione cuántas casas desea modelar. Los rendimientos se basan en el desempeño proyectado para el modelo Everglades.",
  unitSingular: "1 Casa",
  unitPlural: "{{n}} Casas",
  modelFinish: "Modelo Flagship",
  estimatedRates: "Tarifas de mercado estimadas",
  labels: {
    capital: "Capital Inicial",
    saleIncome: "Ingreso por Venta",
    profit: "Utilidad",
    irrExit15: "TIR (Exit mes 15)",
  },
};

export function tDesignPortfolio(locale: Locale): DesignPortfolioStrings {
  return locale === "es" ? es : en;
}
