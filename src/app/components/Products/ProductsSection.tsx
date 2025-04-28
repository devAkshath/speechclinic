"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Products() {
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
    window.addEventListener("load", checkBoxes);

    return () => {
      window.removeEventListener("scroll", checkBoxes);
      window.removeEventListener("load", checkBoxes);
    };
  }, []);

  return (
    <section className="w-full px-6 py-12 lg:py-3 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div
          className="flex justify-center box"
          ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }}
        >
          <Image
            src="/speechsyncipad.png"
            alt="Speech Sync iPad"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Right Column: Content */}
        <div className="space-y-4">
          {/* Row 1: Badge */}
          <div
            className="inline-flex items-center justify-start mb-3 box"
            ref={(el) => {
              if (el) boxesRef.current[1] = el;
            }}
          >
            <Image
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2"
              width={800}
              height={500}
            />
            <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Our Products
            </div>
          </div>

          {/* Row 2: Heading */}
          <h2
            className="text-3xl font-semibold text-gray-700 lg:text-white leading-snug box"
            ref={(el) => {
              if (el) boxesRef.current[2] = el;
            }}
          >
            Breaking Barriers in
            <br />
            Communication
          </h2>

          {/* Row 3: Description */}
          <p
            className="text-sm text-gray-500 lg:text-white box"
            ref={(el) => {
              if (el) boxesRef.current[3] = el;
            }}
          >
            Empowering communication with advanced speech therapy tools. Our
            products are designed to support children with autism and speech
            impairments, providing engaging and effective solutions for language
            development.
          </p>

          {/* Row 4: Button */}
          <button
            className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300 box"
            ref={(el) => {
              if (el) boxesRef.current[4] = el;
            }}
          >
            Discover More
          </button>
        </div>
      </div>

      {/* Centered Highlight Section */}
      <div
        className="relative w-full max-w-7xl h-[160px] mt-10 mx-auto px-10 box"
        ref={(el) => {
          if (el) boxesRef.current[5] = el;
        }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#512C96] to-[#EC008C] rounded-[30px] z-0"></div>

        {/* Top Left Foreground Container */}
        <div
          className="absolute top-0 left-0 w-2/6 h-full bg-[#4A3B51] z-10 flex items-center justify-center text-white"
          style={{
            borderBottomLeftRadius: "30px",
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "0px",
          }}
        >
          <div className="text-base sm:text-lg md:text-3xl font-semibold leading-tight text-center px-4">
            Future
            <br />
            Events
            <br />
            Ahead
          </div>
        </div>

        {/* Right-Side Text on Gradient */}
        <div className="absolute text-white z-20 text-left top-1/2 transform -translate-y-1/2 right-2 sm:right-4 md:right-20">
          <p className="text-sm md:text-3xl font-light">
            Be Part of Our Upcoming
          </p>
          <p className="text-sm md:text-3xl font-bold mt-1">
            Events and Make an Impact
          </p>
        </div>
      </div>
    </section>
  );
}
