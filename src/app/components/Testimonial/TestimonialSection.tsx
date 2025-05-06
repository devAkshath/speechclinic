"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Person One",
    designation: "Parent",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    name: "Person Two",
    designation: "Father",
    text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
  },
];

const Testimonial = () => {
   const boxesRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);
    
      useEffect(() => {
        const boxes = boxesRef.current;
      
        function checkBoxes() {
          const isMobile = window.innerWidth <= 768;
          const triggerBottom = (window.innerHeight / 4) * 4;
      
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
 

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-1">
      {/* === Top Info Section === */}
      <div  ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }}
       className="box text-center max-w-2xl w-full space-y-4">
        {/* Row 1: Label */}
        <div className=" inline-flex items-center justify-center mb-2">
          <Image
            src="/verified.png"
            alt="Verified Icon"
            className="w-8 h-8 mr-2"
            width={800}
            height={500}
          />
          <div style={{ fontFamily: 'HuluStyle', fontWeight: 400 }}  className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
            Testimonials
          </div>
        </div>

        {/* Row 2: Heading */}
        <h2 ref={(el) => {
            if (el) boxesRef.current[1] = el;
          }}style={{ fontFamily: 'HuluStyle', fontWeight: 500 }} 
         className="box text-3xl  text-gray-700 leading-snug">
          What Parents Say
        </h2>

        {/* Row 3: Description */}
        <p  ref={(el) => {
            if (el) boxesRef.current[2] = el;
          }}style={{ fontFamily: 'HuluStyle', fontWeight: 400 }} 
        className="box text-md text-gray-700">
          Hear from families about how our Speech Clinic has helped improve
          their <br />
          children&lsquo;s communication and confidence.
        </p>
      </div>

      {/* === Bottom Slider Section === */}
      <div
       ref={(el) => {
        if (el) boxesRef.current[3] = el;
      }} style={{ fontFamily: 'HuluStyle', fontWeight: 400 }} className="box mt-16 w-full lg:max-w-7xl md:max-w-6xl sm:max-w-6xl">
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-4 w-full px-4">
            {testimonials.slice(0, 2).map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-1 border rounded-2xl p-6 relative bg-white"
                style={{ borderColor: "#DA159B" }}
              >
                {/* Header */}
                <div className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between px-0 text-white text-lg font-medium">
                  {/* Gradient Header on Left */}
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#54169C] to-[#DA159B] flex items-center px-4 rounded-br-[270px] rounded-tr-xl rounded-tl-4xl">
                    <div>
                      {testimonial.name}
                      <div className="text-sm font-light">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>

                  {/* Stars Outside on Right */}
                  <div className="text-yellow-400 text-xl flex items-center gap-1 px-5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="mt-24 text-gray-600 text-sm">
                  {testimonial.text}
                </div>
              </div>
            ))}
          </div>

          <div
           ref={(el) => {
            if (el) boxesRef.current[4] = el;
          }}style={{ fontFamily: 'HuluStyle', fontWeight: 500 }} className="box text-center mt-14 ">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full text-sm">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
