"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="flex w-full flex-col items-center gap-6">
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

const CalendarIcon = () => (
  <svg className="h-4 w-4 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const LocationIcon = () => (
  <svg className="h-4 w-4 text-[#b49bff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="check-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path d="M9 12l2 2 4-4" stroke="url(#check-grad)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EntryContent = ({ entry, index, total }: EntryContentProps) => {
  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/10 bg-[#0a0a0f] p-6 shadow-lg transition-colors duration-200 hover:border-purple-500/50 md:p-8">
        {/* Header row */}
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-2 shadow-md">
              {entry.logo ? (
                <Image
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-base font-bold text-gray-500">
                  {entry.company.charAt(0)}
                </div>
              )}
            </div>

            {/* Company + role */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">
                {entry.company}
              </h3>
              <span className="w-fit rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(112,66,248,0.12)] px-3 py-1 text-xs font-medium text-[#b49bff]">
                {entry.role}
              </span>
            </div>
          </div>

          {/* Date + location */}
          <div className="flex flex-col items-start gap-2 md:items-end">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-3 py-1 text-xs text-gray-300">
              <CalendarIcon />
              {entry.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-3 py-1 text-xs text-gray-300">
              <LocationIcon />
              {entry.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 border-l-2 border-[#8b5cf6] pl-4 text-sm leading-relaxed text-gray-300">
          {entry.description}
        </p>

        {/* Highlights */}
        <ul className="mt-5 space-y-2">
          {entry.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-gray-400"
            >
              <CheckIcon />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
          {entry.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-3 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Page indicator dots */}
      <div className="mt-4 flex items-center justify-center gap-2 select-none">
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
