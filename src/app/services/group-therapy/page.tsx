import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import HeroVideo from "@/app/components/Services/ServiceHeroVideo";
import Srvicesider from "@/app/components/Services/ServiceAside";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";
import { FaCheckCircle } from "react-icons/fa";
const getCarouselImages = () => [
  {
    src: "/gallery/articulation-1.jpg",
    alt: "Mountain landscape",
  },
  {
    src: "/gallery/myofunctional 3.jpg",
    alt: "Beach scene",
  },
  {
    src: "/speech-therapy-02.jpg",
    alt: "City skyline",
  },
  {
    src: "/speech-therapy-01.jpg",
    alt: "Forest trail",
  },
];


export default function grouptherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>
      <div className="text-gray-700">
        <HeroVideo
          title="Group Therapy service"
          videoUrl="https://media.thespeechclinic.ae/website/videos/department%20video/ALL%20DEPARTMENTS%20COMBINED.mp4"
        />
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}
          <Srvicesider
          />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
              Group Therapy service
            </h2>
            <div
              className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-5 pb-6 px-6 sm:px-8 md:pt-10 md:pb-10 md:px-10 shadow-[20px_20px_40px_rgba(218,21,155,0.1)] 
                                                                                                          before:absolute before:inset-0 before:rounded-[2.5rem] before:-z-10 before:border-[3px] before:border-[#54169C]/30 before:translate-x-0 before:translate-y-0 before:transition-all before:duration-300 
                                                                                                          after:absolute after:inset-0 after:rounded-[2.5rem] after:-z-10 after:border-[3px] after:border-transparent after:translate-x-0 after:translate-y-0 after:transition-all after:duration-300 
                                                                                                          hover:before:translate-x-2 hover:before:translate-y-2 hover:after:border-[#DA159B]/30 hover:after:-translate-x-2 hover:after:-translate-y-2"
            >
              <Image
                width={900}
                height={500}
                src='/gallery/PROMPT 2.jpg'
                alt="Speech Therapy Session"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover rounded-2xl"
              />
            </div>
            <h2 className="text-4xl font-medium "> Speech & language therapy </h2>
            <p>
              At{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                {" "}
                The Speech Clinic
              </span>  our Group Therapy Services are designed to support the development of communication skills in a collaborative and socially enriching environment. Group sessions provide clients with the opportunity to practice language, social interaction, and pragmatic communication in real-time with peers, under the guidance of licensed speech-language pathologists.
            </p>

            <div className=" rounded-4xl ">
              {/* Heading and Description */}

              {/* Images */}
              <div >
                <ImageCarousel
                  images={getCarouselImages()}
                  height="h-[500px]"
                  autoplaySpeed={4000}
                />
              </div>
            </div>

            <p>
              We offer structured group formats tailored to specific goals, age groups, and language abilities. Our group interventions are grounded in evidence-based practices and delivered within a supportive and motivating setting.
            </p>
            <h2 className="text-2xl font-medium "> Key Group Therapy Programs </h2>
            <div className="-mt-3 p-3" >
              <h1 className="text-xl font-medium  flex items-center gap-2">
                <span className="">1.</span>
                Buddy Pair System
              </h1>
              <p className="p-3">The  <strong> Buddy Pair System </strong>  is a highly focused, two-person format that pairs clients with peers of similar age, communication level, and therapeutic goals. This system enhances individual attention while promoting peer modeling, turn-taking, and reciprocal interaction. Each session is carefully planned to maximize engagement and target specific speech and language objectives in a semi-structured format.
              </p>
              <ul className="space-y-3 p-2 text-gray-700">
                <p className=" font-bold" >Benefits Include:</p>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Increased opportunities for individualized support</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Enhanced peer interaction and cooperative learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Real-time communication practice with guided feedback</span>
                </li>
              </ul>

            </div>
            <div className="-mt-3 p-3" >
              <h1 className="text-xl font-medium  flex items-center gap-2">
                <span className="">2.</span>
                Language Booster Clubs
              </h1>
              <p className="p-3">Our <strong> Language Booster Clubs </strong> are dynamic, therapist-led group sessions aimed at accelerating receptive and expressive language development. These clubs are ideal for children with language delays and are structured around themed activities that include storytelling, vocabulary-building, role-play, and interactive games.
              </p>
              <ul className="space-y-3 p-2 text-gray-700">
                <p className=" font-bold" >Focus Areas:</p>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Vocabulary expansion and concept development</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Sentence structure and grammar usage</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                  <span>Social communication and group participation skills</span>
                </li>
              </ul>

            </div>
            <p className="-mt-6" >Each Language Booster Club is formed based on age, language level, and specific developmental needs to ensure maximum benefit for all participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
