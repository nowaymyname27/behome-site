// file: src/app/(site)/(home)/i18n/hero-card.ts
import type { Locale, Cta } from "./types";

const HERO_CARD_COPY = {
  en: {
    aria: { promotion: "Investment options" },
    heading: "Ready to invest in BTR properties?",
    subheading: "Choose the path that fits your goals:",
    sections: [
      {
        title: "One Home",
        description: "Hire us to build your new Build-to-Rent property.",
        cta: { label: "Learn More", href: "/one-home" },
      },
      {
        title: "Portfolio Growth",
        description:
          "Develop multiple BTR homes for long-term income and scale.",
        cta: { label: "Learn More", href: "/portfolio-growth" },
      },
      {
        title: "Immediate Income",
        description:
          "Acquire an already built, rented home generating cash flow today.",
        cta: { label: "Learn More", href: "/immediate-income" },
      },
    ],
  },
  es: {
    aria: { promotion: "Opciones de inversión" },
    heading: "¿Listo para invertir en propiedades BTR?",
    subheading: "Elija el camino que se adapte a sus objetivos:",
    sections: [
      {
        title: "Una Propiedad",
        description:
          "Contrátenos para construir su nueva propiedad Build-to-Rent.",
        cta: { label: "Más información", href: "/one-home" },
      },
      {
        title: "Crecimiento de Portafolio",
        description:
          "Desarrolle múltiples hogares BTR para ingresos y escala a largo plazo.",
        cta: { label: "Más información", href: "/portfolio-growth" },
      },
      {
        title: "Ingresos Inmediatos",
        description:
          "Adquiera un hogar ya construido y alquilado que genere flujo de efectivo hoy.",
        cta: { label: "Más información", href: "/immediate-income" },
      },
    ],
  },
} as const;

export function tHeroCard(locale: Locale) {
  return HERO_CARD_COPY[locale];
}
