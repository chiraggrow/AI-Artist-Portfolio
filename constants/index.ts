import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import OpenAI from "@lobehub/icons/es/OpenAI";
import Claude from "@lobehub/icons/es/Claude";
import Gemini from "@lobehub/icons/es/Gemini";
import Grok from "@lobehub/icons/es/Grok";
import Perplexity from "@lobehub/icons/es/Perplexity";
import DeepSeek from "@lobehub/icons/es/DeepSeek";
import Mistral from "@lobehub/icons/es/Mistral";
import Midjourney from "@lobehub/icons/es/Midjourney";
import Sora from "@lobehub/icons/es/Sora";
import Runway from "@lobehub/icons/es/Runway";
import Pika from "@lobehub/icons/es/Pika";
import Hailuo from "@lobehub/icons/es/Hailuo";
import Kling from "@lobehub/icons/es/Kling";
import Cursor from "@lobehub/icons/es/Cursor";
import Windsurf from "@lobehub/icons/es/Windsurf";
import Copilot from "@lobehub/icons/es/Copilot";
import Lovable from "@lobehub/icons/es/Lovable";
import Replit from "@lobehub/icons/es/Replit";
import V0 from "@lobehub/icons/es/V0";
import NotebookLM from "@lobehub/icons/es/NotebookLM";
import HuggingFace from "@lobehub/icons/es/HuggingFace";
import Replicate from "@lobehub/icons/es/Replicate";
import Figma from "@lobehub/icons/es/Figma";
import Notion from "@lobehub/icons/es/Notion";
import CapCut from "@lobehub/icons/es/CapCut";
import Vercel from "@lobehub/icons/es/Vercel";
import Suno from "@lobehub/icons/es/Suno";
import OpenCode from "@lobehub/icons/es/OpenCode";
import Antigravity from "@lobehub/icons/es/Antigravity";
import Meta from "@lobehub/icons/es/Meta";
import Anthropic from "@lobehub/icons/es/Anthropic";
import Ollama from "@lobehub/icons/es/Ollama";
import Obsidian from "@lobehub/icons/es/Obsidian";

// Row 1 – 13 icons: Major AI Models & Platforms (≈64px)
export const ROW_1 = [
  { kind: "component" as const, name: "OpenAI", component: OpenAI.Combine, size: 64, isCombine: true, backdrop: "rgba(255,255,255,0.12)" },
  { kind: "component" as const, name: "Claude", component: Claude.Color, size: 64 },
  { kind: "component" as const, name: "Gemini", component: Gemini.Color, size: 64 },
  { kind: "component" as const, name: "Grok", component: Grok.Combine, size: 64, isCombine: true },
  { kind: "component" as const, name: "Perplexity", component: Perplexity.Color, size: 64 },
  { kind: "component" as const, name: "DeepSeek", component: DeepSeek.Color, size: 64 },
  { kind: "component" as const, name: "Mistral", component: Mistral.Color, size: 64 },
  { kind: "component" as const, name: "Midjourney", component: Midjourney.Combine, size: 64, isCombine: true },
  { kind: "component" as const, name: "Sora", component: Sora.Color, size: 64 },
  { kind: "component" as const, name: "Runway", component: Runway.Combine, size: 64, isCombine: true },
  { kind: "component" as const, name: "Pika", component: Pika.Combine, size: 64, isCombine: true, color: "#FFD184" },
  { kind: "component" as const, name: "Hailuo", component: Hailuo.Color, size: 64 },
  { kind: "component" as const, name: "Kling", component: Kling.Color, size: 64 },
];

// Row 2 – 10 icons: AI Development Tools (≈56px)
export const ROW_2 = [
  { kind: "component" as const, name: "Cursor", component: Cursor.Combine, size: 56, isCombine: true, color: "#6C47FF" },
  { kind: "component" as const, name: "Windsurf", component: Windsurf.Combine, size: 56, isCombine: true, color: "#4A90D9" },
  { kind: "component" as const, name: "Copilot", component: Copilot.Color, size: 56 },
  { kind: "component" as const, name: "Codex", component: OpenAI.Combine, size: 56, isCombine: true, backdrop: "rgba(255,255,255,0.12)" },
  { kind: "component" as const, name: "Lovable", component: Lovable.Color, size: 56 },
  { kind: "component" as const, name: "Replit", component: Replit.Color, size: 56 },
  { kind: "component" as const, name: "v0", component: V0, size: 56, backdrop: "rgba(255,255,255,0.12)" },
  { kind: "component" as const, name: "NotebookLM", component: NotebookLM.Combine, size: 56, isCombine: true },
  { kind: "component" as const, name: "HuggingFace", component: HuggingFace.Color, size: 56 },
  { kind: "component" as const, name: "Replicate", component: Replicate.Brand, size: 56, color: "#EA2805" },
];

