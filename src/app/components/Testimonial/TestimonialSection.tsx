"use client";

import { useState, useEffect, } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Person One",
    designation: "Parent",
    text: "My experience with this speech clinic has been amazing. My daughter and I are frequent visitors of this clinic and we are always treated so nicely and...",
  },
  {
    name: "Person Two",
    designation: "Father",
    text: "This clinic was recommended to me by my son's doctor and I can’t thank her enough. Within 2 months of attending, my son had amazing progress...",
  },
  {
    name: "Person Three",
    designation: "Father",
    text: "We have been incredibly impressed with Speech Clinic Dubai and the amazing progress our son Skyler has made with his ABA and Occupational therapy over...",
  },
  {
    name: "Person Four",
    designation: "Mother",
    text: "I am incredibly grateful to the entire team at the Speech Clinic for their outstanding support in helping my daughter, Nigella, with her speech development...",
  },
];

const Testimonial: React.FC = () => {
  const [numVisible, setNumVisible] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const calculateVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1280) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const visible = calculateVisibleItems();
      setNumVisible(visible);
      setCurrentIndex(visible); // reset index
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedTestimonials = [
    ...testimonials.slice(-numVisible),
    ...testimonials,
    ...testimonials.slice(0, numVisible),
  ];

  const totalSlides = extendedTestimonials.length;

  const handleScroll = (direction: "left" | "right") => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      direction === "left" ? prev - 1 : prev + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= testimonials.length + numVisible) {
      setCurrentIndex(numVisible);
    } else if (currentIndex < numVisible) {
      setCurrentIndex(testimonials.length + numVisible - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = touchStartX - touchEndX;
    const threshold = 50;
    if (distance > threshold) {
      handleScroll("right");
    } else if (distance < -threshold) {
      handleScroll("left");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1320px] mx-auto bg-white px-4 sm:px-6 md:px-8 py-1 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <div className=" inline-flex items-center justify-center mb-2">
          <Image
            src="/verified.png"
            alt="Verified Icon"
            className="w-8 h-8 mr-2"
            width={800}
            height={500}
          />
          <div
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl"
          >
            Testimonials
          </div>
        </div>
        <h2 className="text-4xl font-normal text-gray-700 mb-2 py-3">
          What Parents Say
        </h2>
        <p className="text-gray-600 text-md">
          Hear from families about how our Speech Clinic has helped improve
          their <br />
          children&apos;s communication and confidence.
        </p>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 min-w-[44px] min-h-[44px] rounded-full z-10 shadow-md hover:bg-gray-700"
        >
          <FaChevronLeft size={24} />
        </button>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
              width: `${(100 / numVisible) * totalSlides}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DA159B] rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 relative w-full text-left"
                style={{
                  flex: `400 0 ${80 / totalSlides}%`,
                }}
              >
                <div className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between px-0 text-white text-lg font-medium">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#54169C] to-[#DA159B] flex items-center px-4 rounded-br-[270px] rounded-tr-xl rounded-tl-4xl">
                    <div>
                      {testimonial.name}
                      <div className="text-sm font-light">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[90px] text-gray-700 text-sm sm:text-base leading-relaxed">
                  <i className="fas fa-quote-left text-[#54169C] opacity-30 text-4xl absolute -ml-2"></i>
                  <p className="relative pt-6 px-2">{testimonial.text}</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, starIdx) => (
                      <FaStar key={starIdx} size={20} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 min-w-[44px] min-h-[44px] rounded-full z-10 shadow-md hover:bg-gray-700"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({
          length: testimonials.length - numVisible + 1,
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx + numVisible)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex - numVisible
                ? "bg-gradient-to-r from-[#54169C] to-[#DA159B]"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
