"use client";

import { motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tAboutOwners } from "../i18n";

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "RP";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

export default function AboutOwnersShowcase() {
  const { locale } = useLocale();
  const i = tAboutOwners(locale);

  return (
    <section className="w-full bg-surface text-foreground border-b border-border">
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            {i.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            {i.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {i.owners.map((owner, index) => (
            <motion.article
              key={`${owner.name}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-chrome text-white text-sm font-bold tracking-widest">
                  {initialsFromName(owner.name)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {owner.name}
                  </h3>
                  <p className="text-sm text-foreground/65 uppercase tracking-[0.12em]">
                    {owner.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                {owner.bio}
              </p>

              <blockquote className="mt-5 border-l-2 border-FL/70 pl-4 text-sm italic leading-relaxed text-foreground/75">
                &ldquo;{owner.quote}&rdquo;
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
