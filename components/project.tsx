"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 sm:mb-8 last:mb-0"
    >
      <Link href={href} target="_blank">
      <section className="relative w-full overflow-hidden rounded-3xl border border-[#677C58]/20 bg-white/70 transition hover:-translate-y-1 hover:bg-white/85 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
        <div className="flex h-full flex-col px-5 pb-7 pt-6 sm:max-w-[52%] sm:pl-8 sm:pr-2 sm:pt-8 sm:group-even:ml-[18rem]">
          <span className="brand-chip mb-4 w-fit">Projeto em destaque</span>
          <h3 className="text-2xl font-semibold text-[#3d4a35] dark:text-[#ecdabf] sm:text-3xl">{title}</h3>
          <p className="mt-3 leading-relaxed text-[#4b5843] dark:text-white/75">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-[#677C58] px-3 py-1 text-[0.68rem] uppercase tracking-wider text-white dark:text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-xl shadow-2xl shadow-[#3d4a35]/30
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section></Link>
    </motion.div>
  );
}
