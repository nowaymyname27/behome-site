// File: src/app/(site)/single-family/i18n/types.ts
export type Locale = "en" | "es";

export interface InvestmentHeroStrings {
  title: string;
  subtitle: string;
  listHeading: string;
}

export type HomeDescriptionText = {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
};

export type HomeHighlightsText = {
  title: string;
  points: string[];
};
export type HomeHeroStrings = {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportingText: string;
  videoAria: string;
};
export type HomeSectionStrings = {
  title: string;
  subtitle: string;
  showMore: string;
};
export type HomeCardStrings = {
  status: {
    sold: string;
    rented: string;
    underConstruction: string;
    forSale: string;
  };
  actions: {
    viewOnMap: string;
    closeMap: string;
  };
  labels: {
    price: string;
    rent: string;
    renewalDate: string;
    cap: string;
  };
  toggle: string;
  metrics: {
    bedrooms: string;
    bathrooms: string;
    ac: string;
    garage: string;
    lanai: string;
    entry: string;
    total: string;
    lot: string;
    unit: string;
  };
};
