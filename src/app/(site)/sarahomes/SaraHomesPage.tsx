import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import { mapSanityStyleToHome } from "../../../lib/mappers/styles";
import type { SanityStyle } from "../../../lib/types/styles";
import { sanityClient } from "../../../sanity/lib/client";
import {
  allStylesQuery,
  collectionCardsQuery,
} from "../../../sanity/lib/queries";
import SectionTransition from "../btr/components/SectionTransition";
import ClientWrapper from "./components/ClientWrapper";
import CollectionHero from "./components/CollectionHero";
import type { CollectionCardProps } from "./components/CollectionCard";
import CollectionSection from "./components/CollectionSection";
import EvergladesCarousel from "./components/EvergladesCarousel";
import FloatingContactBox from "./components/FloatingContactBox";
import FloorplanQuoteTransition from "./components/FloorplanQuoteTransition";
import SaraHomesWelcomeTransition from "./components/SaraHomesWelcomeTransition";
import VeronaCarousel from "./components/VeronaCarousel";

type CollectionCardDoc = {
  _id: string;
  address: string;
  location: string;
  coordinates?: { lat: number; lng: number } | null;
  status: string;
  price: number;
  rent: number;
  renewalDate?: string;
  cap?: number;
  bedrooms: number;
  bathrooms: number;
  sqft: CollectionCardProps["sqft"];
  image: { src: string; alt?: string };
};

export default async function SaraHomesPage() {
  const styleDocs = await sanityClient.fetch<SanityStyle[]>(allStylesQuery);
  const homes = styleDocs.map(mapSanityStyleToHome);

  const collectionDocs = await sanityClient.fetch(collectionCardsQuery);

  const collectionCards: CollectionCardProps[] = collectionDocs.map(
    (doc: CollectionCardDoc) => ({
      id: doc._id,
      address: doc.address,
      location: doc.location,
      coordinates: doc.coordinates ?? undefined,
      status: doc.status,
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
        <EvergladesCarousel />
        <FloorplanQuoteTransition
          quoteEn="In this coastal landscape, this beautiful home becomes the backdrop for a lifestyle shaped by serenity, harmony, and daily ease, creating the ideal space for personal development, family flourishing, and lasting wellness."
          quoteEs="En este paisaje costero, este hermoso hogar se convierte en el escenario de un estilo de vida marcado por la serenidad, la armonia y la facilidad cotidiana, creando el espacio ideal para el desarrollo personal, el florecimiento familiar y un bienestar duradero."
        />
        <FloatingContactBox />
        <VeronaCarousel />
        <SectionTransition />
        <ClientWrapper homes={homes} />
        <CollectionSection cards={collectionCards} />
      </main>
      <Footer />
    </div>
  );
}
