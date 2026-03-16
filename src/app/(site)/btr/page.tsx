import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import BuiltForInvestors from "./components/BuiltForInvestors";
import EvergladesShowcase from "./components/EvergladesShowcase";
import BtrHero from "./components/BtrHero";
import CompaniesMarquee from "./components/CompaniesMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build-to-Rent Investment Model",
  description:
    "Learn why Build-to-Rent (BTR) is the future of real estate investing. RentPortfolio manages purpose-built communities optimized for long-term returns.",
};

export default async function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <BtrHero />
        <CompaniesMarquee />
        <BuiltForInvestors />
        <EvergladesShowcase />
      </main>

      <Footer />
    </div>
  );
}
