import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import HeroVideo from "@/app/components/Services/ServiceHeroVideo";
import Srvicesider from "@/app/components/Services/ServiceAside";
import InlineVideo from "../../components/Services/InlineVideoSection";


export default function grouptherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="text-gray-700">
        <HeroVideo
          title="Group Therapy"
          videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider
            
          />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500">
              Group Therapy service
            </h2>
                   <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-9 pb-1 px-6 md:pt-8 md:pb-1 md:px-10
                                            shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                                            before:absolute before:inset-0 before:rounded-[2.5rem] before:-z-10
                                            before:border-[3px] before:border-[#54169C]/30
                                            before:translate-x-0 before:translate-y-0
                                            before:transition-all before:duration-300
                                            after:absolute after:inset-0 after:rounded-[2.5rem] after:-z-10
                                            after:border-[3px] after:border-transparent
                                            after:translate-x-0 after:translate-y-0
                                            after:transition-all after:duration-300
                                            hover:before:translate-x-2 hover:before:translate-y-2
                                            hover:after:border-[#DA159B]/30 
                                            hover:after:-translate-x-2 hover:after:-translate-y-2">
                              <InlineVideo
                                thumbnailSrc="/3.jpg"
                                caption="Watch Our Group Therapy service Services"
                                videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                              />
                            </div>
            <p>
              In the Occupational Therapy group session we focus on developing
              and enhancing the skills that help children engage in daily
              activities and participate in their social, academic, and home
              environments.
            </p>

            <div className=" rounded-4xl p-8">
              <div className="flex flex-col gap-6">
                {/* Heading and Description */}

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={300}
                      height={400}
                      src="/speech-therapy-02.jpg"
                      alt="Speech Therapy Session"
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      width={300}
                      height={400}
                      src="/speech-therapy-01.jpg"
                      alt="Speech Therapy Session"
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
                <p>
                  At The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                    {" "}
                    Speech Clinic
                  </span>
                  , we have two groups called Little Learner&apos;s Occupational
                  Therapy Group (age 3-5 years) and Fun and Focus OT Play Group
                  (age 5-7 years )
                </p>
              </div>
            </div>
            <p>
              Our goal is to empower children to achieve their fullest
              potential, whether at home, school, or in social settings. We use
              a variety of therapeutic techniques and approaches to ensure that
              children not only meet developmental milestones but also thrive in
              their daily routines.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#5e12f5]/20 hover:border-[#5e12f5]/50 transition-all duration-300">
              <h3 className="text-2xl font-normal mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C]">
                Our Program Aims
              </h3>
              <ul className="space-y-4">
                {[
                  "Focus on fine and gross motor development",
                  "Sensory processing and integration support",
                  "Social-emotional skills enhancement",
                  "Parent education and collaboration",
                  "Fun and engaging therapeutic activities",
                  "Support for children with developmental delays",
                  "Promotion of self-regulation and emotional resilience",
                  "Customized therapy plans based on each child's unique needs",
                  "A safe, welcoming, and child-friendly environment",
                ].map((aim, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] flex items-center justify-center ">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700 hover:text-[#DA159B] transition-colors duration-300">
                      {aim}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
