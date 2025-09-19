// ===============================
// File: /i18n/locales.ts
// ===============================
export type Locale = "en" | "es";
export const LOCALES: Locale[] = ["en", "es"];
export function uiLangCode(locale: Locale): "EN" | "ES" {
  return locale.toUpperCase() as "EN" | "ES";
}
