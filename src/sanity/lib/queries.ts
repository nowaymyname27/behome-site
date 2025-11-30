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

export const houseCardsQuery = `
  *[_type == "house_card"]{
    _id,
    address,
    "slug": slug.current,
    "image": {
      "src": image.asset->url,
      "alt": coalesce(image.alt, address)
    },
    "style": style->{
      title,
      beds,
      baths,
      cars,
      sqft
    },
    status,
    price,
    returnRate
  } | order(_createdAt desc)
`;

export const collectionCardsQuery = `
  *[_type == "collectionCard"]{
    _id,
    address,
    sold,
    price,
    rent,
    renewalDate,
    cap,
    bedrooms,
    bathrooms,
    sqft,
    "image": {
      "src": image.asset->url,
      "alt": coalesce(image.alt, address)
    }
  } | order(_createdAt desc)
`;

// file: sanity/lib/queries.ts

export const allStylesQuery = `
  *[_type == "style"]{
    _id,
    title,
    "slug": slug.current,
    beds,
    baths,
    cars,
    sqft,
    gallery[]{
      "src": asset->url,
      alt
    },
    floorplan{
      "src": asset->url,
      alt
    },
    matterportModelId,
    matterportUrl
  } | order(title asc)
`;
