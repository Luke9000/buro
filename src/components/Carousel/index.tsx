import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface FreeLoopCarouselProps {
  previews?: StaticImageData[]
}

const FreeLoopCarousel: React.FC<FreeLoopCarouselProps> = ({ previews = [] }) => {
  const [viewportRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 'auto',
  })

  return (
    <div
      ref={viewportRef}
      className="flex overflow-hidden w-full"
    >
      {previews.map((src, i) => (
        <div
          key={i}
          className="shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 p-4"
        >
          <div className="aspect-square flex items-center justify-center border-zinc-200 rounded-xl overflow-hidden">
            <Image
              src={src}
              alt={`preview-${i}`}
              className="w-full h-full object-contain"
            ></Image>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FreeLoopCarousel
