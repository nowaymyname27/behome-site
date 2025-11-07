// src/sanity/lib/queries.ts
// Handles both label ("Single-Family") and value ("single") for $type

export const housesQuery = `
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

export const houseBySlugQuery = `
  *[_type == "house" && slug.current == $slug][0]{
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

export const houseSlugsQuery = `
  *[_type == "house" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const housesByTypeQuery = `
  *[_type == "house"]{
    _id,
    title,
    address,
    price,
    "image": {
      "src": image.asset->url,
      "alt": coalesce(image.alt, address)
    },
    // pull both title and slug from the style reference
    "style": style->title,
    "styleSlug": style->slug.current,
    mapPoint->{
      lat,
      lng
    }
  } | order(_createdAt desc)
`;

export const styleBySlugQuery = `
  *[_type == "style" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    beds,
    baths,
    cars,
    sqft,
    "gallery": gallery[]{
      "src": asset->url,
      "alt": coalesce(alt, ^.title)
    },
    "floorplan": select(
      defined(floorplan) => {
        "src": floorplan.asset->url,
        "alt": coalesce(floorplan.alt, "Floorplan")
      },
      null
    ),
    matterportModelId,
    matterportUrl
  }
`;

export const styleSlugsQuery = `
  *[_type == "style" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const mapPointsByRegionQuery = `
  *[_type == "mapPoint" && region == $region]{
    _id,
    title,
    address,
    blurb,
    href,
    productType,
    lng,
    lat
  } | order(_createdAt desc)
`;

export const mapPointsByProductTypeQuery = `
  *[_type == "mapPoint" && productType == $type]{
    _id,
    title,
    address,
    lat,
    lng,
    productType
  } | order(_createdAt desc)
`;

export const allMapPointsQuery = `
  *[_type == "mapPoint" && defined(lat) && defined(lng)]{
    _id,
    title,
    address,
    lat,
    lng,
    productType,
    blurb,
    href
  } | order(_createdAt desc)
`;

export const collectionQuery = `
  *[_type == "collection"]{
    _id,
    address,
    "image": {
      "src": photo.asset->url,
      "alt": coalesce(photo.alt, address)
    },
    "style": style->title,        // ✅ pull the title from reference
    "styleSlug": style->slug.current, // optional, if you ever want to link to style pages
    status,
    price,
    returnRate
  } | order(_createdAt desc)
`;
