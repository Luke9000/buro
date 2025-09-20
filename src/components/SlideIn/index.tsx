"use client";

import { motion, Variants, useAnimation, useInView } from "motion/react";
import { ReactNode, useRef, useEffect } from "react";

interface SlideInProps {
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  children: ReactNode;
  className?: string;
  opacity?: number;
}

export function SlideIn({
  direction = "left",
  delay = 0,
  duration = 0.5,
  children,
  className = "",
  opacity = 0,
}: SlideInProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.1 });

  const variants: Variants = {
    hidden: {
      opacity: opacity,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === 'top' ? -50 : direction === 'bottom' ? 50 : 0,
      transition: { duration: duration / 2 },
    },
    visible: {
      opacity: 1,
      y: 0, 
      x: 0,
      transition: { delay, duration, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
