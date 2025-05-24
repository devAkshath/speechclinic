import ProjectCard from "../gallerycard"; 

export default function TeamServicesSection() {
  return (
    <main className="flex flex-col items-center w-full py-10 ">
      <div className="flex flex-col items-center gap-y-6">
        <ProjectCard
          project={{
            title1: "Occupational",
            title2: "Therapists",
            src: "/occupational-therapy.svg",
            link: "/gallery/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/Occupational%20Therapies/FINE%20MOTOR%20SKILLS%20OT.mp4",
          }}
        />
        <ProjectCard
          project={{
            title1: "Physical",
            title2: "Therapists",
            src: "/speech-and-language-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/Physio%20Therapies/DYNAMIC%20BALANCE%20TRAINING.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "ABA",
            title2: "Therapists",
            src: "/physical-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/ABA%20Therapies/Listener%20response%20Adjective.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "Group",
            title2: "Therapists",
            src: "/aba-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/COMBINED%20VIDEOS/PROMPT%20COMBINED.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "Feeding",
            title2: "Therapists",
            src: "/feeding-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/Speech%20Therapies/feeding%20therapy.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "School Readiness",
            title2: "Program",
            src: "/school-readiness-program.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/COMBINED%20VIDEOS/SENSORY%20INTEGRATION%20combined.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "Speech & Language",
            title2: "Therapists",
            src: "/speech-and-language-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/Speech%20Therapies/ARTICULATION%20THERAPY.mp4",

          }}
        />
        <ProjectCard
          project={{
            title1: "Neuro Integrative",
            title2: "Therapists",
            src: "/group-therapy.svg",
            link: "/teams/aba-therapists",
             videoUrl:"https://media.thespeechclinic.ae/website/videos/Neuro%20Integrative%20Therapy/NEURO%20INTEGRATIVE%20THERAPY.mp4",

          }}
        />
      </div>
    </main>
  );
}
