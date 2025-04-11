import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-white   text-white ">
    
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] bg-[#3F3243]">
    
        {/* <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 745.24 709.57 c 739.03 107.57 1261.73 584.67 1167.49 1065.64 l -1472.73 -438.21 l -1160 -382 C -669.28 904.69 6.21 602 745.24 709.57"
            className="relative block h-[100px] fill-white"
          ></path>
        </svg> */}

        {/* Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {/* Column 1: Logo + Description + Copyright */}
          <div className="space-y-12">
            <Image src="/speechclininclogoW.svg" alt="Speech Clinic Logo" className="w-60"   width={800} height={500} />
            <p>
              Speech Clinic offers specialized therapy services to enhance communication,
              learning, and daily life skills for children, fostering growth through expert care.
            </p>
            <p className="opacity-80">
              © Copyright {Year} The Speech Clinic. All Rights Reserved.
            </p>
          </div>

          {/* Column 2 & 3: Links */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-0">
            <div>
              <h3 className="text-lg font-semibold mb-8">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-400 font-light">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Terms Of Service</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-8">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-gray-400 font-light">Speech Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Occupational Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Physio Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">ABA Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">School Readiness Program</a></li>
                <li><a href="#" className="hover:text-gray-400 font-light">Feeding Therapy</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-8">Get In Touch</h3>
            <p>Dubai Healthcare City, Building 47, Unit 301 & 302</p>
            <p>+971-508857146</p>
            <p>info@thespeechclinic.ae</p>

            {/* Uncomment to enable social icons */}
            
            <div className="flex mt-4 space-x-4 text-xl">
              <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
              <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            </div> 
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  