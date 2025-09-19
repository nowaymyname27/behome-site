// File: src/i18n/site-wide/index.ts
import type { Locale } from "@/i18n/locale-context";
import { dict as header } from "./header";
import { dict as footer } from "./footer";

export type SiteI18n = {
  header: typeof header.en;
  footer: typeof footer.en;
};

export const tSite = (l: Locale): SiteI18n => ({
  header: header[l],
  footer: footer[l],
});
