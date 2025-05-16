import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";
import Link from "next/link";
const relatedData = [
  {
      icon: '/physical-therapy.svg',
      title: 'Manual Therapy',
      link: '/services/manual-therapy',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Spider Cage Therapy',
      link: '/services/spider-cage-therapy',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Cuevas Medek Exercises (CME)',
      link: '/services/cuevas-medek-mxercises',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Strengthening and Stretching Program',
      link: '/services/strengthening-and-stretching-program',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Plyometric and Resistance Band Exercises',
      link: '/services/plyometric-and-resistance-band-exercises',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Therapeutic Exercises',
      link: '/services/therapeutic-exercises',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Balance And Vestibular Rehabilitation',
      link: '/services/balance-and-vestibular-rehabilitation',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Aquatic Therapy',
      link: '/services/aquatic-therapy',
  },
  {
      icon: '/physical-therapy.svg',
      title: 'Neuromuscular Re-Education and Other Techniques',
      link: '/services/neuromuscular-reEducation',
  },

];



export default function PhysicalTherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="text-gray-700">
        <HeroVideo
          title="Physical Therapy"
          videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <section className="relative overflow-hidden ">
              <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">Physical Therapy</h2>
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
                      caption="Watch Our Physical TherapyServices"
                      videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                    />
                  </div>
                  <div className="relative z-10 my-6">
                    <div>
                      <p className="mb-6">Pediatric physiotherapy at The Speech Clinic Dubai, is a specialized branch of physical therapy dedicated to promoting the optimal physical development and functional independence of infants, children, and adolescents.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                          <Image
                            src="/speech-therapy-02.jpg"
                            alt="Physical Therapy Session 1"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-cover"
                          />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                          <Image
                            src="/speech-therapy-01.jpg"
                            alt="Physical Therapy Session 2"
                            width={500}
                            height={300}
                            className="w-full h-[300px] object-cover"
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4">
                          <div className="flex items-center gap-4">
                            <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                            <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300">
                              At The Speech Clinic Dubai, we focus on addressing movement impairments, developmental delays, musculoskeletal conditions, neurological disorders, and respiratory issues that affect the pediatric population.
                            </p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                          <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300 flex items-center gap-4">
                            <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                            In pediatric physiotherapy, the primary goal is to enhance a child&apos;s quality of life by improving their mobility, coordination, strength, and overall physical functions achieved through tailored assessment, evidence-based interventions, and family-centered care.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="my-5 font-normal"> At The{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-normal">
                        {" "}Speech Clinic Dubai</span> , The Pediatric Physical Therapy department utilizes a variety of therapy techniques.</p>
                  </div>
                  {/* 2 */}
                  <div>
                    <h1 className="text-3xl font-normal leading-tight mb-6 text-gray-800 ">Functional Electrical Stimulation:</h1>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300">
                            At The Speech Clinic Dubai, Functional Electrical Stimulation (FES) offers numerous benefits for pediatric patients with neuromuscular conditions, helping improve muscle strength, coordination, and overall functional abilities. By stimulating weak or inactive muscles, FES enhances motor control, supports gait training, and aids in postural stability.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                        <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300 flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          It plays a crucial role in neuroplasticity, reinforcing correct movement patterns and promoting long-term motor learning. Additionally, FES helps reduce muscle spasticity, stiffness, and contractures, making movement easier and more efficient.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="my-6">
                    <h1 className="text-3xl font-normal  leading-tight mb-6 text-gray-800 ">Gait and Functional Training:</h1>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300">
                            Gait training is a vital component of pediatric physiotherapy at The Speech Clinic Dubai, focused on improving walking patterns and enhancing mobility to achieve a more efficient and functional walking.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                        <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300 flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          Gait training program addresses abnormalities in posture, stride, and balance, enhancing independence and confidence in movement, allowing children to navigate their environment with greater ease.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500">
                        <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300 flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          Functional training At The Speech Clinic Dubai is designed to help children develop the skills they need for daily activities. By improving their ability to perform these activities independently, functional training boosts confidence and supports children in reaching developmental milestones more effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="my-6">
                    <h1 className="text-3xl font-normal leading-tight mb-6 text-gray-800 ">Orthotic and Equipment Prescription:</h1>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-[#54169C]/10 via-white to-[#DA159B]/10 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 flex items-center gap-4">
                        <div className="flex items-center gap-4">
                          <span className="text-[#54169C] text-3xl animate-pulse">✦</span>
                          <p className="text-gray-800 leading-relaxed group-hover:text-violet-600 transition-all duration-300">
                            At The Speech Clinic Dubai, we offer expert orthotic and equipment prescriptions to support children&apos;s mobility and overall physical function. Recommending and fitting orthotic devices, braces, splints, or adaptive equipment to support proper alignment, improve mobility, and enhance independence in activities of daily living.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>At The{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                      {" "}Speech Clinic Dubai</span> ,, we also offer intensive pediatric physical therapy for children who require more focused and accelerated rehabilitation. This program involves frequent therapy sessions and intensive, goal-oriented exercises to address severe developmental delays, neurological conditions and physical disabilities.</p>

                  <p className="my-6">Overall, pediatric physical therapy at The Speech Clinic Dubai plays a crucial role in promoting the overall health, well-being, and functional independence of children, empowering them to reach their full potential and participate fully in home, school, and community activities.</p>
                </div>
              </div>
            </section>

            {/* related service */}

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
