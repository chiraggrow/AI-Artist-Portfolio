import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6", className)}>
      {children}
    </div>
  );
};
