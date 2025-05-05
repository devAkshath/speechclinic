"use client";

import { useMediaQuery } from "react-responsive";
import HeroSvg from "../herocurve/wave";
import GradientBackground from "../herocurve/blurgradient";
import { useEffect, useRef } from "react";

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
      {isDesktop ? (
        <>
          <div className="absolute top-38 left-28 max-w-[1840px] h-full z-10">
            <HeroSvg />
          </div>
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <GradientBackground />
        </div>
      )}

      {/* === LAYOUT === */}
      {isDesktop ? (
        // === DESKTOP LAYOUT ===
        <div className="relative max-w-[1500px]  mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="pt-40 pl-35 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
              {/* Left content */}
              <div className="text-white  space-y-6 flex-1 ">
                <h1 className="text-[clamp(1rem,3.5vw,3.5rem)] bg-gradient-to-br from-[#54169C] to-[#DA159B] bg-clip-text text-transparent font-semibold leading-tight">
                  Innovative Leaders In
                  <br />
                  Paediatric Therapy
                </h1>

                <p className="text-[clamp(1rem,1.2vw,1.25rem)] text-gray-600">
                  At The Speech Clinic, we provide specialized therapy designed
                  to improve speech and communication skills, tailored to
                  children with autism.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[30px] font-medium hover:from-purple-600 hover:to-pink-900 transition duration-300">
                    About Us
                  </button>
                  <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[30px]  font-medium hover:from-pink-600 hover:to-purple-900 transition duration-300">
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="w-full flex justify-center items-center">
                <div className="relative w-[clamp(280px,37vw,900px)]">
                  <img
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
        <div className="relative z-0 w-full max-w-3xl px-2 py-10 text-center">
          <h1
            ref={(el) => {
              if (el) boxesRef.current[0] = el;
            }}
            className=" box relative inline-block text-transparent text-5xl md:text-6xl font-medium leading-tight mt-30 stroke-text"
          >
            Innovative Leaders In <br />
            Paediatric Therapy
          </h1>

          <p
            ref={(el) => {
              if (el) boxesRef.current[1] = el;
            }}
            className="box text-base font-light md:text-lg  text-gray-800 mb-6 mt-10 justify-evenly"
          >
            At The Speech Clinic, we provide specialized therapy designed to
            improve speech and communication skills, tailored to children with
            autism.
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
          >
            <video
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-[35px] shadow-md mb-6 mt-15"
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* 
video
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-[30px] shadow-md mb-6 mt-15"
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
    </main>
  );
}
