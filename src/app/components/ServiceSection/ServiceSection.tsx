"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServiceSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-bl from-[#DA159B] to-[#54169C] rounded-[40px] shadow-lg flex flex-col items-center justify-center 
      w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[260px] h-[320px] sm:h-[760px] lg:h-[280px] mx-auto p-6"
    >
      {/* Image */}
      <img src="/therapy-icon.svg" alt="Therapy" className="w-16 sm:w-20 h-16 sm:h-20 object-contain" />

      {/* Title */}
      <p className="text-white text-lg sm:text-xl font-light mt-2 text-center">
        Speech and Language Therapy
      </p>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity">
        <h3 className="text-white font-semibold text-lg text-center">
          Speech and Language Therapy
        </h3>
        <p className="text-white text-sm text-center px-3">
          Our Speech Therapy department incorporates the latest advancements...
        </p>
        <button className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-full text-sm">
          Details
        </button>
      </div>
    </div>
  ));

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 sm:p-8">
      {/* Header */}
      <h2 className="text-gray-500 text-3xl sm:text-4xl font-medium text-center mb-2">
        We Believe Everyone Deserves
      </h2>

      {/* Shimmering Gradient Text */}
      <div className="relative inline-block">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
          Our Quality Care
        </h1>
      </div>

      {/* Swiper for Small Screens, Grid for Large Screens */}
      <div className="mt-8 w-full flex justify-center">
        {isSmallScreen ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-full max-w-[320px]"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                {service}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {services}
          </div>
        )}
      </div>
    </div>
  );
}
