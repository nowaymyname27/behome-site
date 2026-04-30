"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FloorPlanDetailProps = {
  brand: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  specs: readonly string[];
};

export default function FloorPlanDetail({
  brand,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  specs,
}: FloorPlanDetailProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.74, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
      className="group w-full border-b border-black/10 bg-[#ececec] text-[#111111]"
    >
      <div className="grid min-h-[42rem] grid-cols-1 md:min-h-[46rem] xl:min-h-[96vh] xl:grid-cols-[57%_43%]">
        <motion.div
          initial={{ opacity: 0, y: 18, x: -10, scale: 1.03 }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
          className="relative order-2 min-h-[22rem] overflow-hidden sm:min-h-[30rem] xl:order-1 xl:min-h-full"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-left transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            sizes="(min-width: 1280px) 57vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
          className="order-1 flex flex-col justify-between px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:order-2 xl:py-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.48, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-[1.1rem] leading-none tracking-tight italic font-serif text-black/85 sm:text-[1.3rem] lg:text-[1.45rem]">
              {brand}
            </p>

            <h2 className="mt-8 max-w-xl text-[2.5rem] leading-[0.98] text-black sm:mt-10 sm:text-[3.35rem] lg:text-[4.2rem] xl:mt-14 xl:text-[5.5rem]">
              <span className="block font-serif italic">{title}</span>
              <span className="mt-1.5 block font-serif">{subtitle}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.54, delay: 0.26, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-8 max-w-xl border-y border-black/20 xl:mt-0"
          >
            {specs.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.32 + index * 0.08, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.6 }}
                className={[
                  "py-1.5 text-[1.9rem] leading-[1.2] text-black/95 transition-transform duration-300 hover:translate-x-1 sm:text-[2.2rem] xl:text-[2.4rem]",
                  index === 0 ? "font-semibold" : "font-normal",
                  index < specs.length - 1 ? "border-b border-black/20" : "",
                ].join(" ")}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
