// src/lib/mappers/styles.ts
import type { SanityStyle, MappedHomeSpec } from "../types/styles";

export function mapSanityStyleToHome(style: SanityStyle): MappedHomeSpec {
  const galleryImages =
    style.gallery?.map((img) => ({
      type: "image" as const,
      src: img.src,
      alt: img.alt || style.title,
    })) ?? [];

  return {
    id: style.slug,
    name: style.title,
    sqft: style.sqft,
    beds: style.beds,
    baths: style.baths,
    cars: style.cars,
    media: galleryImages, // We keep the gallery strictly for the slider/carousel

    // ✅ 1. Pass the URL for the Modal
    floorplanSrc: style.floorplan?.src,

    // ✅ 2. Pass the Matterport URL
    matterportHref: style.matterportUrl || undefined,

    // Optional: We can keep this if you want a fallback link,
    // but the component will prioritize floorplanSrc for the button now.
    cta: { href: `/styles/${style.slug}` },
  };
}
