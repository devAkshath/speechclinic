import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Link from 'next/link';
import Image from "next/image";
import InlineVideoSection from "../components/HeroSection/InlineVideoSection";
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative">Occupational Therapy</h2>
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
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            {/* Related Services */}
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-8 text-white text-center bg-[#54169C] py-4 rounded-lg">
                Related Services
              </h2>

              <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/school-readiness-program.svg"
                        alt="Oral Placement Therapy"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      Oral Placement Therapy
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/speech-and-language-therapy.svg"
                        alt="Sensory Integration"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      Sensory Integration
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/speech-and-language-therapy.svg"
                        alt="Motor Skills"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      Motor Skills
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/speech-and-language-therapy.svg"
                        alt="Visual Motor"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      Visual Motor
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/speech-and-language-therapy.svg"
                        alt="Handwriting"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      Handwriting
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                    <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                      <img
                        src="/speech-and-language-therapy.svg"
                        alt="ADL Skills"
                        className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                      ADL Skills
                    </span>
                  </div>
                </div>
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
            <section className="relative overflow-hidden ">
              <h2 className="text-5xl font-extrabold leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">Occupational Therapy</h2>
              <div className="container mx-auto px-4">
                <div className="relative bg-white/90 backdrop-blur-sm rounded-[1.5rem] p-5 md:p-5  
                        shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                        before:absolute before:inset-0 before:rounded-[2.5rem]
                        before:border-[3px] before:border-[#54169C]/20
                        before:transform before:translate-x-0 before:translate-y-2 
                        after:absolute after:inset-0 after:rounded-[1.5rem]
                        after:border-[3px] after:border-[#DA159B]/20
                        after:transform after:-translate-x-2 after:-translate-y-2
                        hover:before:border-[#54169C]/40 hover:after:border-[#DA159B]/40
                        hover:before:translate-x-2 hover:after:-translate-x-1
                        hover:before:translate-y-1 hover:after:-translate-y-1
                        before:transition-all before:duration-300 
                        after:transition-all after:duration-300">
                  <InlineVideoSection />

                  <div className="relative z-10">

                    <p className="mb-3">Our highly trained pediatric occupational therapy staff utilizes an unparalleled array of equipment within our clinics. Our therapists have the ability to address the occupational therapy (OT) needs of the child in a unique and engaging environment.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src="speech-therapy-02.jpg"
                          alt="Speech Therapy Session"
                          className="w-full h-[250px] object-cover"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src="speech-therapy-01.jpg"
                          alt="Speech Therapy Session"
                          className="w-full h-[250px] object-cover"
                        />
                      </div>
                    </div>
                    <p className="my-3">Pediatric occupational therapy helps a child reach goals and developmental milestones that improve their daily life. It focuses on how your child moves, plays and communicates with the world around them and enhances their motor skills, cognitive abilities, social interaction, and ADL skills. Occupational therapy intervention uses everyday life activities (occupations) to promote health, well-being, and your ability to participate in the important activities in your life.</p>
                  </div>
                  <p className="my-6">Occupational therapists support children with developmental delays, physical impairments, or sensory issues by designing personalized interventions. These therapeutic activities promote improvements in motor skills, emotional regulation, and self-esteem, helping children succeed in school, at home, and in their communities.</p>

                  <div>
                    <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Sensory Integration</h1>
                    <p className="my-4">Sensory integration is a neurological process that organizes and interprets sensory information from the environment. This involves processing input from various senses, including sight ( visual), sound ( auditory), touch ( tactile), taste ( gustatory), and smell ( olfactory), as well as proprioceptive (body position), vestibular (balance and movement) senses and interoception ( feeling of knowing what is happening in our body).</p>

                    <p className="my-3">At The Speech Clinic, our therapists are experts and certified in Sensory Integration from the University Of Southern California ( USC) and Collaborative For Leadership In Ayres Sensory Integration (CLASI).

                      Difficulties in sensory integration can lead to challenges in everyday activities, often seen in individuals with conditions like autism spectrum disorder (ASD), attention deficit hyperactivity disorder (ADHD), and sensory processing disorder (SPD). At The Speech Clinic, we use personalized therapeutic approaches to focus on improving sensory processing skills and help the children process and respond to sensory information more effectively, improving their ability to engage with the world. By using targeted sensory activities, therapists support children in developing skills like focus, coordination, and emotional regulation, making everyday tasks more manageable. We have a well-equipped sensory room and a moveable sensory pod called Sensory On the Go ( SOG) to create a calming space for our kids to self-regulate.</p>
                  </div>
                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">     Red Flags of SPD</h1>

                      <p>Recognizing red flags for Sensory Processing Disorder (SPD) is essential for early intervention and support.</p>

                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-extrabold leading-tight text-1xl">Infants and Toddlers:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Grooming Difficulties: Resistance to activities like bathing, haircuts, or nail trimming.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Eating Challenges: Refusal to eat certain food textures, flavors, or temperatures.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Mess Aversion: Distress over getting hands or face dirty during meals or play.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Clothing Sensitivity: Avoidance of specific fabrics or clothing styles due to discomfort.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Social Withdrawal: Reluctance to engage with others, including family members.
                          </span>
                        </li>

                      </ul>


                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-extrabold leading-tight text-1xl">Preschoolers:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Sensory Sensitivities: Overreaction to touch, noise, smells, or crowds.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Motor Skill Challenges: Clumsiness, poor coordination, or difficulty with tasks like running or jumping.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Social Difficulties: Trouble making friends or engaging in group activities.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Routine Disruptions: Difficulty transitioning between activities or adapting to changes.
                          </span>
                        </li>


                      </ul>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-extrabold leading-tight text-1xl">School-Aged Children:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Academic Challenges: Struggles with handwriting, sitting still, or completing assignments.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Behavioral Issues: Impulsivity, distractibility, or excessive movement in classroom settings.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Peer Relationships: Difficulty understanding social cues or maintaining friendships.
                          </span>
                        </li>
                      </ul>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-extrabold leading-tight text-1xl">Adolescents and Adults:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Emotional Regulation: Low self-esteem, fear of failure, or avoidance of new tasks.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Physical Coordination: Clumsiness, slow movements, or challenges with motor tasks.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Sensory Sensitivities: Overreaction to touch, noise, smells, or crowded environments.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Gross motor skills</h1>

                      <p>Gross motor skills are abilities that involve large muscle groups to perform tasks requiring coordination, balance, and strength. These skills are fundamental for physical activities and play a vital role in daily life.</p>

                      <ul className="space-y-4 mt-6 relative p-2">

                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Helps in crawling, walking, running, jumping, climbing, and maintaining balance.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Helps them build independence, gain confidence, and participate in physical activities like sports and play.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Strengthening these skills also supports better posture, coordination, and overall physical health, allowing children to interact with the world around them more effectively.
                          </span>
                        </li>


                      </ul>

                      <ul className="space-y-4 mt-6 relative p-2">

                        <h2 className="font-semibold leading-tight ">Examples of Gross Motor Skills:</h2>

                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Locomotion Skills: Walking, running, skipping, jumping, climbing, crawling.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Postural Control: Balancing, sitting up, standing, riding a bicycle.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Manipulative Skills: Throwing, catching, kicking, swinging a bat, swimming.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Stability and Coordination: Walking on uneven surfaces, jumping rope, somersaults, dancing.
                          </span>
                        </li>


                      </ul>


                    </div>
                  </div>


                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Fine motor skills</h1>
                      <p>Fine motor skills are the abilities required to use the small muscles in the hands, fingers, and wrists to perform precise and coordinated tasks. These skills involve hand-eye coordination and are essential for daily activities, particularly those requiring detailed movements.</p>
                      <p className="my-2"> These skills help children do things like picking up small objects, drawing, writing, feeding themselves, and getting dressed. Developing strong fine motor skills is essential for a child&apos;s independence and confidence in everyday activities, as well as for tasks they will need for school.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-semibold leading-tight ">Examples:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Grasping objects
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Using utensils (e.g., eating with a fork and spoon)
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Building with small blocks or Legos
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Puzzles or stacking objects
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Using a keyboard or a touchscreen device
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Tying shoelaces
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Buttoning clothes
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Zipping zippers
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Holding a pencil or crayon
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Writing letters or numbers
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Cutting with scissors
                          </span>
                        </li>


                      </ul>
                    </div>
                  </div>


                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Interactive Metronome (IM)</h1>
                      <p>The Interactive Metronome is a specialized tool used primarily in therapeutic and performance contexts to help individuals improve their timing, coordination, and cognitive functioning. It is an auditory and visual metronome system designed to help people with various developmental, cognitive, and motor skill issues. The system provides real-time feedback to users as they synchronize their movements or actions with a rhythm or beat.</p>
                      <p className="my-2">At The Speech Clinic, our therapists are certified and qualified in IM.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-semibold leading-tight ">Key Features of IM</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Timing & Rhythm Training: train individuals to improve their response times, rhythm, and ability to follow beats. It involves tasks where a person taps, claps, or performs other movements in sync with a rhythmic sound.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Real-Time Feedback: The system gives instant auditory and visual feedback based on how accurately the user is able to follow the rhythm. The goal is to hit the target timing as closely as possible.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Cognitive & Motor Improvement: It is used in a wide range of contexts, including rehabilitation for brain injuries, ADHD treatment, motor coordination improvement, and more.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Customization: The settings in the software can be adjusted based on the needs of the user, making it adaptable to different skill levels and rehabilitation needs.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Performance Tracking: It tracks progress over time, which can be helpful for both therapists and individuals to see improvements in performance and timing skills.
                          </span>
                        </li>



                      </ul>
                      <p className="my-2">The goal of Interactive Metronome therapy is to improve attention, memory, motor coordination, and processing speed, helping individuals gain better control over their movements, improve focus, and enhance overall cognitive performance.</p>

                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Virtual Reality</h1>
                      <p>Virtual reality (VR) refers to a computer-generated simulation or environment that replicates real-world or imagined settings, allowing users to interact with and experience them in an immersive way. VR typically uses specialized equipment like headsets, gloves, or motion controllers to create a sense of presence and enable interaction with the virtual environment.</p>
                      <p className="my-2">By creating controlled, interactive environments, VR helps children practice skills like social interaction, motor coordination, and sensory integration. The use of VR in therapy promotes neuroplasticity, motivating children to complete tasks while improving both cognitive and physical development. This innovative approach provides a safe and effective way to enhance children&lsquo;s therapeutic experiences.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-semibold leading-tight ">Benefits of Virtual Reality:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Immersive Learning: VR engages multiple senses, enhancing learning and memory retention by providing an interactive and immersive experience.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Safe Exploration: It allows for the simulation of dangerous or inaccessible environments, such as hazardous workspaces or historical settings, without the risks associated with physical exploration.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Increased Engagement: VR tends to captivate users, improving focus and engagement, which is particularly useful in education and training settings.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Enhanced Empathy: VR can simulate the perspectives of others, such as in experiences that simulate disabilities or different cultural contexts. This can promote empathy and understanding.
                          </span>
                        </li>

                      </ul>

                    </div>
                  </div>


                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Movement based learning ( Brain Gym)</h1>
                      <p>Movement-Based Learning and Brain Gym are approaches that integrate physical movement into the learning process to enhance brain function, improve focus, and boost cognitive development. These techniques are often used in educational settings, therapy, and developmental support, particularly for children, but they can benefit people of all ages.</p>
                      <p className="my-2">At The Speech Clinic, our OT&apos;s are certified in brain gym and mastering the children to achieve higher cognitive skills </p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-semibold leading-tight ">Benefits of Movement-Based Learning and Brain Gym:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Improved Focus: Movement helps learners stay engaged and focused, especially in classrooms or settings where attention spans may be short.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Enhanced Cognitive Function: Regular movement stimulates blood flow to the brain, which supports better cognitive functioning, including memory, problem-solving, and creative thinking..
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Stress Reduction: Physical activity can help release stress and anxiety, creating a more relaxed and conducive environment for learning.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Physical Coordination: Helps improve motor skills and coordination, especially in children who may have difficulties with these areas.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Emotional Regulation: Movement exercises can help regulate emotions and reduce feelings of frustration or nervousness, which can negatively affect learning.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Children with ADHD or Learning Disabilities: Movement-based techniques help channel energy positively, improve focus, and reduce restlessness.
                          </span>
                        </li>


                      </ul>

                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">DIR Floor Time</h1>
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
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Group Therapy</h1>
                      <p>In the Occupational Therapy group session we focus on developing and enhancing the skills that help children engage in daily activities and participate in their social, academic, and home environments.</p>
                      <p className="my-2">At The Speech Clinic, we have two groups called Little Learner&apos;s Occupational Therapy Group (age 3-5 years) and Fun and Focus OT Play Group (age 5-7 years )</p>
                      <p >Our goal is to empower children to achieve their fullest potential, whether at home, school, or in social settings. We use a variety of therapeutic techniques and approaches to ensure that children not only meet developmental milestones but also thrive in their daily routines.</p>

                    </div>
                  </div>

                  {/* new */}
                  <div className="space-y-8 my-2">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Play Therapy</h1>
                      <p>Play is a spontaneous, enjoyable, and intrinsically motivating activity that allows individuals, particularly children, to explore, create, and develop skills. It can be solitary or social, structured or unstructured, and is essential for cognitive, social, emotional, and physical development. Through play, children experiment with their environment, test boundaries, and engage in imaginative activities that support learning and growth.</p>

                      <ul className="space-y-4 mt-6 relative p-2">
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Supports holistic development : Play contributes to physical, cognitive, social, and emotional growth.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Builds resilience : Play, especially games involving challenges or rules, helps children learn how to handle failure and overcome obstacles.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Strengthens family bonds : Engaging in play with family members fosters communication and emotional connection.
                          </span>
                        </li>
                      </ul>

                    </div>
                  </div>
                  <div className="space-y-8 my-2">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Visual Motor Integration</h1>
                      <p>Visual-motor integration (VMI) refers to the ability to coordinate visual input (what we see) with motor output (how we physically respond). This skill is crucial for activities that require hand-eye coordination, such as writing, drawing, catching a ball, or typing.</p>

                      <p className="my-2">It&apos;s crucial for everyday activities and plays a key role in early childhood development, affecting learning and academic performance. Challenges with VMI can lead to difficulties in school and daily life. At The Speech Clinic ,our therapists use different approaches to strengthen visual-motor coordination, hand-eye coordination, cognitive abilities, and overall functioning.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <h2 className="font-semibold leading-tight ">It plays a significant role in:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            School skills: Writing, copying, and drawing.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Sports: Catching, hitting, and kicking a ball.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            Daily activities: Things like cooking, cleaning, grooming,buttoning, putting shoe laces.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8 my-2">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Hand writing</h1>
                      <p>Handwriting is a fundamental skill that plays a key role in communication, academic achievement, personal expression and cognitive development. It involves the coordinated use of fine motor skills, hand-eye coordination, and cognitive processes.</p>
                      <p className="my-2">At The Speech Clinic, our therapists use the approaches like &quot;Handwriting without tears&quot;, multi-sensory techniques, modeling and demonstration, use different writing tools to master the handwriting skills.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            The factors contribute to the development of handwriting skills are fine motor skills,hand-eye Coordination, cognitive factors, Practice and exposure,ergonomics and posture ,environmental factors.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                            The learning environment, such as classroom settings or home practices, plays a role in handwriting development. Children benefit from being in an environment that encourages writing and offers tools like lined paper, proper pencils, and writing exercises
                          </span>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8 my-2">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">Cognitive Skills</h1>
                      <p>Cognition refers to the mental processes involved in acquiring knowledge and understanding. It encompasses a wide range of mental activities, including thinking, learning, memory, perception, problem-solving, reasoning, decision-making, and language use. Essentially, cognition is how we process information from the world around us and use it to navigate daily life.</p>
                      <p className="my-2">Occupational therapists work with children , helping them overcome challenges related to attention, focus, and memory that may impact school performance and social skills by addressing cognitive development through therapeutic interventions. At The Speech Clinic, our therapists support children in reaching their full potential and achieving greater independence in everyday tasks.</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">

                            The factors contribute to the development of cognitive skills are attention , Perception, memory,learning ,Problem-solving,language,reasoning and judgment.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">

                            The factors contribute to the development of cognitive skills are attention , Perception, memory,learning ,Problem-solving,language,reasoning and judgment.
                          </span>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8 my-2">
                    <div className="   transform hover:scale-[1.02] hover:-rotate-1 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-200 relative overflow-hidden group">
                      <h1 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800 ">ADL skills</h1>
                      <p>ADLs (Activities of Daily Living) refer to the essential self-care tasks that children perform to maintain their well-being and independence.</p>
                      <p className="my-2">For children with developmental delays, disabilities, or injuries, therapy may focus on enhancing their ability to perform ADLs through specialized techniques, tools, and adaptive strategies, ultimately promoting greater independence and improving their overall quality of life. At The Speech Clinic, we are training the children to become independent in their ADL skills and will be focusing on the following areas</p>
                      <ul className="space-y-4 mt-6 relative p-2">
                      <h2 className="font-semibold leading-tight ">
                      Basic ADLs ( BADLs) typically include:</h2>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Bathing and Showering: Cleaning oneself to maintain hygiene.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Personal Hygiene and Grooming: Tasks such as brushing and styling hair.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Dressing: Selecting and putting on appropriate clothing.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Toilet Hygiene: Using the restroom and cleaning oneself afterward.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Functional Mobility: Moving from one place to another, including walking and transferring between positions like sitting and standing.
                          </span>
                        </li>
                        <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Self-Feeding: eating food and drinks independently
                          </span>
                        </li>

                      </ul>

                      <p>Instrumental Activities of Daily Living (IADLs), which are more complex tasks that support independent living in a community setting. IADLs include:</p>
                      <ul className="my-2">
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Managing finances
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Handling transportation (navigating public transit)
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Preparing meals
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Shopping for groceries and other necessities
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Performing housework and basic home maintenance
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Managing medications
                          </span>
                        </li>
                      <li className="transform hover:-translate-x-2 transition-all duration-500 flex items-center gap-3 group/item">
                          <span className="text-violet-500 text-2xl animate-pulse">✥</span>
                          <span className="group-hover/item:text-violet-600 group-hover/item:translate-x-2 transition-all duration-300">
                          Using communication devices like telephones
                          </span>
                        </li>

                      </ul>
                    </div>
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
