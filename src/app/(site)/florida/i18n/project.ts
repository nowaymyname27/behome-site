// Florida/i18n/project.ts
export const project = {
  en: {
    project: { name: "Florida Project" },
    card: {
      description:
        "A featured project from our Florida portfolio showcasing design, durability, and value.",
      href: "/florida/project",
      cta: "View details",
      aria: { openDetails: "Open project details" },
    },
    map: {
      overlayCta: "Click to interact with map",
      aria: { clickToInteract: "Click to interact with map" },
    },
  },
  es: {
    project: { name: "Proyecto en Florida" },
    card: {
      description:
        "Un proyecto destacado de nuestro portafolio en Florida que combina diseño, durabilidad y valor.",
      href: "/florida/project",
      cta: "Ver detalles",
      aria: { openDetails: "Abrir detalles del proyecto" },
    },
    map: {
      overlayCta: "Haz clic para interactuar con el mapa",
      aria: { clickToInteract: "Haz clic para interactuar con el mapa" },
    },
  },
} as const;
