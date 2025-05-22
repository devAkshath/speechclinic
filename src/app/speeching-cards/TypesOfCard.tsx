"use client";

import Image from "next/image";

const cards = [
  { label: "What questions", image: "/speechcard1.svg", },
  { label: "Where questions", image:  "/speechcard2.svg",},
  { label: "When questions", image:  "/speechcard3.svg",},
  { label: "Who questions", image:  "/speechcard4.svg", },
  { label: "Yes/No concepts", image: "/speechcard5.svg",},
  {
    label: "Three Step- Four Step and Five Step Sequencing Concept",
    image:  "/speechcard10.svg",
  },
];

export default function TypesCard() {
  return (
    <div className="py-10 px-4">
         <section className="w-full px-0 md:px-0 py-4 bg-white">
      <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 ">
          {/* Left Column: Heading */}
          <h2 className="text-4xl md:text-6xl font-normal leading-tight md:max-w-[40%]">
          Speeching Card 
          <br/>Series
          </h2>

          {/* Right Column: Description + Button */}
          <div className="md:max-w-[50%]">
            <p className="text-lg   text-black/80 mb-6">
            To help your child think and talk about the world, we exclusively provide our Speeching Card Series on the concepts:
            </p>
          
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:max-w-[1750px] mx-auto  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl  overflow-hidden flex flex-col items-center p-4 text-center transition-transform hover:scale-95"
          >
            <div className="w-full h-120 relative mb-4   rounded-[30px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.label}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-gray-700 text-2xl font-normal">{card.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
