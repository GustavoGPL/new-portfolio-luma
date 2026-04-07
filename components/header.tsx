"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsList, BsX } from "react-icons/bs";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.7rem] w-full rounded-none border border-white/40 bg-white/75 shadow-lg shadow-[#2f3a2a]/10 backdrop-blur-md sm:top-5 sm:h-[3.4rem] sm:w-[48rem] sm:rounded-full dark:border-[#caa266]/20 dark:bg-[#151d19]/80"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <div className="fixed top-4 right-4 z-[1001] sm:hidden">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#677C58]/30 bg-white/80 text-[#57694a] backdrop-blur-md transition hover:scale-105 dark:border-[#caa266]/35 dark:bg-[#111714] dark:text-[#ecdabf]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
        </button>
      </div>

      <nav className="fixed top-[0.22rem] left-1/2 hidden h-12 -translate-x-1/2 py-2 sm:top-[1.65rem] sm:flex sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.88rem] font-semibold tracking-wide text-[#495642] sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center rounded-full px-3 py-2 transition hover:text-[#2f3a2a] dark:text-[#d9cfc0] dark:hover:text-white",
                  {
                    "text-white hover:text-white dark:text-white":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#677C58] shadow-md shadow-[#57694a]/35 dark:bg-[#677C58]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              className="fixed inset-0 z-[998] bg-black/20 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            />

            <motion.nav
              className="fixed left-4 right-4 top-16 z-[1000] rounded-2xl border border-[#677C58]/25 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:hidden dark:border-[#caa266]/30 dark:bg-[#111714]/95"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.hash}>
                    <Link
                      className={clsx(
                        "flex w-full items-center justify-center rounded-xl px-3 py-3 text-[0.95rem] font-semibold tracking-wide text-[#495642] transition hover:bg-[#677C58]/10 dark:text-[#d9cfc0] dark:hover:bg-[#caa266]/10",
                        {
                          "bg-[#677C58] text-white hover:bg-[#677C58] dark:text-white":
                            activeSection === link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
