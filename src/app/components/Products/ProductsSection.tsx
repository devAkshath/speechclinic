import Image from "next/image";

export default function Products() {
  return (
    <section className="w-full px-6 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <Image
            src="/speechsyncipad.png"
            alt="Speech Sync iPad"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Right Column: Content */}
        <div className="space-y-4">
          {/* Row 1: Badge */}
          <div className="inline-flex items-center justify-start mb-3">
            <img
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2"
            />
            <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Our Products
            </div>
          </div>

          {/* Row 2: Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 leading-snug">
            Breaking Barriers in
            <br />
            Communication
          </h2>

          {/* Row 3: Description */}
          <p className="text-sm text-gray-500">
            Empowering communication with advanced speech therapy tools. Our
            products are designed to support children with autism and speech
            impairments, providing engaging and effective solutions for language
            development.
          </p>

          {/* Row 4: Button */}
          <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
            Discover More
          </button>
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center px-55">
        <div className="w-full  h-[190px] rounded-[40px] overflow-hidden relative flex">
          {/* Left Section */}
          <div className="w-1/3 bg-[#4A3B51] flex items-center justify-center text-white text-2xl font-medium text-center p-4 z-10">
            <div>
              Future
              <br />
              Events
              <br />
              Ahead
            </div>
          </div>

          {/* Right Section with Gradient and Slant */}
          <div className="w-2/3 relative flex items-center justify-center px-6">
            {/* Background Gradient with Slant */}
            <div className="absolute top-0 left-[-100px] w-[200%] h-full bg-gradient-to-tr from-[#512C96] to-[#EC008C] transform -skew-x-12 z-0 opacity-100%"></div>

            {/* Text Content */}
            <div className="relative z-10 text-white text-left pl-6">
              <p className="text-4xl font-light">Be Part of Our Upcoming</p>
              <p className="text-4xl font-bold mt-1">
                Events and Make an Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
