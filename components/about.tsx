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
      className="mb-28 max-w-[45rem] text-[#534329] text-center leading-8 sm:mb-10 scroll-mt-28 dark:text-[#caa266]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3 text-justify sm:text-center dark:text-white/80">
        Me chamo Luma Beatriz, tenho 23 anos e sou psicóloga clínica. Minha abordagem e a TCC ( Terapia Cognitivo Comportamental), tenho capacitações para técnicas em TCC. Atendo presencialmente crianças a partir de 8 anos, adolescentes, adultos e idosos. Atendo de maneira online adolescentes e adultos. É um imenso prazer tá recebendo você aqui nesse perfil, na qual iremos abordar sobre ansiedade, emoções, relacionamento, depressão, autoestima, amor próprio e várias outras temáticas, voltada para o autoconhecimento e saúde menta.
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
