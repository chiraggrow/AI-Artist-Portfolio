import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";

const FEATURES = [
  {
    number: "01",
    title: "Purposeful Direction",
    description:
      "Every frame serves a goal. I align AI visuals and campaigns with your brand's message and business outcome — not just aesthetics.",
  },
  {
    number: "02",
    title: "In-The-Trenches Craft",
    description:
      "I work inside the tools daily — prompting, generating, compositing, editing — so nothing gets lost between concept and final render.",
  },
  {
    number: "03",
    title: "Insight-Led Creativity",
    description:
      "Performance, feedback, and iteration shape every creative decision — blending taste with what actually connects.",
  },
  {
    number: "04",
    title: "AI-Powered Speed",
    description:
      "Gen-AI pipelines let me produce cinematic-quality output in days, not months — fast turnaround without cutting corners.",
  },
  {
    number: "05",
    title: "Ownership Mindset",
    description:
      "I treat every project like my own — from the first prompt to the final export, delivering polished, ready-to-publish work.",
  },
  {
    number: "06",
    title: "Results-Driven",
    description:
      "Portfolio is nice, but impact matters. I build content engineered for views, engagement, and conversion.",
  },
];

export const WhyWork = () => {
  return (
    <section
      id="why-work"
      className="flex flex-col items-center justify-center py-20 text-white"
    >
      <SectionContainer className="flex flex-col">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8b5cf6]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5cf6]">
              Why work with me?
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Creator. Strategist. Operator.
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left — image card with quote overlay */}
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 lg:col-span-2">
            <Image
              src="/assets/work-showcase.jpg"
              alt="Chirag Mittal working on AI visuals"
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
              <span className="font-serif text-6xl leading-none text-[#8b5cf6]">
                &ldquo;
              </span>
              <p className="text-sm italic leading-relaxed text-gray-100">
                The best AI work doesn&apos;t look like AI — it looks
                inevitable.
              </p>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                — Chirag Mittal
              </span>
            </div>
          </div>

          {/* Right — feature cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a0a0f] p-5 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-[#8b5cf6]/60 hover:bg-white/5 hover:shadow-lg hover:shadow-[#8b5cf6]/10"
              >
                <span className="number-badge transition-colors duration-200 group-hover:border-purple-400/70 group-hover:text-white">
                  {feature.number}
                </span>
                <h3 className="text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
