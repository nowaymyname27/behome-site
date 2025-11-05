// src/app/(site)/single-family/data/types.ts
import type { StaticImageData } from "next/image";

export type LngLat = [number, number]; // [lng, lat]

export type HouseImage = {
  src: StaticImageData | string;
  alt?: string;
};

export type FloorplanImage = {
  src: StaticImageData | string;
  alt?: string;
};

export type House = {
  slug: string;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  cars?: number;
  sqft: number;
  badge?: string;
  images: HouseImage[]; // hero first
  floorplan: FloorplanImage; // using SF1 for now as a placeholder
  matterportModelId?: string;
  coords: LngLat; // [lng, lat]
};
