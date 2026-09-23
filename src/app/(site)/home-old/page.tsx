import type { Metadata } from "next";

import OldHomePage from "../(home)/OldHomePage";

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
  return <OldHomePage />;
}
