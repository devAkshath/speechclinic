"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Blogs() {
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

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      {/* Verified Label */}
      <div className="inline-flex items-center justify-center mb-3">
        <img src="/verified.png" alt="Verified Icon" className="w-8 h-8 mr-1" />
        <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
          Our Blogs
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-medium text-gray-700 leading-snug mb-12">
        Our Latest News & Blog
      </h2>

      {/* Desktop Cards */}
      <div className="max-w-7xl mx-auto hidden md:grid md:grid-cols-3 gap-8">
        {blogCards.map((card, index) => (
          <div
            key={index}
            className="relative border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 flex flex-col justify-between"
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-[20px] mt-4 mb-4 w-80 h-50 object-cover mx-auto block"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-left mb-2">
              {card.title}
            </h3>
            <p className="text-md text-gray-600 font-light text-left mb-4">
              {card.content}
            </p>
            <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-6/6 h-1/9 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-10 rounded-full font-medium shadow-lg text-2xl">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-0" // Extra padding at bottom for dots
        >
          {blogCards.map((card, index) => (
         <SwiperSlide key={index}>
         <div className="relative h-full flex flex-col justify-between border-2 border-gray-500 rounded-[40px] p-4 pt-4 pb-20 mx-2 min-h-[400px]">
           <img
             src={card.image}
             alt={card.title}
             className="rounded-[20px] mt-4 mb-4 w-full h-60 object-cover mx-auto block"
           />
           <h3 className="text-2xl font-semibold text-gray-800 text-left mb-2">
             {card.title}
           </h3>
           <p className="text-md text-gray-600 font-light text-left mb-4 line-clamp-3 md:line-clamp-none">
             {card.content}
           </p>
           <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10 w-5/6 bg-gradient-to-tr from-[#54169C] to-[#DA159B] text-white py-2 px-8 rounded-full font-medium shadow-lg text-xl">
             Read More
           </button>
         </div>
       </SwiperSlide>
       
          ))}
        </Swiper>
      </div>
    </div>
  );
}
