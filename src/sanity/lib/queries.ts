// src/sanity/lib/queries.ts
// Handles both label ("Single-Family") and value ("single") for $type

const productTypeValue = `
  select(
    $type in ["single","btr"] => $type,
    $type == "Single-Family" => "single",
    $type == "Build-to-Rent" => "btr",
    lower($type)
  )
`;

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
  *[_type == "house" && productType == ${productTypeValue}]{
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

export const houseBySlugAndTypeQuery = `
  *[_type == "house" && slug.current == $slug && productType == ${productTypeValue}][0]{
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

export const houseSlugsByTypeQuery = `
  *[_type == "house" && productType == ${productTypeValue} && defined(slug.current)]{
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
