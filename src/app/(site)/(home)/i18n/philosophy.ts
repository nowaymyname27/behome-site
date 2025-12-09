// File: src/app/(site)/(home)/i18n/philosophy.ts
import type { Locale, HomePhilosophySlide } from "./types";

type SlideId = "track" | "cashflow" | "transparency";

type BaseSlide = {
  id: SlideId;
  src: string;
};

// ------------------------------
// Slides (images + per-card copy)
// ------------------------------
const BASE_SLIDES: BaseSlide[] = [
  { id: "track", src: "/brochures/Arquitectura.jpg" },
  { id: "cashflow", src: "/brochures/Lifestyle.jpg" },
  { id: "transparency", src: "/brochures/Palmeras.jpg" },
];

const LABELS = {
  en: {
    track: {
      title: "1. Proven Track Record",
      caption: "Experience, execution, and trust — earned through results.",
      body: "With over 25 years of experience in nearly every facet of real estate — from development and construction to brokerage and investment structuring — we’ve built and sold hundreds of homes and raised millions in private equity for real estate ventures. Our foundation is experience, execution, and trust earned through results.",
    },
    cashflow: {
      title: "2. Focused on Cash Flow and Long-Term Wealth",
      caption: "Balancing performance with stability.",
      body: "We believe true financial success in real estate comes from steady income and sustainable appreciation. Our Build-to-Rent model is designed to generate consistent cash flow today while creating lasting wealth over time — balancing performance with stability.",
    },
    transparency: {
      title: "3. Transparency and Control",
      caption: "Every stage. Every milestone. Every result.",
      body: "We empower our investors through technology. Our secure platform gives real-time access to every stage of construction and performance, ensuring full transparency and confidence in how their investment is built and managed.",
    },
  },

  es: {
    track: {
      title: "1. Trayectoria Comprobada",
      caption: "Experiencia, ejecución y confianza — ganadas con resultados.",
      body: "Con más de 25 años de experiencia en casi todas las áreas del sector inmobiliario — desde desarrollo y construcción hasta corretaje y estructuración de inversiones — hemos construido y vendido cientos de viviendas y recaudado millones en capital privado para proyectos inmobiliarios. Nuestra base es la experiencia, la ejecución y la confianza ganada con resultados.",
    },
    cashflow: {
      title: "2. Enfocados en Flujo de Efectivo y Riqueza a Largo Plazo",
      caption: "Equilibrio entre desempeño y estabilidad.",
      body: "Creemos que el verdadero éxito financiero en bienes raíces proviene de ingresos estables y apreciación sostenible. Nuestro modelo Build-to-Rent está diseñado para generar flujo de efectivo constante hoy mientras crea riqueza duradera a lo largo del tiempo — equilibrando rendimiento con estabilidad.",
    },
    transparency: {
      title: "3. Transparencia y Control",
      caption: "Cada etapa. Cada logro. Cada resultado.",
      body: "Empoderamos a nuestros inversionistas con tecnología. Nuestra plataforma segura ofrece acceso en tiempo real a cada fase de construcción y desempeño, garantizando transparencia total y confianza en cómo se construye y gestiona su inversión.",
    },
  },
} as const;

// ------------------------------
// Slides builder
// ------------------------------
export function getHomePhilosophySlides(
  locale: Locale
): ReadonlyArray<HomePhilosophySlide> {
  const dict = locale === "es" ? LABELS.es : LABELS.en;
  return BASE_SLIDES.map(({ id, src }) => ({
    src,
    title: dict[id].title,
    caption: dict[id].caption,
    body: dict[id].body,
  }));
}

// ------------------------------
// Section header / aria strings
// ------------------------------
const PHILOSOPHY = {
  en: {
    left: {
      title: "Our Guiding Principles",
      leadEm: "We build more than homes —",
      leadRest:
        "we build performance. Over 25 years of experience. Hundreds of homes delivered. Millions raised in private equity and partnerships built on trust. We believe in cash flow first, wealth forever. In real assets you can see, touch, and control. In strategies that work for families and funds alike. We believe investors deserve transparency. A clear view of every stage, every milestone, every result. Because confidence comes from knowing — not guessing. This is how we build. With integrity. With purpose. With results.",
    },
    tip: "Tip: tap a card to read more.",
    aria: {
      panels: "Guiding principles panels",
      previous: "Previous card",
      next: "Next card",
    },
  },
  es: {
    left: {
      title: "Nuestros Principios Rectores",
      leadEm: "Construimos más que viviendas —",
      leadRest:
        "construimos rendimiento. Más de 25 años de experiencia. Cientos de viviendas entregadas. Millones recaudados en capital privado y asociaciones basadas en la confianza. Creemos en flujo de efectivo primero, riqueza para siempre. En activos reales que se pueden ver, tocar y controlar. En estrategias que funcionan tanto para familias como para fondos. Creemos que los inversionistas merecen transparencia. Una visión clara de cada etapa, cada logro, cada resultado. Porque la confianza proviene del conocimiento, no de la suposición. Así construimos. Con integridad. Con propósito. Con resultados.",
    },
    tip: "Consejo: toca una tarjeta para leer más.",
    aria: {
      panels: "Paneles de principios rectores",
      previous: "Tarjeta anterior",
      next: "Siguiente tarjeta",
    },
  },
} as const;

export function tHomePhilosophy(locale: Locale) {
  return locale === "es" ? PHILOSOPHY.es : PHILOSOPHY.en;
}
