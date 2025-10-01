// File: src/app/(site)/(home)/components/Phrase.tsx
"use client";

import { useLocale } from "@/i18n/locale-context";
import { tHome } from "@/app/(site)/(home)/i18n";

export default function Phrase() {
  const { locale } = useLocale();
  const i = tHome(locale).phrase;

  return (
    <section className="w-full px-6 lg:px-8 section-pad text-center text-foreground bg-background">
      <blockquote className="max-w-3xl mx-auto">
        <p className="h2">{i.text}</p>
        <footer className="mt-3">{i.attribution}</footer>
      </blockquote>
    </section>
  );
}
