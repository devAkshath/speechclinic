import Navbar from "../components/NavBar/NavBar";
import TeamWaveBackground from "../components/herocurve/TeamwaveBackground";
import Footer from "../components/footer";
import TherapyPromo from "../components/Features/Features";

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full z-50">
        <Navbar />
      </header>

      <TeamWaveBackground />

      <main className="pt-10">
  <div className="relative overflow-hidden py-32 my-6 px-6 text-center text-white bg-transparent">
    <div className="relative z-10 my-6 py-3">
      <h1 className="text-4xl md:text-5xl font-bold">ABOUT</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
        Our speech clinic provides personalized therapy services designed to enhance communication skills and empower individuals of all ages to reach their fullest potential.
      </p>
    </div>
    
    <div className="bg-transparent p-6 rounded-xl shadow-md">
      <TherapyPromo />
    </div>
  </div>
</main>

    </div>
  );
}