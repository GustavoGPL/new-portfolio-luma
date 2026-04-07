import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <h2 className="text-4xl font-semibold capitalize text-[#3d4a35] dark:text-[#e8d6bd] sm:text-5xl">
        {children}
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#677C58] to-[#caa266]" />
    </div>
  );
}
