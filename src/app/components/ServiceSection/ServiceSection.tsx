"use client";

import { useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ServiceCard from "./ServiceCards";
import Image from "next/image";

export default function ServiceSection() {

  const boxesRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);
  
    useEffect(() => {
      const boxes = boxesRef.current;
  
      function checkBoxes() {
        const isMobile = window.innerWidth <= 768;
        const triggerBottom = (window.innerHeight / 4) * 4;
  
        boxes.forEach((box, index) => {
          if (!box) return;
          const boxTop = box.getBoundingClientRect().top;
  
          if (isMobile) {
            if (boxTop < triggerBottom) {
              box.classList.add("show");
            } else {
              box.classList.remove("show");
            }
          } else {
            setTimeout(() => {
              box.classList.add("show");
            }, index * 150);
          }
        });
      }
  
      window.addEventListener("scroll", checkBoxes);
      window.addEventListener("resize", checkBoxes);
      window.addEventListener("load", checkBoxes);
  
      checkBoxes();
  
      return () => {
        window.removeEventListener("scroll", checkBoxes);
        window.removeEventListener("resize", checkBoxes);
        window.removeEventListener("load", checkBoxes);
      };
    }, []);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  const therapyImages = [
    { src: "/aba-therapy.svg", title: "ABA Therapy", href: "/ServicePage" },
    { src: "/feeding-therapy.svg", title: "Feeding Therapy" },
    { src: "/group-therapy.svg", title: "Group Therapy" },
    {
      src: "/neuro-integrative-therapy.svg",
      title: "Neuro Integrative\nTherapy",
    },
    { src: "/occupational-therapy.svg", title: "Occupational\nTherapy" },
    { src: "/physical-therapy.svg", title: "Physical Therapy" },
    { src: "/school-readiness-program.svg", title: "School Readiness" },
    { src: "/speech-and-language-therapy.svg", title: "Speech &\nLanguage" },
  ];

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const services = therapyImages.map(({ src, title, href }, index) => (
    <div key={index} className="">
      <ServiceCard imageSrc={src} title={title} href={href || "#"} />
    </div>
  ));

  return (
    <div className="bg-transparent flex flex-col items-center justify-center p-6 sm:p-8">
      <div  ref={(el) => {
          if (el) boxesRef.current[0] = el;
        }} className="box inline-flex items-center justify-center mb-3">
        <Image
          src="/verified.png"
          alt="Verified Icon"
          className="w-8 h-8 mr-1"
          width={800}
          height={500}
        />
        <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
          Our Services
        </div>
      </div>
      <h2  ref={(el) => {
          if (el) boxesRef.current[1] = el;
        }} className=" box text-gray-500 text-3xl sm:text-4xl font-medium text-center mb-2">
        We Believe Everyone Deserves
      </h2>
      <div  className="relative inline-block">
        <h1  ref={(el) => {
          if (el) boxesRef.current[2] = el;
        }}className="box text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
          Our Quality Care
        </h1>
      </div>

      <div className="mt-8 w-full flex justify-center">
        {isSmallScreen ? (
          <div  ref={(el) => {
            if (el) boxesRef.current[3] = el;
          }}className="box w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 px-0 py-0">
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
          <div className="grid grid-cols-4 lg:gap-10 gap-10 md:gap-3  mt-8 md:grid">{services}</div>
        )}
      </div>
    </div>
  );
}
