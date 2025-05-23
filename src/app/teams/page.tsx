import NavBarSecond from "../components/NavBar/NavBarSecond";
import ProjectCard from "./teamservices";

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
  return (
    <div className="flex flex-col items-center">
      <header>
        <NavBarSecond />
      </header>
   <section className="w-full bg-white py-16 flex items-center justify-center">
  <h1 className="text-6xl font-medium text-gray-800 text-center">Our Team</h1>
</section>

      <main className="flex flex-col items-center w-full py-10">
        <div className="flex flex-col items-center gap-y-6">
          <ProjectCard
            project={{
              title1: "Occupational",
              title2: "Therapists",
              src: "/occupational-therapy.svg",
                    link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "Physical",
              title2: "Therapists",
              src: "/speech-and-language-therapy.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "ABA",
              title2: "Therapists",
              src: "/physical-therapy.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "Group",
              title2: "Therapists",
              src: "/aba-therapy.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "Feeding",
              title2: "Therapists",
              src: "/feeding-therapy.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "School Readiness",
              title2: "Program",
              src: "/school-readiness-program.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "Speech & Language",
              title2: "Therapists",
              src: "/speech-and-language-therapy.svg",
                   link: '/teams/aba-therapists'
            }}
          />
          <ProjectCard
            project={{
              title1: "Neuro Integrative",
              title2: "Therapists",
              src: "/group-therapy.svg",
                 link: '/teams/aba-therapists'
            }}
          />
        </div>
      </main>
    </div>
  );
}
