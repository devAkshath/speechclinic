import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";
import Link from "next/link";
import ImageCarousel from "../imageCarousel/imagecarousel";

const relatedData = [
  {
    icon: "/physical-therapy.svg",
    title: "Oral Placement Therapy",
    link: "/services/oral-placement-therapy",
  },
  {
    icon: "/physical-therapy.svg",
    title: "The Kaufman Speech to Language Protocol",
    link: "/services/kaufman-speech-protocol",
  },
  {
    icon: "/physical-therapy.svg",
    title: "PROMPT Therapy",
    link: "/services/prompt-therapy",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Gestalt Language Processing",
    link: "/services/gestalt-language-processing",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Fluency Therapy",
    link: "/services/fluency-therapy",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Myofunctional Therapy",
    link: "/services/myofunctional-therapy",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Articulation Therapy",
    link: "/services/articulation-therapy",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Makaton",
    link: "/services/makaton",
  },
  {
    icon: "/physical-therapy.svg",
    title: "DIR-Floor Time",
    link: "/services/dir-floor-time",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Sensory Motor Approach to Apraxia of Speech",
    link: "/services/sensory-motor-approach-to-apraxia-of-speech-and-other-related-motor-speech-disorders",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Nuffield Dyspraxia Program",
    link: "/services/nuffield-dyspraxia-program",
  },
  {
    icon: "/physical-therapy.svg",
    title: "Language Booster Club",
    link: "/services/language-booster-club",
  },
];

const getCarouselImages = () => [
  {
    src: "/speech-therapy-02.jpg",
    alt: "Mountain landscape",
  },
  {
    src: "/speech-therapy-01.jpg",
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

export default function SchoolReadinessProgram() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="font-normal">
        <HeroVideo
          title="Speech And Language Therapy"
          videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}
          <Srvicesider />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <section className="relative overflow-hidden ">
              <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">
                Speech And Language Therapy
              </h2>
              <div className="container mx-auto px-2">
                <p className="my-4">
                  Welcome to the Speech and Language Department At The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                    {" "}
                    Speech Clinic
                  </span>
                  , Dubai
                </p>
                <div>
                  <div
                    className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-9 pb-1 px-6 md:pt-8 md:pb-1 md:px-10
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
                                  hover:after:-translate-x-2 hover:after:-translate-y-2"
                  >
                    <InlineVideo
                      thumbnailSrc="/galleryimage.jpg"
                      caption="Watch Our Speech And Language Therapy"
                      videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                    />
                  </div>
                  <div className="relative z-10 my-6">
                    <ImageCarousel
                      images={getCarouselImages()}
                      height="h-[400px]"
                      autoplaySpeed={4000}
                    />

                    <p className="my-4">
                      At The Speech Clinic Dubai, we are committed to empowering
                      children through communication, providing expert care in
                      speech, language, and communication development. Our team
                      of certified speech-language pathologists is skilled in
                      assessing and treating a wide range of speech and language
                      disorders, using the latest evidence-based techniques.At
                      our clinic, we are dedicated to enhancing communication
                      skills and fostering language development in children of
                      all ages.{" "}
                    </p>

                    <p className="my-4">
                      We specialize in Augmentative and Alternative
                      Communication (AAC) for children with complex
                      communication needs, offering personalized AAC solutions
                      to help them express themselves effectively. From our own
                      innovative AAC apps like Speech Sync to advanced tools for
                      language processing, we integrate the latest innovations
                      into our practice to ensure that every child receives the
                      most effective and personalized care.
                    </p>

                    <p className="my-4">
                      Our goal is to foster a supportive and inclusive
                      environment, enabling children to communicate confidently,
                      interact meaningfully, and reach their full potential in
                      all aspects of life.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className=" py-14 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-center">
                  <div className="inline-flex items-center justify-center mb-4 animate-fade-in group">
                    <Image
                      src="/verified.png"
                      alt="Verified Icon"
                      className="w-8 h-8 mr-2 group-hover:rotate-12 transition-transform duration-300"
                      width={30}
                      height={30}
                    />
                    <div
                      className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl 
                                                        hover:scale-105 hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300 
                                                        group-hover:bg-gradient-to-l"
                    >
                      Services
                    </div>
                  </div>
                </div>
                <h2 className="text-4xl font-normal text-center text-[#54169C] mb-12">
                  Related Services
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {relatedData.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <div className="relative group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full hover:-translate-y-1">
                        {/* Gradient Ring Effect */}
                        <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[#C084FC]/9 to-[#A78BFA]/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={40}
                            height={40}
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-normal text-gray-800 leading-tight group-hover:text-[#6D28D9] transition duration-300">
                          {item.title}
                        </h3>

                        {/* Bottom Glow Accent */}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-1 rounded-full bg-gradient-to-r from-[#E879F9] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition duration-300"></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
