"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  return (
    <div ref={ref} className={`relative w-full h-full overflow-hidden ${className}`}>
      <motion.div style={{ y, scale: 1.2 }} className="relative w-full h-full scale-115">
        <Image
          unoptimized
          fill
          className="object-cover"
          src={src}
          alt={alt}
        />
      </motion.div>
    </div>
  );
}
