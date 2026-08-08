import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import { SOCIALS } from "@/constants";
import { SectionContainer } from "@/components/layout/section-container";

const LINKEDIN_URL =
  SOCIALS.find((social) => social.name === "LinkedIn")?.link ?? "#";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center gap-3 py-20 text-white"
    >
      <SectionContainer className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Get In Touch
        </h1>

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-[#7042f878] bg-transparent px-6 py-12 text-center shadow-[0_0_34px_rgba(112,66,248,0.18)] md:px-14 md:py-16">
        <div className="pointer-events-none absolute left-10 top-10 hidden h-[2px] w-12 bg-gradient-to-r from-[#7042f8] to-[#9cb2ff] md:block" />
        <div className="pointer-events-none absolute right-12 top-12 hidden h-1.5 w-1.5 rounded-full bg-[#9cb2ff] shadow-[0_0_18px_#9cb2ff] md:block" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7042f8] to-transparent" />

        <div className="mx-auto mb-5 flex w-max items-center gap-4">
          <span className="h-px w-8 bg-[#8f78ff]" />
          <span className="Welcome-text text-xs font-semibold uppercase tracking-[0.3em]">
            Open to Build
          </span>
        </div>

        <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
          Let&apos;s create AI visuals that feel cinematic.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          I&apos;m available for AI films, generative ads, brand visuals, and
          animation-led projects. If your idea needs a strong visual world,
          I&apos;d love to shape it with the right AI production workflow.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:chiragmittal905@gmail.com"
            className="group flex min-h-[40px] items-center justify-center gap-3 rounded-full bg-white px-5 text-sm font-semibold text-[#030014] transition hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,255,255,0.26)]"
          >
            Send an email
            <PaperAirplaneIcon className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary flex min-h-[40px] items-center justify-center gap-3 rounded-full border border-[#7042f878] px-5 text-sm font-semibold text-white transition hover:scale-[1.03]"
          >
            LinkedIn Profile
          </Link>
        </div>
      </div>
      </SectionContainer>
    </section>
  );
};
