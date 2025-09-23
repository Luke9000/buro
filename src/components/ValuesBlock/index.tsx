import React from "react";
import { SlideIn } from "../SlideIn";

interface ValuesBlockProps {
  title: string;
  text: string;
  highlightTitle?: string; // слова/фразы для заголовка через |
  highlightText?: string; // слова/фразы для текста через |
}

export const ValuesBlock: React.FC<ValuesBlockProps> = ({
  title,
  text,
  highlightTitle = "",
  highlightText = "",
}) => {
  const renderHighlighted = (input: string, highlight: string) => {
    if (!highlight) return input;

    const highlights = highlight
      .split("|")
      .map((h) => h.trim())
      .filter(Boolean);

    if (highlights.length === 0) return input;

    const regex = new RegExp(`(${highlights.join("|")})`, "g"); // <-- без i, регистр учитывается
    const parts = input.split(regex);

    return parts.map((part, i) =>
      highlights.includes(part) ? (
        <span key={i} className="text-accent-higher font-semibold">
          {part}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <div className="border-1 border-r-0 border-b-0 p-12 ">
      <SlideIn>
        <h1 className="text-xl font-bold mb-2">
          {renderHighlighted(title, highlightTitle)}
        </h1>
        <p className="text-gray-700 leading-relaxed">
          {renderHighlighted(text, highlightText)}
        </p>
      </SlideIn>
    </div>
  );
};
