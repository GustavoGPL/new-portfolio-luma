"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades");

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full scroll-mt-28 text-center text-[#46553c] dark:text-[#caa266]"
    >
      <SectionHeading>Minhas Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="rounded-2xl border border-[#677C58]/20 bg-[#677C58] px-5 py-3 text-base text-white shadow-sm shadow-[#57694a]/20 dark:bg-[#677C58] dark:text-white/85"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
