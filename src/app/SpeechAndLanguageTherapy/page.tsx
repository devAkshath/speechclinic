"use client";
import Image from "next/image";
// import { Play } from "next/font/google";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import { useState } from "react";
import HalfWaveBackground from "../components/svgs/halfcarve";

const services = [
  "Speech and Language Therapy",
  "Occupational Therapy",
  "Physical Therapy",
  "ABA Therapy",
  "School Readiness program",
  "Neuro Integrative Therapy",
  "Feeding Therapy",
  "Group Therapy",
];
export default function ServicePage() {
  const [] = useState(services[0]);

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <main>
        <section className="relative  bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 my-7 py-9 ">
          <div className="px-6 md:px-40 py-20 text-center">
            <h2 className="text-4xl font-bold mb-5 my-5">
              Speech And Language Therapy
            </h2>
          </div>
          <HalfWaveBackground />
        </section>
        {/* Title Section */}

        <section className="flex flex-col md:flex-row items-start justify-between gap-12 p-8 max-w-screen-xl my-5 mx-auto">
          <div className="w-full md:w-2/3">
            <div className="relative">
              <img
                src="/3.jpg"
                alt="Therapy Session"
                className="rounded-4xl w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-full shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Left Side - Menu */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-3 text-gray-800 ">
              All Services
            </h2>
            <div className="flex flex-col gap-1">
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Speech and Language Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Occupational Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Physical Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                ABA Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                School Readiness program
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Neuro Integrative Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B] py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Feeding Therapy
              </button>
              <button className="text-gray-700 border-2 border-[#DA159B]  py-2 px-4 rounded-full text-left font-medium hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white hover:border-transparent transition-all">
                Group Therapy
              </button>
            </div>
          </div>

          {/* Right Side - Image and Content */}
        </section>

        <section className="p-8 max-w-screen-xl my-5 mx-auto">
          <div className="border-3 border-[#5e12f5] rounded-4xl p-8">
            <div className="flex flex-col gap-6">
              {/* Heading and Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent mb-3">
                  Speech And Language Therapy
                </h2>
                <p className="text-gray-600">
                  Welcome to the Speech and Language Department at The Speech
                  Clinic Dubai
                </p>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="blogimage2.jpg"
                    alt="Speech Therapy Session"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="blogimage3.png"
                    alt="Speech Therapy Session"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-8 max-w-screen-xl mx-auto">
          <div className="border-2  bg-[#2C1B3A] rounded-[2rem] p-8 lg:p-12">
            <div className="flex flex-col gap-6 text-white text-base leading-relaxed">
              <p>
                At The Speech Clinic Dubai, we are committed to empowering
                children through communication, providing expert care in speech,
                language, and communication development. Our team of certified
                speech-language pathologists is skilled in assessing and
                treating a wide range of speech and language disorders, using
                the latest evidence-based techniques. At our clinic, we are
                dedicated to enhancing communication skills and fostering
                language development in children of all ages.
              </p>
              <p>
                We specialize in Augmentative and Alternative Communication
                (AAC) for children with complex communication needs, offering
                personalized AAC solutions to help them express themselves
                effectively. From our own innovative AAC apps like Speech Sync
                to advanced tools for language processing, we integrate the
                latest innovations into our practice to ensure that every child
                receives the most effective and personalized care.
              </p>
              <p>
                Our goal is to foster a supportive and inclusive environment,
                enabling children to communicate confidently, interact
                meaningfully, and reach their full potential in all aspects of
                life.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 max-w-screen-xl mx-auto">
          <div className="text-2xl  text-[#DA159B] mb-8 text-center">
            <div className=" inline-flex items-center justify-center mb-2">
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-2"
                width={800}
                height={500}
              />
              <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 -py-1 rounded-2xl">
                service
              </div>
            </div>
            <h2 className="text-5xl font-bold my-3">Related Services</h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 my-2">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm text-center mt-2">
                Oral Placement Therapy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  src="/brain-icon.svg"
                  alt="Speech Therapy"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
