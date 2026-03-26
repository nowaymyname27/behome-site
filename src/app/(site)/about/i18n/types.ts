export type Locale = "en" | "es";

export type AboutHeroStrings = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type AboutPillar = {
  title: string;
  description: string;
};

export type AboutCompanyStat = {
  label: string;
  value: string;
};

export type AboutCompanyStrings = {
  eyebrow: string;
  heading: string;
  body: string[];
  stats: AboutCompanyStat[];
};

export type OwnerProfile = {
  name: string;
  role: string;
  bio: string;
  quote: string;
};

export type AboutOwnersStrings = {
  heading: string;
  subheading: string;
  owners: OwnerProfile[];
};

export type AboutPageStrings = {
  hero: AboutHeroStrings;
  company: AboutCompanyStrings;
  owners: AboutOwnersStrings;
};
