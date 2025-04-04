import MasonryGrid from "../Features/mansoryimages";

export default function TherapyPromo() {
  return (
    <div className="bg-white text-gray-800 p-8 md:p-60">
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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex sm:flex-col md:flex-row items-start gap-4 text-left">
                {/* Icon Section */}
                <div className="bg-gradient-to-tr from-[#54169C] to-[#DA159B] p-4 rounded-[30%] flex items-center justify-center w-20 h-20">
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                {/* Text Section */}
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-light">{feature.description}</p>
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
  );
}

const features = [
  {
    title: "Holistic Support",
    description:
      "We provide integrated therapies, combining speech, physical, occupational, and ABA programs under one roof for complete care.",
    icon: "📌",
  },
  {
    title: "Cutting-Edge Care",
    description:
      "Our approach includes modern techniques such as Gestalt processing, sensory integration, and motor-based speech interventions.",
    icon: "⚙️",
  },
  {
    title: "Tailored Solutions",
    description:
      "We craft personalized plans, ensuring every child gets targeted strategies that foster progress at their own pace.",
    icon: "🎯",
  },
  {
    title: "Engaging Setting",
    description:
      "Our vibrant space encourages confidence, learning, and social interaction, making therapy both effective and enjoyable.",
    icon: "🌟",
  },
];
