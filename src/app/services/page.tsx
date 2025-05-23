import NavBarSecond from "../components/NavBar/NavBarSecond";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "../components/Services/ServiceHeroVideo";

const services = [
  {
    title: "Occupational Therapy",
    description:
      "Our Occupational Therapy department specializes in advanced...",
    image: "/occupational-therapy.svg",
    color: "text-pink-500",
    link: "/services/occupational-therapy",
  },
  {
    title: "Speech & Language Therapy",
    description:
      "Our Speech Therapy department incorporates the latest advanc...",
    image: "/speech-and-language-therapy.svg",
    color: "text-purple-500",
    link: "/services/speech-language-therapy",
  },
  {
    title: "Physical Therapy",
    description:
      "Pediatric physiotherapy is dedicated to enhance the physical...",
    image: "/physical-therapy.svg",
    color: "text-purple-500",
    link: "/services/physical-therapy",
  },
  {
    title: "ABA Therapy",
    description:
      "At our ABA Therapy department, we prioritize a child-friendl...",
    image: "/aba-therapy.svg",
    color: "text-pink-500",
    link: "/services/aba-therapy",
  },
  {
    title: "School Readiness Program",
    description:
      "Our School Readiness Program is designed to prepare young ch...",
    image: "/school-readiness-program.svg",
    color: "text-pink-500",
    link: "/services/school-readiness-program",
  },
  {
    title: "Feeding Therapy",
    description:
      "At our Speech Clinic in Dubai, we understand that feeding di...",
    image: "/feeding-therapy.svg",
    color: "text-purple-500",
    link: "/services/feeding-therapy",
  },
  {
    title: "Group Therapy",
    description:
      "Neuro Integrative Therapy program is focused on enhancing br...",
    image: "/group-therapy.svg",
    color: "text-pink-500",
    link: "/services/group-therapy",
  },
  {
    title: "Neuro Integrative Therapy",
    description:
      "Neuro Integrative Therapy program is focused on enhancing br...",
    image: "/neuro-integrative-therapy.svg",
    color: "text-purple-500",
    link: "/services/neuro-integrative-therapy",
  },
];

export default function AllServicesPage() {
  return (
    <div className="flex flex-col items-center">
      <header>
        <NavBarSecond />
      </header>
      <section className="w-full bg-white py-1">
        <div className="relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[600px] overflow-hidden">
          {/* Gradient background positioned absolutely */}
          <div className="absolute inset-0 z-0 mt-10"></div>

          {/* Centered heading text */}
          <HeroVideo
            title="Services"
            videoUrl="https://speechclinic.b-cdn.net/website/videos/department%20video/ALL%20DEPARTMENTS%20COMBINED.mp4"
          />
        </div>
      </section>
      <main className="p-4 pt-14 max-w-[1300px] items-center flex">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {services.map((service, index) => (
            <Link href={service.link} legacyBehavior key={index}>
              <a className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={500}
                  className="w-full h-65 object-cover"
                />
                <div className="p-4">
                  <h3 className={`text-xl font-medium ${service.color}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <span className="text-blue-600 hover:underline mt-4 block">
                    Read More &gt;
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
