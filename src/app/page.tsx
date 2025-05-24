"use client";
import Hero from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TherapyPromo from "./components/Features/Features";
import Gallery from "./components/GallerySection/GallerySection";
import ProductsSection from "./components/Products/ProductsSection";
import Expertise from "./components/Expertise/ExpertiseSection";
import Testimonial from "./components/Testimonial/TestimonialSection";
import Blogs from "./components/Blogs/BlogSection";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="relative min-h-screen bg-transparent flex flex-col w-full ">
      <header className="absolute top-0 w-full z-50 px-0 pl">
        <Navbar />
      </header>
      <Hero />
      <div className="relative rounded-3xl overflow-hidden group cursor-pointer sm:hidden flex flex-col gap-4 pt-0 pb-5 pl-4.5 pr-4.5 items-center w-full -mt-18">

      {/* <div className="relative rounded-3xl overflow-hidden group cursor-pointer sm:hidden flex flex-col gap-4 pt-0 pb-5  pl-4.5 pr-4.5 items-center w-full"> */}
        <div className="w-full aspect-w-16 aspect-h-9 relative  rounded-3xl">
          {!isPlaying ? (
            <>
              <Image
                width={800}
                height={500}
                src="/3.jpg"
                alt=""
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300  rounded-3xl">
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
                  <h3 className="text-white text-2xl font-normal"></h3>
                </div>
              </div>
            </>
          ) : (
            <video
              src="https://media.thespeechclinic.ae/website/videos/hero-main.mp4"
              controls
              autoPlay
              className="w-full h-auto object-cover rounded-3xl"
            />
          )}
        </div>
      </div>

      <ServiceSection />
      <TherapyPromo />
      <Gallery />
      <ProductsSection />
      <Expertise />
      <Testimonial />
      <Blogs />
    </div>
  );
}
