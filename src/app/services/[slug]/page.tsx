// import { getrelatedservice, getServiceBySlug, type ListingSection, type TextSection } from "@/app/lib/relatedservice";
import {
  getServiceBySlug,
  type ListingSection,
  type TextSection,
} from "@/app/lib/relatedservice";
import { notFound } from "next/navigation";
import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ImageCarousel from "@/app/components/ImageCarousel/ImageCarousel";

function ListingComponent({ section }: { section: ListingSection }) {
  return (
    <div className="my-6">
      <p className="mb-4 text-xl font-semibold">{section.title}</p>
      <ul className="space-y-4">
        {section.items.map((item, index) => (
          <li className="flex items-start space-x-3" key={index}>
            <FaStar className="text-pink-400 text-xl shrink-0 mt-1" />
            <span className="text-lg leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextComponent({ section }: { section: TextSection }) {
  return (
    <div className="my-6">
      {section.caption && (
        <h3 className="text-2xl font-extrabold leading-tight mb-6 text-gray-800">
          {section.caption}
        </h3>
      )}
      <div
        className="text-lg leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: section.content || "" }}
      />
    </div>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <div className="font-normal pt-10">
        <HeroVideo
          title={service?.title}
          // videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
          videoUrl={
            service.herovideo ||
            "https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
          }
        />

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="order-2 lg:order-1">
            <Srvicesider />
          </div>

          {/* Main Content */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-6">
            <section>
              {/* Title and Hero Image */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="flex-1">


                  <h2 className="text-5xl font-normal leading-tight mb-6 -mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] transition-all duration-500">
                    {service.title}
                  </h2>

                  <div className="container mx-auto px-2 py-10">

                    <div
                      className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-5 -mt-10 pb-6 px-6 sm:px-8 md:pt-10 md:pb-10 md:px-10 shadow-[20px_20px_40px_rgba(218,21,155,0.1)] 
                                                                        before:absolute before:inset-0 before:rounded-[2.5rem] before:-z-10 before:border-[3px] before:border-[#54169C]/30 before:translate-x-0 before:translate-y-0 before:transition-all before:duration-300 
                                                                        after:absolute after:inset-0 after:rounded-[2.5rem] after:-z-10 after:border-[3px] after:border-transparent after:translate-x-0 after:translate-y-0 after:transition-all after:duration-300 
                                                                        hover:before:translate-x-2 hover:before:translate-y-2 hover:after:border-[#DA159B]/30 hover:after:-translate-x-2 hover:after:-translate-y-2"
                    >
                      <Image
                        width={900}
                        height={500}
                        src={service.heroimage}
                        alt="Speech Therapy Session"
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover rounded-2xl"
                      />
                    </div>

                    <p className="prose prose-lg dark:prose-invert max-w-none my-5">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>


              {Array.isArray(service.galleryimages) && (
                <ImageCarousel
                  images={service.galleryimages.map((img, index) => ({
                    src: img,
                    alt: `Gallery image ${index + 1}`,
                  }))}
                  height="h-[400px]"
                  autoplaySpeed={4000}
                />
              )}


              {/* Sections */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {service.sections.map((section, index) => {
                  if (section.type === "listing") {
                    return <ListingComponent key={index} section={section} />;
                  } else if (section.type === "text") {
                    return <TextComponent key={index} section={section} />;
                  }
                  return null;
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
