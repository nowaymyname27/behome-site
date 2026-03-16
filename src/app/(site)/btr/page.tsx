import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import BuiltForInvestors from "./components/BuiltForInvestors";
import EvergladesShowcase from "./components/EvergladesShowcase";
import BtrHero from "./components/BtrHero";
import CompaniesMarquee from "./components/CompaniesMarquee";

import { mapSanityStyleToHome } from "../../../lib/mappers/styles";
import type { SanityStyle } from "../../../lib/types/styles";
import { sanityClient } from "../../../sanity/lib/client";
import { allStylesQuery } from "../../../sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build-to-Rent Investment Model",
  description:
    "Learn why Build-to-Rent (BTR) is the future of real estate investing. RentPortfolio manages purpose-built communities optimized for long-term returns.",
};

async function getEvergladesHome() {
  const styles = await sanityClient.fetch<SanityStyle[]>(allStylesQuery);

  const everglades =
    styles.find((style) => style.slug.toLowerCase() === "everglades") ??
    styles.find((style) => style.title.toLowerCase().includes("everglades")) ??
    null;

  return everglades ? mapSanityStyleToHome(everglades) : null;
}

export default async function Page() {
  const evergladesHome = await getEvergladesHome();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <BtrHero />
        <CompaniesMarquee />
        <BuiltForInvestors />
        <EvergladesShowcase home={evergladesHome} />
      </main>

      <Footer />
    </div>
  );
}
