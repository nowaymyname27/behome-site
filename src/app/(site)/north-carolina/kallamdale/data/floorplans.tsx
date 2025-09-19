// File: src/app/(site)/north-carolina/kallamdale/data/floorplans.ts
export type Floorplan = {
  slug: string;
  name: string;
  image: string; // blueprint or teaser image
  sqFt: number;
  beds: number;
  baths: number;
  price: string;
  /** Matterport model ID for the walk-through */
  matterportModelId: string;
  /** Full-width photo gallery of the unit */
  gallery: string[];
};

export const floorplans: Floorplan[] = [
  {
    slug: "quarter-unit",
    name: "Quarter Unit",
    image: "/north-carolina/kallamdale/corner-unit/k6.png",
    sqFt: 1850,
    beds: 3,
    baths: 2.5,
    price: "$325,000",
    matterportModelId: "pxzSigb4rRt", // demo model ID
    gallery: [
      "/north-carolina/kallamdale/photos/quarter/1.jpg",
      "/north-carolina/kallamdale/photos/quarter/2.jpg",
      "/north-carolina/kallamdale/photos/quarter/3.jpg",
    ],
  },
  {
    slug: "center-unit",
    name: "Center Unit",
    image: "/north-carolina/kallamdale/middle-unit/k5.png",
    sqFt: 1720,
    beds: 3,
    baths: 2.5,
    price: "$299,000",
    matterportModelId: "ogBwoSU76k3", // another public demo ID
    gallery: [
      "/north-carolina/kallamdale/photos/center/1.jpg",
      "/north-carolina/kallamdale/photos/center/2.jpg",
      "/north-carolina/kallamdale/photos/center/3.jpg",
    ],
  },
];

// Helpers
export function getFloorplanBySlug(slug: string) {
  return floorplans.find((f) => f.slug === slug) ?? null;
}
