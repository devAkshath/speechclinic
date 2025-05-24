import TeamCard from "@/app/components/Teams/TeamCard";
import NavBarSecond from "@/app/components/NavBar/NavBarSecond";
import HalfWaveBackground from "@/app/components/svgs/halfcarve";
import { teamMembers } from "@/app/data/teamMembers";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filteredTeam = teamMembers.filter((member) => member.category === slug);

  const getCategoryTitle = (slug: string) => {
    const titles: { [key: string]: string } = {
      "speech-language-therapists": "Speech & Language Therapists",
      "occupational-therapists": "Occupational Therapists",
      "physio-therapists": "Physio Therapists",
      "aba-therapists": "ABA Therapists",
      "school-readiness-therapists": "School Readiness Therapists",
      "feeding-therapists": "Feeding Therapists",
      "group-therapists": "Group Therapists",
      "neuro-therapists": "Neuro Integrative Therapists",
    };
    return titles[slug] || "Our Team";
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      <main className="pt-10">
        <section className="relative bg-gradient-to-b from-[#54169C] to-pink-500 text-white pb-32 py-6">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-medium mb-4">Meet Our Experts</h2>
            <p className="text-lg font-light">
              Our dedicated team of certified professionals is here to support
              <br />
              and guide your child&apos;s development journey.
            </p>
            <h1 className="relative text-xl md:text-5xl font-medium py-5 my-3 inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[6px] after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-pink-500 after:opacity-80">
              {getCategoryTitle(slug)}
            </h1>
          </div>
          <HalfWaveBackground />
        </section>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-40 relative -top-[150px] justify-items-center">
          {filteredTeam.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </main>
    </div>
  );
}
