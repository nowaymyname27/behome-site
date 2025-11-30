import type { SanityStyle, MappedHomeSpec } from "../types/styles";

export function mapSanityStyleToHome(style: SanityStyle): MappedHomeSpec {
  const galleryImages =
    style.gallery?.map((img) => ({
      type: "image" as const,
      src: img.src,
      alt: img.alt || style.title,
    })) ?? [];

  const floorplanImage = style.floorplan
    ? [
        {
          type: "image" as const,
          src: style.floorplan.src,
          alt: style.floorplan.alt || `${style.title} floorplan`,
        },
      ]
    : [];

  return {
    id: style.slug, // anchor id for scrolling
    name: style.title, // shown in HomeShowcase + submenu
    sqft: style.sqft,
    beds: style.beds,
    baths: style.baths,
    cars: style.cars,
    media: [...galleryImages, ...floorplanImage],
    cta: { href: `/styles/${style.slug}` }, // your chosen route
  };
}
