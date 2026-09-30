import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import BuiltForInvestors from "./components/BuiltForInvestors";
import BtrHero from "./components/BtrHero";
import CompaniesMarquee from "./components/CompaniesMarquee";
import OldHomeBTRExplained from "../(home)/components/OldHomeBTRExplained";
import OldHomeFeatureCards from "../(home)/components/OldHomeFeatureCards";
import OldHomeFloridaBrochure from "../(home)/components/OldHomeFloridaBrochure";
import OldHomeDisplay from "../(home)/components/OldHomeDisplay";
import OldHomeBrochure from "../(home)/components/OldHomeBrochure";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build-to-Rent Investment Model",
  description:
    "Learn why Build-to-Rent (BTR) is the future of real estate investing. RentPortfolio manages purpose-built communities optimized for long-term returns.",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <BtrHero />
        <CompaniesMarquee />
        <OldHomeBTRExplained variant="light" />
        <BuiltForInvestors />
        <OldHomeFeatureCards variant="modern" />
        <OldHomeFloridaBrochure />
        <OldHomeDisplay />
        <OldHomeBrochure />
      </main>

      <Footer />
    </div>
  );
}
