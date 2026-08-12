"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  videoId: string;
  title: string;
  category: string;
};

const THUMB_CANDIDATES = [
  { host: "https://img.youtube.com/vi", quality: "maxresdefault" },
  { host: "https://i.ytimg.com/vi", quality: "hq2" },
  { host: "https://img.youtube.com/vi", quality: "hqdefault" },
  { host: "https://img.youtube.com/vi", quality: "mqdefault" },
  { host: "https://img.youtube.com/vi", quality: "default" },
];

const PlayIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ml-0.5`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const FilmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-purple-400/50"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4h-4zM5 17H3v-2h2v2zm0-4H3v-2h2v2zm0-4H3V7h2v2zm4 8H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
  </svg>
);

export const ProjectCard = ({
  videoId,
  title,
  category,
}: ProjectCardProps) => {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbUrl = `${THUMB_CANDIDATES[thumbIndex].host}/${videoId}/${THUMB_CANDIDATES[thumbIndex].quality}.jpg`;

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleThumbError = () => {
    if (thumbIndex < THUMB_CANDIDATES.length - 1) {
      setThumbIndex((i) => i + 1);
    } else {
      setThumbFailed(true);
    }
  };

  return (
    <>
      <div className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0f] shadow-md transition-all duration-200 hover:border-white/20">
        {/* Thumbnail / Video Area */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label={`Play ${title}`}
          className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-black text-left focus:outline-none"
        >
          {thumbFailed ? (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(60,8,126,0.35) 0%, rgba(3,0,20,0.6) 100%)",
              }}
            >
              <FilmIcon />
            </div>
          ) : (
            <Image
              src={thumbUrl}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              onError={handleThumbError}
            />
          )}

          {/* Hover darken overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/30" />

          {/* Category badge — top-left */}
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {category}
          </span>

          {/* Centered play button */}
          <span className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all duration-200 group-hover:scale-110 group-hover:bg-[#8b5cf6] group-hover:text-white">
              <PlayIcon className="h-5 w-5" />
            </span>
          </span>
        </button>

        {/* Card footer */}
        <div className="flex items-start justify-between gap-4 px-4 py-3">
          <div className="flex min-w-0 flex-col gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              {category}
            </span>
            <h3 className="text-base font-bold leading-tight text-white">
              {title}
            </h3>
          </div>

          {/* External link button */}
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open project video"
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-200 hover:border-[#8b5cf6] hover:bg-[#8b5cf6]"
          >
            <ArrowUpRightIcon className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>

      {/* Video lightbox — portaled to document.body to escape overflow-hidden */}
      {portalRoot &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 cursor-zoom-out"
                  onClick={() => setIsModalOpen(false)}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 w-[90vw] max-w-4xl"
                >
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    aria-label="Close video"
                    className="absolute -top-10 right-0 rounded-full bg-black/40 p-2 text-white/70 transition-all hover:bg-black/60 hover:text-white focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          portalRoot
        )}
    </>
  );
};
