// File: src/i18n/site-wide/index.ts
import type { Locale } from "@/i18n/locale-context";
import { tHeader } from "./header";
import { dict as footer } from "./footer";

// Use the function-based header i18n instead of a 'dict' object
export type HeaderI18n = ReturnType<typeof tHeader>;

export type SiteI18n = {
  header: HeaderI18n;
  footer: typeof footer.en;
};

export const tSite = (l: Locale): SiteI18n => ({
  header: tHeader(l),
  footer: footer[l],
});
