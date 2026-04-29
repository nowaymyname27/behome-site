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
  allStylesQuery,
  collectionCardsQuery,
} from "../../../sanity/lib/queries";
import type { CollectionCardProps } from "./components/CollectionCard";
import type { SanityStyle } from "../../../lib/types/styles";
import { mapSanityStyleToHome } from "../../../lib/mappers/styles";

import CollectionDescription from "./components/CollectionDescription";
import CollectionSection from "./components/CollectionSection";
import ClientWrapper from "./components/ClientWrapper";
import FloorPlanShowcase from "./components/FloorPlanShowcase";
import VeronaShowcase from "./components/VeronaShowcase";
import SectionTransition from "../btr/components/SectionTransition";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaraHomes",
  description:
    "Browse SaraHomes and explore immersive floorplan and media showcases for our Sarasota styles.",
};

// Define the incoming Sanity document shape for Collection Cards
type CollectionCardDoc = {
  _id: string;
  address: string;
  location: string;
  coordinates?: { lat: number; lng: number } | null;
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
  const styleDocs = await sanityClient.fetch<SanityStyle[]>(allStylesQuery);
  const homes = styleDocs.map(mapSanityStyleToHome);

  const collectionDocs = await sanityClient.fetch(collectionCardsQuery);

  const collectionCards: CollectionCardProps[] = collectionDocs.map(
    (doc: CollectionCardDoc) => ({
      id: doc._id,
      address: doc.address,
      location: doc.location, // Added location
      coordinates: doc.coordinates ?? undefined,
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
        <FloorPlanShowcase />
        <CollectionDescription />
        <VeronaShowcase />
        <CollectionSection cards={collectionCards} />
        <SectionTransition />
        <ClientWrapper homes={homes} />
      </main>
      <Footer />
    </div>
  );
}
