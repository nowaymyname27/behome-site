// File: src/app/(site)/btr/i18n/everglades-showcase.ts
import type { Locale, EvergladesShowcaseStrings } from "./types";

export const evergladesShowcaseCopy: Record<Locale, EvergladesShowcaseStrings> =
  {
    en: {
      title: "The Everglades House",
      subtitle: "Designed for Living, Built for Returns",
      description:
        "Our flagship Build-to-Rent home, the Everglades, is thoughtfully engineered to maximize rental performance and long-term value. Its flexible design, durable construction, and modern features make it ideal for today’s families and investors alike.",

      featureGroups: [
        {
          title: "Layout & Comfort",
          items: [
            "Versatile layout for families or shared living.",
            "Open-concept living area for entertaining.",
            "Flexible den/office converts to an extra bedroom.",
            "Large primary suite with walk-in closet and double vanities.",
          ],
        },
        {
          title: "Build Quality",
          items: [
            "Energy-efficient design for lower utility costs.",
            "Impact-resistant windows for safety and storm protection.",
            "Modern kitchen with stainless steel appliances and island.",
            "Dedicated laundry room and practical mud room.",
          ],
        },
        {
          title: "Outdoor & Access",
          items: [
            "Spacious lanai and backyard with private outdoor space.",
            "Two-car garage with added storage.",
            "Covered front porch with strong curb appeal.",
            "Prime location near schools and employment centers.",
          ],
        },
        {
          title: "Investment Profile",
          items: [
            "No HOA fees on independent single-family lots.",
            "Mid-income appeal with broad tenant demand.",
            "Durable construction aligned with long-term hold strategy.",
          ],
        },
      ],

      statsTitle: "Investment Overview",
      stats: [
        { label: "Minimum Investment", value: "$150,000" },
        { label: "IRR Projection", value: "16% annual" },
        { label: "Equity Multiple", value: "1.5x" },
        { label: "Term", value: "3+ years" },
        { label: "Yield", value: "6%" },
        { label: "Cashout", value: "≈30% with ReFi" },
        { label: "Distribution", value: "Monthly" },
      ],

      toggleShow: "View Key Features",
      toggleHide: "Hide Features",
    },

    es: {
      title: "Casa Everglades",
      subtitle: "Diseñado para vivir, construido para rendir",
      description:
        "Nuestra propiedad insignia Build-to-Rent, el Everglades, está diseñada cuidadosamente para maximizar el rendimiento del alquiler y el valor a largo plazo. Su diseño flexible, construcción duradera y características modernas la hacen ideal tanto para familias como para inversionistas.",

      featureGroups: [
        {
          title: "Diseño y Confort",
          items: [
            "Diseño versátil para familias o convivencias compartidas.",
            "Área social abierta ideal para reuniones.",
            "Oficina flexible que se convierte en dormitorio extra.",
            "Suite principal amplia con vestidor y doble tocador.",
          ],
        },
        {
          title: "Calidad Constructiva",
          items: [
            "Diseño eficiente para reducir costos de servicios.",
            "Ventanas resistentes a impactos para mayor seguridad.",
            "Cocina moderna con electrodomésticos de acero inoxidable e isla.",
            "Lavandería independiente y cuarto de entrada funcional.",
          ],
        },
        {
          title: "Exterior y Ubicación",
          items: [
            "Amplio patio y terraza con espacios privados.",
            "Garaje doble con almacenamiento adicional.",
            "Porche cubierto con excelente atractivo exterior.",
            "Ubicación privilegiada cerca de escuelas y centros laborales.",
          ],
        },
        {
          title: "Perfil de Inversión",
          items: [
            "Sin cuotas HOA en lotes unifamiliares independientes.",
            "Atractiva para ingresos medios con demanda estable.",
            "Construcción duradera para una estrategia de largo plazo.",
          ],
        },
      ],

      statsTitle: "Resumen de Inversión",
      stats: [
        { label: "Inversión mínima", value: "$150,000" },
        { label: "Proyección IRR", value: "16% anual" },
        { label: "Múltiplo de capital", value: "1.5x" },
        { label: "Plazo", value: "3+ años" },
        { label: "Rendimiento", value: "6%" },
        { label: "Retiro de capital", value: "≈30% con refinanciación" },
        { label: "Distribución", value: "Mensual" },
      ],

      toggleShow: "Ver características clave",
      toggleHide: "Ocultar características",
    },
  };
