import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about RentPortfolio and our mission.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" />
      <Footer />
    </div>
  );
}
