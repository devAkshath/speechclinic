import Image from "next/image";
import NavBarSecond from "../components/NavBar/NavBarSecond";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-8">
      <header className="absolute top-0 w-full z-0 px-0">
        <NavBarSecond />
      </header>

      <div className="max-w-7xl mx-auto pt-40 flex flex-col lg:flex-row gap-8">
        {/* Main Blog Content */}
        <main className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-normal mb-4">
            Significance of Early Intervention
          </h1>

          <div className="flex flex-wrap items-center text-sm text-[#0a1e59] gap-2 pb-9">
            {/* Date with calendar icon */}
            <div className="flex items-center gap-1 text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>04 Dec, 2024</span>
            </div>

            {/* Author */}
            <span className="text-[#0a1e59]">
              by <span className="font-medium">Hareesh Kumar</span>
            </span>

            {/* Tags with label icon */}
            <div className="flex items-center gap-1 text-pink-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.707 10.293l-7-7A1 1 0 009.586 3H3a1 1 0 00-1 1v6.586a1 1 0 00.293.707l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414zM5.5 7A1.5 1.5 0 117 5.5 1.5 1.5 0 015.5 7z" />
              </svg>
              <span>Laravel, Web Optimization</span>
            </div>
          </div>

          <Image
            width={800}
            height={500}
            src="/image.jpg"
            alt="Therapy Image"
            className="w-full h-auto object-cover rounded-[10px] shadow-md"
          />
          <article className="text-left space-y-4 text-gray-800 pt-16">
            <p>
              Early intervention is a concept that has transformed the lives of
              countless individuals and their families, especially when it comes
              to addressing developmental delays and disorders like Autism
              Spectrum Disorder (ASD). At The Speech Clinic Dubai, we firmly
              believe in the power of early intervention to make a profound
              difference in the lives of children with speech and language
              challenges. In this blog, we will explore the significance of
              early intervention, its impact on child development, and how our
              clinic is dedicated to ensuring every child has the best start on
              their journey towards effective communication.
            </p>
            <blockquote className="relative  bg-pink-100 text-[#2e3a59] italic p-6 rounded-md border-l-4 border-pink-500 ">
              <span className="absolute top-4 right-8 text-white-200 text-9xl leading-none">
                ”
              </span>
              <p className="text-base p-9 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using lorem ipsum is that it has a more-or-less the
                majority have suffered alteration normal distribution.
              </p>
            </blockquote>

            <p>
              Early intervention refers to the systematic delivery of services
              and support to children with developmental delays or disabilities,
              ideally during the crucial early years of life, typically from
              birth to age three. This proactive approach aims to identify and
              address developmental concerns promptly, laying the foundation for
              a child&lsquo;s future growth and development.
            </p>

            <h2 className="text-2xl font-normal mt-6">
              The Significance of Early Intervention
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Optimal Brain Plasticity",
                  desc: "During the early years of life, a child’s brain exhibits remarkable plasticity, allowing it to adapt and rewire in response to learning and experiences. Early intervention capitalizes on this window of opportunity, maximizing a child’s potential for positive development.",
                },
                {
                  title: "Targeting Developmental Milestones",
                  desc: "Early intervention specialists are trained to identify developmental milestones and potential delays. By addressing these delays early, children are more likely to catch up and develop age-appropriate skills.",
                },
                {
                  title: "Improved Communication Skills",
                  desc: "For children with speech and language challenges, such as those with ASD, early intervention can be life-changing. Speech therapists can work with children to develop communication skills, including speech, language, and social communication abilities.",
                },
                {
                  title: "Enhanced Social and Emotional Development",
                  desc: "Early intervention also focuses on social and emotional development. For children with ASD, this support can lead to improved social interactions, emotional regulation, and a greater ability to connect with peers and caregivers.",
                },
                {
                  title: "Support for Families",
                  desc: "Early intervention doesn’t just benefit children; it also provides support and guidance for families. Parents and caregivers receive valuable resources and strategies to help their child’s development at home.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="min-w-[32px] mt-1">
                    <div className="bg-pink-300 rounded-full w-6 h-6 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-pink-950"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    <strong>{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-normal mt-6">
              The Role of The Speech Clinic Dubai in Early Intervention
            </h2>
            <p>
              At The Speech Clinic Dubai, we are committed to providing
              top-quality early intervention services to children with speech
              and language challenges. Our approach includes:
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Early Screening",
                  desc: "We offer early screenings and assessments to identify speech and language delays as early as possible.",
                },
                {
                  title: "Individualized Therapy Plans",
                  desc: "We create customized therapy plans based on each child’s unique needs and strengths, ensuring that therapy is tailored to their specific requirements.",
                },
                {
                  title: "Family-Centered Approach",
                  desc: "We understand the importance of family involvement in a child’s development. We work closely with parents and caregivers, providing them with strategies and tools to support their child’s communication and language skills at home.",
                },
                {
                  title: "Collaboration",
                  desc: "We collaborate with a multidisciplinary team of professionals, including speech therapists, occupational therapists, and behavioral specialists, to offer holistic support for children with ASD and other developmental challenges.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="min-w-[32px] mt-1">
                    <div className="bg-pink-300 rounded-full w-6 h-6 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-pink-950"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p>
                    <strong>{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-normal mt-6">Conclusion</h2>
            <p>
              Early intervention is a powerful tool that can transform the lives
              of children with developmental challenges, especially those with
              speech and language difficulties like ASD. By identifying concerns
              early and providing targeted support, we can help children achieve
              their full potential and lead fulfilling lives. At The Speech
              Clinic Dubai, we are dedicated to being a vital part of this
              journey, ensuring that every child has the opportunity to
              communicate effectively and thrive. If you suspect that your child
              may have speech or language delays, don’t hesitate to seek early
              intervention services. Together, we can make a lasting difference
              in your child’s future.
            </p>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-6">
          {/* Replicate content from the uploaded image */}
          <div className="border-2 border-pink-100 bg-pink-50 rounded-xl p-4 ">
            <h3 className="text-xl font-normal text-[#0a1e59] mb-2">
              Recent Posts
            </h3>
            <div className="w-6 h-[3px] bg-pink-500 rounded-full mb-4"></div>

            <div className="space-y-4">
              {/* Single Post Item */}
              {[
                {
                  date: "02 Nov, 2024",
                  title: "Developing A White-Labeled Messaging App",
                  img: "/image.jpg",
                },
                {
                  date: "14 Sep, 2024",
                  title: "How To Implement Real-Time Sync In Your App",
                  img: "/image.jpg",
                },
                {
                  date: "30 Mar, 2025",
                  title: "Why Most Apps Fail And How We Build To Win",
                  img: "/image.jpg",
                },
              ].map((post, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Image 
                  fill
                    src={post.img}
                    alt={post.title}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-pink-600 flex items-center gap-1 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {post.date}
                    </div>
                    <p className="text-sm text-gray-900 font-medium leading-tight line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2  border-pink-100  bg-pink-50 rounded-lg p-4 ">
          <h3 className="text-xl font-normal text-[#0a1e59] mb-2">
              Tags
            </h3>
            <div className="w-6 h-[3px] bg-pink-500 rounded-full mb-4"></div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-white text-sm px-2 py-1 rounded">
                Laravel
              </span>
              <span className="bg-white text-sm px-2 py-1 rounded">
                Web Optimization
              </span>
            </div>
          </div>

          {/* <div className="bg-[#2e3a59] text-white text-center p-6 rounded-lg">
            <p className="font-semibold mb-2">
              If You Need Any Help Contact Us
            </p>
            <button className="bg-[#5e7cf4] text-white px-4 py-2 rounded hover:bg-blue-600">
               +91-9633016479
            </button>
          </div> */}

          <div className="bg-pink-50 p-4 rounded-lg">
          <h3 className="text-xl font-normal text-[#0a1e59] mb-2">
          Brochure
            </h3>
            <div className="w-6 h-[3px] bg-pink-400 rounded-full mb-4"></div>
            <p className="text-sm mb-3">
              Download our brochure for more details about our services
            </p>
            <button className="w-full bg-white border px-4 py-2 rounded mb-2 hover:bg-gray-50 border-blue-50">
               PDF Download
            </button>
            <button className="w-full bg-white border px-4 py-2 rounded hover:bg-gray-50 border-pink-50">
               Image Download
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
