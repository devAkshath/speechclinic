import NavBarSecond from '../components/NavBar/NavBarSecond';
import Image from 'next/image';
import Link from 'next/link';
const services = [
  {
    title: 'ABA Therapy',
    description: 'At our ABA Therapy department, we prioritize a child-friendl...',
    image: '/aba-therapy.svg',
    color: 'text-pink-500',
    link: '/services/aba-therapy',
  },
  {
    title: 'Feeding Therapy',
    description: 'At our Speech Clinic in Dubai, we understand that feeding di...',
    image: '/feeding-therapy.svg',
    color: 'text-purple-500',
    link: '/services/feeding-therapy',
  },
  {
    title: 'Group Therapy',
    description: 'Neuro Integrative Therapy program is focused on enhancing br...',
    image: '/group-therapy.svg',
    color: 'text-pink-500',
    link: "/services/group-therapy",
  },
  {
    title: 'Neuro Integrative Therapy',
    description: 'Neuro Integrative Therapy program is focused on enhancing br...',
    image: '/neuro-integrative-therapy.svg',
    color: 'text-purple-500',
    link: '/services/neuro-integrative-therapy',
  },
  {
    title: 'Occupational Therapy',
    description: 'Our Occupational Therapy department specializes in advanced...',
    image: '/occupational-therapy.svg',
    color: 'text-pink-500',
    link:"/services/OccupationalTherapy" ,
  },
  {
    title: 'Physical Therapy',
    description: 'Pediatric physiotherapy is dedicated to enhance the physical...',
    image: '/physical-therapy.svg',
    color: 'text-purple-500',
    link: "/services/physical-therapy",
  },
  {
    title: 'School Readiness Therapy',
    description: 'Our School Readiness Program is designed to prepare young ch...',
    image: '/school-readiness-program.svg',
    color: 'text-pink-500',
    link: "/services/school-readiness-program",
  },
  {
    title: 'Speech & Language Therapy',
    description: 'Our Speech Therapy department incorporates the latest advanc...',
    image: '/speech-and-language-therapy.svg',
    color: 'text-purple-500',
    link:"/services/speech-language-therapy" ,
  },
];

export default function AllServicesPage() {
  return (
    <div className="flex flex-col items-center">
      <header>
        <NavBarSecond />
      </header>
      <section className="w-full bg-white py-1">
        <div className="relative flex items-center justify-center h-100 bg-gray-100">
      {/* <div className="absolute flex gap-8">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image src="/neuro-integrative-therapy.svg" alt="Image 1" width={160} height={160} className="object-cover" />
        </div>
        <div className="w-60 h-60 rounded-full overflow-hidden bg-transparent">
          <Image src="/neuro-integrative-therapy.svg" alt="Image 2" width={240} height={240} className="object-cover" />
        </div>
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image src="/neuro-integrative-therapy.svg" alt="Image 3" width={160} height={160} className="object-cover" />
        </div>
      </div> */}
      <div className="text-center text-white">
        <h1 className={`text-6xl font-medium text-black` }>Services</h1>
      </div>
    </div>
      </section>
      <main className="p-4 max-w-[1300px] items-center flex ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
              <Image src={service.image} alt={service.title} width={800} height={500} className="w-full h-65 object-cover" />
              <div className="p-4">
                <h3 className={`text-xl font-medium ${service.color}`}>{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link href={service.link} legacyBehavior>
                  <a className="text-blue-600 hover:underline mt-4 block">Read More &gt;</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

