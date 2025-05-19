'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:h-[calc(100vh-4rem)] xl:h-[calc(100vh-4rem)] overflow-hidden">
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.jpeg"
          alt="KCLUB Tech Transformation"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
          quality={100}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
    </div>
  );
} 