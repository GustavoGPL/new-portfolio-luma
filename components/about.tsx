"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="w-full scroll-mt-28 text-center text-[#46553c] dark:text-[#caa266]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mx-auto max-w-3xl text-justify text-[1.02rem] leading-8 text-[#46553c] sm:text-center dark:text-white/75">
        Sou psicóloga e atendo crianças, adolescentes, adultos e idosos, oferecendo um espaço acolhedor e seguro para tratar questões emocionais e comportamentais. Trabalho com escuta empática, utilizando abordagens personalizadas para cada faixa etária. Seja para auxiliar no desenvolvimento infantil, enfrentar desafios da adolescência, lidar com o estresse da vida adulta ou proporcionar qualidade de vida na terceira idade, estou aqui para ajudar.
      </p>

    </motion.section>
  );
}
