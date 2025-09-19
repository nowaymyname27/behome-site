// File: /i18n/locale-context.tsx
"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "es";
type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
};

const LocaleCtx = createContext<Ctx | null>(null);

function getCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|; )locale=(en|es)/);
  return (m?.[1] as Locale) ?? null;
}

export function LocaleProvider({
  children,
  initialLocale = "en" as const,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  // Read once on mount
  useEffect(() => {
    const fromCookie = getCookieLocale();
    if (fromCookie) setLocale(fromCookie);
  }, []);

  // Persist + reflect in <html lang="">
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((l) => (l === "en" ? "es" : "en")),
    }),
    [locale]
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used within <LocaleProvider>");
  return ctx;
}

export function uiLangCode(locale: Locale): "EN" | "ES" {
  return locale.toUpperCase() as "EN" | "ES";
}
