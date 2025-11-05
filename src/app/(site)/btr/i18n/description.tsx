// file: src/app/(site)/cluster/i18n/description.ts
import type { Locale, ClusterDescriptionStrings } from "./types";

export const clusterDescriptionCopy: Record<Locale, ClusterDescriptionStrings> =
  {
    en: {
      heading: "How the Cluster Works",
      body: {
        p1: "Our Cluster Home investments are designed to provide stable, diversified exposure to residential real estate without the operational burden of managing individual properties. Each cluster includes a small group of newly constructed homes in the same neighborhood—professionally leased, maintained, and overseen by our on-the-ground property management team.",
        p2: "By pooling several homes together, investors benefit from shared costs, consistent maintenance standards, and reliable cash flow performance across multiple units. Returns are generated through a mix of quarterly rental distributions and long-term appreciation once the properties are stabilized and sold.",
        p3Muted:
          "In short, the Cluster model combines the steady income potential of rental housing with the scalability and convenience of a managed investment structure.",
      },
      items: [
        { title: "123 Oak Grove Ct, Sarasota, FL" },
        { title: "127 Oak Grove Ct, Sarasota, FL" },
        { title: "131 Oak Grove Ct, Sarasota, FL" },
        { title: "135 Oak Grove Ct, Sarasota, FL" },
      ],
    },
    es: {
      heading: "Cómo funciona el clúster",
      body: {
        p1: "Nuestras inversiones en viviendas tipo Clúster están diseñadas para ofrecer una exposición estable y diversificada al mercado residencial, sin la carga operativa de gestionar propiedades individuales. Cada clúster incluye un pequeño grupo de casas de nueva construcción en el mismo vecindario, arrendadas y mantenidas profesionalmente y supervisadas por nuestro equipo local de administración.",
        p2: "Al agrupar varias viviendas, los inversionistas se benefician de costos compartidos, estándares de mantenimiento consistentes y un flujo de caja más confiable a lo largo de múltiples unidades. Los rendimientos se generan mediante una combinación de distribuciones trimestrales de renta y la apreciación a largo plazo una vez que las propiedades se estabilizan y se venden.",
        p3Muted:
          "En pocas palabras, el modelo Clúster combina el potencial de ingresos constantes de la renta residencial con la escalabilidad y conveniencia de una estructura de inversión gestionada.",
      },
      items: [
        { title: "123 Oak Grove Ct, Sarasota, FL" },
        { title: "127 Oak Grove Ct, Sarasota, FL" },
        { title: "131 Oak Grove Ct, Sarasota, FL" },
        { title: "135 Oak Grove Ct, Sarasota, FL" },
      ],
    },
  };

export function tClusterDescription(locale: Locale): ClusterDescriptionStrings {
  return clusterDescriptionCopy[locale] ?? clusterDescriptionCopy.en;
}
