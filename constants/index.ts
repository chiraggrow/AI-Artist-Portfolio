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
import Antigravity from "@lobehub/icons/es/Antigravity";
import Meta from "@lobehub/icons/es/Meta";
import Anthropic from "@lobehub/icons/es/Anthropic";
import Ollama from "@lobehub/icons/es/Ollama";
import Obsidian from "@lobehub/icons/es/Obsidian";

// Row 1 – 13 icons: Major AI Models & Platforms (≈64px)
export const ROW_1 = [
  { kind: "component" as const, name: "OpenAI", component: OpenAI, size: 64, color: "#10A37F", tint: "#10A37F" },
  { kind: "component" as const, name: "Claude", component: Claude.Color, size: 64, tint: "#D97757" },
  { kind: "component" as const, name: "Gemini", component: Gemini.Color, size: 64, tint: "#3186FF" },
  { kind: "component" as const, name: "Grok", component: Grok, size: 64, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Perplexity", component: Perplexity.Color, size: 64, tint: "#22B8CD" },
  { kind: "component" as const, name: "DeepSeek", component: DeepSeek.Color, size: 64, tint: "#4D6BFE" },
  { kind: "component" as const, name: "Mistral", component: Mistral.Color, size: 64, tint: "#FA500F" },
  { kind: "component" as const, name: "Midjourney", component: Midjourney, size: 64, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Sora", component: Sora.Color, size: 64, tint: "#000000" },
  { kind: "component" as const, name: "Runway", component: Runway, size: 64, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Pika", component: Pika, size: 64, color: "#FFFFFF", tint: "#FDF7EF" },
  { kind: "component" as const, name: "Hailuo", component: Hailuo.Color, size: 64, tint: "#000000" },
  { kind: "component" as const, name: "Kling", component: Kling.Color, size: 64, tint: "#000000" },
];

// Row 2 – 9 icons: AI Development Tools (≈56px)
export const ROW_2 = [
  { kind: "component" as const, name: "Cursor", component: Cursor, size: 56, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Windsurf", component: Windsurf, size: 56, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Copilot", component: Copilot.Color, size: 56, tint: "#000000" },
  { kind: "component" as const, name: "Lovable", component: Lovable.Color, size: 56, tint: "#000000" },
  { kind: "component" as const, name: "Replit", component: Replit.Color, size: 56, tint: "#FD5402" },
  { kind: "component" as const, name: "v0", component: V0, size: 56, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "NotebookLM", component: NotebookLM, size: 56, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "HuggingFace", component: HuggingFace.Color, size: 56, tint: "#FFD21E" },
  { kind: "component" as const, name: "Replicate", component: Replicate, size: 56, color: "#EA2805", tint: "#EA2805" },
];

// Row 3 – 8 icons: AI Apps & Creative Tools (≈48px)
export const ROW_3 = [
  { kind: "component" as const, name: "Figma", component: Figma.Color, size: 48, tint: "#000000" },
  { kind: "component" as const, name: "Notion", component: Notion, size: 48, backdrop: "#FFFFFF", color: "#000000", tint: "#000000" },
  { kind: "image" as const, name: "Canva", src: "/assets/icons/canva.svg", size: 48, tint: "#24BECA" },
  { kind: "component" as const, name: "CapCut", component: CapCut, size: 48, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Vercel", component: Vercel, size: 48, color: "#FFFFFF", tint: "#000000" },
  { kind: "component" as const, name: "Suno", component: Suno, size: 48, color: "#FFFFFF", tint: "#000000" },
  { kind: "image" as const, name: "OpenCode", src: "/assets/icons/opencode.svg", size: 48, tint: "#000000" },
  { kind: "component" as const, name: "Antigravity", component: Antigravity.Color, size: 48, tint: "#000000" },
];

// Deterministic seeded shuffle so all 30 marquee icons are randomly placed
// across 3 rows (each tool appears exactly once) without a hydration mismatch.
const mulberry32 = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const shuffledMarqueeIcons = (() => {
  const rnd = mulberry32(20260812);
  const list = [...ROW_1, ...ROW_2, ...ROW_3];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
})();

// Three rows of 10 unique icons, randomized (no grouping by type)
export const MARQUEE_ROWS = [
  shuffledMarqueeIcons.slice(0, 10),
  shuffledMarqueeIcons.slice(10, 20),
  shuffledMarqueeIcons.slice(20, 30),
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

export type WorkItem = {
  videoId: string;
  title: string;
  category: string;
  tag: string;
};

export const WORK_ITEMS = [
  {
    videoId: "W7iuhGPaay8",
    title: "AI UGC Skincare Commercial",
    category: "AI Commercial",
    tag: "UGC",
  },
  {
    videoId: "1Lkm1EJiuUQ",
    title: "AI Short Film - 1",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "emXzsCZSmFo",
    title: "AI Short Film - 2",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "BnqDBu8H_pQ",
    title: "AI Short Film - 3",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "Gvi7LIopTQE",
    title: "AI Short Film - 4",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "Ve31hRSiju4",
    title: "AI Short Film - 5",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "T6DaO6i1WQU",
    title: "AI Short Film - 6",
    category: "AI Short Film",
    tag: "AI Short Film",
  },
  {
    videoId: "Rim34J1QjrI",
    title: "Frooti Spec add (free tools used )",
    category: "AI Commercial",
    tag: "Spec Ad",
  },
  {
    videoId: "heb5EEkZRBU",
    title: "AI Visual Story 2",
    category: "AI Visual Story",
    tag: "AI Visual Story",
  },
  {
    videoId: "J7iQx6SheMo",
    title: "AI Visual Story",
    category: "AI Visual Story",
    tag: "AI Visual Story",
  },
  {
    videoId: "a-YI7kn8Ths",
    title: "UGC for RETENCY MEDIA",
    category: "UGC",
    tag: "UGC",
  },
] satisfies readonly WorkItem[];

export type WorkSection = {
  id: string;
  title: string;
  subtitle: string;
  noun: string;
  tags: readonly string[];
};

export const WORK_SECTIONS = [
  {
    id: "ai-short-films",
    title: "AI Short Films",
    subtitle: "Cinematic narrative pieces",
    noun: "film",
    tags: ["AI Short Film"],
  },
  {
    id: "ai-visual-stories",
    title: "AI Visual Stories",
    subtitle: "Cinematic AI experiments",
    noun: "film",
    tags: ["AI Visual Story"],
  },
  {
    id: "brand-ugc",
    title: "Brand Films - Spec Ads / UGC",
    subtitle: "Cinematic brand, spec & UGC content",
    noun: "campaign",
    tags: ["Spec Ad", "Brand Film", "AI Commercial", "UGC"],
  },
] satisfies readonly WorkSection[];

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
    title: "Work",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
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
    company: "Enrai Studio",
    role: "Generative AI Animation Intern",
    duration: "May 2026 – July 2026",
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
