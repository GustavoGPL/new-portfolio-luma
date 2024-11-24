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
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center text-[#46553c] dark:text-[#caa266]"
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

      <p className="text-[#46553c] -mt-6 dark:text-white/80">
      Por favor entre em contato comigo diretamente em{" "}
        <Link className="underline font-bold" href="mailto:lumabeatrizpsi@gmail.com" target="_blank">
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
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-slate-800"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-slate-800"
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
