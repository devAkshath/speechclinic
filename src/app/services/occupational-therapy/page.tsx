import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import Link from "next/link";
import { FaChild } from "react-icons/fa";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";
const relatedData = [
  {
    icon: '/physical-therapy.svg',
    title: 'Neuro Integrative Therapy',
    link: '/services/neuro-integrative-therapy',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Group Therapy',
    link: '/services/group-therapy',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Reflex Integration',
    link: '/services/reflex-lntegration',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Sensory Integration',
    link: '/services/sensory-integration',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Gross motor skills',
    link: '/services/Gross-motor-skills',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Fine motor skills',
    link: '/services/fine-motor-skills',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Interactive Metronome (IM)',
    link: '/services/interactive-metronome',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Interactive Metronome (IM)',
    link: '/services/interactive-metronome',
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Virtual Reality',
    link: '/services/virtual-reality'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Movement based learning (Brain Gym)',
    link: '/services/movement-based-learning'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'DIR Floor Time',
    link: '/services/dir-floor-time'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Group Therapy',
    link: '/services/group-therapy'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Play Therapy',
    link: '/services/play-therapy'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Visual Motor Integration',
    link: '/services/visual-motor-integration'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Hand writing',
    link: '/services/hand-writing'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'Cognitive Skills',
    link: '/services/cognitive-skills'
    ,
  },
  {
    icon: '/physical-therapy.svg',
    title: 'ADL skills',
    link: '/services/adl-skills'
    ,
  },

];
const getCarouselImages = () => [
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/adl/SCE-188.jpg",
    alt: "adl",
  },
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/brain-gym/brain%20gym%202.jpg",
    alt: "Brain gym",
  },
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/brain-gym/OT%204.jpg",
    alt: "City skyline",
  },
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/fine-motor/OLIVE%20MEDIA%20UAE-6249.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/handwriting/OT%20HANDWRITING.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://speechclinic.b-cdn.net/website/images/occupational-therapy/visual-motor-integration/visual%20motor%20integration.jpg",
    alt: "Forest trail",
  },
];
export default function OccupationalTherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="text-gray-700">
        <HeroVideo
          title="Occupational Therapy"
          videoUrl="https://speechclinic.b-cdn.net/website/videos/department%20video/DEPARTMENT%20OF%20OT.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
              Occupational Therapy
            </h2>
            <div className="container mx-auto px-2">
              <div>
             <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-5 pb-6 px-6 sm:px-8 md:pt-10 md:pb-10 md:px-10 shadow-[20px_20px_40px_rgba(218,21,155,0.1)] 
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
                <div className="relative z-10 my-4">
                  <p className="mb-3">Our highly trained pediatric occupational therapy staff utilizes an unparalleled array of equipment within our clinics. Our therapists have the ability to address the occupational therapy (OT) needs of the child in a unique and engaging environment.</p>
                       <ImageCarousel
                      images={getCarouselImages()}
                      height="h-[400px]"
                      autoplaySpeed={4000}
                    />
                  <div className="grid grid-cols- md:grid-cols-2 gap-4">
               
                  </div>
                  <p className="my-3">Pediatric occupational therapy helps a child reach goals and developmental milestones that improve their daily life. It focuses on how your child moves, plays and communicates with the world around them and enhances their motor skills, cognitive abilities, social interaction, and ADL skills. Occupational therapy intervention uses everyday life activities (occupations) to promote health, well-being, and your ability to participate in the important activities in your life.</p>
                </div>
                <p className="my-6">Occupational therapists support children with developmental delays, physical impairments, or sensory issues by designing personalized interventions. These therapeutic activities promote improvements in motor skills, emotional regulation, and self-esteem, helping children succeed in school, at home, and in their communities.</p>

              

                <div className="space-y-8">
                  <div className="  ">
                    <h1 className="text-2xl font-extrabold leading-tight mb-3 my-2 text-gray-800 flex items-center gap-2">
                      <FaChild className="text-pink-500 text-lg" />
                      DIR Floor Time
                    </h1>
                    <p>(Developmental, Individual-differences, Relationship-based Floor Time) is an approach to therapy and early childhood education that focuses on supporting the social, emotional, and developmental growth of children, particularly those with autism spectrum disorder (ASD) or other developmental challenges.

                      In DIR Floor Time,our therapists engage with the child on the floor in a playful, child-directed way. The goal is to encourage emotional connections, build communication skills, and foster cognitive development through interactive play. The &quot;floor time&quot; part refers to the physical act of getting down to the child&apos;s level to facilitate engagement in a natural and comfortable environment.</p>
                    <ul className="space-y-4 mt-6 relative p-2">
                      <h2 className="font-semibold leading-tight ">The key areas of focus in DIR Floor Time are:</h2>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                        <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                        <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Emotional Development:
                        </span>
                      </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                        <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                        <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Social Interaction
                        </span>
                      </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                        <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                        <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Cognitive Skills
                        </span>
                      </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                        <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                        <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Individualized Approach
                        </span>
                      </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                        <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                        <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Relationship-based
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="  ">
                    <h1 className="text-2xl font-extrabold leading-tight mb-3 my-2 text-gray-800 flex items-center gap-2">
                      <FaChild className="text-pink-500 text-lg" />
                      Group Therapy
                    </h1>
                    <p>In the Occupational Therapy group session we focus on developing and enhancing the skills that help children engage in daily activities and participate in their social, academic, and home environments.</p>
                    <p className="my-2">  At The{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                        {" "}
                        Speech Clinic
                      </span>, we have two groups called Little Learner&apos;s Occupational Therapy Group (age 3-5 years) and Fun and Focus OT Play Group (age 5-7 years )</p>
                    <p >Our goal is to empower children to achieve their fullest potential, whether at home, school, or in social settings. We use a variety of therapeutic techniques and approaches to ensure that children not only meet developmental milestones but also thrive in their daily routines.</p>

                  </div>
                </div>
               
               
              </div>
            </div>

            <section className=" py-14 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-center">
                  <div className="inline-flex items-center justify-center mb-4 animate-fade-in group">
                    <Image
                      src="/verified.png"
                      alt="Verified Icon"
                      className="w-8 h-8 mr-2 group-hover:rotate-12 transition-transform duration-300"
                      width={800}
                      height={500}
                    />
                    <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl 
                                                                    hover:scale-105 hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300 
                                                                    group-hover:bg-gradient-to-l">
                      Services
                    </div>
                  </div>
                </div>
                <h2 className="text-4xl font-normal text-center text-[#54169C] mb-12">Related Services</h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {relatedData.map((item, index) => (
                    <Link key={index} href={item.link}>
                      <div className="relative group bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full hover:-translate-y-1">
                        {/* Gradient Ring Effect */}
                        <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[#C084FC]/9 to-[#A78BFA]/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Image src={item.icon} alt={item.title} width={40} height={40} />
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
