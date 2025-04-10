"use client";
import Image from "next/image";

import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ServiceSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const therapyImages = [
    "/aba-therapy.svg",
    "/feeding-therapy.svg",
    "/group-therapy.svg",
    "/neuro-integrative-therapy.svg",
    "/occupational-therapy.svg",
    "/physical-therapy.svg",
    "/school-readiness-program.svg",
    "/speech-and-language-therapy.svg",
  ];
  useEffect(() => {
    if (!emblaApi || !isSmallScreen) return;

    const autoplay = () => {
      if (!emblaApi) return;
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    autoplayInterval.current = setInterval(autoplay, 3000);

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, [emblaApi, isSmallScreen]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi]);
  const services = therapyImages.map((src, index) => (
    <div
      key={index}
      className="relative overflow-hidden bg-gradient-to-bl from-[#DA159B] to-[#54169C] rounded-[40px] shadow-lg 
      w-full max-w-[290px] h-[280px] mx-auto"
    >
      <Image
        src={src}
        alt={`Therapy ${index}`}
        width={260}
        height={280}
        className="object-cover w-full h-full"
      />
    </div>
  ));

  return (
    <div className=" bg-white flex flex-col items-center justify-center p-6 sm:p-8">
      <h2 className="text-gray-500 text-3xl sm:text-4xl font-medium text-center mb-2">
        We Believe Everyone Deserves
      </h2>
      <div className="relative inline-block">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
          Our Quality Care
        </h1>
      </div>

      <div className="mt-8 w-full flex justify-center">
        {isSmallScreen ? (
          <div className="w-full ">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6  px-6">
                {services.map((service, index) => (
                  <div
                    className="flex-[0_0_100%] flex justify-center"
                    key={index}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === selectedIndex ? "bg-pink-500" : "bg-gray-300"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6 mt-8 md:grid">
            {services}
          </div>
        )}
      </div>
    </div>
  );
}
