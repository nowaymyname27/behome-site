import type { AboutPageStrings } from "./types";

export const aboutCopy: Record<"en" | "es", AboutPageStrings> = {
  en: {
    hero: {
      eyebrow: "About RentPortfolio",
      title: "Built for Families. Designed for Returns.",
      subtitle:
        "We create Sarasota communities where residents can thrive and investors can grow with confidence.",
      ctaPrimary: "View SaraHomes",
      ctaSecondary: "Explore BTR Model",
    },
    company: {
      eyebrow: "Our Story",
      heading: "Built for a New Investment Cycle",
      body: [
        "In a market shaped by higher rates and sharper underwriting, institutional capital has gravitated toward strategies built on durability: cash flow, control, and repeatable execution. Build-to-Rent (BTR) has become one of those strategies - homes designed and built specifically to operate as rental assets and perform through cycles.",
        "RentPortfolio is an investment platform focused on BTR, developing homes engineered for operational efficiency and long-term rental demand. Since 2020, more than 250,000 BTR homes have been built and leased globally, supported by over US$50B invested by major institutional funds.",
      ],
      stats: [
        {
          label: "Global BTR homes since 2020",
          value: "250,000+",
        },
        {
          label: "Institutional capital committed",
          value: "US$50B+",
        },
        {
          label: "Platform focus",
          value: "BTR execution",
        },
      ],
    },
    owners: {
      heading: "Founders & Ownership",
      subheading:
        "The leadership team brings experience across development, operations, and real estate investment strategy.",
      owners: [
        {
          name: "Juan Carlos Ramirez",
          role: "Co-Founder",
          bio: "Founder biography placeholder. Add a concise profile with relevant experience, market focus, and leadership responsibilities.",
          quote:
            "We are building a platform designed to perform through cycles while creating neighborhoods people want to stay in.",
        },
        {
          name: "Daniel Lee",
          role: "Co-Founder",
          bio: "Founder biography placeholder. Add a concise profile with investment background, operating perspective, and strategic priorities.",
          quote:
            "Our goal is disciplined growth with clear underwriting and execution that protects downside and compounds value.",
        },
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Sobre RentPortfolio",
      title: "Construido para familias. Diseñado para rendimientos.",
      subtitle:
        "Creamos comunidades en Sarasota donde los residentes prosperan y los inversionistas crecen con confianza.",
      ctaPrimary: "Ver SaraHomes",
      ctaSecondary: "Explorar modelo BTR",
    },
    company: {
      eyebrow: "Nuestra Historia",
      heading: "Diseñados para un nuevo ciclo de inversión",
      body: [
        "En un mercado marcado por tasas más altas y una evaluación más exigente, el capital institucional se ha movido hacia estrategias construidas sobre durabilidad: flujo de caja, control y ejecución repetible. Build-to-Rent (BTR) se ha convertido en una de esas estrategias: viviendas diseñadas y construidas específicamente para operar como activos de renta y rendir a través de distintos ciclos.",
        "RentPortfolio es una plataforma de inversión enfocada en BTR, desarrollando viviendas diseñadas para eficiencia operativa y demanda de renta de largo plazo. Desde 2020, se han construido y arrendado más de 250,000 viviendas BTR a nivel global, respaldadas por más de US$50B invertidos por grandes fondos institucionales.",
      ],
      stats: [
        {
          label: "Viviendas BTR globales desde 2020",
          value: "250,000+",
        },
        {
          label: "Capital institucional comprometido",
          value: "US$50B+",
        },
        {
          label: "Enfoque de plataforma",
          value: "Ejecución BTR",
        },
      ],
    },
    owners: {
      heading: "Fundadores y Propiedad",
      subheading:
        "El equipo directivo aporta experiencia en desarrollo, operaciones y estrategia de inversión inmobiliaria.",
      owners: [
        {
          name: "Juan Carlos Ramirez",
          role: "Co-Fundador",
          bio: "Biografía de fundador (placeholder). Agregue un perfil breve con experiencia relevante, enfoque de mercado y responsabilidades de liderazgo.",
          quote:
            "Estamos construyendo una plataforma diseñada para rendir en distintos ciclos y crear vecindarios donde la gente quiera quedarse.",
        },
        {
          name: "Daniel Lee",
          role: "Co-Fundador",
          bio: "Biografía de fundador (placeholder). Agregue un perfil breve con experiencia en inversión, visión operativa y prioridades estratégicas.",
          quote:
            "Nuestro objetivo es crecer con disciplina, con análisis claro y ejecución que proteja el riesgo y multiplique valor.",
        },
      ],
    },
  },
};
