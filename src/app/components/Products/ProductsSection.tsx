"use client";
import { useEffect, useRef } from "react";
import SpeechSyncCard from "./SpeechSyncPromo";


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
      <div className="relative flex items-center justify-center h-auto">
        <SpeechSyncCard />
      </div>

      {/* Centered Highlight Section */}
      <div className="w-full max-w-[1310px] h-[160px] mx-auto mt-10 px-4 sm:px-10 hidden sm:flex">
        <div className="w-full h-full flex items-center rounded-[30px] border-2 border-[#4A3B51] overflow-hidden">
          {/* Left Gradient Button */}
          <div
            style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
            className="flex items-center justify-center bg-gradient-to-tr from-[#54169C] to-[#DA159B] ml-7 h-[110px] w-[350px] sm:w-[00px] md:w-[510px] text-white text-lg sm:text-xl md:text-3xl font-stretch-extra-expanded rounded-[20px] "
          >
            Future Events Ahead
          </div>

          {/* Right Text Content */}
          <div className="pl-6 sm:pl-10 md:pl-14 text-[#4A3B51]">
            <p
              style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
              className="text-sm sm:text-base md:text-2xl "
            >
              Be Part of Our Upcoming
            </p>
            <p
              style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
              className="text-base sm:text-lg md:text-3xl "
            >
              Events and Make an Impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

