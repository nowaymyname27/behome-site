import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import InvestmentHero from "./components/SingleFamilyHero";
import LocalizedSFHeading from "./components/LocalizedSFHeading";
import HouseCard, {
  HouseCardProps,
} from "../../../components/site-wide/HouseCard";
import { sanityClient } from "../../../sanity/lib/client";
import { singleFamilyHousesQuery } from "../../../sanity/lib/queries";

type SingleFamilyListItem = {
  title: string;
  slug: string;
  price: number;
  beds: number;
  baths: number;
  cars: number;
  sqft: number;
  gallery: { src: string; alt?: string }[];
};

export const revalidate = 60;

export default async function SingleFamilyPage() {
  const data: SingleFamilyListItem[] = await sanityClient.fetch(
    singleFamilyHousesQuery
  );

  const houses: HouseCardProps[] = data.map((h) => ({
    image: { src: h.gallery?.[0]?.src ?? "", alt: h.gallery?.[0]?.alt },
    address: h.title,
    price: h.price,
    beds: h.beds,
    baths: h.baths,
    cars: h.cars,
    sqft: h.sqft,
    href: `/single-family/${h.slug}`,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />
        <LocalizedSFHeading />
        <section className="w-full px-6 sm:px-12 lg:px-20 pb-10">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house, i) => (
              <HouseCard key={i} {...house} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
