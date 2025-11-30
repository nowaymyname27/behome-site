// Raw Sanity response type
export type SanityStyle = {
  _id: string;
  title: string;
  slug: string;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  gallery?: Array<{
    src: string;
    alt?: string;
  }>;
  floorplan?: {
    src: string;
    alt?: string;
  };
  matterportModelId?: string;
  matterportUrl?: string;
};

// Output type used by your components (HomeSpec + media)
export type MappedHomeSpec = {
  id: string;
  name: string;
  sqft: number;
  beds: number;
  baths: number;
  cars: number;
  media: Array<{
    type?: "image";
    src: string;
    alt: string;
  }>;
  cta?: { href: string }; // matches HomeSpec exactly
};
