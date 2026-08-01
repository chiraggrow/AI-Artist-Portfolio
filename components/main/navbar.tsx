'use client';
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { RxDiscordLogo } from "react-icons/rx";

import { NAV_LINKS, SOCIALS } from "@/constants";

const DISCORD_USERNAME = "chirag_grow";

type DiscordIconButtonProps = {
  size?: string;
  onCopied: () => void;
};

const DiscordIconButton = ({ size = "h-6 w-6", onCopied }: DiscordIconButtonProps) => {
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
    } catch {
      /* clipboard unavailable — ignore */
    }
    onCopied();
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        aria-label="Copy Discord username: chirag_grow"
        className="outline-none focus:outline-none"
      >
        <RxDiscordLogo
          className={`${size} text-white transition-all duration-200 group-hover:text-[#5865F2] group-hover:drop-shadow-[0_0_8px_rgba(88,101,242,0.8)]`}
        />
      </button>

      {/* Tooltip */}
      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        <div className="rounded-md border border-[rgba(112,66,248,0.38)] bg-[#030014]/95 backdrop-blur-sm px-3 py-1 text-xs text-gray-200 shadow-[0_0_12px_rgba(88,101,242,0.4)]">
          Discord: <span className="text-[#5865F2]">{DISCORD_USERNAME}</span>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  const handleDiscordCopied = () => {
    setShowToast(true);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setShowToast(false), 2500);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  // Disable scroll when lightbox modal is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Support Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#about-me"
          className="flex items-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:rounded-lg"
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLightboxOpen(true);
            }}
            className="cursor-pointer"
          >
            <Image
              src="/profile.jpg"
              alt="Logo"
              width={40}
              height={40}
              draggable={false}
              className="rounded-full object-cover transition-all duration-200 ease-in-out hover:scale-[1.2] hover:shadow-[0_0_12px_rgba(180,155,255,0.6)] relative hover:z-50 origin-center"
            />
          </div>
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Chirag Mittal</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[650px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) =>
            name === "Discord" ? (
              <DiscordIconButton key={name} onCopied={handleDiscordCopied} />
            ) : (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-6 w-6 text-white" />
              </Link>
            )
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) =>
              name === "Discord" ? (
                <DiscordIconButton key={name} size="h-8 w-8" onCopied={handleDiscordCopied} />
              ) : (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                >
                  <Icon className="h-8 w-8 text-white" />
                </Link>
              )
            )}
          </div>
        </div>
      )}

    </div>

      {/* Discord copy toast */}
      {showToast && (
        <div className="fixed top-20 right-6 z-[9999] flex items-center gap-2 rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.92)] backdrop-blur-md px-4 py-2 text-sm text-gray-200 shadow-[0_0_16px_rgba(88,101,242,0.5)]">
          <span className="text-emerald-400">✓</span>
          Discord username copied!
        </div>
      )}

      {/* Lightbox Modal — portaled to document.body to escape backdrop-blur containing block */}
      {portalRoot &&
        createPortal(
          <AnimatePresence>
            {isLightboxOpen && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                {/* Backdrop click area */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 cursor-zoom-out"
                  onClick={() => setIsLightboxOpen(false)}
                />

                {/* Lightbox Content Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative max-w-[90vw] max-h-[85vh] z-10 flex flex-col items-center"
                >
                  {/* Close Button X */}
                  <button
                    onClick={() => setIsLightboxOpen(false)}
                    className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all z-20 focus:outline-none"
                    aria-label="Close lightbox"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Full Size Image (Uncropped, aspect ratio preserved) */}
                  <img
                    src="/profile.jpg"
                    alt="Chirag Mittal Profile Full Size"
                    className="rounded-lg shadow-2xl max-w-[500px] max-h-[80vh] w-auto h-auto object-contain border border-white/10"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          portalRoot
        )}
    </>
  );
};