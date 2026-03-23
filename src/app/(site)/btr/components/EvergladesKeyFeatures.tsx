"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tEvergladesShowcase } from "../i18n";

export default function EvergladesKeyFeatures() {
  const { locale } = useLocale();
  const i = tEvergladesShowcase(locale);

  const groupIds = useMemo(
    () => i.featureGroups.map((group) => group.title),
    [i.featureGroups]
  );

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(groupIds.map((id) => [id, false]))
  );

  const toggleGroup = (id: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-background text-foreground border-t border-border">
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {i.title}
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-serif text-foreground">
            {i.toggleShow}
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-10 grid items-start gap-6 md:grid-cols-2"
        >
          {i.featureGroups.map((group, groupIndex) => (
            <motion.section
              key={group.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: groupIndex * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-border bg-accent/20 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggleGroup(group.title)}
                aria-expanded={!!openGroups[group.title]}
                aria-controls={`feature-group-${groupIndex}`}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-FL/15 text-FL">
                    <span className="h-2 w-2 rounded-full bg-current" />
                  </span>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70">
                    {group.title}
                  </h4>
                </span>

                <motion.span
                  animate={{ rotate: openGroups[group.title] ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 text-foreground/70"
                >
                  <span className="block h-2 w-2 border-r-2 border-b-2 border-current -rotate-45" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openGroups[group.title] && (
                  <motion.ul
                    id={`feature-group-${groupIndex}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="mt-5 space-y-3 overflow-hidden"
                  >
                    {group.items.map((feature) => (
                      <motion.li
                        key={feature}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-[10px_1fr] items-start gap-3 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-FL/90" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
