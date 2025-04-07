export default function Blogs() {
    const blogCards = [
      {
        title: "Significance of Early Intervention",
        content:
          "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we",
        image: "/galleryimage.jpg", 
      },
      {
        title: "Significance of Early Intervention",
        content:
          "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we",
        image: "/galleryimage.jpg",
      },
      {
        title: "Significance of Early Intervention",
        content:
          "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we",
        image: "/galleryimage.jpg",
      },
    ];
  
    return (
      <div className="py-16 px-4 md:px-20 bg-white text-center">
        {/* Row 1: Verified Icon + Label */}
        <div className="inline-flex items-center justify-center mb-3">
          <img src="/verified.png" alt="Verified Icon" className="w-8 h-8 mr-1" />
          <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
            Our Gallery
          </div>
        </div>
  
        {/* Row 2: Heading */}
        <h2 className="text-3xl font-semibold text-gray-700 leading-snug mb-12">
          What Parents Say
        </h2>
  
        {/* Row 3: Cards */}
        <div className="flex justify-center">
  <div className="grid md:grid-cols-3 gap-8 max-w-7xl h-140">
    {blogCards.map((card, index) => (
      <div
        key={index}
        className="border-2 border-gray-300 rounded-[40px] p-4 flex flex-col justify-between"
      >
        <img 
          src={card.image}
          alt={card.title}
      className="rounded-[20px] mt-4 mb-4 w-80 h-50 object-cover mx-auto block"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-left mb-2">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 font-light text-left mb-4">
          {card.content}
        </p>
        <button className="bg-gradient-to-r from-[#54169C] to-[#DA159B] text-white py-2 rounded-full font-medium h-15">
          Read More
        </button>
      </div>
    ))}
  </div>
</div>

      </div>
    );
  }
  