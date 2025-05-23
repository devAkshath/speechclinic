"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  autoplaySpeed?: number;
  transitionDuration?: number;
  showCaptions?: boolean;
  height?: string;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  autoplaySpeed = 4000,
  transitionDuration = 500,
  showCaptions = true,
  height = "h-[500px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const deltaX = touchStartX - touchEndX;
    const swipeThreshold = 20;

    if (Math.abs(deltaX) > swipeThreshold) {
      navigateSlide(deltaX > 0 ? 1 : -1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigateSlide(-1);
      if (e.key === "ArrowRight") navigateSlide(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    if (!isHovering && !isTransitioning) startAutoplay();
    else stopAutoplay();
    return () => stopAutoplay();
  }, [isHovering, currentIndex, isTransitioning]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setTimeout(
      () => navigateSlide(1),
      autoplaySpeed
    );
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  const navigateSlide = (direction: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, transitionDuration);
  };

  return (
    <div
      className={`relative overflow-hidden w-full ${height}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
    >
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <Image
              unoptimized
              src={image.src}
              alt={image.alt}
              fill
              className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover rounded-2xl"
              priority={index === 0}
            />
            {showCaptions && image.caption && (
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-4 rounded-b-3xl">
                <p>{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 
            bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-opacity-10 hover:bg-opacity-70 text-white w-11 h-11
             rounded-full hidden md:flex items-center justify-center z-30 
             transition-all duration-300 hover:scale-125 active:scale-95 hover:shadow-lg"
        onClick={() => navigateSlide(-1)}
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 
             bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-opacity-10 hover:bg-opacity-70 text-white w-11 h-11 
             rounded-full hidden md:flex items-center justify-center z-30 
             transition-all duration-300 hover:scale-125 active:scale-95 hover:shadow-lg"
        onClick={() => navigateSlide(1)}
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full border border-white ${
              index === currentIndex ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, transitionDuration);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
