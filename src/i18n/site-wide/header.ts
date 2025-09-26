// File: /i18n/site-wide/header.ts
import type { Locale } from "@/i18n/locale-context";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  state?: "florida" | "partner-with-us"; // state is used only for theming/active color
  children?: NavChild[];
};

export function tHeader(locale: Locale) {
  // ...your existing copy; ensure brand etc. still here
  return {
    brand: locale === "es" ? "BeHome" : "BeHome",
  };
}

export function getHeaderNav(locale: Locale): NavItem[] {
  const FL_LABEL = locale === "es" ? "Florida" : "Florida";
  const BTR_LABEL =
    locale === "es" ? "Casas build-to-rent" : "Build-to-rent homes";
  const SFH_LABEL =
    locale === "es" ? "Casas unifamiliares" : "Single-family homes";

  const WHAT_LABEL =
    locale === "es" ? "Colabora con nosotros" : "Partner with us";

  return [
    {
      label: FL_LABEL,
      href: "/florida",
      state: "florida",
      children: [
        { label: BTR_LABEL, href: "/florida/build-to-rent" },
        { label: SFH_LABEL, href: "/florida/single-family" },
      ],
    },
    {
      label: WHAT_LABEL,
      href: "/partner-with-us",
      // no state => uses default header theme
    },
  ];
}
