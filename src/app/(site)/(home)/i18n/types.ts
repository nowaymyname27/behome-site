// File: src/app/(site)/(home)/i18n/types.ts
export type Locale = "en" | "es";

// Reusable function type for aria formatters
export type Formatter = (n: number) => string;

export type Point = {
  title: string;
  body: string;
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
  display: {
    heading: string;
    points: ReadonlyArray<Point>;
    aria: {
      previous: string;
      next: string;
      goToSlide: Formatter;
    };
    media: { videoAria: string };
  };
};

// ---- HeroCard types
export type Cta = {
  href: string;
  label: string;
};

export type HeroCardStrings = {
  aria: { promotion: string };
  // keep title optional for backward-compat
  title?: string;
  heading: string;
  subheading: string; // “SaraHomes by RentPortfolio”
  tabs: readonly [string, string, string];
};
// ---- Home brochure/philosophy slides
export type HomePhilosophySlide = {
  src: string; // builder returns string paths
  title: string;
  caption: string;
  body?: string;
};
export type HomeDisplaySlide = {
  src: string;
  alt: string;
};
export type CardId = "fl-plans" | "nc-communities" | "features";

export type HomeFeatureCard = {
  id: CardId;
  href: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
  ctaLabel: string;
};
