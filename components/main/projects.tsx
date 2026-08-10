import { ProjectCard } from "@/components/sub/project-card";
import { WhyWork } from "@/components/main/why-work";
import { SectionContainer } from "@/components/layout/section-container";
import { WORK_ITEMS, WORK_SECTIONS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <SectionContainer className="flex flex-col items-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Work
        </h1>

        <div className="flex w-full flex-col gap-16">
          {WORK_SECTIONS.map((section) => {
            const items = WORK_ITEMS.filter((item) =>
              section.tags.includes(item.tag)
            );
            if (items.length === 0) return null;

            const label =
              items.length === 1 ? section.noun : `${section.noun}s`;

            return (
              <div key={section.id} className="flex flex-col gap-6">
                <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {section.subtitle} · {items.length} {label}
                  </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <ProjectCard
                      key={item.videoId}
                      videoId={item.videoId}
                      title={item.title}
                      category={item.category}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      <WhyWork />
    </section>
  );
};
