import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import AboutHero from "./components/AboutHero";
import AboutCompanyStory from "./components/AboutCompanyStory";
import AboutOwnersShowcase from "./components/AboutOwnersShowcase";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the RentPortfolio team, learn our company story, and see the mission behind our Build-to-Rent communities.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutCompanyStory />
        <AboutOwnersShowcase />
      </main>
      <Footer />
    </div>
  );
}
