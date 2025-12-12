// File: src/app/(site)/single-family/i18n/types.ts
export type Locale = "en" | "es";

export interface InvestmentHeroStrings {
  title: string;
  subtitle: string;
  listHeading: string;
}

export type CollectionDescriptionText = {
  title: string;
  subtitle: string;
  heading: string;
  description: string;
};

export type CollectionHighlightsText = {
  title: string;
  points: string[];
};
export type CollectionHeroStrings = {
  title: string;
  subtitle: string;
  videoAria: string;
};
export type CollectionSectionStrings = {
  title: string;
  subtitle: string;
};
export type CollectionCardStrings = {
  status: {
    sold: string;
    rented: string;
    underConstruction: string;
    forSale: string;
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
