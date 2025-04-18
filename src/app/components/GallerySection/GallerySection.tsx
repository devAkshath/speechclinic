"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

export default function Gallery() {
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
    <div className="px-4 py-10 text-center font-sans ">
      <div className="inline-flex items-center justify-center mb-3">
        <Image
          src="/verified.png"
          alt="Verified Icon"
          className="w-8 h-8 mr-1"
          width={800}
          height={500}
        />
        <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
          Our Gallery
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-light text-gray-700">
        Let&apos;s Check Our Photo
      </h2>
      <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent mb-6">
        Gallery
      </h1>

      {/* Desktop View */}
      <div
        className="
    hidden 
    md:grid 
    md:grid-cols-3 
    gap-6 
    mb-10 
    md:px-6 
    lg:px-[15.5rem] 
    md:pl-6 md:pr-6 
    lg:pl-[15.5rem] lg:pr-[15.5rem]
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
      </div>

      {/* Mobile View - Embla Carousel */}
      <div className="md:hidden w-full mb-10 ">
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
            className="bg-[#4F4052] text-white p-6 rounded-[30px]   shadow-2xl relative overflow-hidden text-left w-[327px] "
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

              <div className="bg-gradient-to-tl from-[#54169C] to-[#DA159B] bg-clip-text text-transparent text-8xl font-light">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Row 2: Title */}
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

            {/* Row 3: Description */}
            <p className="text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
      {/* New Section - Two Column Row */}
      <div className="flex flex-col lg:flex-row justify-center items-start md:items-center mt-16 gap-6 lg:gap-100 px-4 text-left md:text-center">
        {/* Left Column */}
        <div className="max-w-md space-y-4 lg:text-left">
          {/* Row 1: Label */}
          <div className="inline-flex items-center justify-center md:justify-center mb-2">
            <Image
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2"
              width={800}
              height={500}
            />
            <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Gestalt Language Therapy
            </div>
          </div>

          {/* Row 2: Heading */}
          <h2 className="text-4xl font-semibold text-gray-700 py-4">
            Fostering Communication
            <br />
            Through Meaningful Language
          </h2>

          {/* Row 3: Description */}
          <p className="text-md text-gray-400 py-2">
            Our Gestalt Language Therapy focuses on supporting children who
            learn language in chunks, helping them progress toward meaningful,
            independent communication.
          </p>

          {/* Row 4: Button */}
          <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px]  font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="w-full max-w-md relative h-100 rounded-[30px] overflow-hidden shadow-md">
          <Image
            src="/galleryimage.jpg"
            alt="Gestalt Therapy"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="bg-white py-12 px-4 md:px-0 text-center space-y-10 lg:px-75">
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {/* Clients */}
          <div className="flex flex-1 md:w-1/3 flex-row items-center justify-center min-w-[250px] max-w-sm md:max-w-md lg:max-w-lg border-2 border-pink-400 rounded-3xl px-6 py-6 text-center">
            <div className="bg-white p-2 rounded-2xl mb-0">
              <Image
                src="/peopleicon.svg"
                alt="Clients"
                className="w-15 h-15"
                width={800}
                height={500}
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-pink-600 flex items-center gap-1">
              7320{" "}
              <span className="text-2xl md:text-3xl text-gray-600 font-normal">
                + Clients
              </span>
            </div>
          </div>

          {/* Staffs */}
          <div className="flex flex-1 md:w-1/3 flex-row items-center justify-center min-w-[250px] max-w-sm md:max-w-md lg:max-w-lg border-2 border-pink-400 rounded-3xl px-6 py-6 text-center gap-2">
            <div className="bg-white p-2 rounded-2xl mb-0">
              <Image
                src="/groupicon.svg"
                alt="Staffs"
                className="w-15 h-15"
                width={800}
                height={500}
              />
            </div>
            <div className="inline-flex items-center gap-1 text-2xl md:text-3xl font-bold text-pink-600 whitespace-nowrap">
              1500{" "}
              <span className="text-2xl md:text-3xl text-gray-600 font-normal">
                + Staffs
              </span>
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-1 md:w-1/3 flex-row items-center justify-center min-w-[250px] max-w-sm md:max-w-md lg:max-w-lg border-2 border-pink-400 rounded-3xl px-6 py-6 text-center">
            <div className="bg-white p-2 rounded-2xl mb-0">
              <Image
                src="/builbicon.svg"
                alt="Projects"
                className="w-15 h-15"
                width={800}
                height={500}
              />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-pink-600 flex items-center gap-1">
              50{" "}
              <span className="text-2xl md:text-3xl text-gray-600 font-normal">
                + Projects
              </span>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="relative border-2 border-pink-400 rounded-3xl px-4 sm:px-6 pt-20 pb-24 max-w-8xl mx-auto space-y-4">
          {/* Top Overlay Text */}
          <h3 className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 bg-white px-4 py-1 text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium whitespace-nowrap">
            Your Voice Matters
          </h3>

          {/* Center Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 text-center">
            Let&apos;s Strengthen It Together!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto text-center">
            Every voice deserves to be heard. Whether for therapy, guidance, or
            support, our specialists are here to help. Start the journey to
            confident communication today!
          </p>

          {/* Bottom Overlay Button */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-white px-4 py-1 rounded-full">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
              <Image
                src="/verified.png"
                alt="WhatsApp"
                className="w-8 h-8"
                width={800}
                height={500}
              />
              <button className="bg-white border border-pink-400 text-pink-600 px-6 py-2 rounded-2xl shadow hover:bg-pink-50 transition font-medium whitespace-nowrap">
                Reach Out Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
