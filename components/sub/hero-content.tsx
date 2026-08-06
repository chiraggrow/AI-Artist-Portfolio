"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex w-fit items-center gap-3 overflow-hidden rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="animate-strong-pulse absolute inline-flex h-full w-full rounded-full bg-green-400"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="animate-strong-pulse absolute inline-flex h-full w-full rounded-full bg-green-400"
              style={{ animationDelay: "1.2s" }}
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_4px_1px_rgba(34,197,94,0.4)]" />
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-green-400">
            Open to work
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a AI Artist and Filmmaker with experience in Generative AI, AI Ads and Prompt Engineering. Check out my Profile and Skills.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};
