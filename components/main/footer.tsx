import Link from "next/link";

const EMAIL = "chiragmittal905@gmail.com";

export const Footer = () => {
  return (
    <footer
      className="relative w-full px-4 pb-8 pt-14 text-gray-200 md:pt-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
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
      </div>
    </footer>
  );
};
