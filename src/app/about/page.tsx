import MasonryGrid from "../components/Features/mansoryimages";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Image from "next/image";
import Testimonial from "../components/Testimonial/TestimonialSection";
import Expertise from "../components/Expertise/ExpertiseSection";

export default function About() {
  return (
    <div style={{ fontFamily: "HuluStyle" }} className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      {/* Hero Section with SVG */}
      <section className="relative  bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 my-7 py-9 ">
        <div className="px-6 md:px-40 py-20 text-center">
          <h2 className="text-4xl font-medium mb-4">About Us</h2>
          <p className="text-lg">
            Our speech clinic provides personalized therapy services designed to enhance <br/>communication skills and empower individuals of all ages to reach their fullest potential.
          </p>
        </div>
        <HalfWaveBackground />
      </section>
      {/* Masonry & Mission Section */}
      <section className="text-blackpy-20 md:py-20 px-4 md:px-10 overflow-hidden relative ">
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

            <h2 className="text-5xl font-medium text-gray-800 mb-4">
              Our Mission And <span className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">Vision</span>
            </h2>

            <p className="text-lg text-gray-600">
              At The Speech Clinic Dubai, we are dedicated to providing comprehensive therapy services tailored to meet the unique needs of individuals of all ages. With a holistic approach that integrates speech therapy, physiotherapy, occupational therapy, ABA therapy, and school readiness programs, we focus on empowering our clients to achieve their fullest potential.
            </p>

            <div className="flex flex-wrap gap-4 my-5 justify-center lg:justify-start">
              <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-4 px-4">
                <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/promo4.svg"
                    alt="Clients"
                    className=" text-white"
                    width={102}
                    height={102}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-medium text-pink-600">Expert Therapists</h2>
                  <p className="text-black">Our team is dedicated to providing excellent care to each client we treat.</p>
                </div>
              </div>

              <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-4 px-4">
                <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Image
                    src="/promo3.svg"
                    alt="Clients"
                    className=""
                    width={102}
                    height={102}
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-medium text-pink-600">Client-Focused Care</h2>
                  <p className="text-black">We tailor our treatment approaches to meet each individual&rsquo;s unique needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* founder */}

      <section className="relative py-32 px-6 md:px-10 text-white overflow-hidden">
        {/* Background with gradient and light floating blobs */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#54169C] to-[#DA159B]">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#DA159B]/20 rounded-full blur-3xl animate-float-slow will-change-transform"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#54169C]/20 rounded-full blur-3xl animate-float-slow-delayed will-change-transform"></div>
        </div>

        <div className="relative max-w-6xl mx-auto transition-transform duration-700">
          <div className="p-1 bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-3xl hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-500">
            <div className="bg-white rounded-2xl p-8 md:p-16 transition-all duration-500">
            <div className="text-center max-w-3xl mx-auto relative">
                {/* Badge */}
                <div className="inline-flex items-center justify-center mb-3">
                  <Image
                    src="/verified.png"
                    alt="Verified Icon"
                    className="w-6 h-6 mr-1 animate-bounce-slow transition-transform duration-300"
                    width={800}
                    height={500}
                  />
                  <div className="text-sm font-medium text-white bg-gradient-to-r from-[#DA159B] to-[#54169C] px-4 py-1 rounded-2xl animate-pulse-slow">
                    Meet Our Founder
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-medium leading-tight mb-4 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500">
                  Sana Shareef
                </h2>

                {/* Subtitle */}
                <p className="text-lg font-light mb-4 text-gray-600 transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#DA159B] after:to-[#54169C] hover:after:w-full after:transition-all after:duration-300">
                  Founder of SpeechSync | Apraxia Specialist | 8+ Years in Speech Therapy
                </p>

                {/* Badges */}
                <div className="inline-flex gap-3 flex-wrap justify-center mb-8">
                  {[
                    "Master's from Isabel, Spain",
                    "Oral Placement Therapist",
                    "Feeding Therapy",
                    "Sensory Integration",
                  ].map((badge, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200 hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Founder Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="relative rounded-full shadow-2xl w-48 h-48 overflow-hidden border-4 border-white/50 hover:border-[#DA159B] hover:shadow-[#DA159B]/30 transition-all duration-500">
                    <Image
                      src="/teams/sana-shareef.jpg"
                      alt="Sana Shareef"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#DA159B] after:to-[#54169C] hover:after:w-full after:transition-all after:duration-300">
                  With a Master&apos;s in Speech & Language Therapy and over 8 years of clinical experience, Sana&lsquo;s vision has transformed countless lives. She&lsquo;s a trailblazer in oral placement therapy and the innovator behind SpeechSync — the region&lsquo;s first advanced AAC app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end founder */}



      {/* Why Choose Us Section */}

      <section className="relative bg-gradient-to-br from-[#F8F5FF] to-[#FFF5F9] py-20 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden">
  
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16">
          {/* Content Section */}
          <div className="">
            {/* Enhanced Badge with animation */}
            <div className="inline-flex items-center justify-center mb-4 animate-fade-in group">
              <Image
                src="/verified.png"
                alt="Verified Icon"
                className="w-8 h-8 mr-2  group-hover:rotate-12 transition-transform duration-300"
                width={800}
                height={500}
              />
              <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl 
                            hover:scale-105 hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300 
                            group-hover:bg-gradient-to-l">
                Why Choose Us
              </div>
            </div>

            {/* Enhanced Heading with gradient effect */}
            <h2 className="text-4xl md:text-5xl font-medium leading-tight bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent
                          hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500 mt-2">
              Why We&apos;re the <br/>Right Choice for You
            </h2>

            {/* Enhanced Description */}
            <p className="text-lg text-gray-600 animate-fade-in delay-100 relative inline-block
                        after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#DA159B] after:to-[#54169C]
                        hover:after:w-full after:transition-all after:duration-300 mt-10">
              At The Speech Clinic, we are committed to providing expert care and tailored therapy solutions to support speech and language development.
            </p>

            {/* Enhanced Feature List */}
            <div className="backdrop-blur-xl bg-white/80 mt-10 rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all duration-300
                          border border-[#54169C]/10 hover:border-[#DA159B]/20 relative overflow-hidden">
              {/* Fixed background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5FF]/20 to-[#FFF5F9]/20 pointer-events-none"></div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {[
                  "Tailored, Interactive Therapy Plans",
                  "Comprehensive Multidisciplinary Care",
                  "Innovative & Interactive Methods",
                  "Supportive, Family-Centered Care",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-[#DA159B] text-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">✔️</span>
                    <span className="text-md ">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Stats */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="flex-1 bg-white/80 rounded-xl p-6 shadow-sm text-center hover:shadow-xl hover:scale-105 transition-all duration-300 
                            border border-[#54169C]/10 hover:border-[#DA159B]/20 group relative overflow-hidden">
                {/* Fixed background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5FF]/20 to-[#FFF5F9]/20 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent
                                group-hover:from-[#DA159B] group-hover:to-[#54169C] transition-all duration-500">100%</div>
                  <p className="text-sm mt-2 text-gray-600 group-hover:text-[#54169C] transition-colors duration-300">Quality Service</p>
                </div>
              </div>
              <div className="flex-1 bg-white/80 rounded-xl p-6 shadow-sm text-center hover:shadow-xl hover:scale-105 transition-all duration-300 
                            border border-[#54169C]/10 hover:border-[#DA159B]/20 group relative overflow-hidden">
                {/* Fixed background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5FF]/20 to-[#FFF5F9]/20 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent
                                group-hover:from-[#DA159B] group-hover:to-[#54169C] transition-all duration-500">95%</div>
                  <p className="text-sm mt-2 text-gray-600 group-hover:text-[#54169C] transition-colors duration-300">Skilled Employee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DA159B]/20 to-[#54169C]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#DA159B]/10 to-[#54169C]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/teams/parent-meeting.webp"
              alt="Speech session"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300
                          border border-[#54169C]/10 hover:border-[#DA159B]/20">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-clip-text text-transparent
                            group-hover:from-[#54169C] group-hover:to-[#DA159B] transition-all duration-500">100%</div>
              <p className="text-sm text-gray-700 group-hover:text-[#54169C] transition-colors duration-300">Family Satisfaction</p>
            </div>
          </div>
        </div>
      </section>



      <div className="my-6">
        <Testimonial />
      </div>
      <div className="my-0">
        <Expertise />
      </div>

    </div>
  );
}