// Row 3 – 8 icons: AI Apps & Creative Tools (≈48px)
export const ROW_3 = [
  { kind: "component" as const, name: "Figma", component: Figma.Color, size: 48 },
  { kind: "component" as const, name: "Notion", component: Notion.Combine, size: 48, isCombine: true, backdrop: "#FFFFFF", color: "#000000" },
  { kind: "image" as const, name: "Canva", src: "/assets/icons/canva.svg", size: 48 },
  { kind: "component" as const, name: "CapCut", component: CapCut.Combine, size: 48, isCombine: true },
  { kind: "component" as const, name: "Vercel", component: Vercel.Combine, size: 48, isCombine: true, backdrop: "rgba(255,255,255,0.12)" },
  { kind: "component" as const, name: "Suno", component: Suno.Combine, size: 48, isCombine: true },
  { kind: "component" as const, name: "OpenCode", component: OpenCode.Combine, size: 48, isCombine: true, color: "#007AFF" },
  { kind: "component" as const, name: "Antigravity", component: Antigravity.Color, size: 48 },
];

// Row 4 – 4 icons: AI Infrastructure & Agents (≈40px)
export const ROW_4 = [
  { kind: "component" as const, name: "Meta", component: Meta.Color, size: 40 },
  { kind: "component" as const, name: "Anthropic", component: Anthropic, size: 40, color: "#D4893A" },
  { kind: "component" as const, name: "Ollama", component: Ollama.Combine, size: 40, isCombine: true, backdrop: "rgba(255,255,255,0.12)" },
  { kind: "component" as const, name: "Obsidian", component: Obsidian.Color, size: 40 },
];

// Row 5 – 1 icon: Hero / Featured (≈72px)
export const ROW_5 = [
  { kind: "image" as const, name: "Higgsfield AI", src: "/assets/icons/higgsfield.svg", size: 72 },
];

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/chirag_grow/",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/chirag-mittal-2b8019373",
  },
  {
    name: "Discord",
    icon: RxDiscordLogo,
    link: "https://discord.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/chirag_grow",
  },
] as const;

export type Project = {
  videoId: string;
  title: string;
  description?: string;
  category: string;
};

export const PROJECTS = [
  {
    videoId: "W7iuhGPaay8",
    title: "AI UGC Skincare Commercial",
    category: "AI Commercial",
  },
  {
    videoId: "1Lkm1EJiuUQ",
    title: "AI Educational Short Film",
    category: "AI Short Film",
    description:
      "An AI-generated cinematic short combining storytelling, motion design, and realistic visuals to simplify complex ideas.\nBuilt using advanced prompting, image generation, video synthesis, and professional post-production workflows.",
  },
  {
    videoId: "Gvi7LIopTQE",
    title: "AI Educational Short Film",
    category: "AI Short Film",
    description:
      "An AI-generated cinematic short combining storytelling, motion design, and realistic visuals to simplify complex ideas.\nBuilt using advanced prompting, image generation, video synthesis, and professional post-production workflows.",
  },
  {
    videoId: "Rim34J1QjrI",
    title: "Frooti Spec add (free tools used )",
    category: "AI Short Film",
  },
] as const satisfies readonly Project[];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/chirag_grow/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/chirag_grow",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/chirag-mittal-2b8019373",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "AI Artist",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Prompt Engineer",
        icon: null,
        link: "#about-me",
      },
      {
        name: "AI Enthusiastic",
        icon: null,
        link: "#about-me",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  highlights: readonly string[];
  techTags: readonly string[];
  logo?: string;
};

export const EXPERIENCE = [
  {
    company: "Enrai (Enrai Studio Private Limited)",
    role: "Generative AI Animation Intern",
    duration: "May 2026 – Aug 2026",
    location: "Bengaluru, India",
    description:
      "Working as a Generative AI Animation Intern at Enrai Studio, contributing to Generative AI animation production pipelines for original content including anime series, AI-produced ad campaigns, and cinematic spec ads. Gaining hands-on experience across the full production pipeline — from concept and storyboarding to final delivery — under direct mentorship of the founding team.",
    highlights: [
      "Contributed to Generative AI animation pipelines for anime series, AI-produced ads, and cinematic spec ads",
      "Applied industry-standard Generative AI tools for image generation, video synthesis, and motion design",
      "Participated in storyboarding, shot planning, prompt engineering, and post-production workflows",
      "Collaborated with the creative and production team on project briefs from concept through delivery",
    ],
    techTags: ["Generative AI", "Video Synthesis", "Prompt Engineering", "Motion Design"],
    logo: "/assets/enrai-logo.jpeg",
  },
] as const satisfies readonly Experience[];
