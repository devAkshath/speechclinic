"use client";

import Image from "next/image";

export default function ServiceCard({
  imageSrc,
  title,
}: {
  imageSrc: string;
  title: string;
}) {
  return (
    <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-60 w-64 sm:w-64 rounded-[40px] duration-700 hover:duration-700 bg-transparent">
      {/* Background Image */}
      <Image src={imageSrc} alt="Card Image" fill className="object-fill" />

      {/* Hover Info Section */}
      <div className="absolute bg-white-50 -bottom-3 w-64 sm:w-64 p-3 h-20 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500 shadow-white backdrop-blur-xl  rounded-[20px]">
        <span className="text-gray-800 font-semibold text-md mb-8 whitespace-pre-line">
          {title}
        </span>
        <p className="text-neutral-800 text-sm "></p>
      </div>
    </div>
  );
}
