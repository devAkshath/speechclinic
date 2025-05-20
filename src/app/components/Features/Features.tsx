"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TherapyPromo() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  useEffect(() => {
    const boxes = featureRefs.current;
    if (typeof window === "undefined") return;

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
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  return (
    <div className="bg-transparent text-gray-800">
     <div
  className="mx-auto max-w-[1280px] lg:py-6 py-10"
  style={{
    paddingLeft: "clamp(0rem, 5vw, 0.8rem)",
    paddingRight: "clamp(0rem, 5vw, 0.8rem)",
  }}
>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Heading Section */}
            <div
              ref={(el) => {
                if (el) boxesRef.current[1] = el;
              }}
              className=" box text-center md:text-left"
            >
              <h2
                style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                className="  text-3xl md:text-5xl font-normal text-gray-700 mb-2"
              >
                Nurturing Communication
              </h2>
              <h2
                style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
                className="text-3xl md:text-5xl font-semibold bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent"
              >
                Confidence & Growth
              </h2>
            </div>

            {/* Features Section */}
            <div className="grid gap-8 sm:px-4 md:px-0 lg:px-0 px-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="box flex flex-col md:flex-row items-start gap-4 text-left sm:shadow-lg md:shadow-none lg:shadow-none shadow-lg border-2 border-pink-400 rounded-[20px] md:border-0 md:rounded-[30%] p-4 md:p-0"
                >
                  {/* Icon Section */}
                  <div className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] p-4 rounded-[30%] flex items-center justify-center w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[75px]">
                    <Image
                      width={800}
                      height={500}
                      src={feature.iconPath}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col gap-1">
                    <h3
                      style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                      className=" text-xl font-medium text-gray-700 mb-1.0"
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
                      className="text-gray-600 "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
              className="flex justify-center items-center sm:px-4 lg:px-0  px-4 h-auto lg:ml-45 sm:ml-0 "
            >
              {/* Full-width Ball Pit Image */}
              <Image
                width={900}
                height={800}
                src="/therapypromo.jpg"
                alt=""
                className="w-auto h-auto  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Holistic Support",
    description:
      "We provide integrated therapies, combining speech, physical, occupational, and ABA programs under one roof for complete care.",
    iconPath: "/promo1.svg",
  },
  {
    title: "Cutting-Edge Care",
    description:
      "Our approach includes modern techniques such as Gestalt processing, sensory integration, and motor-based speech interventions.",
    iconPath: "/promo2.svg",
  },
  {
    title: "Tailored Solutions",
    description:
      "We craft personalized plans, ensuring every child gets targeted strategies that foster progress at their own pace.",
    iconPath: "/promo3.svg",
  },
  {
    title: "Engaging Setting",
    description:
      "Our vibrant space encourages confidence, learning, and social interaction, making therapy both effective and enjoyable.",
    iconPath: "/promo4.svg",
  },
];
