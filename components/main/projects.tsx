import { ProjectCard } from "@/components/sub/project-card";
import { WhyWork } from "@/components/main/why-work";
import { SectionContainer } from "@/components/layout/section-container";
import { PROJECTS } from "@/constants";

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
        <div className="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title + project.videoId}
              videoId={project.videoId}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </SectionContainer>

      <WhyWork />
    </section>
  );
};
