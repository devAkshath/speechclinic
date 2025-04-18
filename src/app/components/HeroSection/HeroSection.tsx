"use client";

import { useMediaQuery } from "react-responsive";
import WaveBackground from "../herocurve/wave";
import CurveLine from "../herocurve/curveline";
import Image from "next/image";
import GradientBackground from "../herocurve/blurgradient";

export default function Hero() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* === Backgrounds === */}
      {isDesktop ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <WaveBackground />
            <CurveLine />
          </div>
          <div className="absolute bottom-10 left-0 w-full h-full z-0">
            <WaveBackground />
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
        <div className="relative z-10 flex flex-row items-center w-full max-w-7xl px-6 py-16">
          <div className="flex-1 text-left text-white pt-12">
            <h1 className="text-5xl font-bold mb-4 mt-16">
              Innovative Leaders In <br /> Paediatric Therapy
            </h1>

            <p className="text-lg font-light mb-7 font-sans">
              At The Speech Clinic, we provide specialized therapy
              <br /> designed to improve speech and communication skills,
              <br /> tailored to children with autism.
            </p>

            <div className="flex space-x-4">
              <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
                About Us
              </button>
              <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px]  font-medium hover:from-pink-600 hover:to-red-600 transition duration-300">
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex-1 px-0">
            <Image
              width={800}
              height={500}
              src="/image.jpg"
              alt="Therapy Image"
              className="w-full h-auto object-cover rounded-[50px] shadow-md"
            />
          </div>
        </div>
      ) : (
        // === MOBILE & TABLET LAYOUT ===
        <div className="relative z-0 w-full max-w-3xl px-2 py-10 text-center">
          <h1 className="relative inline-block text-transparent text-5xl md:text-6xl font-medium leading-tight mt-30 stroke-text">
            Innovative Leaders In <br />
            Paediatric Therapy
          </h1>

          <p className="text-base font-light md:text-lg  text-gray-800 mb-6 mt-10 justify-evenly">
            At The Speech Clinic, we provide specialized therapy designed to
            improve speech and communication skills, tailored to children with
            autism.
          </p>

          <div className="flex flex-wrap justify-center space-x-4">
            <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
              About Us
            </button>
            <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-pink-600 hover:to-red-600 transition duration-300">
              Get In Touch
            </button>
          </div>

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
