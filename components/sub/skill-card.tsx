"use client";

import { createElement } from "react";
import { motion } from "framer-motion";

type SkillCardProps = {
  Icon: React.ElementType;
  title: string;
  proficiency: number;
  description: string;
  index: number;
};

export const SkillCard = ({ Icon, title, proficiency, description, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-[#2A0E61] bg-[rgba(3,0,20,0.4)] backdrop-blur-sm p-6 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(124,58,237,0.45)] hover:border-purple-500/50 transition-all duration-300 flex flex-col h-[280px] origin-center hover:z-10"
    >
      <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex-shrink-0">
        {createElement(Icon, { className: "h-5 w-5 text-purple-400" })}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 flex-shrink-0">{title}</h3>

      <div className="w-full h-1.5 bg-gray-800 rounded-full mb-4 overflow-hidden flex-shrink-0">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

