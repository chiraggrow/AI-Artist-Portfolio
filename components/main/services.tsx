"use client";

import {
  SparklesIcon,
  CommandLineIcon,
  CodeBracketIcon,
  FilmIcon,
  BookOpenIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import { ServiceCard } from "@/components/sub/service-card";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SectionContainer } from "@/components/layout/section-container";

import {
  ROW_1,
  ROW_2,
  ROW_3,
  ROW_4,
  ROW_5,
} from "@/constants";

const SERVICES_DATA = [
  {
    Icon: SparklesIcon,
    image: "/assets/services/ai-artist.jpg",
    title: "AI Artist",
    description:
      "Creating cinematic AI visuals, animations, branded content, and character-consistent productions with creative direction.",
  },
  {
    Icon: CommandLineIcon,
    image: "/assets/services/prompt-engineer.jpg",
    title: "Prompt Engineer",
    description:
      "Designing optimized prompts that generate reliable, high-quality AI images, videos, and production workflows.",
  },
  {
    Icon: CodeBracketIcon,
    image: "/assets/services/generative-ai.jpg",
    title: "Generative AI",
    description:
      "Creating high-quality AI images and videos using generative AI — from concept to polished, brand-ready visuals.",
  },
  {
    Icon: FilmIcon,
    image: "/assets/services/ai-filmmaking.jpg",
    title: "AI Filmmaking",
    description:
      "Directing AI-generated films from script to screen with shot composition and cinematic pacing.",
  },
  {
    Icon: BookOpenIcon,
    image: "/assets/services/storytelling.jpg",
    title: "Storytelling",
    description:
      "Crafting compelling narratives and character arcs that give AI-generated content emotional depth, voice.",
  },
  {
    Icon: MegaphoneIcon,
    image: "/assets/services/content-creation.jpg",
    title: "Content Creation",
    description:
      "Producing platform-ready content, social videos, campaigns, and digital assets built for real engagement.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20 text-white"
    >
      <SectionContainer className="flex flex-col items-center">
        <div className="mx-auto flex items-center gap-3">
          <span className="h-px w-8 bg-[#8b5cf6]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5cf6]">
            Strategic Offerings
          </span>
        </div>

        <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
          What I do.
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base leading-7 text-gray-400">
          I combine generative AI, creative direction, and engineering to craft
          cinematic visuals, reliable production workflows, and interactive
          experiences end to end.
        </p>

        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.Icon}
              image={service.image}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <div
          style={{ transform: "scale(0.9)" }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 py-20"
        >
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            My Tools.
          </h2>

          <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
            {ROW_1.map((icon, i) => (
              <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
            ))}
          </div>

          <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
            {ROW_2.map((icon, i) => (
              <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
            {ROW_3.map((icon, i) => (
              <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
            {ROW_4.map((icon, i) => (
              <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
            ))}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
            {ROW_5.map((icon, i) => (
              <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
