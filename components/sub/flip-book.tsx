"use client";

import { useState, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

import type { Experience } from "@/constants";

type FlipBookProps = {
  entries: readonly Experience[];
};

export const FlipBook = ({ entries }: FlipBookProps) => {
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState<"next" | "prev" | null>(null);

  const total = entries.length;

  const next = useCallback(() => {
    if (current >= total - 1 || flipping) return;
    setFlipping("next");
    setTimeout(() => {
      setCurrent((c) => c + 1);
      setFlipping(null);
    }, 600);
  }, [current, total, flipping]);

  const prev = useCallback(() => {
    if (current <= 0 || flipping) return;
    setFlipping("prev");
    setTimeout(() => {
      setCurrent((c) => c - 1);
      setFlipping(null);
    }, 600);
  }, [current, flipping]);

  if (total === 0) return null;

  const entry = entries[current];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div
        style={{ perspective: "1400px" }}
        className="relative w-full max-w-4xl"
      >
        {current < total - 1 && (
          <div className="absolute inset-0 z-0">
            <PageContent entry={entries[current + 1]} index={current + 1} />
          </div>
        )}
        {current > 0 && (
          <div className="absolute inset-0 z-0">
            <PageContent entry={entries[current - 1]} index={current - 1} />
          </div>
        )}

        <AnimatePresence mode="wait">
          {flipping === "next" && (
            <motion.div
              key="flip-forward"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                transformOrigin: "left center",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="relative z-10"
            >
              <PageContent entry={entry} index={current} />
            </motion.div>
          )}
          {flipping === "prev" && (
            <motion.div
              key="flip-backward"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                transformOrigin: "right center",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
              className="relative z-10"
            >
              <PageContent entry={entry} index={current} />
            </motion.div>
          )}
        </AnimatePresence>

        {!flipping && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EntryContent entry={entry} index={current} total={total} />
          </motion.div>
        )}
      </div>

      {total > 1 && (
        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            disabled={current <= 0 || !!flipping}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-sm text-gray-400 font-mono">{current + 1} / {total}</span>

          <button
            onClick={next}
            disabled={current >= total - 1 || !!flipping}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/40 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

type PageContentProps = {
  entry: Readonly<Experience>;
  index: number;
};

const PageContent = ({ entry, index }: PageContentProps) => {
  return <EntryContent entry={entry} index={index} total={1} />;
};

type EntryContentProps = {
  entry: Readonly<Experience>;
  index: number;
  total: number;
};

const EntryContent = ({ entry, index, total }: EntryContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [7, -7]),
    { stiffness: 150, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-7, 7]),
    { stiffness: 150, damping: 20 }
  );

  const logoRotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [9, -9]),
    { stiffness: 150, damping: 20 }
  );
  const logoX = useSpring(
    useTransform(mx, [-0.5, 0.5], [14, -14]),
    { stiffness: 150, damping: 20 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full relative"
      style={{ perspective: "1200px" }}
    >
      {/* Base 3D tilt */}
      <div
        style={{
          transform: "rotateX(6deg) rotateY(-5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Cursor-reactive tilt group */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-16"
        >
          {/* TEXT LAYER — floats independently */}
          <motion.div
            style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            className="relative flex-1 w-full"
          >
            {/* Soft blurred drop shadow beneath the text block */}
            <div
              className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-[80%] h-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 70%)",
                filter: "blur(14px)",
              }}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col gap-4"
            >
              {/* Company — gradient heading */}
              <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {entry.company}
              </h3>

              {/* Role pill */}
              <span className="inline-flex w-fit border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] rounded-full px-3 py-1 text-sm text-gray-200">
                {entry.role}
              </span>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] rounded-full px-3 py-1 text-sm text-gray-300">
                  <svg className="w-3.5 h-3.5 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {entry.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] rounded-full px-3 py-1 text-sm text-gray-300">
                  <svg className="w-3.5 h-3.5 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {entry.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-base">{entry.description}</p>

              {/* Bullets — gradient checks */}
              <ul className="space-y-3">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="check-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M9 12l2 2 4-4" stroke="url(#check-grad)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {entry.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] rounded-full px-2.5 py-0.5 text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* LOGO LAYER — floats forward & reacts opposite to cursor */}
          <motion.div
            style={{
              transform: "translateZ(70px)",
              rotateY: logoRotateY,
              x: logoX,
              transformStyle: "preserve-3d",
            }}
            className="relative flex-shrink-0"
          >
            {/* Soft glowing shadow beneath the logo */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 65%)",
                filter: "blur(18px)",
                transform: "scale(1.3)",
              }}
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="relative rounded-xl bg-white p-3 shadow-lg"
                style={{
                  width: "120px",
                  height: "120px",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.3)",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={entry.logo || ""}
                    alt={`${entry.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Page indicator dots — center bottom, glowing carousel */}
      <div className="flex items-center justify-center gap-2 mt-4 select-none">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={
              i === index
                ? "h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]"
                : "h-1.5 w-1.5 rounded-full bg-purple-600/40"
            }
          />
        ))}
      </div>
    </div>
  );
};
