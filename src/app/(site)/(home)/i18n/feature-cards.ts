// File: src/app/(site)/(home)/i18n/feature-cards.ts
import type { Locale } from "./index";

type CardId = "fl-plans" | "nc-communities" | "features";

type BaseCard = {
  id: CardId;
  href: string;
  imageSrc: string; // keep asset paths stable; translate labels separately
};

// 1) Define once (href + imageSrc only)
const BASE_CARDS: BaseCard[] = [
  {
    id: "fl-plans",
    href: "/floor-plans",
    imageSrc: "/images/philosophy/slide-1.jpg",
  },
  {
    id: "nc-communities",
    href: "/communities",
    imageSrc: "/images/home/community.jpg",
  },
  { id: "features", href: "/features", imageSrc: "/images/home/features.jpg" },
];

// 2) Locale labels
const LABELS = {
  en: {
    "fl-plans": {
      imageAlt: "Open concept kitchen and living room with large windows",
      heading: "Flexible Floor Plans",
      description:
        "Choose layouts that fit your lifestyle—add a study, expand the kitchen, or create a guest suite.",
      ctaLabel: "Explore plans",
    },
    "nc-communities": {
      imageAlt: "Tree-lined street with family-friendly sidewalks",
      heading: "Thoughtful Communities",
      description:
        "Walkable streets, nearby parks, and quick access to what matters—designed with daily life in mind.",
      ctaLabel: "See locations",
    },
    features: {
      imageAlt: "Bright bedroom with natural light and soft finishes",
      heading: "Comfort, Inside & Out",
      description:
        "Light-filled rooms, durable finishes, and energy-smart options that feel good now and later.",
      ctaLabel: "View features",
    },
  },
  es: {
    "fl-plans": {
      imageAlt: "Cocina y sala de concepto abierto con grandes ventanales",
      heading: "Planos Flexibles",
      description:
        "Elige distribuciones que se adapten a tu estilo de vida: añade un estudio, amplía la cocina o crea una suite de invitados.",
      ctaLabel: "Explorar planos",
    },
    "nc-communities": {
      imageAlt: "Calle arbolada con aceras ideales para familias",
      heading: "Comunidades Pensadas",
      description:
        "Calles caminables, parques cercanos y acceso rápido a lo importante—diseñadas para la vida diaria.",
      ctaLabel: "Ver ubicaciones",
    },
    features: {
      imageAlt: "Dormitorio luminoso con luz natural y acabados suaves",
      heading: "Comodidad por Dentro y por Fuera",
      description:
        "Ambientes luminosos, materiales duraderos y opciones de eficiencia que se sienten bien hoy y mañana.",
      ctaLabel: "Ver características",
    },
  },
} as const;

// 3) Builder
export function getHomeFeatureCards(locale: Locale) {
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
