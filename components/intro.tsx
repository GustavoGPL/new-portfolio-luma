"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
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
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* <div className="flex gap-5 mb-8"> */}
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
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl h-52 w-52"
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

      <motion.h1
        className="flex flex-col mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-[#57694a] dark:text-[#caa266]">Luma Beatriz Freitas Mesquita</span>
        <span className="font-bold text-[#57694a] dark:text-[#caa266]">Psicóloga | CRP 11/19857</span>
      </motion.h1>
      {/* </div> */}

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSevLA_a7AWFXk6SjFSKfBwIh6xMjAX9oemHPhLR7J8xNXRRDw/viewform"
          className="group bg-[#677C58] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-[#5c6e4e] active:scale-105 transition"
          onClick={() => {
            // setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Agende seu atendimento{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}

        <div className="flex flex-row gap-2">
          <Link
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-white/60"
            href="https://www.instagram.com/psi_lumabeatriz/"
            target="_blank"
          >
            <FaInstagram size={25} color="#735C3A" className="dark:!text-[#caa266]"/>
          </Link>

          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-white/60"
            href="https://api.whatsapp.com/send?phone=5585987819145"
            target="_blank"
          >
            <FaWhatsapp size={25} color="#735C3A" className="dark:!text-[#caa266]"/>
          </Link>

          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-white/60"
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
