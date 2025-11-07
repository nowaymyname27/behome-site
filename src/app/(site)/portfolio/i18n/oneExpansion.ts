import type { Locale } from "../../../../i18n/locale-context";
import type { OneExpansionText } from "./types";

const en: OneExpansionText = {
  description:
    "Start with one home, earn steady cash flow, and stay in full control — you decide when to sell, reinvest, or keep building your wealth.",
  points: [
    {
      title: "Immediate Income Potential",
      text: "Once completed, your home is ready to rent and start generating positive cash flow in one of Florida’s strongest rental markets.",
    },
    {
      title: "Low Carrying Costs",
      text: "Enjoy no HOA fees, no flood-zone insurance, and durable construction designed for low maintenance and long-term savings.",
    },
    {
      title: "Rapid Appreciation",
      text: "North Port’s fast-growing population and expanding economy continue to drive strong property value growth year after year.",
    },
    {
      title: "Prime Location",
      text: "Minutes from Venice Beach, Siesta Key, and Manasota Key, and connected via I-75 to more than 1.6 million residents from Tampa to Naples — a perfect blend of lifestyle and accessibility.",
    },
    {
      title: "Built for Florida Living",
      text: "Homes are engineered to withstand tropical storms and built with modern materials for safety, durability, and peace of mind.",
    },
  ],
};

const es: OneExpansionText = {
  description:
    "Comienza con una vivienda, genera flujo de efectivo constante y mantén el control total: tú decides cuándo vender, reinvertir o seguir construyendo tu patrimonio.",
  points: [
    {
      title: "Potencial de Ingreso Inmediato",
      text: "Una vez finalizada, tu vivienda está lista para alquilarse y comenzar a generar flujo de efectivo positivo en uno de los mercados de renta más sólidos de Florida.",
    },
    {
      title: "Bajos Costos de Mantenimiento",
      text: "Disfruta sin cuotas de HOA, sin seguros por zonas de inundación y con una construcción duradera diseñada para bajo mantenimiento y ahorro a largo plazo.",
    },
    {
      title: "Rápida Apreciación",
      text: "La población en rápido crecimiento y la economía en expansión de North Port continúan impulsando el aumento del valor de las propiedades año tras año.",
    },
    {
      title: "Ubicación Privilegiada",
      text: "A minutos de Venice Beach, Siesta Key y Manasota Key, y conectada por la I-75 con más de 1.6 millones de residentes desde Tampa hasta Naples: una combinación perfecta de estilo de vida y accesibilidad.",
    },
    {
      title: "Diseñadas para la Vida en Florida",
      text: "Las viviendas están diseñadas para resistir tormentas tropicales y construidas con materiales modernos para mayor seguridad, durabilidad y tranquilidad.",
    },
  ],
};

export function tOneExpansion(locale: Locale): OneExpansionText {
  return locale === "es" ? es : en;
}
