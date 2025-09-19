// src/app/layout.tsx
import "./globals.css";
import { cookies } from "next/headers";
import Providers from "@/app/providers"; // move/keep Providers at src/app/providers.tsx
import Header from "@/components/site-wide/Header";
import Footer from "@/components/site-wide/Footer";

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
