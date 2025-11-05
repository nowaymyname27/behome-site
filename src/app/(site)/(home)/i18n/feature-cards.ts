// File: src/app/(site)/(home)/i18n/feature-cards.ts
import type { Locale, CardId, HomeFeatureCard } from "./types";

/* ============================================
   1️⃣  Section-level i18n
   ============================================ */
const enFeatureCards = {
  showHeader: true,
  title: "Build your own RentPortfolio",
  blurb: "Three investment paths to fit your goals.",
};

const esFeatureCards = {
  showHeader: true,
  title: "Construya su propio RentPortfolio",
  blurb: "Tres caminos de inversión que se adaptan a sus objetivos.",
};

export const homeFeatureCardsCopy = { en: enFeatureCards, es: esFeatureCards };

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
    href: "/invest/one",
    imageSrc: "/images/home/feature-one.jpg",
  },
  {
    id: "portfolios",
    href: "/invest/portfolios",
    imageSrc: "/images/home/feature-portfolios.jpg",
  },
  {
    id: "collection",
    href: "/invest/360-collection",
    imageSrc: "/images/home/feature-360.jpg",
  },
];

const LABELS = {
  en: {
    one: {
      imageAlt: "Single build-to-rent home exterior",
      heading: "One",
      description:
        "Start small, think big. Major institutional investors are pouring billions into Build-to-Rent communities — and you can follow their lead on a personal scale. By investing in just one or two BTR homes, you begin building a portfolio that generates rental income and appreciates over time. As your equity grows, so does your ability to expand — transforming a single investment into a long-term wealth strategy guided by the same fundamentals driving institutional success.",
      ctaLabel: "Invest Now",
    },
    portfolios: {
      imageAlt: "Group of homes in a pre-construction community",
      heading: "Portfolios",
      description:
        "High-net-worth investors, family offices, and wealth advisors can secure a position in this powerful asset class by acquiring a 4- or 8-unit BTR portfolio during the pre-construction phase. Early buyers benefit from preferred pricing and additional discounts from retail values, positioning themselves for attractive appreciation and strong future income once the homes are completed and leased. Don’t just follow the trend — get ahead of it.",
      ctaLabel: "Learn More",
    },
    collection: {
      imageAlt: "Turnkey rental home generating income",
      heading: "360° Collection",
      description:
        "Discover the 360° Collection — a limited selection of turnkey, income-producing homes already built, leased, and generating steady cash flow from day one. These performing assets offer investors a simple, hassle-free way to own real estate that’s already working for them. Invest today and start earning immediately.",
      ctaLabel: "Explore Collection",
    },
  },
  es: {
    one: {
      imageAlt: "Fachada de una vivienda Build-to-Rent individual",
      heading: "Uno",
      description:
        "Empiece en pequeño, piense en grande. Los principales inversores institucionales están invirtiendo miles de millones en comunidades Build-to-Rent, y usted puede seguir su ejemplo a escala personal. Al invertir en una o dos viviendas BTR, comienza a construir un portafolio que genera ingresos por alquiler y se aprecia con el tiempo. A medida que crece su capital, también crece su capacidad para expandirse, transformando una sola inversión en una estrategia de riqueza a largo plazo basada en los mismos principios que impulsan el éxito institucional.",
      ctaLabel: "Invertir Ahora",
    },
    portfolios: {
      imageAlt: "Grupo de viviendas en una comunidad en preventa",
      heading: "Portafolios",
      description:
        "Los inversionistas de alto patrimonio, oficinas familiares y asesores financieros pueden asegurar su posición en esta poderosa clase de activos adquiriendo un portafolio BTR de 4 u 8 unidades durante la fase de preconstrucción. Los compradores tempranos se benefician de precios preferenciales y descuentos adicionales sobre los valores minoristas, posicionándose para una apreciación atractiva y sólidos ingresos futuros una vez completadas y alquiladas las viviendas. No solo siga la tendencia: anticípese a ella.",
      ctaLabel: "Más Información",
    },
    collection: {
      imageAlt: "Casa alquilada y generando ingresos desde el primer día",
      heading: "Colección 360°",
      description:
        "Descubra la Colección 360° — una selección limitada de viviendas llave en mano, generadoras de ingresos, ya construidas, alquiladas y produciendo flujo de efectivo desde el primer día. Estos activos listos ofrecen a los inversores una manera simple y sin complicaciones de poseer bienes raíces que ya están trabajando para ellos. Invierta hoy y comience a ganar de inmediato.",
      ctaLabel: "Explorar Colección",
    },
  },
} as const;

/* ============================================
   3️⃣  Builder (safe with dynamic narrowing)
   ============================================ */
export function getHomeFeatureCards(
  locale: Locale
): ReadonlyArray<HomeFeatureCard> {
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
    }
  );
}
