import React from 'react';
import Image from "next/image";


const progressItems = [
  { label: 'Speech Therapy Proficiency', value: 95 },
  { label: 'Customized Treatment Plans', value: 90 },
  { label: 'Engaging & Supportive Approach', value: 85 },
];

const Expertise = () => {
  return (
    <div className="flex items-center justify-center bg-transparent px-4 lg:py-22">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-7xl w-full px-6 py-12">

        {/* Left Column */}
        <div className="space-y-6">
          {/* Row 1: Label */}
          <div className="inline-flex items-center justify-start mb-3">
            <Image
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2"
              width={800} height={500}
            />
            <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
              Our Expertise
            </div>
          </div>

          {/* Row 2: Heading */}
          <h2 className="text-3xl font-semibold text-gray-700 leading-snug">
            Empowering Speech &<br />
            Communication for a Better Future
          </h2>

          {/* Row 3: Description */}
          <p className="text-sm text-gray-500">
            Our speech therapy services are designed to enhance communication skills
            with personalized strategies. We help individuals improve speech clarity,
            comprehension, and confidence through proven techniques.
          </p>

          {/* Row 4: Progress Bars */}
          <div className="space-y-4">
            {progressItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  <span className="text-sm text-gray-700 font-medium">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-700 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 5: Button */}
          <button className="bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-blue-600 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/expertise.jpg"
            alt="Expertise"
            width={800} height={500}
            className="w-full max-w-md h-[490px] rounded-[30px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
