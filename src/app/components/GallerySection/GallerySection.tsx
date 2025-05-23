"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback, useRef } from "react";
import RectangleSvg from "./Reactanglesvg";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
// import CurveSvg from "./curvesvg";
// import GalleryCurveLine from "./GalleryCurveline";

export default function Gallery() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
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
        className=" box text-3xl md:text-4xl  bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent mb-0 sm:mb-0 lg:mb-10"
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
          if (el) boxesRef.current[15] = el;
        }}
        className="cursor-pointer box inline-flex items-center justify-center mb-10 mt-10"
      >
        {" "}
        <Link href="/gallery">
          <div
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="text-md viewAllButton text-white bg-black px-8 py-1 rounded-2xl"
          >
            View All
          </div>
        </Link>
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
                className="flex-[0_0_100%] relative h-65 rounded-[30px] overflow-hidden shadow-md"
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
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
            className="feature-box bg-[#4F4052] text-white p-6 rounded-[30px] shadow-2xl relative overflow-hidden text-left w-[340px] lg:w-[300px] sm:w-[328px] cursor-pointer transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_32px_rgba(79,64,82,0.3)]"
          >
            {/* Gradient Background Shift */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-[#54169C] to-[#DA159B] opacity-0 transition-opacity duration-300 ease-out hover:opacity-10"></div>

            {/* Row 1: Icon + Number */}
            <div className="flex items-center gap-4 mb-4">
              <div className="feature-icon-container bg-white text-black w-20 h-20 flex items-center justify-center rounded-[10px] rounded-tr-[40px] text-2xl overflow-hidden transition-transform duration-300 ease hover:rotate-1">
                <img
                  src={feature.icon}
                  alt={`feature-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent text-8xl font-light">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Row 2: Title */}
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 ease-out">
              {feature.title}
            </h3>

            {/* Row 3: Description */}
            <p className="feature-text-gray-200 text-md text-gray-200 transition-colors duration-300 ease-out group-hover:text-white font-light">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      {isDesktop ? (
        <>
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
                    style={{
                      fontFamily: "HuluStyle",
                      fontWeight: 400,
                      fontSize: "clamp(0.5rem, 2.0vw, 1.5rem)",
                    }}
                    className="text-2xl  text-black bg-transparent  px-0 py-0 rounded-2xl"
                  >
                    Innovative service highlights
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
                    fontSize: "clamp(0.5rem, 1.2vw, 3rem)",
                  }}
                  className="box text-2xl bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent py-4"
                >
                  At The Speech Clinic, we blend science, compassion and
                  technology to create truly transformative therapy experiences
                </h2>

                {/* Row 3: Description */}
                <div
                  ref={(el) => {
                    if (el) boxesRef.current[6] = el;
                  }}
                  style={{
                    fontFamily: "HuluStyle",
                    fontWeight: 400,
                    fontSize: "clamp(0.5rem, 1.8vw, 1.2rem)",
                  }}
                  className="box text-lg text-gray-700 py-1 space-y-2"
                >
                  <ul className="space-y-2">
                    {[
                      "Speech sync – Our innovative AAC",
                      "Gestalt language support",
                      "Sensory smart sessions",
                      "Interactive metronome",
                      "Virtual reality",
                      "Mobile sensory room – SOG POD",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Row 4: Button */}
                {/* <button
                  ref={(el) => {
                    if (el) boxesRef.current[7] = el;
                  }}
                  style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                  className="cursor-pointer box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px]  font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
                >
                  Get Started
                </button> */}
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

           <div className="bg-transparent py-12 px-4 md:px-6 mx-auto max-w-[1450px] space-y-10">
  {/* Stats Row */}
  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
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
        className="flex flex-row items-center justify-start flex-grow sm:flex-none sm:max-w-[320px] md:max-w-[400px] lg:max-w-[580px] border-3 border-pink-400 rounded-[25px] px-4 md:px-6 py-5 md:py-6 gap-10 bg-white"
      >
        <div className="flex-shrink-0 bg-gradient-to-br from-[#DA159B] to-[#54169C] p-2 md:p-3  rounded-2xl">
          <Image
            src={item.icon}
            alt={item.label}
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
            width={64}
            height={64}
          />
        </div>
        <div className="text-gray-600 text-left">
          <div  
            style={{
              fontFamily: "HuluStyle",
              fontWeight: 400,
              fontSize: "clamp(1.25rem, 2vw, 2rem)",
            }}
          >
            {item.count}
          </div>
          <div
            style={{
              fontFamily: "HuluStyle",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.3vw, 1.5rem)",
            }}
          >
            {item.label}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

          </RectangleSvg>
        </>
      ) : (
        <div className="flex flex-col lg:flex-row justify-center  items-start md:items-center mt-0 gap-6 lg:gap- px-5 text-left md:text-center">
          <div className="">
            {/* Left Column */}
            <div className="mx-auto space-y-4 lg:text-left">
              {/* Row 1: Label */}
              <div
                ref={(el) => {
                  if (el) boxesRef.current[4] = el;
                }}
                className="box inline-flex items-center justify-center mt-10 mb-3 "
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
                  Innovative service highlights
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
                }}
                className="box text-2xl bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent py-4"
              >
                At The Speech Clinic, we blend science, compassion and
                technology to create truly transformative therapy experiences
              </h2>

              {/* Row 3: Description */}
              <div
                ref={(el) => {
                  if (el) boxesRef.current[6] = el;
                }}
                style={{
                  fontFamily: "HuluStyle",
                  fontWeight: 400,
                  fontSize: "clamp(1.0rem, 1.8vw, 2.2rem)",
                }}
                className="box text-lg text-gray-700 py-1 space-y-2"
              >
                <ul className="space-y-2">
                  {[
                    "Speech sync – Our innovative AAC",
                    "Gestalt language support",
                    "Sensory smart sessions",
                    "Interactive metronome",
                    "Virtual reality",
                    "Mobile sensory room – SOG POD",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 4: Button */}
              {/* <button
                ref={(el) => {
                  if (el) boxesRef.current[7] = el;
                }}
                style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                className="box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] mb-10 font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
              >
                Get Started
              </button> */}
            </div>

            {/* Right Column: Image */}
            <div
              ref={(el) => {
                if (el) boxesRef.current[8] = el;
              }}
              className="w-full flex justify-center items-center box"
            >
              <div className="relative">
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
        </div>
      )}
      {/* Message Box */}
      <div
        ref={(el) => {
          if (el) boxesRef.current[12] = el;
        }}
        className="box relative border-2 border-transparent rounded-3xl px-8 sm:px-6 pt-0 pb-2 max-w-[1610px] mx-auto  space-y-4"
      >
        <h3
          style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
          className="text-3xl sm:text-3xl md:text-5xl text-gray-600 text-center"
        >
          Research Driven. Innovation Lead. Therapy That Transforms
        </h3>
        <h2
          style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
          className="text-2xl sm:text-3xl md:text-6xl font-bold bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text pb-3 text-transparent text-center"
        >
         Elevating therapy with precision, passion and possibility
        </h2>
     
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-6">
          <Image
            src="/verified.png"
            alt="WhatsApp"
            className="w-8 h-8"
            width={800}
            height={500}
          />
          <button
            style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
            className="bg-white border border-white text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-2 rounded-2xl hover:bg-white-50 transition font-medium"
          >
            Reach Out Now
          </button>
        </div>
      </div>
    </div>
  );
}
