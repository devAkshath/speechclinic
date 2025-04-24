import MasonryGrid from "../Features/mansoryimages";
import Image from "next/image";

export default function TherapyPromo() {
  return (
    <div className="bg-transparent text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:py-18">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Heading Section */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-normal text-gray-700 mb-2">
                Nurturing Communication,
              </h2>
              <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
                Confidence & Growth
              </h2>
            </div>

            {/* Features Section */}
            <div className="grid gap-8 sm:px-4 md:px-0 lg:px-0 px-4 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start gap-4 text-left sm:shadow-lg md:shadow-none lg:shadow-none shadow-lg border-2 border-pink-400 rounded-[20px] md:border-0 md:rounded-[30%] p-4 md:p-0"
                >
                  {/* Icon Section */}
                  <div className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] p-4 rounded-[30%] flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[130px] md:h-[75px]">
                    <Image
                      width={800}
                      height={500}
                      src={feature.iconPath}
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium text-gray-700 mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Masonry Grid */}
          <div>
            <MasonryGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Holistic Support",
    description:
      "We provide integrated therapies, combining speech, physical, occupational, and ABA programs under one roof for complete care.",
    iconPath: "/promo1.svg",
  },
  {
    title: "Cutting-Edge Care",
    description:
      "Our approach includes modern techniques such as Gestalt processing, sensory integration, and motor-based speech interventions.",
    iconPath: "/promo2.svg",
  },
  {
    title: "Tailored Solutions",
    description:
      "We craft personalized plans, ensuring every child gets targeted strategies that foster progress at their own pace.",
    iconPath: "/promo3.svg",
  },
  {
    title: "Engaging Setting",
    description:
      "Our vibrant space encourages confidence, learning, and social interaction, making therapy both effective and enjoyable.",
    iconPath: "/promo4.svg",
  },
];
