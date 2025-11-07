"use client";

import { motion } from "framer-motion";
import HouseCard, {
  HouseCardProps,
} from "../../../../components/site-wide/HouseCard";

type HouseSectionProps = {
  title?: string;
  subtitle?: string;
  houses: HouseCardProps[];
  className?: string;
};

export default function HouseSection({
  title = "Our Homes",
  subtitle = "Explore available properties below.",
  houses,
  className,
}: HouseSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={[
        "relative w-full overflow-hidden py-24 px-6 sm:px-12 lg:px-24",
        "bg-accent text-accent-foreground border-y border-border",
        className ?? "",
      ].join(" ")}
    >
      {/* Background gradient for subtle light sweep */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight drop-shadow-sm"
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base text-accent-foreground/80 mt-3 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {houses.map((house, i) => (
            <motion.div
              key={house.id ?? i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="transition-transform duration-300"
            >
              <HouseCard {...house} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
