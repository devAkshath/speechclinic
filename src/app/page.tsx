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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent flex flex-col w-full ">
{/* <div className="w-full -z-500 absolute top-150 pointer-events-none hidden lg:block">
  <AnimatedCurveLine />
</div> */}

      <header className="absolute top-0 w-full z-50 px-0 pl">
        <Navbar />
      </header>
      <Hero />
      {/* <AnimatedCurveLine/> */}
      
   
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
