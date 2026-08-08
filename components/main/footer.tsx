import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";

const EMAIL = "chiragmittal905@gmail.com";

export const Footer = () => {
  return (
    <footer
      className="relative w-full px-4 pb-8 pt-14 text-gray-200 md:pt-16"
    >
      <SectionContainer className="flex flex-col items-center">
        <div className="mt-8 flex w-full flex-col items-center justify-between gap-6 border-t border-white/10 pt-7 text-[13px] text-gray-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Chirag Mittal</p>

          <div className="flex flex-wrap items-center justify-center gap-1 text-center">
            <span>Ghaziabad, India</span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-600 md:block" />
            <span>+918923634507</span>
          </div>

          <Link
            href={`mailto:${EMAIL}`}
            className="flex items-center text-gray-400 transition hover:text-gray-300"
          >
            {EMAIL}
          </Link>
        </div>
      </SectionContainer>
    </footer>
  );
};
