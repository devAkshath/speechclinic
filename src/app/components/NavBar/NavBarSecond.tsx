"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaClock,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function NavBarSecond() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWideMenuOpen, setIsWideMenuOpen] = useState(false);
  const [, setShowStickyNav] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wideMenuRef = useRef<HTMLDivElement>(null);
  const productDropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Don't close if clicking on a link or button
      if (target.closest('a') || target.closest('button')) {
        return;
      }

      // Handle mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
        setIsOpen(false); // Also close product dropdown when mobile menu closes
      }

      // Handle wide menu
      if (
        wideMenuRef.current &&
        !wideMenuRef.current.contains(target) &&
        isWideMenuOpen
      ) {
        setIsWideMenuOpen(false);
      }

      // Handle product dropdown
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isWideMenuOpen, isOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsOpen(false); // Close product dropdown when opening mobile menu
    }
  };

  const toggleWideMenu = () => {
    setIsWideMenuOpen(!isWideMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsOpen(false); // Also close product dropdown
  };

  // Function to handle product dropdown link clicks
  const handleProductLinkClick = () => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="max-w-screen-xl mx-auto p-8 bg-transparent w-full relative">

      {/* ✅ CHANGED: Add ref to this Mobile Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-full sm:w-3/4 sm:max-w-xs bg-white p-6 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-100`}
      >
        <button
          onClick={toggleMobileMenu}
          aria-label="Close Menu"
          className="text-gray-800 text-xl absolute top-4 right-4 my-2"
        >
          <FaTimes />
        </button>
        <Image
          src="/speechcliniclogo.svg"
          alt="Speech Clinic Logo"
          width={130}
          height={200}
          priority
        />

        {/* ✅ HIGHLIGHTED: onClick added to close menu on link click */}
        <ul className="space-y-4 mt-6 py-5 text-gray-800">
          <li className="text-lg ">
            <Link href="./" onClick={handleMobileLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-lg ">
            <Link href="/about-us" onClick={handleMobileLinkClick}>
              About
            </Link>
          </li>

          <li className="text-lg ">
            <Link href='/services'>Services</Link>
          </li>


          <div className="relative inline-block text-left" ref={productDropdownRef}>
            {/* Trigger Button */}
            <button
              onClick={toggleProductDropdown}
              className="flex items-center text-lg  gap-1 cursor-pointer transition-colors duration-300"
            >
              Products
              <svg
                className={`w-4 h-4 mt-0.5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute mt-3 w-56 rounded-xl border border-gray-100 bg-white/70 backdrop-blur-md shadow-2xl ring-1 ring-[#DA159B]/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top z-50 ${isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-4 pointer-events-none duration-300 ease-in"
                }`}
            >
              {/* Dropdown Items */}
              <ul className="flex flex-col gap-2 p-3">
                <li
                  className={`transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-2 delay-0"
                    }`}
                >
                  <Link
                    href="/products/speechsync"
                    className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white transition duration-300 hover:shadow-md"
                    onClick={handleProductLinkClick}
                  >
                    SpeechSync AAC
                  </Link>
                </li>
                <li
                  className={`transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 -translate-y-2 delay-0"
                    }`}
                >
                  <Link
                    href="/products/speeching-cards"
                    className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white transition duration-300 hover:shadow-md"
                    onClick={handleProductLinkClick}
                  >
                    Speeching Card
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <li className="text-lg ">
            <Link href="/teams" onClick={handleMobileLinkClick}>
              Teams
            </Link>
          </li>
          <li className="text-lg ">
            <Link href="/gallery" onClick={handleMobileLinkClick}>
              Gallery
            </Link>
          </li>

        </ul>
        <hr />
        <div className="space-y-2 mt-8">
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaEnvelope />
            </span>
            <a href="mailto:info@thespeechclinic.ae" className="hover:underline">
              info@thespeechclinic.ae
            </a>
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaPhone />
            </span>
            <a href="tel:+971508857146" className="hover:underline">
             +971-508857146
            </a>
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaClock />
            </span>
            Mon - Sat (9AM - 7PM)
          </span>
        </div>

        <h1 className=" my-3 py-3 h-6  font-extrabold text-lg">Follow Us</h1>
        <div className="flex gap-3 text-lg py-3 ">
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.linkedin.com/company/the-speech-clinic-dubai/" target="black">
              <FaLinkedin />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.youtube.com/watch?v=yOn2uiDbp08" target="blank">
              <FaYoutube />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.instagram.com/thespeechclinic_dubai/" target="blank">
              <FaInstagram />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.facebook.com/people/The-Speech-Clinic-Dubai/100088752805760/" target="blank">
              <FaFacebook />
            </Link>
          </span>
        </div>
        <div className="mt-6">
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
          >
          Contact Us
          </Link>
        </div>
      </div>

      {/* ✅ CHANGED: Add ref to this Wide Menu Sidebar */}
      <div
        ref={wideMenuRef} // ✅ CHANGED
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white p-6 transform ${isWideMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full "} transition-transform duration-300 ease-in-out z-100 `}
      >
        <button onClick={toggleWideMenu} aria-label="Close Menu" className=" text-xl absolute top-4 my-4 right-4"><FaTimes /></button>
        <Link href="/"><Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={130} height={200} priority /></Link>
        <h1 className=" my-6 py-3 h-6  font-extrabold text-lg">About Us</h1>
        <p>Speech Clinic offers specialized therapy services to enhance communication, learning, and daily life skills....</p>
        <div className="space-y-2 mt-8">
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaEnvelope />
            </span>
            <a href="mailto:info@thespeechclinic.ae" className="hover:underline">
              info@thespeechclinic.ae
            </a>
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaPhone />
            </span>
            <a href="tel:+971508857146" className="hover:underline">
              +971-508857146
            </a>
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaClock />
            </span>
            Mon - Sat (9AM - 7PM)
          </span>
        </div>
        <h1 className=" my-3 py-3 h-6  font-extrabold text-lg">Follow Us</h1>
        <div className="flex gap-3 text-lg py-3 ">
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.linkedin.com/company/the-speech-clinic-dubai/" target="black">
              <FaLinkedin />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.youtube.com/watch?v=yOn2uiDbp08" target="blank">
              <FaYoutube />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.instagram.com/thespeechclinic_dubai/" target="blank">
              <FaInstagram />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="https://www.facebook.com/people/The-Speech-Clinic-Dubai/100088752805760/" target="blank">
              <FaFacebook />
            </Link>
          </span>
        </div>
        <div className="mt-6">
          <Link
      href="/contact-us"
            className="bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>



      {/* Sticky Navbars... (no changes here) */}


      <div className="hidden lg:block fixed top-0 left-0  w-full bg-white shadow-md z-[60] transition duration-300">
        {/* top bar */}
        <div className="hidden lg:block bg-gradient-to-r from-[#54169C] to-[#DA159B] text-white text-sm py-2 px-4">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="flex gap-4">
              <span className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:info@thespeechclinic.ae" className="hover:underline">
                  info@thespeechclinic.ae
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:+971508857146" className="hover:underline">
                  +971-508857146
                </a>
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-2">
                <FaClock /> Mon - Sat (9AM - 7PM)
              </span>
              <div className="flex gap-3">
                <Link href="https://www.linkedin.com/company/the-speech-clinic-dubai/"><FaLinkedin /></Link>
                <Link href="https://www.youtube.com/watch?v=yOn2uiDbp08"><FaYoutube /></Link>
                <Link href="https://www.instagram.com/thespeechclinic_dubai/"><FaInstagram /></Link>
                <Link href="https://www.facebook.com/people/The-Speech-Clinic-Dubai/100088752805760/"><FaFacebook /></Link>
              </div>
            </div>
          </div>


      

        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">

          <Link href="/"><Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={120} height={60} priority /></Link>
          <ul className="flex gap-6 text-gray-800 text-sm font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/services">Services</Link></li>

            <div className="relative inline-block text-left" ref={productDropdownRef}>
              {/* Trigger Button */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex items-center text-sm gap-1 cursor-pointer transition-colors duration-300"
              >
                Products
                <svg
                  className={`w-4 h-4 mt-0.5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute mt-3 w-56 rounded-xl border border-gray-100 bg-white/70 backdrop-blur-md shadow-2xl ring-1 ring-[#DA159B]/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top z-50 ${isOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-4 pointer-events-none duration-300 ease-in"
                  }`}
              >
                {/* Dropdown Items */}
                <ul className="flex flex-col gap-2 p-3">
                  <li
                    className={`transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 -translate-y-2 delay-0"
                      }`}
                  >
                    <Link
                      href="/products/speechsync"
                      className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white transition duration-300 hover:shadow-md"
                    >
                      SpeechSync AAC
                    </Link>
                  </li>
                  <li
                    className={`transition-all duration-300 ease-out ${isOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 -translate-y-2 delay-0"
                      }`}
                  >
                    <Link
                      href="/products/speeching-cards"
                      className="block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gradient-to-r from-[#DA159B] to-[#54169C] hover:text-white transition duration-300 hover:shadow-md"
                    >
                      Speeching Card
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <li><Link href="/teams">Teams</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
          <div className="flex items-center gap-4">
            <Link
         href="/contact-us"
              className="bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md text-white px-4 py-2 rounded-2xl flex items-center gap-2"
            >
              Contact Us<FaComments />
            </Link>
            {/* <button
              onClick={toggleWideMenu}
              aria-label="Toggle Menu"
              className="text-dark text-xl p-2 rounded-full"
            >
              <FaBars />
            </button> */}
              <button
                  onClick={toggleWideMenu}
                  aria-label="Toggle Wide Menu"
                  className="text-dark text-xl"
                >
                  {isWideMenuOpen ? <FaTimes /> : <FaBars />} {/* Show close icon when open */}
                </button>
          </div>
        </div>
      </div>


      <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-[60] transition duration-300">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/"> <Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={120} height={60} priority /></Link>
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-white text-xl p-2 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>


    </nav>

  );

}
