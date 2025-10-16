// src/app/layout.tsx
import "./globals.css";
import { cookies } from "next/headers";
import Providers from "./providers"; // move/keep Providers at src/app/providers.tsx

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
