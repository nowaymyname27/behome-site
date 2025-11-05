// file: src/app/(site)/(home)/i18n/btrExplained.ts
import type { Locale, HomeBTRExplained } from "./types";

export const tHomeBTRExplained = (locale: Locale): HomeBTRExplained => {
  switch (locale) {
    case "es":
      return {
        title: "BTR – Por qué Build-to-Rent atrae capital inteligente",
        description:
          "Los grandes jugadores institucionales ya están capitalizando esta poderosa tendencia — y ahora los inversionistas individuales también pueden hacerlo. A través de nuestro programa Build-to-Rent, puedes ser propietario de viviendas que generan ingresos, diseñadas para el rendimiento, construidas para la durabilidad y ubicadas en los mercados de más rápido crecimiento de Florida. Comienza pequeño, piensa en grande — y sigue la misma estrategia que impulsa miles de millones en capital institucional.",
        quote: "ÚNETE A LA ESTRATEGIA GANADORA",
        stats: [
          {
            label: "Escasez de viviendas en EE. UU.",
            value: "3.9M+",
            detail: "viviendas necesarias a nivel nacional",
          },
          {
            label: "Participación institucional",
            value: "350K+",
            detail: "unidades BTR en manos de grandes fondos",
          },
          {
            label: "Clase de activo en expansión",
            value: "$14.8B",
            detail: "desplegados solo en 2024",
          },
          {
            label: "Crecimiento acelerado",
            value: "450%",
            detail: "aumento en entregas desde 2019",
          },
          {
            label: "Gran flujo de capital",
            value: "$50B+",
            detail: "invertidos desde el COVID",
          },
        ],
      };

    default:
      return {
        title: "BTR – Why Build-to-Rent Attracts Smart Capital",
        description:
          "Large institutional players are already capitalizing on this powerful trend — and now, individual investors can too. Through our Build-to-Rent program, you can own income-producing homes designed for performance, built for durability, and positioned in Florida’s fastest-growing markets. Start small, think big — and follow the same strategy driving billions in institutional capital.",
        quote: "JOIN THE WINNING STRATEGY",
        stats: [
          {
            label: "U.S. Housing Shortage",
            value: "3.9M+",
            detail: "homes needed nationwide",
          },
          {
            label: "Institutional Participation",
            value: "350K+",
            detail: "BTR units held by major funds",
          },
          {
            label: "Expanding Asset Class",
            value: "$14.8B",
            detail: "deployed in 2024 alone",
          },
          {
            label: "Rapid Growth",
            value: "450%",
            detail: "increase in deliveries since 2019",
          },
          {
            label: "Massive Capital Inflow",
            value: "$50B+",
            detail: "invested since COVID",
          },
        ],
      };
  }
};
