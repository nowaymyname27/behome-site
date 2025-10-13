// src/sanity/lib/image.ts
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { projectId, dataset } from "@/sanity/env";

// create builder once using your env config
const builder = imageUrlBuilder({ projectId, dataset });

// helper to generate a typed image url
export function urlFor(source: Image | string) {
  return builder.image(source);
}
