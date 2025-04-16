import MasonryGrid from "../components/Features/mansoryimages";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      {/* SVG background at top */}
      <HalfWaveBackground />

      {/* Main content starts AFTER SVG */}
      <div className="pt-29">
        <div className="relative overflow-hidden px-6 text-center text-white bg-transparent">
          <div className="relative z-10 py-10">
            <h1 className="text-4xl md:text-5xl my-9 lg:my-0 font-bold">ABOUT</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
              Our speech clinic provides personalized therapy services designed to enhance communication skills and empower individuals of all ages to reach their fullest potential.
            </p>
          </div>

          {/* This section comes AFTER the SVG visually */}
          <section className="flex flex-col lg:flex-row items-center justify-center gap-10 my-0 lg:my-18 text-black py-10 px-4 rounded-xl">
  {/* Left: MasonryGrid */}
  <div className="max-w-xl">
    <MasonryGrid />
  </div>

  {/* Right: Mission & Vision */}
  <div className="max-w-xl text-center lg:text-left">
    <div className="inline-flex items-center justify-center mb-4">
      <Image
        src="/verified.png"
        alt="Verified Icon"
        className="w-8 h-8 mr-1"
        width={800}
        height={500}
      />
      <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
        About
      </div>
    </div>

    <h2 className="text-5xl font-bold text-gray-800 mb-4">
      Our Mission And{" "}
      <span className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
        Vision
      </span>
    </h2>

    <p className="text-lg text-gray-600">
      At The Speech Clinic Dubai, we are dedicated to providing comprehensive therapy services tailored to meet the unique needs of individuals of all ages...
    </p>

    {/* Boxes */}
    <div className="flex flex-wrap gap-4 my-5 justify-center lg:justify-start">
      {/* Box 1 */}
      <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-1 px-4">
        <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
          <Image
            src="/team.svg"
            alt="Clients"
            className="w-8 h-8 text-white"
            width={32}
            height={32}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-pink-600">Expert Therapists</h2>
          <p className="text-black">
            Our team is dedicated to providing excellent care to each client we treat.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="flex flex-1 flex-row min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl py-1 px-4">
        <div className="bg-[#da159b] w-14 h-14 rounded-full flex items-center justify-center mr-4">
          <Image
            src="/peopleicon.svg"
            alt="Clients"
            className="w-8 h-8"
            width={32}
            height={32}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-pink-600">Client-Focused Care</h2>
          <p className="text-black">
            We tailor our treatment approaches to meet each individual's unique needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
      </div>
    </div>
  );
}
