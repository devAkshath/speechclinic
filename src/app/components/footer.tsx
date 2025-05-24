import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Waves from "./herocurve/wavemotion";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div>
      <Waves />
      <footer className="relative bg-[#FDECF5]   text-black ">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] bg-[#FDECF5]">
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
              <Image
                src="/speechcliniclogo.svg"
                alt="Speech Clinic Logo"
                className="w-60"
                width={800}
                height={500}
              />
              <p className="opacity-80">
                © Copyright {Year}. The Speech Clinic.<br />All Rights Reserved.{" "}
                <br />
                Powered By: <a href="https://erratums.com" target="_blank">Erratum Solutions</a>
              </p>
            </div>

            {/* Column 2 & 3: Links */}
            <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-0">
              <div>
                <h3 className="text-xl font-meduim mb-8 ">Company</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/about-us"
                      className="hover:text-gray-400 font-normal"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="hover:text-gray-400 font-normal"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms-and-conditions"
                      className="hover:text-gray-400 font-normal"
                    >
                      Terms Of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:text-gray-400 font-normal"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-meduim mb-8">Services</h3>
                <ul className="space-y-4">
                  {[
                    { path: 'occupational-therapy', label: 'Occupational Therapy' },
                    { path: 'speech-language-therapy', label: 'Speech & Language Therapy' },
                    { path: 'physical-therapy', label: 'Physical Therapy' },
                    { path: '', label: 'All Services' }
                  ].map((service) => (
                    <li key={service.path}>
                      <a
                        href={`/services/${service.path}`}
                        className="hover:text-gray-400 font-normal"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-meduim mb-8">Get In Touch</h3>
              <p><a href="https://www.google.com/maps?ll=25.229031,55.322413&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=14517416241218903551" target="_blank" className="hover:text-gray-400">
                Dubai Healthcare City, Building 47 <br /> Unit  301, 302, 303 & 304</a>
              </p>
              <p><a href="tel:+971508857146" className="hover:text-gray-400">+971-508857146</a></p>
              <p><a href="mailto:info@thespeechclinic.ae" className="hover:text-gray-400">info@thespeechclinic.ae</a></p>

              {/* Uncomment to enable social cons */}

              <div className="flex mt-4 space-x-4 text-xl">
                <a
                  href="https://www.linkedin.com/company/the-speech-clinic-dubai"
                  className="hover:text-gray-400"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@thespeechclinic"
                  className="hover:text-gray-400"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://instagram.com/thespeechclinic_dubai"
                  className="hover:text-gray-400"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com/profile.php?id=100088752805760"
                  className="hover:text-gray-400"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
          {/* <div>© Copyright 2025 The Speech Clinic. All Rights Reserved.
</div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
