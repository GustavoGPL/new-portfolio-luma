import React from "react";

export default function Footer() {
  return (
    <footer className="mb-8 px-4 text-center text-[#534329] dark:text-white/80 bg">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Luma Beatriz. Todos os direitos reservados.
      </small>
    </footer>
  );
}
