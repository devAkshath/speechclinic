"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const blogCards = [
  {
    title: "Significance of Early Intervention",
    content:
      "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we emphasize identifying concerns at the earliest stage possible.",
    image: "/galleryimage.jpg",
  },
  {
    title: "Understanding Speech Development",
    content:
      "Speech development milestones are important indicators of a child’s growth and communication skills. Delays can be an early sign of issues that need addressing, and recognizing them early helps in effective therapy and support.",
    image: "/galleryimage.jpg",
  },
  {
    title: "Role of Parents in Therapy",
    content:
      "Parental involvement plays a crucial role in the success of therapy and the child’s overall progress. The commitment, encouragement, and interaction of parents enhance the outcomes of therapeutic sessions.",
    image: "/galleryimage.jpg",
  },
];

export default function Blogs() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
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
    

    autoplayRef.current = setInterval(autoplay, 3000);
    return () => clearInterval(autoplayRef.current as NodeJS.Timeout);
  }, [emblaApi, isSmallScreen]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi]);

  return (
    <div className="py-6 px-0 md:px-0 bg-white text-center">
      {/* Verified Label */}
      <div className="inline-flex items-center justify-center mb-3">
        <Image src="/verified.png" alt="Verified Icon" className="w-8 h-8 mr-1" width={100} height={100} />
        <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
          Our Blogs
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-700 leading-snug py-5">
        Our Latest News <br/> & Blog
      </h2>

      {/* Desktop Cards */}
      <div className="max-w-7xl mx-auto hidden md:grid md:grid-cols-3 gap-8 md:px-4">
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="relative border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 flex flex-col justify-between md:h-[600px]"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={800} height={500}
              className="rounded-[20px] mt-4 mb-4 w-80 h-auto object-cover mx-auto block"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-left mb-auto mt-auto">
              {card.title}
            </h3>
            <p className="text-md text-gray-600 font-light text-left mb-auto mt-5 line-clamp-8">
              {card.content}
            </p>
            <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-6/6 h-1/9 md:h-1/12 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-10  rounded-full font-medium shadow-lg text-2xl">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Embla Carousel */}
      {isSmallScreen && (
        <div className="md:hidden w-full  mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {blogCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] px-7 py-6"
                >
                  <div className="relative h-full flex flex-col justify-between border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 min-h-[400px] ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={800} height={500}
                      className="rounded-[20px] mt-4 mb-4 w-full h-60 object-cover"
                    />
                    <h3 className="text-2xl font-semibold text-gray-800 text-left mb-2">
                      {card.title}
                    </h3>
                    <p className="text-md text-gray-600 font-light text-left mb-4 line-clamp-3">
                      {card.content}
                    </p>
                    <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-5/6 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-8 rounded-full font-medium shadow-lg text-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {scrollSnaps.map((_, index) => (
        <button
        key={index}
        onClick={() => emblaApi?.scrollTo(index)}
        className={`w-2 h-2 rounded-full transition-all ${
          selectedIndex === index
            ? "bg-pink-500"
            : "bg-gray-300"
        } focus:outline-none`}
        aria-label={`Go to slide ${index + 1}`}
      />
      
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
