import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";

import { FaCheckCircle } from "react-icons/fa";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";
const getCarouselImages = () => [
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/aba-01.jpg",
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

export default function NeuroIntegrativeTherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="font-normal">
        <HeroVideo
          title="Neuro Integrative Therapy"
          videoUrl="https://media.thespeechclinic.ae/website/videos/department%20video/NEURO%20INTEGRATIVE%20THERAPY.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
              Neurointegrative Therapy
            </h2>

            <section className="relative overflow-hidden ">
              {/* <h2 className="text-5xl font-normal leading-tight mb-6 -mt-10 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">Neuro Integrative Therapy</h2> */}
              <div className="container mx-auto px-2 my-3">
                <div>
                  <div
                    className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-5 pb-6 px-6 sm:px-8 md:pt-10 md:pb-10 md:px-10 shadow-[20px_20px_40px_rgba(218,21,155,0.1)] 
                                                                                                          before:absolute before:inset-0 before:rounded-[2.5rem] before:-z-10 before:border-[3px] before:border-[#54169C]/30 before:translate-x-0 before:translate-y-0 before:transition-all before:duration-300 
                                                                                                          after:absolute after:inset-0 after:rounded-[2.5rem] after:-z-10 after:border-[3px] after:border-transparent after:translate-x-0 after:translate-y-0 after:transition-all after:duration-300 
                                                                                                          hover:before:translate-x-2 hover:before:translate-y-2 hover:after:border-[#DA159B]/30 hover:after:-translate-x-2 hover:after:-translate-y-2"
                  >
                    <Image
                      width={900}
                      height={500}
                      src="/gallery/PROMPT 2.jpg"
                      alt="Speech Therapy Session"
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover rounded-2xl"
                    />
                  </div>
                  <div className="relative z-10 my-6">
                    <div>
                      <h2 className="text-3xl font-medium ">
                        {" "}
                        Advancing Development Through Targeted Neuroplasticity
                      </h2>

                      <p className="my-4">
                        {" "}
                        At{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                          {" "}
                          The Speech Clinic
                        </span>{" "}
                        Dubai, <strong> NeuroIntegrative Therapy</strong> is a
                        cutting-edge intervention model developed by our
                        founder, <strong> Ms. Sana Shareef </strong>, to support
                        the neurological foundations of communication, movement,
                        and regulation. Rooted in contemporary neuroscience,
                        this approach harnesses the brain’s innate capacity for
                        change — known as <strong> neuroplasticity</strong> — to
                        drive meaningful therapeutic outcomes.
                      </p>

                      <div className="">
                        <ImageCarousel
                          images={getCarouselImages()}
                          height="h-[500px]"
                          autoplaySpeed={4000}
                        />
                      </div>
                      <div className="max-w-3xl mx-auto">
                        <p className="my-4">
                          Rather than treating symptoms in isolation,
                          NeuroIntegrative Therapy works at the level of the
                          brain-body connection. It integrates structured
                          movement, sensory feedback, rhythmic timing, and
                          targeted stimulation to enhance{" "}
                          <strong> functional connectivity</strong> across key
                          neural networks responsible for speech, language,
                          motor planning, and cognitive engagement.
                        </p>

                        <p className="my-4">
                          The approach draws from well-established principles in{" "}
                          <strong> developmental neurobiology </strong> and{" "}
                          <strong> brain-based learning</strong> , emphasizing
                          the importance of activating under-responsive systems
                          and synchronizing neural timing to unlock learning
                          potential. By gently engaging the brain through
                          multisensory pathways and repetition, this method
                          encourages the formation of new, efficient neural
                          circuits.
                        </p>
                        <p className="my-4">
                          This therapy is ideal for children with motor speech
                          challenges, sensory integration difficulties,
                          developmental delays, or those who present with global
                          processing differences. Each session is designed to be
                          personalized, measurable, and neurologically driven —
                          ensuring therapy is not only effective, but
                          future-forward.
                        </p>

                        <div className="max-w-3xl  mx-auto">
                          <h1 className="text-3xl font-medium my-2">
                            Who Is It For?
                          </h1>

                          <p className="my-4 p-1">
                            <strong> NeuroIntegrative Therapy </strong> is
                            designed for children who require more than
                            conventional therapy approaches — children whose
                            brains benefit from deeper, targeted engagement
                            across sensory, motor, and cognitive systems. It is
                            especially effective for :
                          </p>
                          <div className="p-4 my-2">
                            <ul className="space-y-3 text-gray-700">
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  {" "}
                                  <strong>
                                    Children with motor speech disorders
                                  </strong>{" "}
                                  such as Childhood Apraxia of Speech
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  {" "}
                                  <strong>Neurodivergent learners </strong>{" "}
                                  including those with Autism Spectrum Disorder
                                  and ADHD
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  <strong>
                                    Children with global developmental delays or
                                    hypotonia
                                  </strong>
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  <strong>
                                    Sensory integration and processing
                                    challenges
                                  </strong>
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  <strong>
                                    Children with executive function
                                    difficulties,
                                  </strong>
                                  such as attention, planning, and regulation
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  <strong> Late talkers</strong>with underlying
                                  neurological inefficiencies
                                </span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FaCheckCircle className="text-pink-500 text-lg mt-1 shrink-0" />
                                <span>
                                  <strong>
                                    Children not making expected progress
                                  </strong>{" "}
                                  through traditional therapy alone
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
