"use client";

import Image from "next/image";
import Link from "next/link";
import './servicecard.module.css';

export default function ServiceCard({
  imageSrc,
  title,
  href,
}: {
  imageSrc: string;
  title: string;
  href: string;
}) {
  return (
    <Link href={href} className="cursor-pointer">
      <div className="relative w-[290px] lg:w-[290px] sm:w-[290px]  md:w-[180px] md:h-[220px] lg:h-[340px] sm:h-[340px] h-[340px] bg-white rounded-[20px] overflow-hidden group border border-transparent hover:border-pink-300 hover:shadow-md transition-all duration-300">
        {/* Top Section */}
        <div className="relative h-[75%] bg-white rounded-t-[20px] overflow-hidden transition-all duration-300 group-hover:h-[65%] p-0">
          <Image src={imageSrc} alt={title} fill className="object-cover rounded-t-[20px]" />
        </div>
        <div className="p-0.5"></div>

        {/* Bottom Section */}
        <div className="relative bg-gradient-to-br from-[#54169C] to-[#DA159B] h-[55%] rounded-t-[20px] transition-all duration-300 group-hover:h-[65%] p-0 backdrop-blur-3xl">

          {/* Card Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-white pb-[10%] h-full">
            <span className="font-extralight text-white lg:text-[18px] text-[18px] md:text-[13px] text-center">{title}</span>
            {/* <p className="text-[14px] mt-2 text-center">Your subtitle</p> */}

            <button className="mt-[15%] text-white border-2 border-white rounded-[15px] px-4 py-1 text-[13px] bg-transparent hover:bg-white hover:text-black transition-all duration-400">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
