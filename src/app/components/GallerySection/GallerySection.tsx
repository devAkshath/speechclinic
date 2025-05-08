"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback, useRef } from "react";
import RectangleSvg from "./Reactanglesvg";
// import CurveSvg from "./curvesvg";
// import GalleryCurveLine from "./GalleryCurveline";

export default function Gallery() {
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

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const boxes = featureRefs.current;
    if (typeof window === "undefined") return;

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
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);
  const images = [
    "/galleryimage1.jpeg",
    "/galleryimage3.jpg",
    "/galleryimage2.jpeg",
  ];

  const features = [
    {
      icon: "/gallery1.svg",
      title: "Expert Therapists",
      desc: "Our team consists of certified professionals dedicated to helping children develop their communication skills effectively.",
    },
    {
      icon: "/gallery2.svg",
      title: "Trusted Therapy Center",
      desc: "Recognized for excellence in speech therapy, we provide personalized treatment plans tailored to each child’s needs.",
    },
    {
      icon: "/gallery3.svg",
      title: "Affordable Care",
      desc: "We provide accessible, high-quality therapy at competitive prices, ensuring every child receives speech support.",
    },
    {
      icon: "/gallery4.svg",
      title: "Continuous Support",
      desc: "We provide ongoing guidance and resources for families to support their child’s speech development journey.",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 2500 })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className=" py-10 text-center font-sans ">
      {/* <div className="w-full -z-500 absolute mx-auto   pointer-events-none hidden lg:block pt-40"> 
      <GalleryCurveLine/>
      </div> */}
      {/* <div className="w-full -z-500 absolute mx-auto   pointer-events-none hidden lg:block pt-144">
        <CurveSvg />
      </div> */}
      <div
        ref={(el) => {
          if (el) boxesRef.current[0] = el;
        }}
        className="box inline-flex items-center justify-center mb-3 "
      >
        <Image
          src="/verified.png"
          alt="Verified Icon"
          className="w-8 h-8 mr-1"
          width={800}
          height={500}
        />
        <div
          style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
          className="text-md  text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl"
        >
          Our Gallery
        </div>
      </div>
      <h2
        ref={(el) => {
          if (el) boxesRef.current[1] = el;
        }}
        style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
        className="box text-2xl md:text-3xl  text-gray-700"
      >
        Let&apos;s Check Our Photo
      </h2>
      <h1
        ref={(el) => {
          if (el) boxesRef.current[2] = el;
        }}
        style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
        className=" box text-3xl md:text-4xl  bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent mb-6"
      >
        Gallery
      </h1>
      {/* Desktop View */}
      <div
        className="
        bg-transparent
    hidden 
    md:grid 
    md:grid-cols-3 
    gap-6 
    mb-10 
    max-w-[1320px] 
    md:px-6 
    md:pl-6 md:pr-6 
    mx-auto
    
  "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-0 pb-[75%] rounded-[20px] overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        ))}
      </div>{" "}
      <div
        ref={(el) => {
          if (el) boxesRef.current[5] = el;
        }}
        className="box inline-flex items-center justify-center mb-10"
      >
        <div
          style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
          className="text-md  text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl"
        >
          View All
        </div>
      </div>
      {/* Mobile View - Embla Carousel */}
      <div
        ref={(el) => {
          if (el) boxesRef.current[3] = el;
        }}
        className="box md:hidden w-full mb-10 "
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6  px-4">
            {images.map((src, index) => (
              <div
                className="flex-[0_0_100%] relative h-72 rounded-[30px] overflow-hidden shadow-md"
                key={index}
              >
                <Image
                  src={src}
                  alt={`gallery-slide-${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === selectedIndex ? "bg-[#DA159B]" : "bg-gray-300"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
      {/* Features Row */}
      <div className="flex flex-wrap justify-center  gap-6 ">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
            className=" box  bg-[#4F4052] text-white p-6 rounded-[30px]   shadow-2xl relative overflow-hidden text-left w-[340px] lg:w-[300px] sm:w-[328px] "
          >
            <div className="absolute top-0 left-0 w-full h-full"></div>

            {/* Row 1: Icon + Number */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white text-black w-20 h-20 flex items-center justify-center rounded-[10px] rounded-tr-[40px] text-2xl">
                <Image
                  src={feature.icon}
                  alt={`feature-${index}`}
                  width={80}
                  height={80}
                  objectFit="contain"
                />
              </div>

              <div
                style={{ fontFamily: "HuluStyle", fontWeight: 300 }}
                className="bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent text-8xl font-light"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Row 2: Title */}
            <h3
              style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
              className="text-2xl font-semibold mb-2"
            >
              {feature.title}
            </h3>

            {/* Row 3: Description */}
            <p
              style={{ fontFamily: "HuluStyle", fontWeight: 300 }}
              className="text-md text-gray-200"
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      <RectangleSvg>
        {/* New Section - Two Column Row */}
        <div className="flex flex-col lg:flex-row justify-center mx-auto   max-w-[1300px] items-start md:items-center mt-0 gap-6 lg:gap- px-4 text-left md:text-center">
          {/* Left Column */}
          <div className="max-w-md space-y-4 lg:text-left">
            {/* Row 1: Label */}
            <div
              ref={(el) => {
                if (el) boxesRef.current[4] = el;
              }}
              className="box inline-flex items-center justify-center md:justify-center  mb-2"
            >
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-2"
                width={800}
                height={500}
              />
              <div
                style={{ fontFamily: "HuluStyle", fontWeight: 400,
                  fontSize: "clamp(0.5rem, 2.0vw, 1.5rem)" }}
                className="text-2xl  text-black bg-transparent  px-0 py-0 rounded-2xl"
              >
                Gestalt Language Therapy
              </div>
            </div>

            {/* Row 2: Heading */}
            <h2
              ref={(el) => {
                if (el) boxesRef.current[5] = el;
              }}
              style={{
                fontFamily: "HuluStyle",
                fontWeight: 500,
                fontSize: "clamp(1rem, 2.2vw, 3rem)",
              }}
              className="box text-4xl bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent py-4"
            >
              Fostering Communication Through Meaningful Language
            </h2>

            {/* Row 3: Description */}
            <p
              ref={(el) => {
                if (el) boxesRef.current[6] = el;
              }}
              style={{
                fontFamily: "HuluStyle",
                fontWeight: 400,
                fontSize: "clamp(0.5rem, 1.8vw, 1.2rem)",
              }}
              className=" box text-lg text-gray-700   py-2"
            >
              Our Gestalt Language Therapy focuses on supporting children who
              learn language in chunks, helping them progress toward meaningful,
              independent communication.
            </p>

            {/* Row 4: Button */}
            <button
              ref={(el) => {
                if (el) boxesRef.current[7] = el;
              }}
              style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
              className="box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px]  font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-[clamp(80px,30vw,900px)]">
              <Image
              width={800}
              height={500}
                src="/galleryimage.jpg"
                alt="Therapy Session"
                className="rounded-[2rem] w-full  aspect-[6/4] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-[clamp(4px,0.8vw,6px)] rounded-full shadow-lg backdrop-blur-3xl">
                <div className="w-[clamp(40px,4vw,64px)] h-[clamp(40px,4vw,64px)] bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full flex items-center justify-center">
                  <div
                    className="w-0 h-0 border-t-[clamp(8px,1vw,16px)] border-t-transparent 
                     border-l-[clamp(12px,1.8vw,23px)] border-l-white 
                     border-b-[clamp(8px,1vw,16px)] border-b-transparent ml-1"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent py-12   px-0 md:px-0 mx-auto max-w-[1450px] space-y-10">
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {/* Stat Box Component */}
            {[
              {
                icon: "/peopleicon.svg",
                count: "7320",
                label: "+ Clients",
                refIndex: 9,
              },
              {
                icon: "/groupicon.svg",
                count: "1500",
                label: "+ Staffs",
                refIndex: 10,
              },
              {
                icon: "/builbicon.svg",
                count: "50",
                label: "+ Projects",
                refIndex: 11,
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) boxesRef.current[item.refIndex] = el;
                }}
                className="box flex flex-1 flex-row items-center justify-center max-w-[320px]  md:max-w-md lg:max-w-lg border-3 border-pink-400 rounded-[40px] px-6 py-6 text-center gap-4"
              >
                <div className="bg-gradient-to-br from-[#DA159B] to-[#54169C] p-2 rounded-2xl">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    className="w-15 h-15"
                    width={800}
                    height={500}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "HuluStyle",
                    fontWeight: 500,
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  }}
                  className="text-gray-600 flex items-center gap-1"
                >
                  {item.count}
                  <span
                    style={{
                      fontFamily: "HuluStyle",
                      fontWeight: 400,
                      fontSize: "clamp(1.5rem, 1vw, 2rem)",
                    }}
                    className="text-xl md:text-3xl text-gray-600"
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RectangleSvg>
      {/* Message Box */}
      <div     ref={(el) => {
          if (el) boxesRef.current[12] = el;
        }} className="box relative border-2 border-transparent rounded-3xl px-0 sm:px-6 pt-0 pb-2 max-w-[1610px] mx-auto  space-y-4">
      <h3
        style={{ fontFamily: 'HuluStyle', fontWeight: 400 }}
        className="text-3xl sm:text-3xl md:text-5xl text-gray-600 text-center"
      >
        Your Voice Matters
      </h3>
      <h2
        style={{ fontFamily: 'HuluStyle', fontWeight: 500 }}
        className="text-2xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text pb-3 text-transparent text-center"
      >
        Let&apos;s Strengthen It Together!
      </h2>
      <p
        style={{ fontFamily: 'HuluStyle', fontWeight: 400 }}
        className="text-xl text-gray-600 max-w-xl mx-auto text-center pt-3"
      >
        Every voice deserves to be heard. Whether for therapy, guidance, or support, our specialists are here to help. Start the journey to confident communication today!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-6">
        <Image
          src="/verified.png"
          alt="WhatsApp"
          className="w-8 h-8"
          width={800}
          height={500}
        />
        <button
          style={{ fontFamily: 'HuluStyle', fontWeight: 500 }}
          className="bg-white border border-white text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-2 rounded-2xl hover:bg-white-50 transition font-medium"
        >
          Reach Out Now
        </button>
      </div>
    </div>
    </div>
  );
}
