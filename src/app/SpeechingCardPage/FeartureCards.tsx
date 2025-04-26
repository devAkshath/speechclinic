export default function EnterpriseFeatures() {
  return (
    <section className="mx-auto max-w-[1750px] px-4 sm:px-4 py-16 lg:px-12 md:px-12 bg-gray-100">
      <h2 className="text-6xl md:text-6xl font-light mb-12 leading-tight">
        Speech Therapy Cards<br />
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-lime-200 p-8 rounded-2xl ">
          <h3 className="text-3xl font-light mb-0">
            Engaging Visual
            <br />
            Flashcards
          </h3>
   
        </div>

        {/* Card 2 */}
        <div className="bg-orange-100 p-8 rounded-2xl">
          <h3 className="text-3xl font-light mb-4">
            Interactive Learning
            <br />
            Activities
          </h3>
      
        </div>

        {/* Card 3 */}
        <div className="bg-cyan-100 p-8 rounded-2xl">
          <h3 className="text-3xl font-light mb-4">
            Customizable Learning
            <br />
            Paths
          </h3>
    
        </div>
        {/* Card 4 */}
        <div className="bg-yellow-100 p-8 rounded-2xl">
          <h3 className="text-3xl font-light mb-4">
            Audio Pronunciationg
            <br /> Assistance
          </h3>
         
        </div>
        {/* Card 5 */}
        <div className="bg-purple-100 p-8 rounded-2xl">
          <h3 className="text-3xl font-light mb-4">
          Multisensory Speech
            <br /> Training
          </h3>
         
        </div>
      </div>
    </section>
  );
}
