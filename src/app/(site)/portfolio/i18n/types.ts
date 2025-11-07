// File: src/app/(site)/(invest)/i18n/types.ts
export type Locale = "en" | "es";

export interface InvestmentHeroStrings {
  title: string;
  subtitle: string;
  listHeading: string;
}

export type OneDescriptionText = {
  title: string;
  subtitle: string;
  description: string;
};

export type OneExpansionText = {
  description: string;
  points: {
    title: string;
    text: string;
  }[];
};
