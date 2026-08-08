"use client";

import { EXPERIENCE } from "@/constants";
import { FlipBook } from "@/components/sub/flip-book";
import { SectionContainer } from "@/components/layout/section-container";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 text-white"
    >
      <SectionContainer className="flex flex-col items-center gap-3">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Experience
        </h1>

        <div className="w-full max-w-4xl">
          <FlipBook entries={EXPERIENCE} />
        </div>
      </SectionContainer>
    </section>
  );
};
