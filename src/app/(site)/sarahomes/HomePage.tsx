import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import { mapSanityStyleToHome } from "../../../lib/mappers/styles";
import type { SanityStyle } from "../../../lib/types/styles";
import { sanityClient } from "../../../sanity/lib/client";
import {
  allStylesQuery,
  homeCardsQuery,
} from "../../../sanity/lib/queries";
import SectionTransition from "../btr/components/SectionTransition";
import ClientWrapper from "./components/ClientWrapper";
import HomeHero from "./components/HomeHero";
import type { HomeCardProps } from "./components/HomeCard";
import HomeSection from "./components/HomeSection";
import EvergladesCarousel from "./components/EvergladesCarousel";
import FloatingContactBox from "./components/FloatingContactBox";
import HomeTransition from "./components/HomeTransition";
import SaraHomesWelcomeTransition from "./components/SaraHomesWelcomeTransition";
import VeronaCarousel from "./components/VeronaCarousel";

type HomeCardDoc = {
  _id: string;
  address: string;
  location: string;
  coordinates?: { lat: number; lng: number } | null;
  status: string;
  price?: number | null;
  rent?: number | null;
  renewalDate?: string | null;
  cap?: number | null;
  bedrooms?: number | null;
  bathrooms?: number | null;
  sqft?: HomeCardProps["sqft"];
  image: { src: string; alt?: string };
};

export default async function HomePage() {
  const styleDocs = await sanityClient.fetch<SanityStyle[]>(allStylesQuery);
  const homes = styleDocs.map(mapSanityStyleToHome);

  const homeDocs = await sanityClient.fetch<HomeCardDoc[]>(homeCardsQuery);

  const homeCards: HomeCardProps[] = homeDocs.map(
    (doc: HomeCardDoc) => ({
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
        <HomeHero />
        <SaraHomesWelcomeTransition />
        <EvergladesCarousel />
        <HomeTransition />
        <FloatingContactBox />
        <VeronaCarousel />
        <SectionTransition />
        <ClientWrapper homes={homes} />
        <HomeSection cards={homeCards} />
      </main>
      <Footer />
    </div>
  );
}
