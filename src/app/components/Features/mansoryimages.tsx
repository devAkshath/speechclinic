"use client";

import Image from "next/image";

const images = [
  { src: "/3.jpg", alt: "Kids Playing in Ball Pit" },
  { src: "/Untitled desig2n.jpg", alt: "Happy Child" },
  { src: "/Untitled design3.png", alt: "Physical Therapy Session" },
];

const MasonryGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-2 md:gap-6 md:p-6">
      {/* Full-width Ball Pit Image */}
      <div className="col-span-2 rounded-[40px] overflow-hidden">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={1000}
          height={500}
          priority={false}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[200px] rounded-[40px]"
        />
      </div>

      {/* First Column */}
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Smiling Boy Image */}
        <div className="rounded-[40px] overflow-hidden">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            width={700}
            height={500}
            className="object-cover w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] rounded-[40px]"
          />
        </div>
      </div>

      {/* Second Column */}
      <div className="rounded-[30px] overflow-hidden">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          width={500}
          height={400}
          className="object-cover w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] rounded-[30px]"
        />
      </div>
      <div className="col-span-2 rounded-[40px] overflow-hidden">
        {/* Experience Box */}
        <div className="bg-gradient-to-bl from-[#DA159B] to-[#54169C] text-white px-4 py-3 rounded-[30px] shadow-lg flex items-center justify-center m-auto ">
          <span className="text-3xl md:text-4xl font-bold">3+ </span>
          <span className="ml-2 text-base md:text-lg">Years of Experience</span>
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
