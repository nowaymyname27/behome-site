// File: src/app/(site)/north-carolina/i18n/brochure.ts
export type BrochureCopy = {
  left: {
    title: string;
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
    },
    aria: {
      panels: "Paneles destacados de la industria",
      previous: "Panel anterior",
      next: "Siguiente panel",
      close: "Cerrar",
    },
  },
};
