"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiência");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="w-full scroll-mt-28 text-[#46553c] dark:text-[#caa266]">
      <SectionHeading>Minhas Formações</SectionHeading>
      <VerticalTimeline lineColor="rgba(103, 124, 88, 0.25)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(17, 23, 20, 0.75)",
                boxShadow: "0 14px 35px -25px rgba(44, 54, 39, 0.65)",
                border: "1px solid rgba(103, 124, 88, 0.22)",
                borderRadius: "1rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #677C58"
                    : "0.4rem solid rgba(202, 162, 102, 0.7)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#f7f3eb" : "#1d2822",
                color: theme === "light" ? "#57694a" : "#e8d6bd",
                border: "1px solid rgba(103, 124, 88, 0.3)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-2xl font-semibold capitalize text-[#3d4a35] dark:text-[#ecdabf]">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-[#4b5843] dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
