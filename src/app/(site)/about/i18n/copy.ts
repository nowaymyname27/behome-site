import type { AboutPageStrings } from "./types";

export const aboutCopy: Record<"en" | "es", AboutPageStrings> = {
  en: {
    hero: {
      eyebrow: "About RentPortfolio",
      title: "We Build Long-Term Homes and Long-Term Value.",
      subtitle:
        "RentPortfolio is a Sarasota-focused team creating durable Build-to-Rent communities designed for residents and aligned with disciplined investor outcomes.",
      ctaPrimary: "View SaraHomes",
      ctaSecondary: "Explore BTR Model",
    },
    company: {
      heading: "Our Company",
      body: [
        "RentPortfolio was founded to close the gap between quality housing demand and reliable residential investment opportunities in Florida.",
        "Our process combines site selection, standardized construction, operations discipline, and resident-first management to deliver predictable performance.",
        "We design communities that work for real life: strong layouts, efficient operations, and neighborhoods families are proud to call home.",
      ],
      pillars: [
        {
          title: "Resident Experience",
          description:
            "Thoughtful home layouts and consistent property management built around long-term tenant retention.",
        },
        {
          title: "Operational Discipline",
          description:
            "Standardized systems from construction through leasing and maintenance that reduce volatility over time.",
        },
        {
          title: "Aligned Investment",
          description:
            "A long-hold strategy focused on resilient cash flow, conservative assumptions, and transparent reporting.",
        },
      ],
    },
    owners: {
      heading: "Founders & Ownership",
      subheading:
        "The leadership team brings experience across development, operations, and real estate investment strategy.",
      owners: [
        {
          name: "Owner Name Placeholder",
          role: "Co-Founder & Managing Partner",
          bio: "Add a short founder biography here. Include years of experience, geographic focus, and primary operational responsibilities.",
          quote:
            "We are building a platform designed to perform through cycles while creating neighborhoods people want to stay in.",
        },
        {
          name: "Owner Name Placeholder",
          role: "Co-Founder & Investment Lead",
          bio: "Add a short founder biography here. Include previous investment background, transaction experience, and strategic priorities.",
          quote:
            "Our goal is disciplined growth with clear underwriting and execution that protects downside and compounds value.",
        },
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Sobre RentPortfolio",
      title: "Construimos hogares de largo plazo y valor de largo plazo.",
      subtitle:
        "RentPortfolio es un equipo enfocado en Sarasota que desarrolla comunidades Build-to-Rent duraderas para residentes y resultados sólidos para inversionistas.",
      ctaPrimary: "Ver SaraHomes",
      ctaSecondary: "Explorar modelo BTR",
    },
    company: {
      heading: "Nuestra Empresa",
      body: [
        "RentPortfolio nació para cerrar la brecha entre la demanda de vivienda de calidad y las oportunidades confiables de inversión residencial en Florida.",
        "Nuestro proceso combina selección de terrenos, construcción estandarizada, disciplina operativa y gestión centrada en el residente para entregar resultados predecibles.",
        "Diseñamos comunidades pensadas para la vida real: distribuciones sólidas, operación eficiente y vecindarios donde las familias quieren permanecer.",
      ],
      pillars: [
        {
          title: "Experiencia del Residente",
          description:
            "Distribuciones funcionales y gestión consistente enfocada en la retención de inquilinos a largo plazo.",
        },
        {
          title: "Disciplina Operativa",
          description:
            "Sistemas estandarizados desde la construcción hasta el arrendamiento y mantenimiento para reducir volatilidad.",
        },
        {
          title: "Inversión Alineada",
          description:
            "Estrategia de largo plazo enfocada en flujo de efectivo resiliente, supuestos conservadores y reportes transparentes.",
        },
      ],
    },
    owners: {
      heading: "Fundadores y Propiedad",
      subheading:
        "El equipo directivo aporta experiencia en desarrollo, operaciones y estrategia de inversión inmobiliaria.",
      owners: [
        {
          name: "Nombre del Propietario",
          role: "Co-Fundador y Socio Director",
          bio: "Agregue aquí una biografía breve del fundador. Incluya años de experiencia, enfoque geográfico y responsabilidades operativas principales.",
          quote:
            "Estamos construyendo una plataforma diseñada para rendir en distintos ciclos y crear vecindarios donde la gente quiera quedarse.",
        },
        {
          name: "Nombre del Propietario",
          role: "Co-Fundador y Líder de Inversión",
          bio: "Agregue aquí una biografía breve del fundador. Incluya experiencia previa en inversión, trayectoria de transacciones y prioridades estratégicas.",
          quote:
            "Nuestro objetivo es crecer con disciplina, con análisis claro y ejecución que proteja el riesgo y multiplique valor.",
        },
      ],
    },
  },
};
