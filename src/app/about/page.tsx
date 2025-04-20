import MasonryGrid from "../components/Features/mansoryimages";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Image from "next/image";
import Testimonial from "../components/Testimonial/TestimonialSection";
import Expertise from "../components/Expertise/ExpertiseSection";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      {/* Hero Section with SVG */}
      <section className="relative  bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 my-7 py-6 ">
        <div className="px-6 md:px-40 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Our speech clinic provides personalized therapy services designed to enhance communication skills and empower individuals of all ages to reach their fullest potential.
          </p>
        </div>
        <HalfWaveBackground />
      </section>

      {/* Masonry & Mission Section */}
      <section className="text-blackpy-20 md:py- px-4 md:px-10 overflow-hidden relative top-[-200px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-black rounded-xl">
          <div className="max-w-xl">
            <MasonryGrid />
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center justify-center mb-4">
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-1"
                width={800}
                height={500}
              />
              <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
                About
              </div>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Our Mission And <span className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">Vision</span>
            </h2>

            <p className="text-lg text-gray-600">
              At The Speech Clinic Dubai, we are dedicated to providing comprehensive therapy services tailored to meet the unique needs of individuals of all ages. With a holistic approach that integrates speech therapy, physiotherapy, occupational therapy, ABA therapy, and school readiness programs, we focus on empowering our clients to achieve their fullest potential.
            </p>

            <div className="flex flex-wrap gap-4 my-5 justify-center lg:justify-start">
              <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-1 px-4">
                <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/team.svg"
                    alt="Clients"
                    className="w-8 h-8 text-white"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-pink-600">Expert Therapists</h2>
                  <p className="text-black">Our team is dedicated to providing excellent care to each client we treat.</p>
                </div>
              </div>

              <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-1 px-4">
                <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/peopleicon.svg"
                    alt="Clients"
                    className="w-8 h-8"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-pink-600">Client-Focused Care</h2>
                  <p className="text-black">We tailor our treatment approaches to meet each individual&rsquo;s unique needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Section */}
      <section className="text-black   px-4 md:px-10 overflow-hidden relative  ] md:top-[0]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-18 text-black rounded-xl">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center justify-center mb-4">
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-1"
                width={800}
                height={500}
              />
              <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
                Meet Our Founder
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
              Sana Shareef
            </h2>
            <p className="text-lg text-gray-600">
              Founder & CEO | Consultant Speech & Language Therapist | Feeding & Apraxia Specialist
            </p>
            <p className="text-lg my-2 text-gray-600">
              With over eight years of clinical experience, Sana Shareef is a leading expert in speech and language therapy. She specializes in Apraxia, Feeding Therapy, and is recognized as one of Dubai’s first Oral Placement Therapists.
            </p>
            <p className="text-lg my-2 text-gray-600">
              Sana holds a Master’s Degree from University Isabel, Spain, and certifications in Sensory Integration, Rhythmic Movement, and Reflex Integration. She is also the visionary behind SpeechSync, the region’s first advanced AAC app.
            </p>
          </div>

          <div className="relative max-w-xl w-full flex justify-center items-center">
            <div className="absolute -z-10 w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-tr from-[#DA159B] to-[#54169C] blur-3xl opacity-50" />
            <Image
              src="/teams/sana-shareef.jpg"
              alt="Sana Shareef"
              className="rounded-2xl shadow-2xl object-cover w-80 h-90 lg:w-[550px] lg:h-[550px]"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="pt-32 pb-20 md:pb-24 px-4 sm:px-6 md:px-10  xl:px-32 overflow-hidden relative bg-white  ">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-16">
            {/* Left Text */}
            <div className="flex-1 text-center xl:text-left">
              <div className="inline-flex items-center justify-center mb-4">
                <Image
                  src="/verified.png"
                  alt="Verified Icon"
                  className="w-8 h-8 mr-1"
                  width={800}
                  height={500}
                />
                <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
                  Why Choice
                </div>
              </div>

              <h2 className="text-5xl font-bold mb-4 my-5 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
                Why We&lsquo;re the Right Choice for You
              </h2>
              <p className="text-gray-600 mb-6">
                At The Speech Clinic, we are committed to providing expert care and tailored therapy solutions to support speech and language development.
              </p>
              <button className="bg-gradient-to-br my-5 from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
                Discover More
              </button>
            </div>

            {/* Center Image */}
            <div className="flex-1 relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 xl:w-[400px] xl:h-[400px] rounded-full bg-teal-100 blur-2xl opacity-40 -z-10" />
              <Image
                src="/teams/parent-meeting.webp"
                alt="Therapist"
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover w-full max-w-sm mx-auto"
              />
            </div>

            {/* Right Feature List */}
            <div className="flex-1 space-y-6">
              {[
                "Tailored, Interactive Therapy Plans.",
                "Comprehensive Multidisciplinary Care.",
                "Innovative & Interactive Methods.",
                "Supportive, Family-Centered Care."
              ].map((title, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#DA159B] to-[#54169C] p-[1px] rounded-xl">
                  <div className="flex items-start gap-4 bg-white rounded-xl p-2">
                    <div className="bg-gradient-to-br from-[#DA159B] to-[#54169C] p-2 rounded-full">
                      <FaCheckCircle className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-gray-800 text-lg ">{title}</h5>
                      <p className="text-gray-600 text-sm">
                        {[
                          "We create personalized plans that engage each child through fun, hands-on activities designed for better learning and growth.",
                          "Our expert team works together across fields to support your child’s development with a well-rounded, unified care approach.",
                          "We use playful, creative tools and modern strategies that make therapy enjoyable while encouraging active participation.",
                          "We guide and involve families throughout the process, offering support and tools to help children thrive at every stage."
                        ][idx]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>




      <div className="">
        <Testimonial />
      </div>
      <div className="my-0">
        <Expertise />
      </div>

    </div>
  );
}
