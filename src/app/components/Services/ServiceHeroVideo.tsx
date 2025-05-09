'use client';

import HalfWaveBackground from "../svgs/halfcarve";

interface HeroVideoProps {
  title: string;
  videoUrl: string;
  showWave?: boolean;
}

export default function HeroVideo({ title, videoUrl, showWave = true }: HeroVideoProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden my-15">
      <div
        className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000"
        id="titleOverlay"
      >
        <div className="bg-gradient-to-b from-[#54169C]/90 to-pink-500/90 w-full h-full absolute" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white relative">
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

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', () => {
              const overlay = document.getElementById('titleOverlay');
              if (overlay) {
                setTimeout(() => {
                  overlay.style.opacity = '0';
                }, 3000);
              }
            });
          `,
        }}
      />
    </section>
  );
}
