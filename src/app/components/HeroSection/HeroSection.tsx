import WaveBackground from "../herocurve/wave";
import CurveLine from "../herocurve/curveline";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4">
      {/* Background Waves - Hidden on Small Screens */}
      <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
        <WaveBackground />
        <CurveLine />
      </div>
      <div className="absolute top-10 left-0 w-full h-4/4 hidden sm:block">
        <WaveBackground />
        {/* <CurveLine /> */}
      </div>
      <div className="absolute top-10 left-0 w-full h-4/4 block sm:hidden z-10">
        {/* <WaveBackground />   */}
        <CurveLine />
      </div>

      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center w-full max-w-7xl px-6 py-16">
        {/* Left Column */}
        <div className="flex-1 text-center sm:text-left text-gray-900 pt-8 mb-2 sm:pt-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4  sm:mt-16 text-gray-700 sm:text-white">
            Innovative Leaders In <br /> Paediatric Therapy
          </h1>

          {/* Image for Small Screens */}
          <div className="w-full sm:hidden mb-6">
            <Image
              width={800}
              height={500}
              src="/image.jpg"
              alt="Therapy Image"
              className="w-full h-auto object-cover rounded-[30px] shadow-md"
            />
          </div>

          <p className="text-base sm:text-lg font-light mb-6 sm:mb-7 font-sans text-justify sm:text-left text-gray-800 sm:text-white">
            At The Speech Clinic, we provide specialized therapy
            <span className="hidden sm:inline">
              <br /> designed to improve speech and communication skills,
              <br /> tailored to children with autism.
            </span>
            <span className="sm:hidden">
              designed to improve speech and communication skills, tailored to
              children with autism.
            </span>
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
              About Us
            </button>
            <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-red-600 transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Image for Large Screens */}
        <div className="flex-1 hidden sm:block px-0 mb-8 sm:mb-0">
          <Image
            width={800}
            height={500}
            src="/image.jpg"
            alt="Therapy Image"
            className="w-full h-auto object-cover rounded-[50px] shadow-md"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-transparent bg-opacity-20"></div>
    </main>
  );
}
