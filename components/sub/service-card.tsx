"use client";

import { createElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  icon: React.ElementType;
  image: string;
  title: string;
  description: string;
  index: number;
};

export const ServiceCard = ({
  icon,
  image,
  title,
  description,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f] hover:border-[#8b5cf6]/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] transition-all duration-300"
    >
      <div className="relative h-48 md:h-52 w-full overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
          {createElement(icon, { className: "h-5 w-5 text-[#a78bfa]" })}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};
