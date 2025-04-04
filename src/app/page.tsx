
import Hero from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar"
import Footer from "./components/footer";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TherapyPromo from "./components/Features/Features";


export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-white flex flex-col w-full">

     
        <header className="absolute  top-0  w-full z-50">
              <Navbar />
            </header>
             <Hero />
             <ServiceSection/>
             <TherapyPromo/>
      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}