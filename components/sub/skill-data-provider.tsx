"use client";

import { createElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export type SkillIcon =
  | { kind: "component"; name: string; size: number; component: React.ElementType; isCombine?: boolean; color?: string; backdrop?: string; tint?: string }
  | { kind: "image"; name: string; size: number; src: string; tint?: string };

type SkillDataProviderProps = {
  icon: SkillIcon;
  index: number;
};

export const SkillDataProvider = ({
  icon,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (icon.kind === "image") {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * 0.1 }}
      >
        <Image src={icon.src} width={icon.size} height={icon.size} alt={icon.name} />
      </motion.div>
    );
  }

  const iconElement = icon.isCombine
    ? createElement(icon.component, { size: icon.size, showText: false, color: icon.color })
    : createElement(icon.component, { size: icon.size, color: icon.color });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * 0.1 }}
    >
      {icon.backdrop ? (
        <div
          className="flex items-center justify-center rounded-lg"
          style={{ backgroundColor: icon.backdrop, padding: Math.round(icon.size * 0.15) + "px" }}
        >
          {iconElement}
        </div>
      ) : (
        iconElement
      )}
    </motion.div>
  );
};
