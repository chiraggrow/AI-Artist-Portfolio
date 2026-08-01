"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  videoId: string;
  title: string;
  description: string;
};

const THUMB_QUALITIES = ["maxresdefault", "hqdefault", "mqdefault", "default"];

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white ml-1"
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

export const ProjectCard = ({ videoId, title, description }: ProjectCardProps) => {
  const [thumbQuality, setThumbQuality] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);

  const thumbUrl = `https://img.youtube.com/vi/${videoId}/${THUMB_QUALITIES[thumbQuality]}.jpg`;

  const handleThumbError = () => {
    if (thumbQuality < THUMB_QUALITIES.length - 1) {
      setThumbQuality((q) => q + 1);
    } else {
      setThumbFailed(true);
    }
  };

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.45)] hover:border-purple-500/50 cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
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
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleThumbError}
          />
        )}

        {/* Play icon overlay — top-right corner */}
        <div className="absolute top-3 right-3 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-black/60 border border-purple-400/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_16px_rgba(168,85,247,0.4)] transition-transform duration-300 group-hover:scale-110 z-10">
            <PlayIcon />
          </div>
        </div>
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 whitespace-pre-line">{description}</p>
      </div>
    </Link>
  );
};
