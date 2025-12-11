// File: src/app/(site)/(home)/i18n/types.ts

// 1. IMPORT THE HERO TYPE
import { HomeHeroStrings } from "./hero";

export type Locale = "en" | "es";
export type Formatter = (n: number) => string;

export type CardId =
  | "fl-plans"
  | "nc-communities"
  | "features"
  | "one"
  | "portfolios"
  | "collection";

export type Point = { title: string; body: string };

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

export type HomeDisplayStrings = {
  heading: string;
  description: ReadonlyArray<string>;
  points: ReadonlyArray<Point>;
  aria: { previous: string; next: string; goToSlide: Formatter };
  media: { videoAria: string };
};

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

export type Cta = { href: string; label: string };

export type HeroCardStrings = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export type HomePhilosophySlide = {
  src: string;
  title: string;
  caption: string;
  body?: string;
};

export type HomeDisplaySlide = { src: string; alt: string };

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

export type Slide = {
  src: string;
  title: string;
  caption: string;
  body?: string;
};

// --- THIS IS THE PART THAT WAS WRONG ---
export type FloridaStrings = {
  heading: string;

  // 1. KEEP THIS: Use the new Hero type
  hero: HomeHeroStrings;

  // 2. RESTORE THESE: Use the correct structure for your data
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
