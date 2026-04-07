"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
// import { InstagramEmbed } from "react-social-media-embed";

export default function Posts() {
  const { ref } = useSectionInView("Endereço");

  return (
    <motion.section
      ref={ref}
      className="w-full flex scroll-mt-28 flex-col justify-center px-2 text-center leading-8 text-[#534329] dark:text-[#caa266]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="posts"
    >
      <SectionHeading>Últimas Postagens</SectionHeading>

      {/* Instagram Embed pausado por enquanto */}
      {/*
      <div className="w-full max-w-4xl overflow-x-auto rounded-2xl bg-white/70 p-4 dark:bg-white/10">
        <div className="flex flex-col sm:flex-row gap-4 w-fit">
          <InstagramEmbed
            className="min-w-[328px]"
            url="https://www.instagram.com/p/DJaCmlBNfsE"
            width={328}
            height={380}
          />
          <InstagramEmbed
            className="min-w-[328px]"
            url="https://www.instagram.com/p/DIMQbVsIgIK"
            width={328}
            height={380}
          />
          <InstagramEmbed
            className="min-w-[328px]"
            url="https://www.instagram.com/p/DHWLzu_Jf0n"
            width={328}
            height={380}
          />
        </div>
      </div>
      */}

      <div className="p-2 text-[#4b5843] dark:text-white/80">
        Postagens em pausa no momento. Em breve esta area sera atualizada.
      </div>
    </motion.section>
  );
}

// "use client";

// import React, { useEffect } from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { InstagramEmbed } from "react-social-media-embed";
// import Script from "next/script";

// export default function Posts() {
//   const { ref } = useSectionInView("Endereço");

//   useEffect(() => {
//     const instgrm = (window as any).instgrm;
//     if (instgrm) instgrm.Embeds.process();
//   }, []);

//   return (
//     // <motion.section
//     //   ref={ref}
//     //   className="flex justify-center flex-col mb-28 max-w-[45rem] px-4 text-[#534329] dark:text-[#caa266] text-center leading-8 sm:mb-10 scroll-mt-28"
//     //   initial={{ opacity: 0, y: 100 }}
//     //   animate={{ opacity: 1, y: 0 }}
//     //   transition={{ delay: 0.175 }}
//     //   id="posts"
//     // >
//     <>
//       <SectionHeading>Últimas Postagens</SectionHeading>
// {/* 
//       <div className="p-4 bg-white rounded-md dark:bg-white/10 w-full max-w-4xl overflow-x-auto">
//         <div className="flex flex-col sm:flex-row gap-4 w-fit"> */}
//           <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />
//       <blockquote
//         className="instagram-media"
//         data-instgrm-permalink="https://www.instagram.com/psi_lumabeatriz/"
//         data-instgrm-version="12"
//         style={{
//           background: "#FFF",
//           border: 0,
//           borderRadius: "3px",
//           boxShadow: "0 0 1px rgba(0,0,0,0.5),0 1px 10px rgba(0,0,0,0.15)",
//           margin: "1px",
//           maxWidth: "540px",
//           minWidth: "326px",
//           padding: 0,
//           width: "99.375%",
//         }}
//       ></blockquote>
//         {/* </div>
//       </div> */}
//     {/* </motion.section> */}
//     </>
//   );
// }
