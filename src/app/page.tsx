
import Hero from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar"
import Footer from "./components/footer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TherapyPromo from "./components/Features/Features";
import Gallery from "./components/GallerySection/GallerySection";
import ProductsSection from "./components/Products/ProductsSection";
import Expertise from "./components/Expertise/ExpertiseSection";
import Testimonial from "./components/Testimonial/TestimonialSection";
import Blogs from "./components/Blogs/BlogSection";


export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-white flex flex-col w-full ">

<header className="absolute top-0 w-full z-50 px-0 pl"> 
              <Navbar />
            </header>
             <Hero />
             <ServiceSection/>
             <TherapyPromo/>
             <Gallery/>
             <ProductsSection/>
             <Expertise/>
             <Testimonial/>
             <Blogs/>
      {/* Footer */}
        <Footer />
    </div>
  );
}