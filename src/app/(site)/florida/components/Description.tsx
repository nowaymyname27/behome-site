// file: src/components/florida/Description.tsx
// (unchanged imports per your instruction)
import type { Locale } from "../../../../i18n/locale-context";
import { tFlorida } from "../i18n";

export default function Description({ locale }: { locale: Locale }) {
  const i = tFlorida(locale).description;

  return (
    <section className="w-full px-6 lg:px-8 section-pad text-center bg-background text-foreground">
      <blockquote className="max-w-3xl mx-auto">
        <p className="h2">{i.desc.body}</p>
        <footer className="mt-3 muted">{i.desc.title}</footer>
      </blockquote>
    </section>
  );
}
