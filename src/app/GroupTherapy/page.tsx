import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Link from "next/link";
import Image from "next/image";
export default function grouptherapy() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="text-gray-700">
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden my-15 ">
          <div
            className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000"
            id="titleOverlay"
          >
            <div className="bg-gradient-to-b from-[#54169C]/90 to-pink-500/90 w-full h-full absolute"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white relative">
              Group Therapy
            </h2>
          </div>

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 w-full hidden sm:block">
            <HalfWaveBackground />
          </div>
        </section>

        {/* Add client-side interactivity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.addEventListener('load', () => {
                            const overlay = document.getElementById('titleOverlay');
                            if (overlay) {
                                setTimeout(() => {
                                    overlay.style.opacity = '0';
                                }, 3000);
                            }
                        });
                    `,
          }}
        />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Sidebar on the left */}
          <aside className="space-y-8 order-2 lg:order-1">
            {/* Services List */}

            <div className="w-full">
              <h2 className="text-xl font-normal mb-8 text-white text-center bg-pink-500 py-4 rounded-lg">
                Our Service
              </h2>

              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <Link
                  href="/services/vocabulary-support"
                  className="flex items-center justify-between p-4  hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-normal">
                    Speech and Language Therapy
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/language-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">
                    Occupational Therapy
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/hearing-screenings"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">Physical Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/Expressive Language"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">ABA Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>

                <Link
                  href="/services/therapeutic-listening"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">
                    School Readiness Program
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/evaluations-speech"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">
                    Neuro Integrative Therapy
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/occupational-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">Feeding Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/services/pediatric-hand-therapy"
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                >
                  <span className="text-lg font-meduim">Group Therapy</span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                    <svg
                      className="w-4 h-4 group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Box */}
            <div className="space-y-4">
              <Link
                href="/report"
                className="flex items-center bg-[#54169C]  text-white p-4 rounded-lg  hover:bg-pink-600 transition-colors"
              >
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-meduim">Company Report 2019</span>
              </Link>

              <Link
                href="/brochure"
                className="flex items-center bg-pink-500  text-white p-4 rounded-lg hover:bg-[#54169C]  transition-colors"
              >
                <div className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="font-meduim">Company Brochure</span>
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
                  <h3 className="text-2xl font-normal text-white mb-4">
                    Contact For Services
                  </h3>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#f472b6] text-white px-8 py-3 rounded-full font-meduim hover:bg-[#ec4899] transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content on the right */}
          <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
            <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500">
              Group Therapy service
            </h2>
            <Image
              width={800}
              height={500}
              src="/image.jpg"
              alt="Therapy Image"
              className="w-full h-auto object-cover rounded-[10px] shadow-md"
            />
            <p>
              In the Occupational Therapy group session we focus on developing
              and enhancing the skills that help children engage in daily
              activities and participate in their social, academic, and home
              environments.
            </p>

            <div className="border-3 border-[#5e12f5] rounded-4xl p-8">
              <div className="flex flex-col gap-6">
                {/* Heading and Description */}

                {/* Images */}
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
                <p>
                  At The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">
                    {" "}
                    Speech Clinic
                  </span>
                  , we have two groups called Little Learner&apos;s Occupational
                  Therapy Group (age 3-5 years) and Fun and Focus OT Play Group
                  (age 5-7 years )
                </p>
              </div>
            </div>
            <p>
              Our goal is to empower children to achieve their fullest
              potential, whether at home, school, or in social settings. We use
              a variety of therapeutic techniques and approaches to ensure that
              children not only meet developmental milestones but also thrive in
              their daily routines.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#5e12f5]/20 hover:border-[#5e12f5]/50 transition-all duration-300">
              <h3 className="text-2xl font-normal mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C]">
                Our Program Aims
              </h3>
              <ul className="space-y-4">
                {[
                  "Focus on fine and gross motor development",
                  "Sensory processing and integration support",
                  "Social-emotional skills enhancement",
                  "Parent education and collaboration",
                  "Fun and engaging therapeutic activities",
                  "Support for children with developmental delays",
                  "Promotion of self-regulation and emotional resilience",
                  "Customized therapy plans based on each child's unique needs",
                  "A safe, welcoming, and child-friendly environment",
                ].map((aim, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] flex items-center justify-center animate-pulse">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-700 hover:text-[#DA159B] transition-colors duration-300">
                      {aim}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
