"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full mb-4 text-center text-[#46553c] dark:text-[#caa266]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Entre em contato</SectionHeading>

      <p className="-mt-6 text-[#46553c] dark:text-white/80">
      Por favor entre em contato comigo diretamente em{" "}
        <Link className="font-bold underline decoration-[#677C58] underline-offset-4" href="mailto:lumabeatrizpsi@gmail.com" target="_blank">
        lumabeatrizpsi@gmail.com
        </Link>{" "}
        ou através desse formulário.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado com sucesso!");
        }}
      >
        <input
          className="h-14 rounded-xl border border-[#677C58]/25 bg-white/75 px-4 transition-all focus:shadow-md focus:shadow-[#57694a]/10 dark:bg-white dark:bg-opacity-80 dark:placeholder-slate-800 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu Email"
        />
        <textarea
          className="my-3 h-52 rounded-xl border border-[#677C58]/25 bg-white/75 p-4 transition-all focus:shadow-md focus:shadow-[#57694a]/10 dark:bg-white dark:bg-opacity-80 dark:placeholder-slate-800 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Sua Mensagem"
          required
          maxLength={5000}
        />
        <div className="flex justify-center">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
