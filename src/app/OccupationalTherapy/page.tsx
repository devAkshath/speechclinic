import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Link from 'next/link';
import Image from "next/image";
export default function OccupationalTherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="text-gray-700">
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden my-15 ">
          <div className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000" id="titleOverlay">
            <div className="bg-gradient-to-b from-[#54169C]/90 to-pink-500/90 w-full h-full absolute"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative">Group Therapy</h2>
          </div>

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 w-full hidden sm:block">
            <HalfWaveBackground />
          </div>
        </section>

        {/* Add client-side interactivity */}
        <script dangerouslySetInnerHTML={{
          __html: `
                        window.addEventListener('load', () => {
                            const overlay = document.getElementById('titleOverlay');
                            if (overlay) {
                                setTimeout(() => {
                                    overlay.style.opacity = '0';
                                }, 3000);
                            }
                        });
                    `
        }} />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Sidebar on the left */}
          <aside className="space-y-8 order-2 lg:order-1">
            {/* Services List */}


            <div className="w-full">
              <h2 className="text-2xl font-bold mb-8 text-white text-center bg-pink-500 py-4 rounded-lg">
                Our Service
              </h2>

              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <Link
                  href="/services/vocabulary-support"
                  className="flex items-center justify-between p-4  hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Speech and Language Therapyt</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/language-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Occupational Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/hearing-screenings"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Physical Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/Expressive Language"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">ABA Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/services/therapeutic-listening"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">School Readiness Program</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/evaluations-speech"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Neuro Integrative Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/occupational-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Feeding Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/pediatric-hand-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-semibold">Group Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

              </div>
            </div>



            {/* Contact Box */}
            <div className="space-y-4">
              <Link href="/report"
                className="flex items-center bg-[#54169C]  text-white p-4 rounded-lg  hover:bg-pink-600 transition-colors"
              >
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-semibold">Company Report 2019</span>
              </Link>

              <Link href="/brochure"
                className="flex items-center bg-pink-500  text-white p-4 rounded-lg hover:bg-[#54169C]  transition-colors"
              >
                <div className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="font-semibold">Company Brochure</span>
              </Link>


              <div className="relative bg-[#54169C] rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src="/blogimage2.jpg"
                    alt="Contact Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24  rounded-t-[50px]">
                    <div className="absolute -bottom-1 left-0 right-0 h-8 bg-[#54169C] rounded-t-[50px]"></div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Contact For Services</h3>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#f472b6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ec4899] transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <section className="relative overflow-hidden py-9">
              <h2 className="text-5xl font-extrabold leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500">Group Therapy service</h2>
              <div className="container mx-auto px-4">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10
                        shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                        before:absolute before:inset-0 before:rounded-[2.5rem]
                        before:border-[3px] before:border-[#54169C]/20
                        before:transform before:translate-x-4 before:translate-y-4 
                        after:absolute after:inset-0 after:rounded-[1.5rem]
                        after:border-[3px] after:border-[#DA159B]/20
                        after:transform after:-translate-x-2 after:-translate-y-2
                        hover:before:border-[#54169C]/40 hover:after:border-[#DA159B]/40
                        hover:before:translate-x-2 hover:after:-translate-x-3
                        hover:before:translate-y-3 hover:after:-translate-y-3
                        before:transition-all before:duration-300 
                        after:transition-all after:duration-300">

                  <div className="relative z-10">
                    {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-clip-text text-transparent">
                      Innovative Leaders In Paediatric Therapy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      At The SpeechSync, we provide specialized therapy services to help you improve speech and communication skills and be excited to work with us.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white rounded-full 
                                hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300">
                        About Us
                      </button>
                      <button className="px-6 py-3 border-2 border-[#54169C] text-[#54169C] rounded-full
                                hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] hover:text-white 
                                hover:border-transparent transition-all duration-300">
                        Get In Touch
                      </button>
                    </div> */}

                    <p>Our highly trained pediatric occupational therapy staff utilizes an unparalleled array of equipment within our clinics. Our therapists have the ability to address the occupational therapy (OT) needs of the child in a unique and engaging environment.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src="speech-therapy-02.jpg"
                          alt="Speech Therapy Session"
                          className="w-full h-[350px] object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src="speech-therapy-01.jpg"
                          alt="Speech Therapy Session"
                          className="w-full h-[350px] object-cover"
                        />
                      </div>
                    </div>
                    <p>Pediatric occupational therapy helps a child reach goals and developmental milestones that improve their daily life. It focuses on how your child moves, plays and communicates with the world around them and enhances their motor skills, cognitive abilities, social interaction, and ADL skills. Occupational therapy intervention uses everyday life activities (occupations) to promote health, well-being, and your ability to participate in the important activities in your life.</p>
                  </div>
                  <p className="my-6">Occupational therapists support children with developmental delays, physical impairments, or sensory issues by designing personalized interventions. These therapeutic activities promote improvements in motor skills, emotional regulation, and self-esteem, helping children succeed in school, at home, and in their communities.</p>

                  <div>
                    <h1 className="text-3xl font-extrabold leading-tight mb-6 text-gray-800 ">Sensory Integration</h1>
                    <p className="my-4">Sensory integration is a neurological process that organizes and interprets sensory information from the environment. This involves processing input from various senses, including sight ( visual), sound ( auditory), touch ( tactile), taste ( gustatory), and smell ( olfactory), as well as proprioceptive (body position), vestibular (balance and movement) senses and interoception ( feeling of knowing what is happening in our body).</p>

                    <p className="my-3">At The Speech Clinic, our therapists are experts and certified in Sensory Integration from the University Of Southern California ( USC) and Collaborative For Leadership In Ayres Sensory Integration (CLASI).

                      Difficulties in sensory integration can lead to challenges in everyday activities, often seen in individuals with conditions like autism spectrum disorder (ASD), attention deficit hyperactivity disorder (ADHD), and sensory processing disorder (SPD). At The Speech Clinic, we use personalized therapeutic approaches to focus on improving sensory processing skills and help the children process and respond to sensory information more effectively, improving their ability to engage with the world. By using targeted sensory activities, therapists support children in developing skills like focus, coordination, and emotional regulation, making everyday tasks more manageable. We have a well-equipped sensory room and a moveable sensory pod called Sensory On the Go ( SOG) to create a calming space for our kids to self-regulate.</p>
                  </div>
                </div>
              </div>
            </section>


            {/* <section className="relative overflow-hidden py-16">
              <div className="container mx-auto px-4">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12
                        shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                        before:absolute before:inset-0 before:rounded-[2.5rem]
                        before:bg-gradient-to-r before:from-[#DA159B] before:to-[#54169C]
                        before:p-[2px] before:content-['']
                        before:transform before:translate-x-2 before:translate-y-2
                        before:transition-transform before:duration-300
                        hover:before:translate-x-3 hover:before:translate-y-3">

                  <div className="relative z-10 bg-white/90 rounded-[2.5rem] p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-clip-text text-transparent">
                      Innovative Leaders In Paediatric Therapy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      At The SpeechSync, we provide specialized therapy services to help you improve speech and communication skills and be excited to work with us.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white rounded-full 
                                hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300">
                        About Us
                      </button>
                      <button className="px-6 py-3 border-2 border-[#54169C] text-[#54169C] rounded-full
                                hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] hover:text-white 
                                hover:border-transparent transition-all duration-300">
                        Get In Touch
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section> */}

            {/* <section className="relative overflow-hidden py-16">
              <div className="container mx-auto px-4">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12
                        shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                        before:absolute before:inset-0 before:rounded-[2.5rem]
                        before:border-[3px] before:border-[#54169C]/20
                        before:transform before:translate-x-4 before:translate-y-4 
                        after:absolute after:inset-0 after:rounded-[2.5rem]
                        after:border-[3px] after:border-[#DA159B]/20
                        after:transform after:-translate-x-2 after:-translate-y-2
                        hover:before:border-[#54169C]/40 hover:after:border-[#DA159B]/40
                        hover:before:translate-x-6 hover:after:-translate-x-3
                        hover:before:translate-y-6 hover:after:-translate-y-3
                        before:transition-all before:duration-300 
                        after:transition-all after:duration-300">

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-clip-text text-transparent">
                      Innovative Leaders In Paediatric Therapy
                    </h2>
                    <p className="text-gray-600 mb-6">
                      At The SpeechSync, we provide specialized therapy services to help you improve speech and communication skills and be excited to work with us.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white rounded-full 
                                hover:shadow-lg hover:shadow-[#DA159B]/30 transition-all duration-300">
                        About Us
                      </button>
                      <button className="px-6 py-3 border-2 border-[#54169C] text-[#54169C] rounded-full
                                hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] hover:text-white 
                                hover:border-transparent transition-all duration-300">
                        Get In Touch
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section> */}





          </div>
        </div>
      </div>
    </div>
  );
}
