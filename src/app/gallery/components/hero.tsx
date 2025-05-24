import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '20vh']);

  return (
    <div className="h-auto overflow-hidden">
      <motion.div ref={container} style={{ y }} className="relative h-full">
        <Image
          width={2000}
          height={1500}
          src="/galleryimage.jpg"
          alt="Therapy Gallery"
          style={{ objectFit: 'cover' }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-center text-2xl sm:text-4xl md:text-8xl font-medium drop-shadow-lg">
            See Therapy in Action
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
