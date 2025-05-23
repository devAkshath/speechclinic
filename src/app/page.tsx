"use client";
import Hero from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TherapyPromo from "./components/Features/Features";
import Gallery from "./components/GallerySection/GallerySection";
import ProductsSection from "./components/Products/ProductsSection";
import Expertise from "./components/Expertise/ExpertiseSection";
import Testimonial from "./components/Testimonial/TestimonialSection";
import Blogs from "./components/Blogs/BlogSection";
// import AnimatedCurveLine from "./components/herocurve/animatedline";
// import FooterCurve from "./components/herocurve/footercurve";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent flex flex-col w-full ">
      <header className="absolute top-0 w-full z-50 px-0 pl">
        <Navbar />
      </header>
      <Hero />
      <div className="relative rounded-3xl overflow-hidden group cursor-pointer sm:hidden flex flex-col gap-4 pt-0 pb-5 pl-4.5 pr-4.5 items-center w-full -mt-18">

      {/* <div className="relative rounded-3xl overflow-hidden group cursor-pointer sm:hidden flex flex-col gap-4 pt-0 pb-5  pl-4.5 pr-4.5 items-center w-full"> */}
        <div className="w-full aspect-w-16 aspect-h-9 relative  rounded-3xl">
        
         <video
              src="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl shadow-xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
         
        </div>
      </div>

      <ServiceSection />
      <TherapyPromo />
      <Gallery />
      <ProductsSection />
      <Expertise />
      <Testimonial />
      <Blogs />
    </div>
  );
}
