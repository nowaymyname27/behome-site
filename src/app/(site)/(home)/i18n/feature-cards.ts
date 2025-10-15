// File: src/app/(site)/(home)/i18n/feature-cards.ts
import type { Locale, CardId, HomeFeatureCard } from "./types";

type BaseCard = {
  id: CardId;
  href: string;
  imageSrc: string;
};

const BASE_CARDS: ReadonlyArray<BaseCard> = [
  {
    id: "fl-plans",
    href: "/build-to-rent",
    imageSrc: "/images/home/btr.jpg",
  },
  {
    id: "nc-communities",
    href: "/single-family",
    imageSrc: "/images/home/single-family.jpg",
  },
  {
    id: "features",
    href: "/clusters",
    imageSrc: "/images/home/clusters.jpg",
  },
];

const LABELS = {
  en: {
    "fl-plans": {
      imageAlt: "New homes built for rent from day one",
      heading: "Built to Rent (BTR)",
      description:
        "New homes built exclusively for rent from day one. Individual or grouped properties ready to generate stable, predictable income—ideal for investors seeking security, tax advantages, and capital appreciation.",
      ctaLabel: "Explore more",
    },
    "nc-communities": {
      imageAlt: "Modern single-family home with quality finishes",
      heading: "Single Family Home",
      description:
        "New single-family homes with excellent design, finishes, and location. Buy at pre-sale prices, rent long-term, and enjoy simple management—perfect for those starting or diversifying their portfolio.",
      ctaLabel: "Explore more",
    },
    features: {
      imageAlt: "Group of rental homes within a shared development",
      heading: "Rental Clusters (4–8 Homes)",
      description:
        "Clusters of homes within the same lot or project, designed for scale. They offer operational advantages, consolidated returns, and management efficiency—perfect for investors ready to grow faster.",
      ctaLabel: "Explore more",
    },
  },
  es: {
    "fl-plans": {
      imageAlt: "Viviendas nuevas construidas para rentar desde el primer día",
      heading: "Built to Rent (BTR)",
      description:
        "Viviendas nuevas construidas exclusivamente para rentar desde el primer día. Son propiedades individuales o agrupadas, listas para generar ingresos de forma estable y predecible. Ideal para inversores que buscan seguridad, ahorro fiscal y apreciación de capital.",
      ctaLabel: "Explorar más",
    },
    "nc-communities": {
      imageAlt: "Casa unifamiliar moderna con acabados de alta calidad",
      heading: "Single Family Home",
      description:
        "Casas unifamiliares nuevas con excelente diseño, acabados y ubicación. Puedes comprarlas con precio de preventa, alquilarlas a largo plazo y contar con una estructura simple de gestión. Apta para quien inicia o diversifica su portafolio.",
      ctaLabel: "Explorar más",
    },
    features: {
      imageAlt: "Agrupación de casas dentro de un mismo proyecto",
      heading: "Clusters de Renta (4–8 casas)",
      description:
        "Agrupaciones de casas dentro del mismo lote o proyecto, diseñadas para generar escala. Ofrecen ventajas operativas, mayor retorno consolidado y eficiencia administrativa. Perfecto para quienes desean escalar más rápido.",
      ctaLabel: "Explorar más",
    },
  },
} as const;

export function getHomeFeatureCards(
  locale: Locale
): ReadonlyArray<HomeFeatureCard> {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_CARDS.map(({ id, href, imageSrc }) => ({
    id,
    href,
    imageSrc,
    imageAlt: dict[id].imageAlt,
    heading: dict[id].heading,
    description: dict[id].description,
    ctaLabel: dict[id].ctaLabel,
  }));
}
