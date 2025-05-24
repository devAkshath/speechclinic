'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  project: {
    title: string;
    src: string;
    link: string;
  };
}

const TeamsCard = ({ project }: ProjectProps) => {
  const [isActive, setIsActive] = useState(false);
  const { title: title, src, link } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group h-full"
    >
      <Link href={link} className="block h-full">
        <motion.div
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:border-purple-200/50 relative h-full flex flex-col"
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Background gradient effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 0.05 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500"
          />

          <div className="flex flex-col items-center text-center relative z-10 flex-grow">
            {/* Image container with hover effect */}
            <motion.div
              variants={{
                initial: { scale: 1, rotate: 0 },
                hover: { scale: 1.1, rotate: 5 }
              }}
              initial="initial"
              animate={isActive ? "hover" : "initial"}
              transition={{ duration: 0.3 }}
              className="relative w-32 h-32 mb-6"
            >
              <Image
                src={src}
                alt={`${title} Therapists`}
                fill
                className="object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Title with gradient effect */}
            <motion.h3
              className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
              animate={{
                backgroundPosition: isActive ? "100% 0%" : "0% 0%"
              }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>

            {/* Subtitle with color transition */}
            <motion.p
              className="text-lg font-medium mb-4"
              animate={{
                color: isActive ? "#DA159B" : "#54169C"
              }}
              transition={{ duration: 0.3 }}
            >
              Therapists
            </motion.p>

            {/* Animated underline */}
            <motion.div
              initial={{ width: "100%", opacity: 1 }}
              animate={{
                width: "100%",
                opacity: 1
              }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-[#DA159B] to-[#54169C] mt-auto"
            />

            {/* Hover indicator */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-md font-medium bg-gradient-to-r from-[#DA159B] to-[#54169C] bg-clip-text text-transparent"
            >
              View Team →
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default TeamsCard;

