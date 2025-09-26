// File: app/(site)/partner-with-us/page.tsx
import Header from "@/components/site-wide/Header";
import Hero from "./components/Hero";
import Footer from "@/components/site-wide/Footer";

export default function WhatWeDoPage() {
  return (
    <div className="w-full bg-[--color-background] text-[--color-foreground]">
      <Header />
      <main className="w-full">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
