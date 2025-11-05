// File: src/app/(site)/(home)/i18n/types.ts

export type Locale = "en" | "es";

// Reusable function type for aria formatters
export type Formatter = (n: number) => string;

// ✅ Expanded union so both legacy and new IDs are valid
export type CardId =
  | "fl-plans"
  | "nc-communities"
  | "features"
  | "one"
  | "portfolios"
  | "collection";

export type Point = {
  title: string;
  body: string;
};

export type HomeBTRExplainedStat = {
  label: string;
  value: string;
  detail: string;
};

export type HomeBTRExplained = {
  title: string;
  description: string;
  quote: string;
  stats: HomeBTRExplainedStat[];
};

// ---- Home Display section
export type HomeDisplayStrings = {
  heading: string;
  description: ReadonlyArray<string>;
  points: ReadonlyArray<Point>;
  aria: {
    previous: string;
    next: string;
    goToSlide: Formatter;
  };
  media: { videoAria: string };
};

// ---- Home page text bundles
export type HomeStrings = {
  hero: { title: string; subtitle: string; videoAria: string };
  phrase: { text: string; attribution: string };
  philosophy: {
    left: { title: string; leadEm: string; leadRest: string };
    tip: string;
    aria: { panels: string; previous: string; next: string };
  };
  featureCards: { showHeader: boolean; title: string; blurb: string };
  display: HomeDisplayStrings;
};

// ---- HeroCard types
export type Cta = {
  href: string;
  label: string;
};

export type HeroCardStrings = {
  aria: { promotion: string };
  title?: string; // kept optional for backward compatibility
  heading: string;
  subheading: string;
  tabs: readonly [string, string, string];
};

// ---- Home brochure / philosophy slides
export type HomePhilosophySlide = {
  src: string;
  title: string;
  caption: string;
  body?: string;
};

export type HomeDisplaySlide = {
  src: string;
  alt: string;
};

// ---- Home Feature Cards
export type HomeFeatureCard = {
  id: CardId;
  href: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
  ctaLabel: string;
};

export type HomeFeatureCardsStrings = {
  showHeader: boolean;
  title: string;
  blurb: string;
};

export type ProductId = "single-family" | "btr" | "cluster";

// ---- Florida page types
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
