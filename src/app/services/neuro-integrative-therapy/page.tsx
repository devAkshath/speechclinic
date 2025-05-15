import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";

import {

    FaStar,
} from 'react-icons/fa';




export default function NeuroIntegrativeTherapy() {
    return (
        <div className="bg-white min-h-screen">
            <header className="absolute top-0 w-full">
                <NavBarSecond />
            </header>

            <div className="font-normal">
                <HeroVideo
                    title="Neuro Integrative Therapy"
                    videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                />

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar on the left */}

                    <Srvicesider />
                    {/* Main Content on the right */}
                    <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
                        <section className="relative overflow-hidden ">
                            <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">Neuro Integrative Therapy</h2>
                            <div className="container mx-auto px-2">
                                <div>
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
                                            thumbnailSrc="/galleryimage.jpg"
                                            caption="Watch Our Neuro Integrative Therapy"
                                            videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                                        />
                                    </div>
                                    <div className="relative z-10 my-6">
                                        
                                        <div>
                                            <p className="mb-6">Neuro Integrative Therapy refers to a holistic approach that combines various therapeutic techniques to enhance neurological function and promote overall brain health, incorporating Low-Level Laser Therapy (LLLT), also known as photo biomodulation therapy along with rezzimax. This integrative method aims to harness the benefits of light to stimulate cellular processes within the brain.
                                            </p>

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
                                            <div className="max-w-3xl mx-auto">
                                                <p className="text-lg my-4 "> At The{" "}
                                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                                                        {" "}
                                                        Speech Clinic
                                                    </span>, we use holistic therapeutic approach that combines principles from neuroscience, psychology, and physical therapy to address a variety of neurological and developmental challenges.
                                                </p>
                                                <ul className="space-y-4">
                                                    {[
                                                        "This therapy focuses on integrating and balancing different systems within the brain and body to promote optimal functioning.",
                                                        "It is designed to stimulate neuro plasticity the brain's ability to reorganize itself by forming new neural connections in order to improve cognitive, sensory, and motor skills.",
                                                        "LLLT utilizes specific wavelengths of light to penetrate tissues, reaching cellular structures like mitochondria. This stimulation enhances ATP production, providing cells with increased energy to support healing and optimal function.",
                                                        "NIT is often used to support children with conditions such as autism, ADHD, learning disabilities, and developmental delays.",
                                                        "The therapy involves activities that target specific areas of the brain to enhance sensory processing, attention, emotional regulation, and motor coordination. By utilizing a combination of movement, sensory stimulation, and cognitive tasks.",
                                                        "Neuro Integrative Therapy aims to strengthen the brain's ability to process information and respond effectively to the environment.",
                                                    ].map((text, index) => (
                                                        <li key={index} className="flex items-start space-x-3">
                                                            <FaStar className="text-pink-400 w-5 h-5 flex-shrink-0 animate-pulse mt-1" />
                                                            <span className="text-lg">{text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
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
