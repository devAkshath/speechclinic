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
  <div className="relative flex items-center justify-center h-[500px] overflow-hidden">
    {/* Gradient background positioned absolutely */}
    <div className="absolute inset-0 z-0 mt-10">
 {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8452 994"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id="event-gradient"
          gradientUnits="userSpaceOnUse"
          x1="4340.02"
          y1="3242.75"
          x2="5111.95"
          y2="891.039"
        >
          <stop offset="0" stopColor="#54169C" />
          <stop offset="1" stopColor="#DA159B" />
        </linearGradient>
      </defs>
      <path
        fill="url(#event-gradient)"
        d="M538 1l8559 479c294,17 378,142 350,413l-228 2214c-21,203 -162,334 -363,351l-7925 669c-258,21 -451,11 -493,-305l-432 -3309c-49,-376 222,-529 532,-512zm-25 207c-210,-16 -345,87 -319,313l386 3314c21,178 128,223 290,209l8008 -690c111,-10 192,-75 205,-185l276 -2317c20,-163 -40,-264 -202,-271l-8644 -373z"
      />
      <g transform="translate(1000,3400) scale(3)">
        <path
          d="M299 111c61,43 75,127 32,188 -43,61 -127,75 -187,32 -61,-43 -76,-127 -33,-187 43,-61 127,-76 188,-33z"
          fill="none"
          stroke="#FF1CB7"
          strokeWidth="52.496"
          strokeOpacity="0.49"
        />
        <path
          d="M313 419c-71,33 -154,25 -217,-20 -99,-69 -122,-205 -53,-303 69,-99 205,-122 304,-53 47,33 79,84 89,141"
          fill="none"
          stroke="#BF87FF"
          strokeWidth="6.56154"
          strokeOpacity="0.49"
        />
      </g>
      <g transform="translate(8620,100) scale(3)">
        <path
          d="M94 19c42,0 75,34 75,75 0,42 -33,75 -75,75 -41,0 -75,-33 -75,-75 0,-41 34,-75 75,-75z"
          fill="none"
          stroke="#FF1CB7"
          strokeWidth="62.496"
          strokeOpacity="0.49"
        />
     
      </g>
    </svg> */}
    </div>

    {/* Centered heading text */}
    <div className="z-10 text-center">
      <h1 className="text-8xl font-medium text-black">Services</h1>
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

