import { motion } from "motion/react";
import React from "react";

type HexNutSVGProps = {
  size?: string; // "24px"  "1.5rem"
  isActive: boolean;
  dotColor: string;        // цвет обода/заливки когда НЕ активен
  activeDotColor: string;  // цвет обода/заливки когда активен
  bgFill?: string;         // цвет "дырки"
  strokeWidth?: number;    // толщина ободка в системе viewBox 0..100
  className?: string;
};

export const HexNutSVG: React.FC<HexNutSVGProps> = ({
  size = "1.5rem",
  isActive,
  dotColor,
  activeDotColor,
  bgFill = "#ffffff",
  strokeWidth = 6,
  className = "",
}) => {
  // внешний шестиугольник
  const outerPath = "M50 4 L90 26.5 L90 73.5 L50 96 L10 73.5 L10 26.5 Z";
  // внутренний меньший шестиугольник 
  const innerPath = "M50 24.7 L72 37.075 L72 62.925 L50 75.3 L28 62.925 L28 37.075 Z";

  const outerFill = isActive ? activeDotColor : dotColor;
  const stroke = isActive ? activeDotColor : dotColor;

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      initial={false}
      aria-hidden
      focusable={false}
      style={{ display: "block" }}
    >
      {/* Внешняя заливка + обод */}
      <motion.path
        d={outerPath}
        fill={outerFill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ fill: outerFill, stroke }}
      />

      
      <motion.path
        d={innerPath}
        fill={bgFill}
        stroke="none"
        animate={{ fill: bgFill }}
      />
    </motion.svg>
  );
};

export default HexNutSVG;
