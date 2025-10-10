// file: src/sanity/lib/queries.server.ts
import "server-only";

export const housesQuery = /* groq */ `
  *[_type == "house"]{
    _id,
    "slug": slug.current,
    address,
    price,
    beds,
    baths,
    cars,
    sqft,
    "image": {
      "src": image.asset->url,
      "alt": coalesce(image.alt, address)
    },
    badgeKey
  } | order(_createdAt desc)
`;

export const houseBySlugQuery = /* groq */ `
  *[_type == "house" && slug.current == $slug][0]{
    "slug": slug.current,
    name,
    address,
    price,
    beds,
    baths,
    cars,
    sqft,
    // HeroGallery expects an array of { src, alt }
    "images": gallery[]{
      "src": asset->url,
      "alt": coalesce(alt, ^.address)
    },
    // FloorplanSection expects plan; we’ll give { src, alt }
    "floorplan": select(
      defined(floorplan) => {
        "src": floorplan.asset->url,
        "alt": coalesce(floorplan.alt, "Floorplan")
      },
      null
    ),
    // VirtualTourSection uses the raw ID
    matterportModelId,
    // MapSection wants coords (we’ll produce [lng, lat] if both exist)
    "coords": select(defined(lng) && defined(lat) => [lng, lat], null)
  }
`;

export const houseSlugsQuery = /* groq */ `
  *[_type == "house" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const housesByTypeQuery = /* groq */ `
  *[_type == "house" && productType == $type]{
    _id,
    "slug": slug.current,
    address,
    price,
    beds,
    baths,
    cars,
    sqft,
    "image": {
      "src": image.asset->url,
      "alt": coalesce(image.alt, address)
    },
    badgeKey
  } | order(_createdAt desc)
`;

export const houseBySlugAndTypeQuery = /* groq */ `
  *[_type == "house" && slug.current == $slug && productType == $type][0]{
    "slug": slug.current,
    name,
    address,
    price,
    beds,
    baths,
    cars,
    sqft,
    "images": gallery[]{
      "src": asset->url,
      "alt": coalesce(alt, ^.address)
    },
    "floorplan": select(
      defined(floorplan) => {
        "src": floorplan.asset->url,
        "alt": coalesce(floorplan.alt, "Floorplan")
      },
      null
    ),
    matterportModelId,
    "coords": select(defined(lng) && defined(lat) => [lng, lat], null)
  }
`;

export const houseSlugsByTypeQuery = /* groq */ `
  *[_type == "house" && productType == $type && defined(slug.current)]{
    "slug": slug.current
  }
`;
