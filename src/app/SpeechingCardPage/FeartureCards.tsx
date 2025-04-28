export default function EnterpriseFeatures() {
  return (
    <section className="mx-auto max-w-[1750px] px-4 sm:px-4 py-16 lg:px-12 md:px-12 bg-gray-100">
      <h2 className="text-6xl md:text-6xl font-light mb-12 leading-tight text-black">
        Speech Therapy Cards<br />
        Features
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-[28px] basis-full md:basis-[calc(33.333%-20px)] bg-white p-8 group transition-all duration-500 hover:scale-105">
          <div className="absolute top-[-75px] right-[-75px] w-[128px] h-[128px] rounded-full bg-lime-400 transition-transform duration-500 group-hover:scale-[10]"></div>
          <h3 className="relative text-3xl font-bold text-black mb-0 z-10">
            Engaging Visual
            <br />
            Flashcards
          </h3>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-[28px] basis-full md:basis-[calc(33.333%-20px)] bg-white p-8 group transition-all duration-500 hover:scale-105">
          <div className="absolute top-[-75px] right-[-75px] w-[128px] h-[128px] rounded-full bg-orange-400 transition-transform duration-500 group-hover:scale-[10]"></div>
          <h3 className="relative text-3xl font-bold text-black mb-0 z-10">
            Interactive Learning
            <br />
            Activities
          </h3>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-[28px] basis-full md:basis-[calc(33.333%-20px)] bg-white p-8 group transition-all duration-500 hover:scale-105">
          <div className="absolute top-[-75px] right-[-75px] w-[128px] h-[128px] rounded-full bg-cyan-400 transition-transform duration-500 group-hover:scale-[10]"></div>
          <h3 className="relative text-3xl font-bold text-black mb-0 z-10">
            Customizable Learning
            <br />
            Paths
          </h3>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-[28px] basis-full md:basis-[calc(33.333%-20px)] bg-white p-8 group transition-all duration-500 hover:scale-105">
          <div className="absolute top-[-75px] right-[-75px] w-[128px] h-[128px] rounded-full bg-yellow-400 transition-transform duration-500 group-hover:scale-[10]"></div>
          <h3 className="relative text-3xl font-bold text-black mb-0 z-10">
            Audio Pronunciation
            <br />
            Assistance
          </h3>
        </div>

        {/* Card 5 */}
        <div className="relative overflow-hidden rounded-[28px] basis-full md:basis-[calc(33.333%-20px)] bg-white p-8 group transition-all duration-500 hover:scale-105">
          <div className="absolute top-[-75px] right-[-75px] w-[128px] h-[128px] rounded-full bg-purple-400 transition-transform duration-500 group-hover:scale-[10]"></div>
          <h3 className="relative text-3xl font-bold text-black mb-0 z-10">
            Multisensory Speech
            <br />
            Training
          </h3>
        </div>
      </div>
    </section>
  );
}
