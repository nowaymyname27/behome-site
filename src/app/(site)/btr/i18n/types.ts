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
