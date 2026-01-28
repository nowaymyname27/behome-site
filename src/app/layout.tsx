// src/app/layout.tsx
import "./globals.css";
import { cookies } from "next/headers";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rentportfolio.com"),

  title: {
    default: "RentPortfolio | New Build-to-Rent Homes in Sarasota, FL",
    template: "%s | RentPortfolio",
  },

  description:
    "Discover brand new rental homes in Sarasota, Florida. RentPortfolio builds and manages high-quality residential communities designed for modern living.",

  keywords: [
    "Sarasota rentals",
    "Build to rent Florida",
    "New construction rental homes",
    "RentPortfolio",
    "Single family rentals Sarasota",
    "Property management",
  ],

  openGraph: {
    title: "RentPortfolio | Brand New Rental Homes",
    description:
      "We build and manage premier rental properties in Sarasota. Find your perfect new home today.",
    url: "/",
    siteName: "RentPortfolio",
    images: [
      {
        url: "/RP_bluebg_logo.png", // Uses the logo you have in the public folder
        width: 800, // Approximate size, helps social platforms load it faster
        height: 600,
        alt: "RentPortfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLocale = (
    cookieStore.get("locale")?.value === "es" ? "es" : "en"
  ) as "en" | "es";

  return (
    <html lang={cookieLocale}>
      <body>
        <Providers initialLocale={cookieLocale}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
