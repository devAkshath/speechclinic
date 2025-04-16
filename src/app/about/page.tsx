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

      <HalfWaveBackground />

      <div className="pt-10">
        <div className="relative overflow-hidden py-32 my-6 px-6 text-center text-white bg-transparent">
          <div className="relative z-10 my-6 py-3">
            <h1 className="text-4xl md:text-5xl font-bold">ABOUT</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
              Our speech clinic provides personalized therapy services designed to enhance communication skills and empower individuals of all ages to reach their fullest potential.
            </p>
          </div>

          <div className="bg-transparent p-6 rounded-xl  ">
            <section className="flex flex-col md:flex-row items-center justify-center gap-10   ">
              {/* Left: 3 College Images */}
              <div className="grid grid-cols-1 gap-6 md:gap-4">
                <div className="max-w-xl ">
                  <MasonryGrid />
                </div>
              </div>

              {/* Right: Heading + Description */}
              <div className="max-w-xl text-center md:text-left  ">
                <div className="inline-flex items-center justify-center ">
                  <Image
                    src="/verified.png"
                    alt="Verified Icon"
                    className="w-8 h-8 mr-1"
                    width={800}
                    height={500}
                  />
                  <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl ">
                    About
                  </div>
                </div>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  Our Mission And{' '}
                  <span
                    className="text-5xl md:text-5xl font-semibold bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent"
                  >
                    Vision
                  </span>

                </h2>
                <p className="text-lg text-gray-600">
                  At The Speech Clinic Dubai, we are dedicated to providing comprehensive therapy services tailored to meet the unique needs of individuals of all ages. With a holistic approach that integrates speech therapy, physiotherapy, occupational therapy, ABA therapy, and school readiness programs, we focus on empowering our clients to achieve their fullest potential.
                </p>

                <div className="flex flex-wrap gap-4 my-5 justify-center md:justify-start">

                  {/* box 1 */}

                  <div className="flex flex-1 md:w-1/3 flex-row items-center justify-center min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl px-6 py-6 text-center">
                    <div className="bg-white p-2 rounded-2xl mb-0">
                      <Image
                        src="/peopleicon.svg"
                        alt="Clients"
                        className="w-15 h-15"
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className=" font-bold text-pink-600 flex-1">
                      <h4>Expert Therapists</h4>
                      <div className=" font-bold ">
                      <p className="text-amber-300">uibuigiuhio</p>
                      </div>
                   
                    </div>
                    
                  </div>

                  {/* box 2 */}

                  <div className="flex flex-1 md:w-1/3 flex-row items-center justify-center min-w-[250px] max-w-sm border-2 border-pink-400 rounded-3xl px-6 py-6 text-center">
                    <div className="bg-white p-2 rounded-2xl mb-0">
                      <Image
                        src="/peopleicon.svg"
                        alt="Clients"
                        className="w-15 h-15"
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-pink-600 flex items-center gap-1">
                      7320{" "}
                      <span className="text-2xl md:text-3xl text-gray-600 font-normal">
                        + Clients
                      </span>
                    </div>
                  </div>


                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </div >
  );
}