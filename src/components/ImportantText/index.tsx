import clsx from "clsx";
import { ReactNode } from "react";

type ImportantTextProps = {
  children: ReactNode;
  className?: string;
};

export function ImportantText({ children, className }: ImportantTextProps) {
  return (
    <article
      className={clsx("text-center font-medium flex items-center justify-between px-8 md:px-24 2xl:px-64 py-12 border-t-1 border-b-1 -mx-4 md:-mx-8", className)}
    >
      {children}
    </article>
  );
}
