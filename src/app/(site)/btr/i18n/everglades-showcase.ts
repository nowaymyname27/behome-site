// File: src/app/(site)/btr/i18n/everglades-showcase.ts
import type { Locale, EvergladesShowcaseStrings } from "./types";

export const evergladesShowcaseCopy: Record<Locale, EvergladesShowcaseStrings> =
  {
    en: {
      title: "The Everglades",
      subtitle: "Designed for Living, Built for Returns",
      description:
        "Our flagship Build-to-Rent home, the Everglades, is thoughtfully engineered to maximize rental performance and long-term value. Its flexible design, durable construction, and modern features make it ideal for today’s families and investors alike.",

      features: [
        "Versatile layout — accommodates families or shared living.",
        "No HOA fees — built on independent single-family lots.",
        "Prime location — close to schools and employment centers.",
        "Mid-income appeal — broad tenant demand and stability.",
        "Flexible den/office — easily converts into an extra bedroom.",
        "Energy-efficient design — lowers utility costs and increases comfort.",
        "Impact-resistant windows — built for safety and storm protection.",
        "Open-concept living area — ideal for entertaining and family life.",
        "Spacious lanai and backyard — private outdoor space tenants love.",
        "Two-car garage — convenience and added storage.",
        "Dedicated laundry room — practical and well-designed layout.",
        "Mud room for kids — function meets everyday family living.",
        "Large master suite — walk-in closet and double vanities.",
        "Modern kitchen — stainless steel appliances and a large island.",
        "Covered front porch — elegant entrance with curb appeal.",
      ],

      statsTitle: "Investment Overview",
      stats: [
        { label: "Minimum Investment", value: "$125,000" },
        { label: "IRR Projection", value: "16% annual" },
        { label: "Equity Multiple", value: "1.5x" },
        { label: "Term", value: "3+ years" },
        { label: "Yield", value: "6%" },
        { label: "Cashout", value: "≈30% with ReFi" },
        { label: "Distribution", value: "Monthly" },
      ],

      toggleShow: "View Key Features ▼",
      toggleHide: "Hide Features ▲",
    },

    es: {
      title: "El Everglades",
      subtitle: "Diseñado para vivir, construido para rendir",
      description:
        "Nuestra propiedad insignia Build-to-Rent, el Everglades, está diseñada cuidadosamente para maximizar el rendimiento del alquiler y el valor a largo plazo. Su diseño flexible, construcción duradera y características modernas la hacen ideal tanto para familias como para inversionistas.",

      features: [
        "Diseño versátil: acomoda familias o convivencias compartidas.",
        "Sin cuotas HOA: construida en lotes unifamiliares independientes.",
        "Ubicación privilegiada: cerca de escuelas y centros laborales.",
        "Atractiva para ingresos medios: alta demanda y estabilidad.",
        "Oficina flexible: se convierte fácilmente en un dormitorio extra.",
        "Diseño eficiente: reduce costos de servicios y mejora el confort.",
        "Ventanas resistentes a impactos: seguridad y protección contra tormentas.",
        "Área social abierta: ideal para reuniones y vida familiar.",
        "Amplio patio y terraza: espacios privados al aire libre.",
        "Garaje doble: comodidad y almacenamiento adicional.",
        "Lavandería independiente: práctica y funcional.",
        "Cuarto de entrada: pensado para la vida diaria en familia.",
        "Suite principal amplia: vestidor y doble tocador.",
        "Cocina moderna: electrodomésticos de acero inoxidable e isla central.",
        "Porche cubierto: entrada elegante con atractivo exterior.",
      ],

      statsTitle: "Resumen de Inversión",
      stats: [
        { label: "Inversión mínima", value: "$125,000" },
        { label: "Proyección IRR", value: "16% anual" },
        { label: "Múltiplo de capital", value: "1.5x" },
        { label: "Plazo", value: "3+ años" },
        { label: "Rendimiento", value: "6%" },
        { label: "Retiro de capital", value: "≈30% con refinanciación" },
        { label: "Distribución", value: "Mensual" },
      ],

      toggleShow: "Ver características ▼",
      toggleHide: "Ocultar características ▲",
    },
  };
