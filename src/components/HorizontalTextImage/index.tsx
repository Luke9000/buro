"use client";

import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

type HorizontalTextImageProps = {
  children: ReactNode;
  className?: string;
  src: string | StaticImageData;
  alt: string;
};

export function HorizontalTextImage({
  children,
  className,
  src,
  alt,
}: HorizontalTextImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // 0 = блок только появляется снизу, 1 = блок уже уехал наверх
  });

  // смещение картинки по Y (внутри контейнера)
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // динамическая обрезка слева
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["inset(0 0 0 25%)", "inset(0 0 0 45%)", "inset(0 0 0 25%)"]
  );

  return (
    <article
      ref={ref}
      className={clsx(
        " flex border-t border-b -mx-4 md:-mx-8 items-center h-fit lg:min-h-64 xl:min-h-108 overflow-hidden relative",
        className
      )}
    >
      <div className=" px-8 py-12 lg:px-16  relative w-4/5 lg:w-1/2">
        {children}
      </div>

      <motion.div
        style={{ clipPath }}
        className="absolute right-0 top-0 h-full lg:w-3/4 w-2/5 overflow-hidden"
      >
        <motion.div style={{ y }} className="relative scale-120 h-full w-full">
          <Image
            unoptimized
            fill
            className="object-cover"
            alt={alt}
            src={src}
          />
        </motion.div>
      </motion.div>
    </article>
  );
}
