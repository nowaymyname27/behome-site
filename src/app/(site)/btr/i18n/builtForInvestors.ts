// file: src/app/(site)/btr/i18n/builtForInvestors.ts
import type { Locale, BtrBuiltForInvestorsStrings } from "./types";

export const tBtrBuiltForInvestors = (
  locale: Locale
): BtrBuiltForInvestorsStrings => {
  switch (locale) {
    case "es":
      return {
        title: "Construido para Inversionistas. Diseñado para el Rendimiento.",
        paragraphs: [
          "Somos un desarrollador Build-to-Rent basado en honorarios: construimos nuevas viviendas para inversionistas que buscan ingresos de alquiler constantes y crecimiento patrimonial a largo plazo.",
          "Tú eres dueño del terreno. Tú eres dueño de la casa. Tú tienes el control. Nosotros la construimos por ti — de manera eficiente, transparente y enfocada en el rendimiento.",
          "Cada propiedad se encuentra en un mercado de alto crecimiento, planificada para la máxima rentabilidad y entregada lista para alquilar.",
          "A través de nuestra plataforma en línea, los inversionistas pueden seguir cada paso de la construcción en tiempo real — desde los cimientos hasta la inspección final — con total visibilidad y confianza.",
          "Una forma más inteligente de invertir en bienes raíces: propiedad directa, potencial de ingresos inmediato y control total sobre tu portafolio.",
        ],
        highlight: {
          title: "Descubre North Port–Sarasota",
          description:
            "Descubre North Port–Sarasota, una de las regiones de más rápido crecimiento en Florida — un mercado vibrante y de alta demanda donde los inversionistas inteligentes están construyendo riqueza a través de viviendas Build-to-Rent diseñadas para un rendimiento duradero.",
          tags: [
            "Región de alto crecimiento",
            "Demanda de inversionistas",
            "Rendimiento a largo plazo",
          ],
        },
      };

    default:
      return {
        title: "Built for Investors. Designed for Performance.",
        paragraphs: [
          "We are a fee-based Build-to-Rent developer — we build new homes for investors seeking steady rental income and long-term wealth.",
          "You own the land. You own the home. You have control. We build it for you — efficiently, transparently, and designed to perform.",
          "Each property is located in a high-growth market, planned for maximum rentability, and delivered turnkey and ready to lease.",
          "Through our online platform, investors track every step of construction in real time — from foundation to final inspection — with complete visibility and confidence.",
          "A smarter way to invest in real estate: direct ownership, immediate income potential, and full control over your portfolio.",
        ],
        highlight: {
          title: "Discover North Port–Sarasota",
          description:
            "Discover North Port–Sarasota, one of Florida’s fastest-growing regions — a vibrant, high-demand market where smart investors are building wealth through Build-to-Rent homes designed for lasting performance.",
          tags: [
            "High-growth region",
            "Investor demand",
            "Long-term performance",
          ],
        },
      };
  }
};
