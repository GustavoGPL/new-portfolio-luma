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
      className="w-full scroll-mt-28 text-center leading-8 text-[#46553c] dark:text-[#caa266]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="address"
    >
      <SectionHeading>Onde me encontrar</SectionHeading>
      <div className="mx-auto max-w-[50rem] p-1 sm:p-2">
        <p className="mb-3 text-lg font-semibold text-[#3d4a35] dark:text-[#ecdabf]">MULTICLINIC SAUDE & VIDA</p>
        <iframe className="h-[250px] w-full rounded-md sm:h-[340px] md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.3323694285639!2d-38.55387893040126!3d-3.7381983615131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74973e0bfc1ed%3A0x3ef9e2b86f331d6!2sR.%20Padre%20Guerra%2C%20981%20-%20Parquel%C3%A2ndia%2C%20Fortaleza%20-%20CE%2C%2060455-365!5e0!3m2!1spt-BR!2sbr!4v1731382959992!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen={undefined} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </motion.section>
  );
}