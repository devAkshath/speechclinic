"use client";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import Intro from "./components/hero";
import TeamServicesSection from "./components/section/gallerycards";
import Lenis from "lenis";
import { useEffect } from "react";

// const services = [
//   {
//     title: "Occupational Therapy",
//     description:
//       "Our Occupational Therapy department specializes in advanced...",
//     image: "/occupational-therapy.svg",
//     color: "text-pink-500",
//     link: "/services/occupational-therapy",
//   },
//   {
//     title: "Speech & Language Therapy",
//     description:
//       "Our Speech Therapy department incorporates the latest advanc...",
//     image: "/speech-and-language-therapy.svg",
//     color: "text-purple-500",
//     link: "/services/speech-language-therapy",
//   },
//   {
//     title: "Physical Therapy",
//     description:
//       "Pediatric physiotherapy is dedicated to enhance the physical...",
//     image: "/physical-therapy.svg",
//     color: "text-purple-500",
//     link: "/services/physical-therapy",
//   },
//   {
//     title: "ABA Therapy",
//     description:
//       "At our ABA Therapy department, we prioritize a child-friendl...",
//     image: "/aba-therapy.svg",
//     color: "text-pink-500",
//     link: "/services/aba-therapy",
//   },
//   {
//     title: "School Readiness Program",
//     description:
//       "Our School Readiness Program is designed to prepare young ch...",
//     image: "/school-readiness-program.svg",
//     color: "text-pink-500",
//     link: "/services/school-readiness-program",
//   },
//   {
//     title: "Feeding Therapy",
//     description:
//       "At our Speech Clinic in Dubai, we understand that feeding di...",
//     image: "/feeding-therapy.svg",
//     color: "text-purple-500",
//     link: "/services/feeding-therapy",
//   },
//   {
//     title: "Group Therapy",
//     description:
//       "Neuro Integrative Therapy program is focused on enhancing br...",
//     image: "/group-therapy.svg",
//     color: "text-pink-500",
//     link: "/services/group-therapy",
//   },
//   {
//     title: "Neuro Integrative Therapy",
//     description:
//       "Neuro Integrative Therapy program is focused on enhancing br...",
//     image: "/neuro-integrative-therapy.svg",
//     color: "text-purple-500",
//     link: "/services/neuro-integrative-therapy",
//   },
// ];

export default function AllServicesPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <header>
        <NavBarSecond />
      </header>
      <section className="w-full bg-white py-0 flex items-center justify-center">
        <Intro />
      </section>
      <div className="flex justify-center px-4 md:px-8 my-20 md:my-40">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[2.2vw] text-center max-w-8xl leading-snug">
          Explore moments from therapy sessions, interactive activities, and
          progress milestones at The Speech Clinic. Our gallery showcases the
          engaging environment we create for children and adults through speech,
          occupational, and developmental therapies. From individual sessions to
          group interactions and specialized equipment in action, see how we
          bring communication and confidence to life.
        </p>
      </div>

      <TeamServicesSection />
    </div>
  );
}
