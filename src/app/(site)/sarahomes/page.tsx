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

import CollectionSection from "./components/CollectionSection";
import ClientWrapper from "./components/ClientWrapper";
import EvergladesFloorPlan from "./components/EvergladesFloorPlan";
import FloatingContactBox from "./components/FloatingContactBox";
import FloorPlanShowcase from "./components/FloorPlanShowcase";
import FloorplanQuoteTransition from "./components/FloorplanQuoteTransition";
import HouseTransitionSlide from "./components/HouseTransitionSlide";
import SaraHomesWelcomeTransition from "./components/SaraHomesWelcomeTransition";
import VeronaFloorPlan from "./components/VeronaFloorPlan";
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
        <SaraHomesWelcomeTransition />
        <HouseTransitionSlide
          imageSrc="/everglades_exterior.png"
          imageAlt="Everglades residence exterior"
          titleEn="The Everglades Residence"
          titleEs="La Residencia Everglades"
        />
        <FloorPlanShowcase />
        <EvergladesFloorPlan />
        <FloorplanQuoteTransition
          quoteEn="A beautiful home in this coastal setting offers the foundation for a lifestyle defined by peace, balance, and everyday comfort while creating the right environment for personal growth, family development, and long-term well-being."
          quoteEs="Un hermoso hogar en este entorno costero ofrece la base para un estilo de vida definido por la paz, el equilibrio y la comodidad diaria, mientras crea el ambiente ideal para el crecimiento personal, el desarrollo familiar y el bienestar a largo plazo."
        />
        <FloatingContactBox />
        <HouseTransitionSlide
          imageSrc="/verona_exterior.png"
          imageAlt="Verona residence exterior"
          titleEn="Verona Residences"
          titleEs="Residencias Verona"
        />
        <VeronaShowcase />
        <VeronaFloorPlan />
        <FloorplanQuoteTransition
          quoteEn="In this coastal landscape, this beautiful home becomes the backdrop for a lifestyle shaped by serenity, harmony, and daily ease, creating the ideal space for personal development, family flourishing, and lasting wellness."
          quoteEs="En este paisaje costero, este hermoso hogar se convierte en el escenario de un estilo de vida marcado por la serenidad, la armonia y la facilidad cotidiana, creando el espacio ideal para el desarrollo personal, el florecimiento familiar y un bienestar duradero."
        />
        <SectionTransition />
        <ClientWrapper homes={homes} />
        <CollectionSection cards={collectionCards} />
      </main>
      <Footer />
    </div>
  );
}
