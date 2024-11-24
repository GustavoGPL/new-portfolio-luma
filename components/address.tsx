"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Address() {
  const { ref } = useSectionInView("Endereço");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-[#46553c] dark:text-[#caa266] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="address"
    >
      <SectionHeading>Onde me encontrar</SectionHeading>
      <div className="p-4 bg-gray-100 rounded-md dark:bg-white/10 max-w-[45rem]">
        <p className="dark:text-white/80">MULTICLINIC SAÚDE & VIDA 🧠</p>
        <iframe className="rounded-sm w-[350px] h-[250px] sm:w-[600px] md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.3323694285639!2d-38.55387893040126!3d-3.7381983615131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74973e0bfc1ed%3A0x3ef9e2b86f331d6!2sR.%20Padre%20Guerra%2C%20981%20-%20Parquel%C3%A2ndia%2C%20Fortaleza%20-%20CE%2C%2060455-365!5e0!3m2!1spt-BR!2sbr!4v1731382959992!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen={undefined} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

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