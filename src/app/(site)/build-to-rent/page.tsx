import Header from "../../../components/site-wide/Header";
import Footer from "../../../components/site-wide/Footer";
import InvestmentHero from "./components/BTRHero";
import LocalizedBtrHeading from "./components/LocalizedBtrHeading";
import BtrHouseCard, {
  HouseCardProps,
} from "../../../components/site-wide/BtrHouseCard";
import { sanityClient } from "../../../sanity/lib/client";
import { housesByTypeQuery } from "../../../sanity/lib/queries";

type HouseListItem = {
  image: { src: string; alt?: string };
  address: string;
  price: number;
  style?: string;
  styleSlug?: string;
};

export const revalidate = 60;

export default async function BuildToRentPage() {
  const data: HouseListItem[] = await sanityClient.fetch(housesByTypeQuery);

  const houses: HouseCardProps[] = data.map((h) => ({
    image: h.image,
    address: h.address,
    price: h.price,
    href: h.styleSlug ? `/build-to-rent/${h.styleSlug}` : "#",
    style: h.style,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <InvestmentHero />
        <LocalizedBtrHeading />
        <section className="w-full px-6 sm:px-12 lg:px-20 pb-10">
          <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house, i) => (
              <BtrHouseCard key={i} {...house} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
