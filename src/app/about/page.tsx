import MasonryGrid from "../components/Features/mansoryimages";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Image from "next/image";
import Testimonial from "../components/Testimonial/TestimonialSection";
import Expertise from "../components/Expertise/ExpertiseSection";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      {/* Hero Section with SVG */}
      <section className="relative  bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 my-7 py-9 ">
        <div className="px-6 md:px-40 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            Our speech clinic provides personalized therapy services designed to enhance communication skills and empower individuals of all ages to reach their fullest potential.
          </p>
        </div>
        <HalfWaveBackground />
      </section>


      








      {/* Masonry & Mission Section */}
      <section className="text-blackpy-20 md:py- px-4 md:px-10 overflow-hidden relative ">
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

      <section className="relative py-32 px-6 md:px-10 bg-gradient-to-tr from-[#54169C]/80 to-[#DA159B]/95 text-white overflow-hidden">
        {/* Glowing Background Blur */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-white opacity-10 rounded-full blur-[120px] -z-10"></div>

        {/* Container with Border */}
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 border border-white/20 rounded-3xl backdrop-blur-sm bg-white/5 shadow-xl">

        

          <div className="text-center max-w-3xl mx-auto">

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
            <h2 className="text-6xl font-extrabold leading-tight mb-6">Sana Shareef</h2>
            <p className="text-xl font-light mb-6">
              Founder of SpeechSync | Apraxia Specialist | 8+ Years in Speech Therapy
            </p>

            <div className="inline-flex gap-4 flex-wrap justify-center mb-12">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md">
                Master’s from Isabel, Spain
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md">
                Oral Placement Therapist
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md">
                Feeding Therapy
              </span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md">
                Sensory Integration
              </span>
            </div>

            <Image
              src="/teams/sana-shareef.jpg"
              alt="Sana Shareef"
              className="rounded-full mx-auto shadow-2xl w-64 h-64 object-cover border-4 border-white"
              width={300}
              height={300}
            />

            <p className="my-6 text-white/90">
              With a Master’s in Speech & Language Therapy and over 8 years of clinical experience, Sana’s vision has transformed countless lives. She’s a trailblazer in oral placement therapy and the innovator behind SpeechSync — the region’s first advanced AAC app.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 text-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">

          {/* Content Section */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-4">
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-1"
                width={800}
                height={500}
              />
              <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Why Choose Us
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Why We’re the Right Choice for You
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600">
              At The Speech Clinic, we are committed to providing expert care and tailored therapy solutions to support speech and language development.
            </p>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                "Tailored, Interactive Therapy Plans",
                "Comprehensive Multidisciplinary Care",
                "Innovative & Interactive Methods",
                "Supportive, Family-Centered Care",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#DA159B] text-xl">✔️</span>
                  <span className="text-md">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="flex-1 bg-[#F8F5FF] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
                <div className="text-3xl font-extrabold text-[#54169C]">100%</div>
                <p className="text-sm mt-2 text-gray-600">Quality Service</p>
              </div>
              <div className="flex-1 bg-[#F8F5FF] rounded-xl p-6 shadow-sm text-center hover:shadow-md transition">
                <div className="text-3xl font-extrabold text-[#54169C]">95%</div>
                <p className="text-sm mt-2 text-gray-600">Skilled Employee</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="/teams/parent-meeting.webp"
              alt="Speech session"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow text-center">
              <div className="text-xl font-bold text-[#DA159B]">100%</div>
              <p className="text-sm text-gray-700">Family Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <div className="">
        <Testimonial />
      </div>
      <div className="my-0">
        <Expertise />
      </div>

    </div>
  );
}
