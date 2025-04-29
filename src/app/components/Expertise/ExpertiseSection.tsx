'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const progressItems = [
  { label: 'Speech Therapy Proficiency', value: 95 },
  { label: 'Customized Treatment Plans', value: 90 },
  { label: 'Engaging & Supportive Approach', value: 85 },
];

const Expertise = () => {
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
    
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); 
          }
        });
      },
      { threshold: 0.75 } 
    );
    
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => observer.observe(bar));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center mx-auto max-w-[1265px] justify-center bg-transparent  lg:py-28 px-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start  w-full px-0 py-12">

        {/* Left Column */}
        <div className="space-y-6 ">
          <div  ref={(el) => {
            if (el) boxesRef.current[0] = el;
          }}
           className=" box inline-flex items-center justify-start mb-3">
            <Image
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2"
              width={800} height={500}
            />
            <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Our Expertise
            </div>
          </div>

          <h2  ref={(el) => {
            if (el) boxesRef.current[1] = el;
          }} className="box text-3xl font-semibold text-gray-700 leading-snug">
            Empowering Speech &<br />
            Communication for a Better Future
          </h2>

          <p 
           ref={(el) => {
            if (el) boxesRef.current[2] = el;
          }}className=" box text-sm text-gray-500">
            Our speech therapy services are designed to enhance communication skills
            with personalized strategies. We help individuals improve speech clarity,
            comprehension, and confidence through proven techniques.
          </p>

          <div
           ref={(el) => {
            if (el) boxesRef.current[3] = el;
          }} className=" box space-y-4">
            {progressItems.map((item, index) => (
              <div key={index} className="progress-bar">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  <span className="text-sm text-gray-700 font-medium">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-purple-700 to-pink-500 rounded-full origin-left transition-all duration-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
           ref={(el) => {
            if (el) boxesRef.current[4] = el;
          }}className=" box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div  ref={(el) => {
            if (el) boxesRef.current[5] = el;
          }} className=" box flex justify-center md:justify-end">
          <Image
            src="/expertise.jpg"
            alt="Expertise"
            width={800} height={500}
            className="w-full max-w-md h-[490px] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
