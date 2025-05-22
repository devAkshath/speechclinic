"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const blogCards = [
  {
    title: "Significance of Early Intervention",
    content:
      "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we emphasize identifying concerns at the earliest stage possible.",
    image: "/blogimage.jpg",
  },
  {
    title: "Understanding Speech Development",
    content:
      "Speech development milestones are important indicators of a child’s growth and communication skills. Delays can be an early sign of issues that need addressing, and recognizing them early helps in effective therapy and support.",
    image: "/blogimage2.jpg",
  },
  {
    title: "Role of Parents in Therapy",
    content:
      "Parental involvement plays a crucial role in the success of therapy and the child’s overall progress. The commitment, encouragement, and interaction of parents enhance the outcomes of therapeutic sessions.",
    image: "/blogimage3.png",
  },
];

export default function Blogs() {
  const boxesRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);
    
  useEffect(() => {
    const boxes = boxesRef.current;
  
    function checkBoxes() {
      const isMobile = window.innerWidth <= 768;
      const triggerBottom = (window.innerHeight / 5) * 4;
  
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
    <div className="py-15 px-0 md:px-0 bg-transparent text-center">
      {/* Verified Label */}
      <div  ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }} className="box inline-flex items-center justify-center mb-3">
        <Image
          src="/verified.png"
          alt="Verified Icon"
          className="w-8 h-8 mr-1"
          width={100}
          height={100}
        />
        <div style={{ fontFamily: 'HuluStyle', fontWeight: 400 }} className="text-md  text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
          Our Blogs
        </div>
      </div>

      {/* Heading */}
      <h2  ref={(el) => {
            if (el) boxesRef.current[1] = el;
          }} style={{ fontFamily: 'HuluStyle', fontWeight: 500 }} className="box text-3xl text-gray-700 leading-snug py-5">
        Our Latest News <br /> & Blog
      </h2>

      {/* Desktop Cards */}
      <div  ref={(el) => {
            if (el) boxesRef.current[2] = el;
          }} className="box max-w-7xl mx-auto hidden md:grid md:grid-cols-3 gap-8 md:px-4 bg-transparent">
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="relative border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 flex flex-col justify-between md:h-[600px] bg-transparent"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={800}
              height={500}
              className="rounded-[20px] mt-4 mb-4 w-80 h-auto object-cover mx-auto block"
            />
            <h3 style={{ fontFamily: 'HuluStyle', fontWeight: 500 }}  className="text-2xl text-gray-800 text-left mb-auto mt-auto">
              {card.title}
            </h3>
            <p style={{ fontFamily: 'HuluStyle', fontWeight: 400 }} className="text-md text-gray-600  text-left mb-auto mt-5 line-clamp-8">
              {card.content}
            </p>
            <Link href="/BlogPage" >
              <button  style={{ fontFamily: 'HuluStyle', fontWeight: 400 }} className="cursor-pointer absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-4/5 h-1/10 md:h-1.5/12 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-10 rounded-full font-medium shadow-lg text-2xl">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile Embla Carousel */}
      {isSmallScreen && (
        <div  ref={(el) => {
          if (el) boxesRef.current[3] = el;
        }} className="box md:hidden w-full  mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {blogCards.map((card, index) => (
                <div key={index} className="flex-[0_0_100%] px-7 py-6">
                  <div className="relative h-full flex flex-col justify-between border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 min-h-[400px] ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={800}
                      height={500}
                      className="rounded-[20px] mt-4 mb-4 w-full h-60 object-cover"
                    />
                    <h3 className="text-2xl font-normal text-gray-800 text-left mb-2">
                      {card.title}
                    </h3>
                    <p className="text-md text-gray-600 font-light text-left mb-4 line-clamp-3">
                      {card.content}
                    </p>
                    <Link href="/BlogPage" className="cursor-pointer">
                      {" "}
                      <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-9/10 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-8 rounded-full font-normal shadow-lg text-xl">
                        Read More
                      </button>
                    </Link>
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
                  selectedIndex === index ? "bg-pink-500" : "bg-gray-300"
                } focus:outline-none`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
         <Link href="/blogs" >
           <button
                    style={{ fontFamily: "HuluStyle", fontWeight: 400 ,}}
                    className="cursor-pointer viewAllButton bg-gray-800 mt-20 text-white py-1 px-4 rounded-[30px]  font-medium hover:from-gray-400 hover:to-gray-400 transition duration-300"
                  >
                    View All
                  </button></Link>
    </div>
  );
}
