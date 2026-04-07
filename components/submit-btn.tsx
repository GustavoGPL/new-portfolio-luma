import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3.1rem] w-[8.6rem] items-center justify-center gap-2 rounded-full bg-[#677C58] text-white shadow-lg shadow-[#57694a]/30 outline-none transition-all hover:scale-105 hover:bg-[#5c6e4e] active:scale-105 focus:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-[#677C58]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
