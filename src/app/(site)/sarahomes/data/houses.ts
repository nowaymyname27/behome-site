// src/app/(site)/single-family/data/houses.ts
import type { House } from "./types";

// Local images (same folder tree you showed)
import SF1 from "../images/SF1.jpg";
import SF2 from "../images/SF2.jpg";
import SF3 from "../images/SF3.jpg";

export const houses: House[] = [
  {
    slug: "oakridge",
    name: "The Oakridge",
    address: "220 Lakeview Dr, Orlando, FL",
    price: 459_995,
    beds: 4,
    baths: 3,
    cars: 2,
    sqft: 2050,
    badge: "Move-in Ready",
    images: [
      { src: SF1, alt: "The Oakridge exterior" },
      { src: SF2, alt: "Living room" },
      { src: SF3, alt: "Kitchen" },
    ],
    // Using SF1 as a temporary floorplan image until you add a real plan
    floorplan: { src: SF1, alt: "Floorplan (placeholder)" },
    matterportModelId: "abcdEFGHijk", // replace when you have the real one
    coords: [-81.379234, 28.538336],
  },
];

export function getHouseBySlug(slug: string) {
  return houses.find((h) => h.slug === slug);
}

export function getAllHouseSlugs() {
  return houses.map((h) => h.slug);
}
