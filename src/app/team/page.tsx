import TeamCard from "../components/Teams/TeamCard";
import Footer from "../components/footer";
import NavBarSecond from "../components/NavBar/NavBarSecond";
import HalfWaveBackground from "../components/svgs/halfcarve";

const team = [
  {
    name: "Sana Shareef",
    role: "Founder and CEO",
    image: "/sana-shareef.jpg",
    bio: `Masters in Pediatric Speech & Language Therapy
Experience: 10 Years
Certified in: PROMPT, OPT LEVEL 3, DIR FLOOR TIME, Feeding Therapy, etc.`,
  },
  {
    name: "Soumya Zachariah",
    role: "Speech & Language Therapist",
    image: "/sana-shareef.jpg",
    bio: "Certified therapist with 5+ years experience in sensory speech therapy.",
  },
  {
    name: "Soumya Zachariah",
    role: "Speech & Language Therapist",
    image: "/sana-shareef.jpg",
    bio: "Certified therapist with 5+ years experience in sensory speech therapy.",
  },
  {
    name: "Soumya Zachariah",
    role: "Speech & Language Therapist",
    image: "/sana-shareef.jpg",
    bio: "Certified therapist with 5+ years experience in sensory speech therapy.",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
      <NavBarSecond/>
      </header>

         <HalfWaveBackground />

      <main className="pt-10">
        <div className="relative overflow-hidden py-32 my-6 text-center text-white">
          <div className="relative z-10 my-5">
            <h1 className="text-4xl md:text-5xl font-bold">Meet Our Experts</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
              Our dedicated team of certified professionals is here to support
              and guide your child&apos;s development journey.
            </p>
          </div>

          <h1 className="relative text-xl md:text-5xl font-bold py-6 my-5 inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[6px] after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-pink-500 after:opacity-80">
            Speech & Language Therapist
          </h1>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-40 relative -top-[150px] justify-items-center">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
