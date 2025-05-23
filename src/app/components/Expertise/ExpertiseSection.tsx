"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Expertise = () => {
  const boxesRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    function checkBoxes() {
      const isMobile = window.innerWidth <= 768;
      const triggerBottom = (window.innerHeight / 5) * 5;

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

  const [, setIsVisible] = useState(false);

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

    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center mx-auto max-w-[1265px] justify-center bg-transparent  lg:py-28 px-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start  w-full px-0 py-12">
        {/* Left Column */}
        <div className="space-y-6 ">
          <div
            ref={(el) => {
              if (el) boxesRef.current[0] = el;
            }}
            className=" box inline-flex items-center justify-start mb-3"
          >
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
              Our Expertise
            </div>
          </div>

          <h2
            ref={(el) => {
              if (el) boxesRef.current[1] = el;
            }}
            style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
            className="box text-3xl font-semibold bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text pt-3 text-transparent leading-snug"
          >
            Expertise that evolves
          
            with your child
          </h2>

          <p
            ref={(el) => {
              if (el) boxesRef.current[2] = el;
            }}
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className=" box text-md text-gray-700"
          >
            At the speech clinic dubai, we deliver more than therapy. We offer
            thoughtfully designed, research backed interventions that help
            children communicate, connect and thrive. Our team of specialists
            brings extensive experience across multiple disciplines,creating
            individualized plans that target the whole child not just a
            diagnosis.With a focus on early identification, collaborative care,
            and measurable outcomes, we are proud to be a trusted name in
            pediatric development.
          </p>

          <div
            ref={(el) => {
              if (el) boxesRef.current[3] = el;
            }}
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="box space-y-4"
          >
            <h2 className="text-xl font-medium text-gray-800">
              What sets us apart:
            </h2>
            <ul className="space-y-2 text-gray-700 text-md  ">
              {[
                "Evidence-based therapy",
                "Innovative tools and techniques",
                "Multidisciplinary expertise",
                "Child-centered, family-focused",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            ref={(el) => {
              if (el) boxesRef.current[4] = el;
            }}
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="cursor-pointer box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div
          ref={(el) => {
            if (el) boxesRef.current[5] = el;
          }}
          className=" box flex justify-center md:justify-end"
        >
          <Image
            src="/expertise.jpg"
            alt="Expertise"
            width={800}
            height={500}
            className="w-full max-w-md h-[490px] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
