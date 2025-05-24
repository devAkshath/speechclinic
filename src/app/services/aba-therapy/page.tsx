import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";


const getCarouselImages = () => [
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/aba-01.jpg",
    alt: "adl",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/aba-02.jpg",
    alt: "Brain gym",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/aba-03.jpg",
    alt: "City skyline",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/sce-01.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/sce-02.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/aba/sce-03.jpg",
    alt: "Forest trail",
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
          title="ABA Therapy"
          videoUrl="https://media.thespeechclinic.ae/website/videos/department%20video/DEPT%20OF%20ABA.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider  />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
              <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
                           ABA Therapy
                        </h2>
            <section className="relative overflow-hidden ">
             
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
                      caption="Watch Our ABA TherapyServices"
                      videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                    />
                  </div>
                  <div className="relative z-10 my-6">
                    <div>
                      <p className="mb-6">At The Speech Clinic Dubai we provide Applied Behavior Analysis (ABA) therapy to children and individuals facing . Our approach is specifically designed to address the challenges children may face in communication , social interaction, daily living, academic success, and emotion regulation. Our goal is to provide the support, structure and understanding they need to thrive by customizing each therapy programs based on their individual needs to foster independence and success in a playful, and child-lead approach ensuring that learning feels fun.</p>



                     <ImageCarousel
                      images={getCarouselImages()}
                      height="h-[400px]"
                      autoplaySpeed={4000}
                    />

                      <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 mb-12 mt-12
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
                        {/* <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C]">Our Expert Team</h3> */}
                        <p className="text-gray-700 text-lg font-medium">
                          Our collaborative team consists of IBAs, BCaBAs, IBTs, ABAT&apos;s and RBTs, working together to provide comprehensive ABA therapy services.
                        </p>
                        <p className=" my-3">
                          Our Mission: We are committed to helping your child build essential skills and overcome barriers to learning. Our personalized ABA therapy programs are designed to empower your child with the tools they need to thrive in everyday life and succeed in the future. With a focus on communication, social interaction, independence, and emotional well-being, we provide the support your child needs to reach their fullest potential.
                        </p>
                      </div>



                    </div>
                  </div>
                  <h1 className="text-3xl font-normal   mb-6 text-gray-800 ">What is ABA Therapy?</h1>

                  <p>ABA therapy is a proven, data-driven method used to help individuals develop and refine essential skills across multiple domains. It focuses on identifying specific behaviors that need to be changed or improved and uses positive reinforcement strategies to promote meaningful, measurable progress. ABA therapy is based on a deep understanding of behavior, and we use it to not only reduce challenging behaviors but to also enhance social, communication, academic and self-help skills. ABA techniques breaks down goals into small, manageable steps to help children gradually achieve larger goals without making the learning process too difficult for the child.</p>
                </div>

                <h2 className="text-3xl font-normal leading-tight mb-6 mt-8 text-gray-800">What We Do:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Enhance Communication Skills</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Improve Social Interaction</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Develop Daily Living Skills</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Reduce Challenging Behaviors / Behavior management and self-regulation</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Support Emotional Regulation</p>
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Behavioral Interventions for Academic Success</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Preparing for School: Building Essential Pre-Requisite Skillss</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Boost Academic Readiness</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Academic Skills</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my-1">Leisure Skills</p>
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#54169C]/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#54169C] to-[#DA159B] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 my">Field Trips and Community Integration: Real-Life Learning Opportunitiess</p>
                    </div>
                  </div>
                </div>


                <div className=" mt-12">
                  {/* <h2 className="text-3xl font-bold  mb-8 bg-gradient-to-r from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
                    Why Choose Us?
                  </h2> */}
                  <h2 className="text-3xl font-normal leading-tight mb-6 mt-8 text-gray-800"> Why Choose Us?</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 rounded-lg bg-gradient-to-br from-[#54169C]/5 to-[#DA159B]/5">
                      <h3 className="text-xl font-medium text-[#54169C] mb-2">Customized ABA Therapy Plans:</h3>
                      <p className="text-gray-600">Every child is unique, and our approach is always personalized to their needs.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-br from-[#54169C]/5 to-[#DA159B]/5">
                      <h3 className="text-xl font-medium text-[#54169C] mb-2">Holistic Skill Development:</h3>
                      <p className="text-gray-600">We focus on a wide range of essential skills, from communication to self-help to academic abilities.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-br from-[#54169C]/5 to-[#DA159B]/5">
                      <h3 className="text-xl font-medium text-[#54169C] mb-2">Proven Results: </h3>
                      <p className="text-gray-600"> Our data-driven methods are consistently proven to produce measurable improvements in behavior and skill acquisition.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-gradient-to-br from-[#54169C]/5 to-[#DA159B]/5">
                      <h3 className="text-xl font-medium text-[#54169C] mb-2">Experienced Team:</h3>
                      <p className="text-gray-600">Our certified IBA, BCaBA&apos;s and therapists (RBTs and IBTs) provide expert care and support every step of the way.</p>
                    </div>
                  </div>

                  <p className="text-gray-700  max-w-3xl mx-auto">
                    <span className="font-medium">Take the First Step towards Positive Change</span> If you&apos;re ready to see how ABA therapy can support your child&apos;s growth, contact us today to learn more about how our programs can help them succeed. Together, we can build the skills they need to thrive in school, at home, and in the community
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>



      <section id="faq" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
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
             QA
              </div>
            </div>
          </div>

          <h2 className="text-3xl  text-center  font-normal text-gray-900 sm:text-4xl mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                {
                  q: "What is ABA Therapy?",
                  a: "ABA therapy is a data-driven, evidence-based science used to help individuals with developmental challenges improve their skills across various domains such as communication, social skills, and behavior. It uses positive reinforcement and systematic strategies to encourage desirable behaviors.",
                },
                {
                  q: "What are the benefits of ABA therapy?",
                  a: "The benefits of ABA therapy include improved communication, reduced problem behaviors, enhanced social skills, better emotional regulation, increased independence, and overall development in areas such as academics and self-care.",
                },
                {
                  q: "Is this right for my child?",
                  a: "If your child has developmental challenges or behavioral challenges, ABA therapy can be highly effective in supporting their growth and skill development. A personalized assessment will determine the best approach.",
                },
                {
                  q: "How does ABA therapy work to change behavior?",
                  a: "ABA therapy works by identifying behaviors that need to be improved and using positive reinforcement strategies to encourage positive behaviors while reducing undesirable ones.",
                },
                {
                  q: "Who will work with my child, and where will therapy take place?",
                  a: "A team of certified professionals, including IBAs, BCaBAs, RBTs, and IBTs, will work with your child.",
                },
                {
                  q: "Will I be involved in my child's therapy?",
                  a: "Yes, parental involvement is key. You will be educated on the techniques used in therapy and may be asked to reinforce behaviors at home to ensure consistency.",
                },
                {
                  q: "Will ABA make my child robotic?",
                  a: "Robotic behavior is a common misconception about ABA therapy. However, this misconception is based on outdated methods or poorly implemented ABA programs. Modern ABA programs, as followed in The Speech Clinic, Dubai, are designed to be adaptable, flexible and individualized to the learner.",
                },
                {
                  q: "What role does reinforcement play in ABA therapy?",
                  a: "Reinforcement is used to encourage desirable behaviors. Positive behaviors are rewarded, which increases the likelihood of those behaviors being repeated in the future.",
                },
                {
                  q: "How are progress and goals measured in ABA therapy?",
                  a: "Progress is tracked using data and assessments. Goals are broken down into measurable steps, and ongoing evaluation ensures that the therapy is effective in meeting those goals.",
                },
              ].map((item, i) => (
                <details key={i} className="group bg-white p-6 rounded-xl shadow-md">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-normal text-[#5B21B6]">
                    <div className="flex items-center">
                      <div className="min-w-[28px] min-h-[28px] rounded-full bg-[#5B21B6] text-white flex items-center justify-center mr-3 text-[16px] font-bold leading-none">
                        ?
                      </div>

                      {item.q}
                    </div>
                    <svg
                      className="w-5 h-5 text-[#5B21B6] transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700">{item.a}</p>
                </details>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[
                {
                  q: "What skills does ABA therapy help develop?",
                  a: "ABA therapy helps develop a wide range of skills including communication (verbal and non-verbal), social skills, academic skills, self-help skills (like dressing and eating), emotional regulation, behavior management, and life skills (like time management).",
                },
                {
                  q: "Who can benefit from ABA Therapy?",
                  a: "ABA therapy can benefit children and adults with developmental delays, learning disabilities, and other behavioral or developmental challenges among many others.",
                },
                {
                  q: "Is my child too young or too old for ABA therapy?",
                  a: "ABA therapy can be beneficial at any age. It's most effective when started early, but it can also help older children and adults who need support in developing specific skills.",
                },
                {
                  q: "How long does ABA therapy take?",
                  a: "The duration of ABA therapy varies depending on the child's needs. Some may need therapy for a few months, while others may require longer-term intervention. Progress is continuously monitored to ensure that goals are being met and taken forward.",
                },
                {
                  q: "What does a typical ABA session look like?",
                  a: "A typical ABA session includes one-on-one therapy where the therapist uses positive reinforcement to work on specific skills. Teaching skills can be done through naturalistic environment training, tabletop activities or through a play-based approach, but sessions involve structured activities, depending on what is best suited for the child. Progress is tracked to ensure goals are being achieved.",
                },
                {
                  q: "My child attends nursery or school, how will the program benefit my child?",
                  a: "ABA therapy can help your child manage behaviors that may interfere with their learning and social interactions at school. It prepares them for school routines, helps with communication, and improves social skills, which can enhance their school experience.",
                },
                {
                  q: "How do I get started with ABA therapy services for my child?",
                  a: "Contact us to schedule an initial assessment. Based on the results, we will create a personalized therapy program for your child.",
                },
                {
                  q: "How can ABA help with harmful or destructive behaviors?",
                  a: "ABA therapy helps identify the triggers of harmful behaviors and replaces them with positive alternatives. Behavior management strategies are used to reduce such behaviors and teach more functional ways of responding to challenges.",
                },
              ].map((item, i) => (
                <details key={i} className="group bg-white p-6 rounded-xl shadow-md">
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-normal text-[#5B21B6]">
                    <div className="flex items-center ">
                  
                      <div className="min-w-[28px] min-h-[28px] rounded-full bg-[#5B21B6] text-white flex items-center justify-center mr-3 text-[16px] font-medium leading-none">
                        ?
                      </div>

                      {item.q}
                    </div>
                    <svg
                      className="w-5 h-5 text-[#5B21B6] transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-gray-700 font-medium">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
