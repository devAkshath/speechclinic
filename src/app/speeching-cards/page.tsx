"use client";
import styles from "../speeching-cards/zoomParallax.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import {
  useTransform,
  useScroll,
  motion,
  MotionValue,
  useSpring,
} from "framer-motion";
import EnterpriseFeatures from "./FeartureCards";
import TypesCard from "./TypesOfCard";
import NavBarSecond from "../components/NavBar/NavBarSecond";

const images = [
  "/speechcard1.svg",
  "/speechcard2.svg",
  "/speechcard3.svg",
  "/speechcard4.svg",
  "/speechcard5.svg",
  "/speechcard6.svg",
  "/speechcard7.svg",
  "/speechcard8.svg",
  "/speechcard9.svg",
  "/speechcard10.svg",
  "/speechcard1.svg",
  "/speechcard1.svg",
];

export default function Home() {
  const OverlayCopy = ({ svgPath }: { svgPath: string }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const smoothY = useSpring(y, {
      damping: 50,
      stiffness: 200,
      mass: 0.5,
    });

    return (
      <motion.div
      ref={targetRef}
      style={{ y: smoothY }}
      className="absolute left-0 top-0 z-[9] flex h-screen w-full items-center justify-center pointer-events-none"
    >
      <div className="bg-white w-[650px] h-[200px] rounded-[40px] backdrop-blur-lg flex items-center justify-center overflow-hidden">
        <Image
          src={svgPath}
          alt="Speeching Cards Logo"
          className="w-[650px] h-[650px] object-fill"
          width={650}
          height={650}
          priority
        />
      </div>
    </motion.div>
    
    );
  };

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <header>
        <NavBarSecond />
      </header>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        {dimension.width > 768 ? (
          <>
            <OverlayCopy svgPath="/speechcardlogo.svg" />
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column images={[images[9], images[10], images[11]]} y={y4} />
            <Column images={[images[7], images[5], images[1]]} y={y3} />
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-[30vh]">
            <Image
              src="/speechcardlogo.svg"
              alt="Speeching Cards Logo"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        )}
      </div>

      <div className={styles.spacer}></div>

      <section className="w-full px-0 md:px-0 py-10 bg-white">
        <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-4">
          <h2 className="text-4xl md:text-6xl font-normal leading-tight md:max-w-[40%]">
            Interactive
            <br />
            Learning
            <br />
            Experience
          </h2>
          <div className="md:max-w-[50%]">
            <p className="text-lg text-black/80 mb-6">
              Welcome to our fun and exciting Flash Card Series! These cards are
              designed to make learning key concepts both fun and engaging.
              You’ll dive into exploring questions like “What?”, “Where?”,
              “When?”, and “Who?”, helping you build essential communication
              skills while thinking about the world around you. With our
              Sequencing Cards, you’ll master the order of events, and you’ll
              easily distinguish between Yes and No answers. Each card is
              thoughtfully created to make learning not only easier but also
              more enjoyable. Jump in and discover just how much you can learn!
              Our expertly crafted Speeching Cards are perfect for both
              clinicians and parents, offering a fun and effective way to
              improve communication skills. Whether you’re working on
              articulation, language development, or social communication, these
              flashcards cater to all age groups and therapy goals, ensuring a
              personalized and interactive learning experience.
            </p>
          </div>
        </div>
      </section>

      <EnterpriseFeatures />
      <TypesCard />

      <section className="bg-gradient-to-tr from-white to-pink-50 py-16 px-4 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-meduim mb-4 bg-gradient-to-tr from-[#54169C] to-[#DA159B] bg-clip-text text-transparent">
            Enhance Speech & Communication
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Speeching Cards is designed to make language learning interactive
            and enjoyable, improving communication skills through engaging
            activities.
          </p>
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white rounded-full shadow-lg hover:scale-105 transition font-light text-lg"
          >
            Contact Now
          </a>
        </div>
      </section>
    </main>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src: string, i: number) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={src} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
};
