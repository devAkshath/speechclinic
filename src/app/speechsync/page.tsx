"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import Productfeatures from "../components/ProductFeatures/Features";

const aboutimages = [
  "/products/Untitled-ko8o.png",
  "/products/speeching mockup3.jpg",
  "/products/speeching mockup (1).jpg",
  "/products/speeching mockup2.jpg",
];

import { BsPlayCircleFill } from "react-icons/bs";
import FAQSection from "../components/ProductFeatures/Faq"; // great generic "board" icon

const bubbleColors = ["#DA159B", "#54169C", "#FFA9E7", "#D8B4FE"];

type Bubble = {
  size: number;
  left: string;
  top: string;
  color: string;
  delay: string;
  duration: string;
};

export default function Hero() {
  // hero bubbles
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 10 + 6;
      return {
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color: bubbleColors[i % bubbleColors.length],
        delay: `${Math.random() * 10}s`,
        duration: `${5 + Math.random() * 5}s`,
      };
    });
    setBubbles(generatedBubbles);
  }, []);

  // end

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutimages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      <section className="text-black bg-gradient-to-tr from-white to-pink-50 py-20 md:py-24 px-4 md:px-10 overflow-hidden relative">
        {/* === Animated Bubbles === */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {bubbles.map((bubble, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-bubble"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                top: bubble.top,
                backgroundColor: bubble.color,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration,
              }}
            ></span>
          ))}
        </div>

        {/* === Main Content === */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* === Text Content === */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
              Supporting Communication
              <br />
              <span className="text-5xl font-bold mt-2 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
                for Every Child
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              SpeechSync is available to download from both App Store and Google
              Play Store.
            </p>

            <div className="flex gap-6 mb-16 justify-center sm:justify-start">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/products/button-google-play.svg"
                  alt="Google Play"
                  width={160}
                  height={50}
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="/products/button-appstore.svg"
                  alt="App Store"
                  width={160}
                  height={50}
                />
              </div>
            </div>
          </div>

          {/* === Hero Image === */}
          <div className="relative">
            <Image
              src="/products/tab-hero.webp"
              alt="Main"
              width={500}
              height={500}
              className="-mt-10 sm:mt-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* === Know More Button === */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="#knowmore"
            className="group inline-flex items-center bg-gradient-to-br my-5 from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300"
          >
            <span className="text-lg font-medium">Know More</span>
            <svg
              className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Content... (rest remains same) */}
      </section>

<div id="knowmore">
<Productfeatures />
</div>
      <section
        className="text-black bg-gradient-to-tr from-white to-pink-50 py-20 md:py-24 px-5 md:px-10 overflow-hidden relative"
       
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}

          {bubbles.map((bubble, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-bubble"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: bubble.left,
                top: bubble.top,
                backgroundColor: bubble.color,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration,
              }}
            ></span>
          ))}

          <div className="md:w-1/2 text-center md:text-left">
     
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
              Empower Every Voice
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              SpeechSync is an advanced AAC (Augmentative and Alternative
              Communication) app developed by The Speech Clinic to empower
              children with autism. Designed with an intuitive interface, it
              fosters seamless communication, enabling users to express
              thoughts, emotions, and needs effectively. The app provides a
              structured yet customizable approach to language learning, making
              interaction more natural and engaging.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 py-3 "
              >
                <BsPlayCircleFill className="w-6 h-6" />
                <span className="font-medium text-lg">Watch Video</span>
              </a>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="md:w-1/2 relative h-[300px] w-full flex justify-center items-center">
            {aboutimages.map((img, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out  ${
                  index === current
                    ? "opacity-100 scale-100 z-20"
                    : "opacity-0 scale-95 blur-sm z-10"
                }`}
              >
                <Image
                  src={img}
                  alt={`App screen ${index + 1}`}
                  width={500}
                  height={600}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-white to-pink-50 py-25 md:py-24 px-4 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
            Why Choose SpeechSync?
          </h2>
          <p className="text-gray-600 text-lg">
            SpeechSync stands out with its intelligent language support,
            integrating Gestal Language Processing (GLP) and an AAC board
            tailored for diverse communication needs. The app ensures a
            personalized experience with multiple voice options, customizable
            folders, and interactive games that enhance speech development. Its
            innovative design fosters confidence and independence in
            communication.
          </p>
        </div>
      </section>
      <FAQSection />

      <section className="bg-gradient-to-tr from-white py-25 px-4 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
            Discover More
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Learn more about SpeechSync, explore features, and see how it
            empowers every child&apos;s voice.
          </p>
          <a
            href="https://www.yourwebsite.com" // replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white rounded-full shadow-lg hover:scale-105 transition font-medium text-lg"
          >
            Visit Our Website
          </a>
        </div>
      </section>
    </main>
  );
}
