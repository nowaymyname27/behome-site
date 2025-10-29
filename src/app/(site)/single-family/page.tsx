// File: src/app/(site)/single-family/page.tsx
import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import InvestmentHero from "./components/SingleFamilyHero";
import LocalizedSFHeading from "./components/LocalizedSFHeading";
import HouseCard, {
  HouseCardProps,
} from "../../../components/site-wide/HouseCard";
import { sanityClient } from "../../../sanity/lib/client";
import {
  singleFamilyHousesQuery,
  mapPointsByProductTypeQuery,
} from "../../../sanity/lib/queries";

// Map bits
import SiteMap from "../../../components/site-wide/SiteMap";
import type { Config, Point } from "../../../components/site-wide/map/types";

type SingleFamilyListItem = {
  title: string;
  slug: string;
  price: number;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  gallery: { src: string; alt?: string }[];
};

type MapPointDoc = {
  _id: string;
  title: string;
  address?: string;
  lat: number;
  lng: number;
  productType: "btr" | "single" | "cluster";
};

export const revalidate = 60;

export default async function SingleFamilyPage() {
  // Houses (cards)
  const data: SingleFamilyListItem[] = await sanityClient.fetch(
    singleFamilyHousesQuery
  );

  const houses: HouseCardProps[] = data.map((h) => ({
    image: { src: h.gallery?.[0]?.src ?? "", alt: h.gallery?.[0]?.alt },
    address: h.title,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    cars: h.cars,
    sqft: h.sqft,
    href: `/single-family/${h.slug}`,
  }));

  // Map points for Single-Family
  const rawPoints: MapPointDoc[] = await sanityClient.fetch(
    mapPointsByProductTypeQuery,
    { type: "single" }
  );

  // Convert to SiteMap Point[]
  const points: Point[] = rawPoints.map((p) => ({
    id: p._id,
    name: p.title,
    coords: [p.lng, p.lat],
  }));

  const config: Config | null =
    points.length > 0
      ? {
          theme: "light",
          center: points[0].coords,
          zoom: 8,
          points,
        }
      : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />
        <LocalizedSFHeading />

        {/* Cards */}
        <section className="w-full px-6 sm:px-12 lg:px-20 pb-10">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house, i) => (
              <HouseCard key={i} {...house} />
            ))}
          </div>
        </section>

        {/* Map (multi-marker) */}
        {config && (
          <section className="w-full border-t border-b border-border">
            {/* Section heading */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Our Single-Family Homes
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Explore all single-family homes available on the map below.
              </p>
            </div>

            {/* Map container */}
            <div style={{ height: "600px" }}>
              <SiteMap config={config} clickToUse />
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
