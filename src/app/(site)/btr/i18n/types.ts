// file: src/app/(site)/cluster/i18n/types.ts
export type Locale = "en" | "es";

export interface ClusterDescriptionStrings {
  heading: string;
  body: {
    p1: string;
    p2: string;
    p3Muted: string;
  };
  items: { title: string }[];
}

export interface InvestmentHeroStrings {
  heading: string;
  subheading: string;
}

export type BtrBuiltForInvestorsHighlight = {
  title: string;
  description: string;
  tags: string[];
};

export type BtrBuiltForInvestorsStrings = {
  title: string;
  paragraphs: string[];
  highlight: BtrBuiltForInvestorsHighlight;
};

export type StatItem = {
  label: string;
  value: string;
};

export type EvergladesShowcaseStrings = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  statsTitle: string;
  stats: StatItem[];
  toggleShow: string;
  toggleHide: string;
};

export type OtherStyleModel = {
  id: string;
  name: string;
  alt: string;
  tagline: string;
  highlight?: boolean;
  features: string[];
};

export type OtherStylesStrings = {
  title: string;
  subtitle: string;
  models: OtherStyleModel[];
};

// --- Add this ---
export type BtrHeroStrings = {
  title: string;
  subtitle: string;
  videoAria: string;
};

export type CompaniesMarqueeStrings = {
  title: string;
  groupValuedAt: string;
  logoAlt: string;
};
