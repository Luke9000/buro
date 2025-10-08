"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollReactiveProps {
  children?: ReactNode;
  className: string;
  range?: [number, number]; // диапазон скролла (px)
  move?: [number, number]; // насколько двигается содержимое (px)
}

export function ScrollReactive({
  children,
  className,
  range = [0, 1000],
  move = [0, -200], // при прокрутке на 1000px едет вверх на 200px
}: ScrollReactiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px" });
  const { scrollY } = useScroll();

  // Преобразуем scrollY в смещение по Y
  const rawY = useTransform(scrollY, range, move);

  // Добавляем плавность
  const springY = useSpring(rawY, {
    stiffness: 250,
    damping: 100,
  });

  return (
    <motion.div
      ref={ref}
      style={{ y: isInView ? springY : 0 }}
      className={cn(
        "absolute w-full h-fit flex justify-center items-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
