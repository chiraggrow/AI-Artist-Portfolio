"use client";

import { createElement, memo, useState } from "react";
import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { MARQUEE_ROWS } from "@/constants";
import type { SkillIcon } from "@/components/sub/skill-data-provider";

const ROWS = [
  { icons: MARQUEE_ROWS[0], duration: "20s", reverse: false },
  { icons: MARQUEE_ROWS[1], duration: "26s", reverse: true },
  { icons: MARQUEE_ROWS[2], duration: "22s", reverse: false },
];

const Fallback = ({ name }: { name: string }) => (
  <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-widest text-gray-500">
    {name.slice(0, 2)}
  </div>
);

const ToolLogo = ({ icon }: { icon: SkillIcon }) => {
  const [failed, setFailed] = useState(false);

  if (icon.kind === "image") {
    if (failed) return <Fallback name={icon.name} />;

    return (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src={icon.src}
          width={icon.size}
          height={icon.size}
          alt={icon.name}
          onError={() => setFailed(true)}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  const iconElement = icon.isCombine
    ? createElement(icon.component, {
        size: icon.size,
        showText: false,
        color: icon.color,
      })
    : createElement(icon.component, { size: icon.size, color: icon.color });

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      {icon.backdrop ? (
        <div
          className="flex items-center justify-center rounded-lg"
          style={{
            backgroundColor: icon.backdrop,
            padding: Math.round(icon.size * 0.15) + "px",
          }}
        >
          {iconElement}
        </div>
      ) : (
        iconElement
      )}
    </div>
  );
};

export const ToolsMarquee = memo(function ToolsMarquee() {
  const badgeGlow = (tint?: string) => {
    if (!tint || tint === "#000000") {
      return "radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(10,10,15,0) 78%)";
    }
    return `radial-gradient(ellipse at 50% 45%, ${tint}33 0%, ${tint}14 55%, rgba(10,10,15,0) 80%)`;
  };

  return (
    <section className="flex w-full flex-col items-center justify-center py-12">
      <SectionContainer className="flex w-full flex-col items-center gap-12">
        <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          <span className="text-[#8b5cf6]">—</span> Tools I Use{" "}
          <span className="text-[#8b5cf6]">—</span>
        </h2>

        <div className="flex w-full flex-col gap-7">
          {ROWS.map((row, i) => (
            <div key={i} className="marquee-mask relative h-[72px] w-full overflow-hidden">
              <div
                className={`flex w-max items-center gap-4 ${
                  row.reverse ? "animate-marquee-reverse" : "animate-marquee"
                }`}
                style={{ animationDuration: row.duration }}
              >
                {[...row.icons, ...row.icons].map((icon, j) => (
                  <div
                    key={`${icon.name}-${j}`}
                    className="marquee-card flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0f]"
                    style={{ backgroundImage: badgeGlow(icon.tint) }}
                  >
                    <ToolLogo icon={icon} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
});
