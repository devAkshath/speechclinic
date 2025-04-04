export default function Footer() {
    return (
      <footer className="relative bg-[#3F3243] text-white pt-24 pb-10">
        {/* Background SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[120px]"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#3F3243"
              d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,144C672,139,768,117,864,106.7C960,96,1056,96,1152,96C1248,96,1344,96,1392,96L1440,96V320H0Z"
            ></path>
          </svg>
        </div>
  
        {/* Footer Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">THE SPEECH CLINIC DUBAI</h2>
            <p className="text-sm mt-4">
              Speech Clinic offers specialized therapy services to enhance communication,
              learning, and daily life skills for children, fostering growth through expert care.
            </p>
          </div>
  
          {/* Center Section - Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Terms Of Service</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-gray-400">Speech Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400">Occupational Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400">Physio Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400">ABA Therapist</a></li>
                <li><a href="#" className="hover:text-gray-400">School Readiness Program</a></li>
                <li><a href="#" className="hover:text-gray-400">Feeding Therapy</a></li>
              </ul>
            </div>
          </div>
  
          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
            <p className="text-sm">
              Dubai Healthcare City, Building 47, Unit 301 & 302
            </p>
            <p className="text-sm mt-2">+971-508857146</p>
            <p className="text-sm mt-2">info@thespeechclinic.ae</p>
  
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="relative z-10 text-center text-sm mt-10 opacity-70">
          © Copyright 2025 The Speech Clinic. All Rights Reserved. Powered by Erratum Solutions
        </div>
      </footer>
    );
  }
  