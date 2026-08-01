import { SkillDataProvider } from "@/components/sub/skill-data-provider";

import {
  ROW_1,
  ROW_2,
  ROW_3,
  ROW_4,
  ROW_5,
} from "@/constants";

export const Tools = () => {
  return (
    <section
      id="tools"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 text-white"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Tools.
      </h1>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
        {ROW_1.map((icon, i) => (
          <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
        {ROW_2.map((icon, i) => (
          <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
        {ROW_3.map((icon, i) => (
          <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
        {ROW_4.map((icon, i) => (
          <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-24 items-center">
        {ROW_5.map((icon, i) => (
          <SkillDataProvider key={icon.name} icon={icon as any} index={i} />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
