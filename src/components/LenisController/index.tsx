'use client';

import Lenis from 'lenis';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function LenisController() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');


  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);


  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const container = document.querySelector('main');
    if (!container) return;

    const observer = new ResizeObserver(() => {
  
      lenis.resize();


    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [pathname, idParam]);

  return null;
}
