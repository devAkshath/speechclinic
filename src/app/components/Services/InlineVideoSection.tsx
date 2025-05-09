"use client";

import { useState } from "react";
import Image from "next/image";

interface InlineVideoSectionProps {
  videoUrl: string;
  thumbnailSrc: string;
  caption: string;
  thumbnailAlt?: string;
}

export default function InlineVideoSection({
  videoUrl,
  thumbnailSrc,
  caption,
  thumbnailAlt = "Service Video Thumbnail",
}: InlineVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative z-10 mb-8">
      <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
        <div className="aspect-w-16 aspect-h-9 relative">
          {!isPlaying ? (
            <>
              <Image
                width={800}
                height={500}
                src={thumbnailSrc}
                alt={thumbnailAlt}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#54169C"
                      className="w-10 h-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <h3 className="text-white text-2xl font-normal">{caption}</h3>
                </div>
              </div>
            </>
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
