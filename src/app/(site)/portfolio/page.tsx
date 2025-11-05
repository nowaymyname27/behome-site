// File: app/(site)/build-to-rent/page.tsx
import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import InvestmentHero from "./components/BTRHero";
import LocalizedBtrHeading from "./components/LocalizedBtrHeading";
import BtrHouseCard, {
  HouseCardProps,
} from "../../../components/site-wide/BtrHouseCard";
import { sanityClient } from "../../../sanity/lib/client";
import {
  housesByTypeQuery,
  mapPointsByProductTypeQuery,
} from "../../../sanity/lib/queries";

// Map bits
import SiteMap from "../../../components/site-wide/SiteMap";
import type { Config, Point } from "../../../components/site-wide/map/types";

type HouseListItem = {
  image: { src: string; alt?: string };
  address: string;
  price: number;
  slug: string;
  style?: string; // from style->title
  styleSlug?: string; // from style->slug.current
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

export default async function BuildToRentPage() {
  // Houses (cards)
  const data: HouseListItem[] = await sanityClient.fetch(housesByTypeQuery);
  const houses: HouseCardProps[] = data.map((h) => ({
    image: h.image,
    address: h.address,
    price: h.price,
    href: h.styleSlug ? `/build-to-rent/${h.styleSlug}` : "#",
    style: h.style,
  }));

  // Map points for BTR
  const rawPoints: MapPointDoc[] = await sanityClient.fetch(
    mapPointsByProductTypeQuery,
    { type: "btr" }
  );
  console.log("Map points:", rawPoints);

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
  console.log("Map config:", config);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />
        <LocalizedBtrHeading />

        {/* Cards */}
        <section className="w-full px-6 sm:px-12 lg:px-20 pb-10">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house, i) => (
              <BtrHouseCard key={i} {...house} />
            ))}
          </div>
        </section>

        {/* Map (multi-marker) */}
        {config && (
          <section className="w-full border-t border-b border-border">
            {/* Section heading */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Our Communities
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Explore all build-to-rent homes on the map below.
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
