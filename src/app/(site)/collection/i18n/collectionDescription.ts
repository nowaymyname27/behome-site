import type { Locale } from "../../../../i18n/locale-context";

type CollectionDescriptionText = {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
};

export const tCollectionDescription = (
  locale: Locale
): CollectionDescriptionText => {
  const en: CollectionDescriptionText = {
    title: "360 Collection",
    subtitle: "Built, rented and generating cash flow",
    heading: "A curated selection of stabilized, income-producing homes",
    description:
      "The 360 Investors Collection brings together a select group of stabilized, income-generating properties — professionally managed and delivering immediate returns. Each home comes with active tenants, efficient management, and transparent performance metrics, giving investors a true 360° view of their real estate income.",
  };

  const es: CollectionDescriptionText = {
    title: "Colección 360",
    subtitle: "Construidas, alquiladas y generando flujo de efectivo",
    heading:
      "Una selección exclusiva de hogares estabilizados que generan ingresos",
    description:
      "La Colección 360 de Inversionistas reúne un grupo selecto de propiedades estabilizadas que generan ingresos — gestionadas profesionalmente y que ofrecen rendimientos inmediatos. Cada casa cuenta con inquilinos activos, gestión eficiente y métricas de rendimiento transparentes, brindando a los inversionistas una verdadera vista de 360° de sus ingresos inmobiliarios.",
  };

  return locale === "es" ? es : en;
};
