import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import SubmenuWrapper from "./components/SubmenuWrapper";
import HomeShowcase from "../../../components/site-wide/HomeShowcase";
import MediaCarousel from "../../../components/site-wide/MediaCarousel";
import SectionTransition from "./components/SectionTransition";
import BuiltForInvestors from "./components/BuiltForInvestors";
import EvergladesShowcase from "./components/EvergladesShowcase";
import OtherStylesComparison from "./components/OtherStylesComparison";
import BtrHero from "./components/BtrHero";
import CompaniesMarquee from "./components/CompaniesMarquee";

import { allStylesQuery } from "../../../sanity/lib/queries";
import { sanityClient } from "../../../sanity/lib/client";
import { mapSanityStyleToHome } from "../../../lib/mappers/styles";
import type { SanityStyle } from "../../../lib/types/styles";

import ClientWrapper from "./components/ClientWrapper";

/**
 * Server-side Sanity fetch
 */
async function getHomes() {
  const data = await sanityClient.fetch<SanityStyle[]>(allStylesQuery);
  return data.map(mapSanityStyleToHome);
}

export default async function Page() {
  const homes = await getHomes();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Everything below this remains a server component, except sticky logic */}
      <main className="flex-1">
        <BtrHero />
        <CompaniesMarquee />
        <BuiltForInvestors />
        <EvergladesShowcase />
        <OtherStylesComparison />
        <SectionTransition />

        {/* Pass homes into a small client bridge so sticky offsets still work */}
        <ClientWrapper homes={homes} />
      </main>

      <Footer />
    </div>
  );
}
