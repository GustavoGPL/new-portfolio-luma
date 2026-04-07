"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full border border-[#677C58]/25 bg-white/80 text-[#57694a] shadow-2xl backdrop-blur-md transition-all hover:scale-[1.12] active:scale-105 dark:border-[#caa266]/30 dark:bg-[#111714] dark:text-[#ecdabf]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
