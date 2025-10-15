// Florida/i18n/types.ts
export type Locale = "en" | "es";
export type ProductId = "single-family" | "btr" | "cluster";

export type Slide = {
  src: string;
  title: string;
  caption: string;
  body?: string;
};

export type FloridaStrings = {
  heading: string;
  hero: {
    title: string;
    subtitle: string;
    promoTitle: string;
    promoText: string;
    promoCta: string;
  };
  description: {
    desc: { title: string; body: string };
  };
  map: {
    products: Record<ProductId, { title: string; description: string }>;
    clearFilters: string;
    card: { explore: string; toggleAria: string };
  };
  project: {
    project: { name: string };
    card: {
      image?: string;
      description: string;
      href: string;
      cta: string;
      aria: { openDetails: string };
    };
    map: { overlayCta: string; aria: { clickToInteract: string } };
  };
  brochure: {
    left: { title: string; leadEm: string; leadRest: string; tip: string };
    aria: { panels: string; previous: string; next: string };
    slides: ReadonlyArray<Slide>;
  };
};
