"use client";

import {
  SparklesIcon,
  CommandLineIcon,
  CodeBracketIcon,
  FilmIcon,
  BookOpenIcon,
  MegaphoneIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { SkillCard } from "@/components/sub/skill-card";

const SKILLS_DATA = [
  {
    Icon: SparklesIcon,
    title: "AI Artist",
    proficiency: 0.9,
    description:
      "Creating cinematic AI visuals, animations, branded content, and character-consistent productions with creative direction.",
  },
  {
    Icon: CommandLineIcon,
    title: "Prompt Engineer",
    proficiency: 0.95,
    description:
      "Designing optimized prompts that generate reliable, high-quality AI images, videos, and production workflows.",
  },
  {
    Icon: CodeBracketIcon,
    title: "Development",
    proficiency: 0.85,
    description:
      "Building responsive websites, AI-powered applications, and interactive digital experiences using scalable modern technologies.",
  },
  {
    Icon: CodeBracketIcon,
    title: "Generative AI",
    proficiency: 0.9,
    description:
      "Building and fine-tuning generative AI systems using LLM workflows, RAG pipelines, model integrations.",
  },
  {
    Icon: FilmIcon,
    title: "AI Filmmaking",
    proficiency: 0.88,
    description:
      "Directing AI-generated films from script to screen with shot composition and cinematic pacing.",
  },
  {
    Icon: BookOpenIcon,
    title: "Storytelling",
    proficiency: 0.92,
    description:
      "Crafting compelling narratives and character arcs that give AI-generated content emotional depth, voice.",
  },
  {
    Icon: MegaphoneIcon,
    title: "Content Creation",
    proficiency: 0.9,
    description:
      "Producing platform-ready content, social videos, campaigns, and digital assets built for real engagement.",
  },
  {
    Icon: PlayIcon,
    title: "AI Animation",
    proficiency: 0.85,
    description:
      "Bringing static concepts to life through AI-driven motion, character animation, and visual storytelling.",
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold py-20">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills.
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 max-w-7xl w-full">
        {SKILLS_DATA.map((skill, i) => (
          <SkillCard key={skill.title} {...skill} index={i} />
        ))}
      </div>
    </section>
  );
};



