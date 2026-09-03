import type { Metadata } from "next";

import HomeOldPage from "../(home)/HomeOldPage";

export const metadata: Metadata = {
  title: "Home Old",
  description:
    "Legacy RentPortfolio landing page preserved for direct access while SaraHomes becomes the primary homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <HomeOldPage />;
}
