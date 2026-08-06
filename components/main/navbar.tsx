'use client';
import { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { RxDiscordLogo } from "react-icons/rx";

import { NAV_LINKS, SOCIALS } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const DISCORD_USERNAME = "chirag_grow";

type DiscordIconButtonProps = {
  size?: string;
  onCopied: () => void;
};

  const DiscordIconButton = ({ size = "h-4 w-4", onCopied }: DiscordIconButtonProps) => {
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

  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.link.replace("#", "")),
    []
  );
  const { activeId, setActive } = useActiveSection(sectionIds);

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
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 px-0">
        <div className="relative flex w-full items-center justify-between gap-3 rounded-full border border-white/10 bg-[#030014]/70 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-3.5">
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
                width={32}
                height={32}
                draggable={false}
                className="rounded-full object-cover transition-all duration-200 ease-in-out hover:scale-[1.2] hover:shadow-[0_0_12px_rgba(180,155,255,0.6)] relative hover:z-50 origin-center"
              />
            </div>
            <div className="hidden lg:flex font-bold ml-[8px] text-sm text-white">Chirag Mittal</div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {NAV_LINKS.map((link) => {
              const id = link.link.replace("#", "");
              const isActive = activeId === id;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={() => setActive(id)}
                  className="group relative cursor-pointer text-sm transition-colors duration-200"
                >
                  <span
                    className={cn(
                      "transition-colors duration-200",
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    )}
                  >
                    {link.title}
                  </span>
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 -bottom-1 h-[1.5px] rounded-full bg-[#8b5cf6] transition-all duration-200",
                      isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Socials + CTA + Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social Icons */}
            <div className="hidden xl:flex flex-row gap-3">
              {SOCIALS.map(({ link, name, icon: Icon }) =>
                name === "Discord" ? (
                  <DiscordIconButton key={name} onCopied={handleDiscordCopied} />
                ) : (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={name}
                    className="transition-colors duration-200 hover:text-[#a78bfa]"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="#contact"
              className="group hidden md:flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#030014] transition-colors duration-200 hover:bg-gray-100"
            >
              Work with me
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Hamburger Menu */}
            <button
              className="lg:hidden text-white focus:outline-none text-3xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-white/10 bg-[#030014]/95 p-6 flex flex-col items-center text-gray-300 backdrop-blur-xl lg:hidden">
              {/* Links */}
              <div className="flex flex-col items-center gap-5">
                {NAV_LINKS.map((link) => {
                  const id = link.link.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <Link
                      key={link.title}
                      href={link.link}
                      onClick={() => {
                        setActive(id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="relative cursor-pointer text-center transition-colors duration-200"
                    >
                      <span
                        className={cn(
                          "transition-colors duration-200",
                          isActive
                            ? "text-white"
                            : "text-gray-300 hover:text-white"
                        )}
                      >
                        {link.title}
                      </span>
                      <span
                        className={cn(
                          "absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] rounded-full bg-[#8b5cf6] transition-all duration-200",
                          isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group mt-6 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#030014]"
              >
                Work with me
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-6">
                {SOCIALS.map(({ link, name, icon: Icon }) =>
                  name === "Discord" ? (
                    <DiscordIconButton key={name} size="h-7 w-7" onCopied={handleDiscordCopied} />
                  ) : (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      key={name}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </header>

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