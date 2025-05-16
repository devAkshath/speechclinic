"use client";

import { useState,useRef,useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  { name: "Person One", designation: "Parent", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
  { name: "Person Two", designation: "Father", text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s..." },
  { name: "Person Three", designation: "Father", text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s..." },
  { name: "Person Four", designation: "Father", text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s..." }
];

const Testimonial = () => {
   const boxesRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const numVisible = window.innerWidth < 640 ? 1 : 2;
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
  

  const handleScroll = (direction: string) => {
    if (direction === "left") {
      setStartIndex((prev) => Math.max(prev - numVisible, 0));
    } else {
      setStartIndex((prev) => Math.min(prev + numVisible, testimonials.length - numVisible));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-1">
      {/* === Top Info Section === */}
      <div  ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }}
       className="box text-center max-w-2xl w-full space-y-4 mb-14">
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
      <div className="relative w-full max-w-7xl">
        <button onClick={() => handleScroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-4 overflow-x-hidden justify-center">
          {testimonials.slice(startIndex, startIndex + numVisible).map((testimonial, idx) => (
            <div key={idx} className="min-w-[300px] p-6 bg-white border rounded-2xl relative" style={{ borderColor: "#DA159B" }}>
              <div className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between px-0 text-white text-lg font-medium">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#54169C] to-[#DA159B] flex items-center px-4 rounded-br-[270px] rounded-tr-xl rounded-tl-4xl">
                  <div>
                    {testimonial.name}
                    <div className="text-sm font-light">{testimonial.designation}</div>
                  </div>
                </div>
                <div className="text-yellow-400 text-xl flex items-center gap-1 px-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <div className="mt-24 text-gray-600 text-sm">{testimonial.text}</div>
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
