"use client";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

interface ProjectProps {
  project: {
    title1: string;
    title2: string;
    src: string;
    link: string;
    videoUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isActive, setIsActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { title1, title2, src, link, videoUrl } = project;

  // Skip first 10 seconds of video
  useEffect(() => {
    const video = videoRef.current;

    const handleLoaded = () => {
      if (video) {
        video.currentTime = 10;
      }
    };

    if (video) {
      video.addEventListener("loadedmetadata", handleLoaded);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoaded);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={styles.project}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
        src={videoUrl}
      />
  {/* Foreground content */}
  <Link href={link} passHref>
    <p className="text-transparent bg-clip-text bg-white">
      {title1}
    </p>
  </Link>
  <Link href={link} passHref>
    <motion.div
      variants={anim}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className={styles.imgContainer}
    >
      <Image width={500} height={500} src={`${src}`} alt={title1} />
    </motion.div>
  </Link>
  <Link href={link} passHref>
    <p className="text-transparent bg-clip-text bg-white">
      {title2}
    </p>
  </Link>
</div>

  );
}
