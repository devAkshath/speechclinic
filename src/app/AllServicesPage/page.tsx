import Footer from "../components/footer";
import Navbar from "../components/NavBar/NavBar";
import ServiceSection from "../components/ServiceSection/ServiceSection";


export default function AllServicesPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="p-4">
         <ServiceSection />
      </main>
      <Footer />
    </div>
  );
}
