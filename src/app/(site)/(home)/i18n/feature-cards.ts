// File: src/app/(site)/(home)/i18n/feature-cards.ts
import type { Locale, CardId, OldHomeFeatureCard } from "./types";

/* ============================================
   1️⃣  Section-level i18n
   ============================================ */
const enFeatureCards = {
  showHeader: true,
  title: "Build your own RentPortfolio",
  blurb: "Choose the investment path that fits your goals.",
  eyebrow: "THREE WAYS TO INVEST",
};

const esFeatureCards = {
  showHeader: true,
  title: "Construya su propio RentPortfolio",
  blurb: "Elija el camino de inversión que mejor se adapte a sus objetivos.",
  eyebrow: "TRES FORMAS DE INVERTIR",
};

export const oldHomeFeatureCardsCopy = { en: enFeatureCards, es: esFeatureCards };

/* ============================================
   2️⃣  Card definitions and builder
   ============================================ */
type BaseCard = {
  id: CardId;
  href: string;
  imageSrc: string;
};

const BASE_CARDS: ReadonlyArray<BaseCard> = [
  {
    id: "one",
    href: "/portfolio",
    imageSrc: "/photos/one.png",
  },
  {
    id: "portfolios",
    href: "/portfolio",
    imageSrc: "/photos/portfolio.png",
  },
  {
    id: "collection",
    href: "/",
    imageSrc: "/photos/collection.png",
  },
];

const LABELS = {
  en: {
    one: {
      imageAlt: "Single build-to-rent home exterior",
      heading: "One",
      description:
        "Start with one or two rental homes and grow at your own pace. Build rental income and long-term value using the same fundamentals that guide institutional investors.",
      ctaLabel: "Invest Now",
    },
    portfolios: {
      imageAlt: "Group of homes in a pre-construction community",
      heading: "Portfolios",
      description:
        "Acquire a 4- or 8-home BTR portfolio before construction. Early buyers may access preferred pricing, with the potential for appreciation and rental income once the homes are completed and leased.",
      ctaLabel: "Learn More",
    },
    collection: {
      imageAlt: "Turnkey rental home generating income",
      heading: "SaraHomes",
      description:
        "Explore a limited selection of completed, leased homes already generating income. These turnkey properties offer a straightforward way to start earning rental cash flow.",
      ctaLabel: "Explore Collection",
    },
  },
  es: {
    one: {
      imageAlt: "Fachada de una vivienda Build-to-Rent individual",
      heading: "Uno",
      description:
        "Comience con una o dos viviendas de alquiler y amplíe su portafolio a su ritmo. Genere ingresos por alquiler y valor a largo plazo con principios usados por inversionistas institucionales.",
      ctaLabel: "Invertir Ahora",
    },
    portfolios: {
      imageAlt: "Grupo de viviendas en una comunidad en preventa",
      heading: "Portafolios",
      description:
        "Adquiera un portafolio BTR de 4 u 8 viviendas antes de la construcción. Los compradores anticipados pueden acceder a precios preferenciales y obtener apreciación e ingresos por alquiler cuando las viviendas estén terminadas y alquiladas.",
      ctaLabel: "Más Información",
    },
    collection: {
      imageAlt: "Casa alquilada y generando ingresos desde el primer día",
      heading: "SaraHomes",
      description:
        "Explore una selección limitada de viviendas terminadas y alquiladas que ya generan ingresos. Estas propiedades llave en mano ofrecen una forma sencilla de comenzar a recibir flujo de efectivo por alquiler.",
      ctaLabel: "Explorar Colección",
    },
  },
} as const;

/* ============================================
   3️⃣  Builder (safe with dynamic narrowing)
   ============================================ */
export function getOldHomeFeatureCards(
  locale: Locale,
): ReadonlyArray<OldHomeFeatureCard> {
  const dict = locale === "es" ? LABELS.es : LABELS.en;

  return BASE_CARDS.filter((c) => c.id in dict).map(
    ({ id, href, imageSrc }) => {
      const d = dict[id as keyof typeof dict];
      return {
        id,
        href,
        imageSrc,
        imageAlt: d.imageAlt,
        heading: d.heading,
        description: d.description,
        ctaLabel: d.ctaLabel,
      };
    },
  );
}
