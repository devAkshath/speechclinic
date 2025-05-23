import TeamCard from "@/app/components/Teams/TeamCard";
import NavBarSecond from "@/app/components/NavBar/NavBarSecond";
import HalfWaveBackground from "@/app/components/svgs/halfcarve";

const team = [
  {
    name: "Sana Shareef",
    role: "Founder and CEO",
    image: "/teams/sana-shareef.jpg",
    qualification: "Masters in Pediatric Speech & Language Therapy",
    experience: "10 Years",
    certifications: [
      "PROMPT",
      "OPT LEVEL 3",
      "Sensory Motor Apraxia of Speech",
      "DIR FLOOR TIME",
      "Feeding Therapy",
      "Assessor - ADOS 2",
      "Nuffield Dyspraxia Program",
      "Sensory Integration Level 2",
      "Certified Sensory Speech Therapist from Inside Out",
      "Trained in Gestalt Processing and Hanen Approach",
      "Therapeutic Listening & Movement Program"
    ],
  },
  {
    name: "Soumya Zachariah",
    role: "Speech & Language Therapist",
    image: "/teams/soumya-ann.jpg",
    qualification: "Master of Audiology & Speech-Language Pathology",
    experience: "10 Years",
    certifications: [
      "PROMPT",
      "OPT LEVEL 1 AND LEVEL 2",
      "DIR FLOORTIME",
      "GESTALT TRAINED",
      "THE LISTENING PROGRAM",
      "MAKATON LEVEL 1 AND 2",
      "KAUFMAN SPEECH TO LANGUAGE PRACTITIONERS",
      "DIPLOMA IN DYSLEXIA",
      "Feeding Therapy",
      "Sensory Motor Apraxia of Speech"
    ],
  },
  {
    name: "Riya Muhammed",
    role: "Speech & Language Therapist",
    image: "/teams/riya.jpg",
    qualification: "Master of Audiology & Speech-Language",
    experience: "Pathology Experience: 5 Years",
    certifications: ["Beckman oral motor intervention",
      'OPT LEVEL 2',
      'Trained in Gestalt processing'
    ],
  },
  {
    name: "Afshida C P",
    role: "Speech & Language Therapist",
    image: "/teams/afshida.jpg",
    qualification: "Bachelor in Pediatric Speech & Language Therapy",
    experience: "5+ Years",
    certifications: ["OPT LEVEL 2,",
      'NLA Level 1 Certification',
      'Trained In Gestalt Processing',
      'Oral placement therapy Level 2',
      'Treatment of childhood apraxia of speech',
      'Certification in sensory integration',
      'Natural Language Acquisition in Autism : Echolalia to self generated language Level 1',
      'Certified NLA trained clinician',
      'Certification in gestalt language processing',
      'Understanding sensory processing and integration in children'
    ],
  },
];


export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      {/* <HalfWaveBackground /> */}

      <main className="pt-10">
        <section className="relative bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32  py-6">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-meduim mb-4">Meet Our Experts</h2>
            <p className="text-lg font-light">
              Our dedicated team of certified professionals is here to support<br/>
              and guide your child&apos;s development journey.
            </p>
            <h1 className="relative text-xl md:text-5xl font-meduim py-5 my-3 inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[6px] after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-pink-500 after:opacity-80">
              Speech & Language Therapist
            </h1>
          </div>
          <HalfWaveBackground />
        </section>
    

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-40 relative -top-[150px] justify-items-center">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

      </main>
    </div>
  );
}
