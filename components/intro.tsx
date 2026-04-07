"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Início", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="w-full scroll-mt-[100rem] text-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={'/images/foto-Luma.jpg'}
              alt="Foto Luma"
              width="180"
              height="180"
              quality="100"
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-[#f7f3eb] shadow-2xl shadow-[#57694a]/25"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="brand-chip">Atendimento humanizado</span>
      </motion.div>

      <motion.h1
        className="mb-8 mt-4 flex flex-col px-4 text-3xl font-medium !leading-[1.2] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-[#57694a] dark:text-[#caa266]">Luma Beatriz Freitas Mesquita</span>
        <span className="mt-2 text-xl font-semibold tracking-wide text-[#6f5b3f] dark:text-[#d7b37b] sm:text-2xl">Psicóloga | CRP 11/19857</span>
      </motion.h1>

      <motion.p
        className="mx-auto mb-8 max-w-2xl px-5 text-base leading-7 text-[#4c5c43] dark:text-white/75 sm:text-lg"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        Cuidado psicológico para todas as fases da vida, com escuta acolhedora e estratégias personalizadas para o seu momento.
      </motion.p>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-1 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSevLA_a7AWFXk6SjFSKfBwIh6xMjAX9oemHPhLR7J8xNXRRDw/viewform"
          className="group flex items-center gap-2 rounded-full bg-[#677C58] px-8 py-3 text-white outline-none transition hover:scale-105 hover:bg-[#5c6e4e] active:scale-105 focus:scale-105"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Agende seu atendimento{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <div className="flex flex-row gap-2">
          <Link
            className="flex cursor-pointer items-center gap-2 rounded-full border border-[#677C58]/20 bg-white/75 p-4 text-gray-700 backdrop-blur transition hover:scale-110 hover:text-gray-950 active:scale-105 focus:scale-110 dark:bg-white/15 dark:text-white/80"
            href="https://www.instagram.com/psi_lumabeatriz/"
            target="_blank"
          >
            <FaInstagram size={25} color="#735C3A" className="dark:!text-[#caa266]"/>
          </Link>

          <Link
            className="flex cursor-pointer items-center gap-2 rounded-full border border-[#677C58]/20 bg-white/75 p-4 text-[1.35rem] text-gray-700 backdrop-blur transition hover:scale-110 hover:text-gray-950 active:scale-105 focus:scale-110 dark:bg-white/15 dark:text-white/80"
            href="https://api.whatsapp.com/send?phone=5585987819145"
            target="_blank"
          >
            <FaWhatsapp size={25} color="#735C3A" className="dark:!text-[#caa266]"/>
          </Link>

          <Link
            className="flex cursor-pointer items-center gap-2 rounded-full border border-[#677C58]/20 bg-white/75 p-4 text-[1.35rem] text-gray-700 backdrop-blur transition hover:scale-110 hover:text-gray-950 active:scale-105 focus:scale-110 dark:bg-white/15 dark:text-white/80"
            href="mailto:lumabeatrizpsi@gmail.com"
            target="_blank"
          >
            <IoMailOutline size={25} color="#735C3A" className="dark:!text-[#caa266]"/>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
