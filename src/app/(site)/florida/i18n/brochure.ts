// File: src/app/(site)/florida/i18n/brochure.ts
export type BrochureCopy = {
  left: {
    title: string;
    description?: string;
  };
  aria: {
    panels: string;
    previous: string;
    next: string;
    close: string;
  };
};

export const dict: Record<"en" | "es", BrochureCopy> = {
  en: {
    left: {
      title: "Welcome to North Carolina",
      description:
        "Explore our latest brochure to discover the communities, homes, and floorplans available.",
    },
    aria: {
      panels: "Industry highlight panels",
      previous: "Previous panel",
      next: "Next panel",
      close: "Close",
    },
  },
  es: {
    left: {
      title: "Bienvendio a Carolina del Norte",
      description:
        "Explore nuestro folleto para descubrir las comunidades, casas y planos de planta disponibles.",
    },
    aria: {
      panels: "Paneles destacados de la industria",
      previous: "Panel anterior",
      next: "Siguiente panel",
      close: "Cerrar",
    },
  },
};
