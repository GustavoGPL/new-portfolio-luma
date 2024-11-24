// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { InstagramEmbed } from "react-social-media-embed";

// export default function Posts() {
//   const { ref } = useSectionInView("Endereço");

//   return (
//     <motion.section
//       ref={ref}
//       className="flex justify-center flex-col mb-28 max-w-[45rem] px-4 text-[#534329] dark:text-[#caa266] text-center leading-8 sm:mb-10 scroll-mt-28"
//       initial={{ opacity: 0, y: 100 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.175 }}
//       id="posts"
//     >
//       <SectionHeading>Últimas Postagens</SectionHeading>
//       <div className="p-4 bg-white rounded-md dark:bg-white/10 max-w-[380px] sm:max-w-[40rem] overflow-x-auto">
//         <div className="flex gap-3 sm:gap-5 justify-start">
//           <InstagramEmbed className="min-w-[328px]" url="https://www.instagram.com/p/DB9QuG1u0td/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={380}/>
//           <InstagramEmbed className="min-w-[328px]" url="https://www.instagram.com/p/DBbrdeGuuWq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={380}/>
//           <InstagramEmbed className="min-w-[328px]" url="https://www.instagram.com/p/DA3nzmUyOJv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} height={380}/>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
