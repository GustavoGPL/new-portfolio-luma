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
      className="mb-28 max-w-[45rem] text-[#46553c] text-center leading-8 sm:mb-10 scroll-mt-28 dark:text-[#caa266]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3 text-justify sm:text-center dark:text-white/80">
      Sou psicóloga e atendo crianças, adolescentes, adultos e idosos, oferecendo um espaço acolhedor e seguro para tratar questões emocionais e comportamentais. Trabalho com escuta empática, utilizando abordagens personalizadas para cada faixa etária. Seja para auxiliar no desenvolvimento infantil, enfrentar desafios da adolescência, lidar com o estresse da vida adulta ou proporcionar qualidade de vida na terceira idade, estou aqui para ajudar!
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
