"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useLocale } from "../../../../i18n/locale-context";
import { tSaraHomesWelcome } from "../i18n/welcome";

export default function SaraHomesWelcomeTransition() {
  const { locale } = useLocale();
  const reduceMotion = useReducedMotion();

  const t = tSaraHomesWelcome(locale);
  const highlightedPhrases = t.accentPhrases;
  const phrasePattern = new RegExp(
    `(${highlightedPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  return (
    <section className="w-full bg-background px-6 py-12 sm:px-10 sm:py-14 lg:px-24">
      <div className="mx-auto max-w-[65.625rem] text-center">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl font-semibold leading-tight tracking-tight text-balance text-chrome sm:text-[2.5rem]"
        >
          {t.heading}
        </motion.h2>

        <div className="mt-7 space-y-6 sm:mt-8 sm:space-y-7">
          {t.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.15 + index * 0.15, ease: "easeOut" }}
              className="font-serif text-xl leading-relaxed text-pretty text-chrome/85 sm:text-2xl sm:leading-[1.55]"
            >
              {paragraph.split(phrasePattern).map((part, partIndex) => {
                if (t.accentPhrases.includes(part)) {
                  return (
                    <motion.span
                      key={partIndex}
                      className="box-decoration-clone pb-0.5 font-medium text-[color-mix(in_srgb,var(--color-FL)_45%,var(--color-chrome))]"
                      style={{
                        backgroundImage: "linear-gradient(var(--color-FL), var(--color-FL))",
                        backgroundPosition: "left bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% 1px",
                      }}
                      variants={{
                        hidden: { backgroundSize: "0% 1px" },
                        visible: { backgroundSize: "100% 1px" },
                      }}
                      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.5 + index * 0.15, ease: "easeOut" }}
                    >
                      {part}
                    </motion.span>
                  );
                }

                return part;
              })}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
