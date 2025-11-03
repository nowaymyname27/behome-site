// Florida/i18n/products.ts
import type { ProductId } from "./types";

export const products = {
  en: {
    btr: {
      title: "Build-to-Rent",
      description: "Homes optimized for durability, yield, and low vacancy.",
    },
    "single-family": {
      title: "Single-Family Homes",
      description:
        "Own your home outright. Classic residences in great neighborhoods.",
    },
    cluster: {
      title: "Clusters",
      description:
        "A set of single-family homes delivered together—operate as a micro-portfolio.",
    },
  } satisfies Record<ProductId, { title: string; description: string }>,

  es: {
    btr: {
      title: "Build-to-Rent",
      description:
        "Viviendas optimizadas para durabilidad, rentabilidad y baja vacancia.",
    },
    "single-family": {
      title: "Casas Unifamiliares",
      description:
        "Sé dueño de tu hogar. Residencias clásicas en excelentes vecindarios.",
    },
    cluster: {
      title: "Clústers",
      description:
        "Conjunto de casas entregadas juntas: opera como un micro-portafolio.",
    },
  } satisfies Record<ProductId, { title: string; description: string }>,
} as const;
