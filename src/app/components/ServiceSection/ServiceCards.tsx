"use client";

import Image from "next/image";
import Link from "next/link";

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
    <Link href={href}>
      <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-64 md:h-66 lg:h-64 w-74 sm:w-64 rounded-[40px] duration-700 hover:duration-700 bg-transparent">
        {/* Background Image */}
        <Image src={imageSrc} alt="Card Image" fill className="object-fill" />

        {/* Hover Info Section */}
        <div className="absolute bg-white-50 bottom-0.5 sm:bottom-1.0  w-64 sm:w-64 p-3.5 h-18 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500 shadow-white backdrop-blur-xl  rounded-[20px]">
          <span className="text-gray-800 font-semibold text-md mb-8 whitespace-pre-line">
            {title}
          </span>
          <p className="text-neutral-800 text-sm "></p>
        </div>
      </div>
    </Link>
  );
}


