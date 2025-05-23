'use client';

import { useEffect, useState } from 'react';
import HalfWaveBackground from "../svgs/halfcarve";

interface HeroVideoProps {
  title: string;
  videoUrl: string;
  showWave?: boolean;
}

export default function HeroVideo({ title, videoUrl, showWave = true }: HeroVideoProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden my-15">
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="bg-gradient-to-b from-[#54169C]/90 to-pink-500/90 w-full h-full absolute" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white relative z-10">
          {title}
        </h2>
      </div>

      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {showWave && (
        <div className="absolute bottom-0 w-full hidden sm:block">
          <HalfWaveBackground />
        </div>
      )}
    </section>
  );
}
