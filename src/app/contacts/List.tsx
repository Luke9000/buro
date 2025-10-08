import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";

type ListProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export function List({ children, className, title }: ListProps) {
  return (
    <div className={cn("", className)}>
      <h3 className="text-2xl mb-2">{title}</h3>
      <ul className="list-disc pl-4 text-sm px-8">
        {React.Children.map(children, (child) => (
          <li className="py-0.5">{child}</li>
        ))}
      </ul>
    </div>
  );
}
