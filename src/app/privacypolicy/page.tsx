import Navbar from "../components/NavBar/NavBar";
import NavBarSecond from "../components/NavBar/NavBarSecond";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col w-full ">
         <header className="absolute top-0 w-full z-50">
           <NavBarSecond />
         </header>

      <div className="min-h-screen flex items-center justify-center bg-white py-32 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl w-full bg-pink-100 rounded-2xl shadow-md p-8 sm:p-12 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p><strong>Last updated:</strong> December 21, 2022</p>
        <p>Please read these terms and conditions carefully before using Our Service.</p>

        <h2 className="text-2xl font-semibold mt-6">Interpretation and Definitions</h2>
        <h3 className="text-xl font-medium mt-4">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions...
        </p>

        <h3 className="text-xl font-medium mt-4">Definitions</h3>
        <p>
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control...</li>
          <li><strong>Country</strong> refers to: United Arab Emirates</li>
          <li><strong>Company</strong> refers to The Speech Clinic FZ LLC...</li>
          {/* Add more items as per your full content */}
        </ul>

        {/* Continue your other sections like this */}
        <h2 className="text-2xl font-semibold mt-6">Acknowledgment</h2>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company...
        </p>

        {/* End section */}
        <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul className="list-disc pl-6">
          <li>By email: <a href="mailto:support@thespeechclinic.ae" className="text-blue-600 underline">support@thespeechclinic.ae</a></li>
        </ul>
      </div>
    </div>
   
    
    </div>
  );
}
