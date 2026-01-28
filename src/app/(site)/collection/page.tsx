{
  /* Map Section */
}
{
  /* {config && (
          <section className="w-full border-t border-b border-border">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Our Single-Family Homes
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Explore all single-family homes available on the map below.
              </p>
            </div>

            <div style={{ height: "600px" }}>
              <SiteMap config={config} clickToUse />
            </div>
          </section>
        )} */
}

import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import CollectionHero from "./components/CollectionHero";
import { sanityClient } from "../../../sanity/lib/client";
import {
  houseCardsQuery,
  mapPointsByProductTypeQuery,
  collectionCardsQuery,
} from "../../../sanity/lib/queries";
import type { Config, Point } from "../../../components/site-wide/map/types";
import type { HouseCardProps } from "../../../components/site-wide/HouseCard";
import type { CollectionCardProps } from "./components/CollectionCard";
import CollectionDescription from "./components/CollectionDescription";
import CollectionHighlights from "./components/CollectionHighlights";
import CollectionSection from "./components/CollectionSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Browse our exclusive collection of new construction homes in Sarasota. View rental rates, cap rates, and floor plans for available properties.",
};

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
  lat: number;
  lng: number;
  productType: "btr" | "single" | "cluster";
};

// Define the incoming Sanity document shape for Collection Cards
type CollectionCardDoc = {
  _id: string;
  address: string;
  location: string;
  status: string; // "forSale" | "sold" | "rented" | "underConstruction"
  price: number;
  rent: number;
  renewalDate?: string;
  cap?: number;
  bedrooms: number;
  bathrooms: number;
  sqft: CollectionCardProps["sqft"];
  image: { src: string; alt?: string };
};

export const revalidate = 60;

export default async function CollectionPage() {
  // Fetch house cards
  const data: HouseCardItem[] = await sanityClient.fetch(houseCardsQuery);

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
    href: "#",
  }));

  // Fetch map points
  const rawPoints: MapPointDoc[] = await sanityClient.fetch(
    mapPointsByProductTypeQuery,
    { type: "single" },
  );

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

  // Fetch CollectionCards (BTR Collection)
  const collectionDocs = await sanityClient.fetch(collectionCardsQuery);

  const collectionCards: CollectionCardProps[] = collectionDocs.map(
    (doc: CollectionCardDoc) => ({
      id: doc._id,
      address: doc.address,
      location: doc.location, // Added location
      status: doc.status, // Pass the status string directly
      price: doc.price,
      rent: doc.rent,
      renewalDate: doc.renewalDate,
      cap: doc.cap,
      bedrooms: doc.bedrooms,
      bathrooms: doc.bathrooms,
      sqft: doc.sqft,
      image: {
        src: doc.image.src,
        alt: doc.image.alt,
      },
    }),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CollectionHero />
        <CollectionDescription />
        <CollectionHighlights />

        {/* BTR Collection Cards */}
        <CollectionSection cards={collectionCards} />
      </main>
      <Footer />
    </div>
  );
}
