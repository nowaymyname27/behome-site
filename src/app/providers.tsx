// src/app/providers.tsx
"use client";

import { LocaleProvider } from "@/i18n/locale-context";

export default function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: "en" | "es";
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
  );
}
