"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section ref={ref} id="projects" className="w-full scroll-mt-28 text-[#46553c] dark:text-[#caa266]">
      <SectionHeading>Meus Projetos</SectionHeading>
      <div className="mx-auto w-full max-w-[56rem]">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
