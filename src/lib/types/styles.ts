// src/lib/types/styles.ts

export interface SanityStyle {
  _id: string;
  title: string;
  slug: string;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  gallery?: Array<{ src: string; alt?: string }>;
  floorplan?: { src: string; alt?: string };
  matterportUrl?: string;
}

export interface MappedHomeSpec {
  id: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars: number;
  media: Array<{ type: "image"; src: string; alt: string }>;
  cta?: { href: string };
  matterportHref?: string;
  floorplanSrc?: string; // ✅ Added this for the modal
}
