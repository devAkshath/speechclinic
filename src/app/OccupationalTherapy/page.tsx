import NavBarSecond from "../components/NavBar/NavBarSecond";
import ServiceButtons from "../components/ServiceOptions/ServiceOption";

export default function OccupationalTherapy() {
     const serviceData = {
        title: "All Services",
        buttons: [
          { label: "Speech and Language Therapy", link: "/services/speech-language" },
          { label: "Occupational Therapy", link: "/services/occupational" },
          { label: "Physical Therapy", link: "/services/physical" },
          { label: "ABA Therapy", link: "/services/aba" },
          { label: "School Readiness Program", link: "/services/school-readiness" },
          { label: "Neuro Integrative Therapy", link: "/services/neuro" },
          { label: "Feeding Therapy", link: "/services/feeding" },
          { label: "Group Therapy", link: "/services/group" },
        ],
      };
      
  return (
 <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />

      </header>
      <div className="pt-90 mx-auto">
        <ServiceButtons title={serviceData.title} buttons={serviceData.buttons} />
      </div>
  </div>
  )
}
