"use client";

import { useMediaQuery } from "react-responsive";
import HeroSvg from "../herocurve/wave";
import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroRecMobile from "./HeroRecMobile";

export default function Hero() {
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
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* === Backgrounds === */}
      {isDesktop && (
        <div
          className="absolute  top-[clamp(104rem, 200vw, 200rem)]  px-[clamp(1rem, 5vw, 5rem)] max-w-[1840px] h-full z-10"
          style={{
            paddingLeft: "clamp(1rem, 5vw, 5rem)",
            paddingRight: "clamp(1rem, 5vw, 5rem)",
            top: "clamp(2rem, 10vw, 10rem)",
          }}
        >
          <HeroSvg />
        </div>
      )}

      {/* === LAYOUT === */}
      {isDesktop ? (
        // === DESKTOP LAYOUT ===
        <div className="relative max-w-[1500px]  mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="pt-40 pl-16 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
              {/* Left content */}
              <div className="text-white  space-y-6 flex-1 ">
                <h1
                  style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
                  className="text-[clamp(1rem,3.5vw,3.5rem)] bg-gradient-to-br from-[#54169C] to-[#DA159B] bg-clip-text text-transparent font-semibold leading-tight"
                >
                  Innovative Leaders In
                  <br />
                  Paediatric Therapy
                </h1>

                <p
                  style={{ fontFamily: "HuluStyle", fontWeight: 300 }}
                  className="text-[clamp(1rem,1.2vw,1.25rem)] text-gray-900"
                >
                  The Speech Clinic is a pediatric therapy center located in{" "}
                  <br /> Dubai Healthcare City, dedicated to empowering
                  children,
                  <br /> through evidence based neurodiversity affirming
                  interventions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                    className="cursor-pointer bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[30px] font-medium hover:from-purple-600 hover:to-pink-900 transition duration-300"
                  >
                    About Us
                  </button>
                  <button
                    style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                    className="cursor-pointer bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[30px]  font-medium hover:from-pink-600 hover:to-purple-900 transition duration-300"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="w-full flex justify-center items-center">
                <div className="relative w-[clamp(280px,37vw,900px)]">
                  <Image
                    width={800}
                    height={500}
                    src="/galleryimage.jpg"
                    alt="Therapy Session"
                    className="rounded-[2rem] w-full  aspect-[6/4] object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 p-[clamp(4px,0.8vw,6px)] rounded-full shadow-lg backdrop-blur-3xl">
                    <div className="w-[clamp(40px,4vw,64px)] h-[clamp(40px,4vw,64px)] bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full flex items-center justify-center">
                      <div
                        className="w-0 h-0 border-t-[clamp(8px,1vw,16px)] border-t-transparent 
                     border-l-[clamp(12px,1.8vw,23px)] border-l-white 
                     border-b-[clamp(8px,1vw,16px)] border-b-transparent ml-1"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // === MOBILE & TABLET LAYOUT ===

        <HeroRecMobile>
          <div className="relative text-center">
            <h1
              ref={(el) => {
                if (el) boxesRef.current[0] = el;
              }}
              className="box relative inline-block text-transparent font-medium leading-tight mt-45 stroke-text"
              style={{ fontSize: "8vw" }}
            >
              Innovative <br /> Leaders In <br />
              Paediatric Therapy
            </h1>

            <p
              ref={(el) => {
                if (el) boxesRef.current[1] = el;
              }}
              className="box font-light text-gray-800 mb-6 mt-4 justify-evenly"
              style={{ fontSize: "3.3vw" }}
            >
              At The Speech Clinic, we provide specialized <br /> therapy
              designed to improve speech and <br /> communication skills,
              tailored to children <br />
              with autism.
            </p>

            <div className="flex flex-wrap justify-center space-x-4">
              <button
                ref={(el) => {
                  if (el) boxesRef.current[2] = el;
                }}
                className="box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
              >
                About Us
              </button>
              <button
                ref={(el) => {
                  if (el) boxesRef.current[3] = el;
                }}
                className="box bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-pink-600 hover:to-red-600 transition duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div
              ref={(el) => {
                if (el) boxesRef.current[4] = el;
              }}
              className="box"
            ></div>
          </div>
        </HeroRecMobile>
      )}
    </main>
  );
}
