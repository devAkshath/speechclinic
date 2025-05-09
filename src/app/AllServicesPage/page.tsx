import NavBarSecond from "../components/NavBar/NavBarSecond";
import ServiceSection from "../components/ServiceSection/ServiceSection";

export default function AllServicesPage() {
  return (
    <div>
      <header>
        <NavBarSecond />
      </header>
      <main className="p-0">
        <ServiceSection />
      </main>

    </div>
  );
}
