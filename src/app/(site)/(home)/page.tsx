import type { Metadata } from "next";

import SaraHomesPage from "../sarahomes/SaraHomesPage";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "SaraHomes",
  description:
    "Browse SaraHomes and explore immersive floorplan and media showcases for our Sarasota styles.",
};

export default function Page() {
  return <SaraHomesPage />;
}
