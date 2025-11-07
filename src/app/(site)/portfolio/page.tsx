import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import InvestmentHero from "./components/BTRHero";
import LocalizedBtrHeading from "./components/LocalizedBtrHeading";
import { sanityClient } from "../../../sanity/lib/client";
import {
  houseCardsQuery,
  mapPointsByProductTypeQuery,
} from "../../../sanity/lib/queries";

import SiteMap from "../../../components/site-wide/SiteMap";
import type { Config, Point } from "../../../components/site-wide/map/types";
import OneDescription from "./components/OneDescription";
import OneExpansion from "./components/OneExpansion";
import PortfolioSection from "./components/PortfolioSection";
import type { HouseCardProps } from "../../../components/site-wide/HouseCard";

type HouseCardItem = {
  _id: string;
  address: string;
  image: { src: string; alt?: string };
  status: "sold" | "available";
  price: number;
  returnRate?: number;
  style?: {
    title: string;
    beds?: number;
    baths?: number;
    cars?: number;
    sqft?: number;
  };
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
  // ✅ Fetch Build-to-Rent house data
  const data: HouseCardItem[] = await sanityClient.fetch(houseCardsQuery);

  // ✅ Map into HouseCardProps for display
  const houses: HouseCardProps[] = data.map((h) => ({
    id: h._id,
    image: h.image,
    address: h.address,
    price: h.price,
    sold: h.status === "sold",
    styleBadge: h.style?.title,
    returnRate: h.returnRate,
    beds: h.style?.beds,
    baths: h.style?.baths,
    cars: h.style?.cars,
    sqft: h.style?.sqft,
    href: "#", // can be updated later to link to detail pages
  }));

  // ✅ Fetch map points for BTR communities
  const rawPoints: MapPointDoc[] = await sanityClient.fetch(
    mapPointsByProductTypeQuery,
    { type: "btr" }
  );

  // ✅ Convert to SiteMap format
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

  // ✅ Render page
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />
        <OneDescription />
        <OneExpansion />

        {/* Portfolio Section */}
        <PortfolioSection
          title="Expand Your Portfolio"
          subtitle="Build and rent properties designed for long-term growth and stable returns."
          houses={houses}
        />

        {/* Map Section */}
        {config && (
          <section className="w-full border-t border-b border-border">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Our Communities
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Explore all build-to-rent homes on the map below.
              </p>
            </div>

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
