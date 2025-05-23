import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";

import {
  FaFileAlt,
  FaUserCircle,
  FaClipboardList,
  FaSmileBeam,
  FaHeartbeat,
  FaStar,
} from "react-icons/fa";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";

const getCarouselImages = () => [
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/LEVEL%20UP.jpg",
    alt: "adl",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-10.jpg",
    alt: "Brain gym",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-13.jpg",
    alt: "City skyline",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-14.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-16.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-17.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-2.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-4.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-6.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-7.jpg",
    alt: "Forest trail",
  },
  {
    src: "https://media.thespeechclinic.ae/website/images/school-readiness/SCE-8.jpg",
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
          title="School Readiness Program"
          videoUrl="https://media.thespeechclinic.ae/website/videos/department%20video/SCHOOL%20COMBINED.mp4"
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar on the left */}

          <Srvicesider />
          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
              School Readiness Program
            </h2>
            <section className="relative overflow-hidden ">
              <div className="container mx-auto px-2">
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
                      caption="Watch Our School Readiness Program"
                      videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                    />
                  </div>
                  <div className="relative z-10 my-6">
                    <div>
                      <p className="mb-6">
                        LEVEL UP refers to a structured school readiness program
                        initiative at The Speech Clinic Dubai designed to help
                        children develop the essential skills needed for a
                        smooth transition into a learning environment. It
                        focuses on fostering cognitive, social, emotional, and
                        physical growth through individualized support,
                        empowering children to participate, learn, and thrive at
                        their own pace.
                      </p>
                      <ImageCarousel
                        images={getCarouselImages()}
                        height="h-[400px]"
                        autoplaySpeed={4000}
                      />
                      <p className="my-3 mt-5">
                        We begin by recognizing each child&apos;s unique
                        strengths and needs. Our program is designed to include
                        every child in a nurturing and supportive community,
                        ensuring they feel valued and understood. Through
                        personalized support, we provide the tools and guidance
                        necessary for learning and growth. Ultimately, our goal
                        is to empower each child to achieve their full
                        potential, setting them on a path towards academic and
                        personal success.
                      </p>
                      <h1 className="text-3xl font-normal leading-tight mb-6 text-gray-800 ">
                        {" "}
                        Preparing Children For a Successful Start
                      </h1>

                      <p>
                        The program ensures that children can participate,
                        learn, and thrive in school at their own pace, fostering
                        both academic and personal growth. To assess each
                        child&apos;s readiness and developmental progress, we
                        use specialized tools like the MDPS Tool and VB-MAPP.
                        These assessments help evaluate each child&apos;s
                        developmental needs, ensuring they are prepared for
                        their educational journey.
                      </p>

                      <div className="max-w-3xl mx-auto">
                        <p className="text-xl my-4 ">
                          Our program is divided into two key groups :
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <FaStar className="text-pink-400 mt-1" />
                            <span className="text-lg">
                              The Pre-academic Group
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <FaStar className="text-pink-400 mt-1" />
                            <span className="text-lg">
                              The Functional Group
                            </span>
                          </li>
                        </ul>
                      </div>

                      <p className="my-3">
                        These groups are determined based on each child&apos;s
                        functional level and the support they require. The
                        Pre-academic Group focuses on foundational skills
                        necessary for academic learning, while the Functional
                        Group addresses skills for daily living, social
                        interaction, and functional independence. This structure
                        ensures that every child receives the appropriate
                        support and tailored learning experience to help them
                        succeed.
                      </p>
                      <div>
                        <h1 className="text-3xl leading-tight my-4 text-gray-800 ">
                          {" "}
                          Preparing Children For a Successful Start
                        </h1>
                        <p>
                          LEVEL UP refers to the skills, knowledge, and
                          behaviors that help children succeed in a structured
                          learning environment. It encompasses cognitive,
                          social, emotional, and physical development, ensuring
                          that children can engage in learning, follow
                          instructions, and interact positively with peers and
                          teachers.
                        </p>
                      </div>

                      <section className=" py-3 bg-white text-gray-800">
                        <div className="max-w-4xl mx-auto">
                          <p className="text-lg  font-normal mb-3">
                            Our program offers a comprehensive approach to
                            supporting each child&apos;s unique educational
                            needs through the development of :
                          </p>
                          <ul className="space-y-3 px-5">
                            <li className="flex items-center space-x-3">
                              <FaFileAlt className="text-pink-500 text-xl" />
                              <span className="text-lg">
                                Individualized Education Program (IEP)
                              </span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <FaUserCircle className="text-teal-500 text-xl" />
                              <span className="text-lg">Student Profile</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <FaClipboardList className="text-yellow-500 text-xl" />
                              <span className="text-lg">
                                Detailed Case History
                              </span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <FaSmileBeam className="text-purple-500 text-xl" />
                              <span className="text-lg">Sensory Profile</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <FaHeartbeat className="text-red-400 text-xl" />
                              <span className="text-lg">Behavior Profile</span>
                            </li>
                          </ul>
                        </div>
                      </section>
                      <div className="my-3">
                        <p>
                          One-to-one individual therapy sessions are also
                          included for children who require additional support
                          to enhance their learning and development.
                        </p>

                        <p className="my-3">
                          The IEP is a customized plan created to address the
                          specific learning goals and required accommodations
                          for each student, ensuring they receive the necessary
                          support to succeed academically and personally. The
                          Student Profile serves as an in-depth overview of the
                          child, highlighting their strengths, challenges, and
                          preferred learning styles, which allows our educators
                          to tailor instruction and strategies to maximize their
                          potential.
                        </p>

                        <p className="my-3">
                          The Case History provides valuable background
                          information, including the student&apos;s medical,
                          developmental, and educational history. This helps our
                          team understand the context of the child&apos;s
                          learning journey and any previous interventions or
                          strategies that may have been effective or need
                          adjustment. The Sensory Profile assesses how a child
                          responds to sensory stimuli, such as sounds, textures,
                          and visual inputs. This information guides us in
                          creating a classroom environment that is comfortable
                          and conducive to their learning and emotional
                          well-being. Lastly, the Behavior Profile tracks the
                          child&lsquo;s behavioral patterns, identifying any
                          triggers or challenges, and allows us to develop
                          effective strategies to manage and support positive
                          behavior development.
                        </p>
                        <p className="my-3">
                          By integrating these comprehensive assessments, our
                          program ensures that each child receives a holistic,
                          personalized learning experience that fosters growth,
                          confidence, and success in all areas of development.
                        </p>
                      </div>

                      <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-normal leading-tight my-4 text-gray-800 ">
                          Why Is LEVEL UP Important?
                        </h2>
                        <p className="text-lg my-4 ">
                          LEVEL UP ensures that children enter school with a
                          strong foundation for learning. It helps them:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-3">
                            <FaStar className="text-pink-400 mt-1" />
                            <span className="text-lg">
                              Adjust to classroom routines and expectations
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <FaStar className="text-pink-400 mt-1" />
                            <span className="text-lg">
                              Build positive relationships with teachers and
                              peers
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <FaStar className="text-pink-400 mt-1" />
                            <span className="text-lg">
                              Develop the confidence to explore and learn at
                              their own pace
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-normal leading-tight my-4 text-gray-800 ">
                          The Heart Of Our Program
                        </h2>
                        <p className="text-lg my-4 ">
                          Our program is led by a dedicated team of special
                          educators and assistant teachers who are committed to
                          providing personalized support and fostering the
                          development of each child. With their expertise, they
                          guide children through key developmental areas such as
                          gross motor skills, fine motor skills, social
                          interaction, and activities of daily living (ADL),
                          ensuring that each child receives the individual
                          attention and encouragement they need. From enhancing
                          reading and literacy to nurturing play skills and
                          promoting recreation & leisure activities, our team
                          creates a supportive environment tailored to the
                          unique needs of each child. The collaboration between
                          special educators and assistant teachers ensures that
                          every child can engage with the program at their own
                          pace, developing essential skills for academic
                          success, social participation, and independent living.
                          Their compassionate and professional approach makes a
                          meaningful difference in each child&apos;s educational
                          journey, setting them up for a lifetime of growth and
                          learning.
                        </p>
                      </div>

                      <div className=" p-6  my-3">
                        <p className="text-2xl font-normal text-[#5B21B6] mb-6">
                          Key Focus Areas Of Development
                        </p>

                        <div className="space-y-4">
                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Gross Motor Skills:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Developing strength, coordination, and balance
                              through activities like walking, running, jumping,
                              climbing, and throwing.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Fine Motor Skills:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Enhancing hand-eye coordination and dexterity
                              through activities such as writing, cutting,
                              buttoning, and using small objects.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Social Interaction:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Encouraging relationships and communication skills
                              through group play, sharing, turn-taking, and
                              cooperative learning activities.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              ADL Skills (Activities of Daily Living):
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Supporting independence in self-care tasks like
                              dressing, eating, toileting, and personal hygiene.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Reading and Literacy:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Recognizing letters, sounds, and understanding
                              written language through storytelling, phonics
                              practice, and picture books.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Writing:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Developing tracing, drawing, forming letters, and
                              sentence writing skills.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Numeracy:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Understanding numbers, patterns, and basic math
                              concepts through activities such as counting,
                              sorting, and simple addition and subtraction.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Expressive and Receptive Language:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Encouraging conversations, answering questions,
                              and listening exercises to help children express
                              thoughts and understand spoken language.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Play Skills:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Enhancing creativity, problem-solving, and social
                              engagement through pretend play, role-playing, and
                              structured games.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Recreation & Leisure Activities:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Engaging in sports, music, dance, and outdoor
                              exploration.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Extracurricular Activities:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Exploring art, drama, music, and sports clubs to
                              expand skills beyond academics and discover new
                              talents.
                            </p>
                          </div>

                          <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-normal text-[#5B21B6]">
                              Group Activities:
                            </h3>
                            <p className="text-sm text-gray-700 mt-1">
                              Participating in circle time discussions, group
                              storytelling, and team-building games to promote
                              social interaction, creativity, cooperation, and
                              turn-taking.
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-6">
                          By focusing on these essential developmental areas, we
                          help children build the skills needed for academic
                          success,
                          <span className="text-[#5B21B6]">
                            {" "}
                            social participation
                          </span>
                          , and
                          <span className="text-[#5B21B6]">
                            {" "}
                            independent living
                          </span>
                          .
                        </p>
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
