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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWideMenuOpen, setIsWideMenuOpen] = useState(false);
  const [showStickyNav, setShowStickyNav] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wideMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        wideMenuRef.current &&
        !wideMenuRef.current.contains(event.target as Node) &&
        isWideMenuOpen
      ) {
        setIsWideMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isWideMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleWideMenu = () => {
    setIsWideMenuOpen(!isWideMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //  Function to close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="max-w-screen-xl mx-auto p-8 bg-transparent w-full relative">
      {/* Main Navbar */}
      <div className="flex justify-between items-center py-3">

        <Link href="/">
          <Image
            src="/speechcliniclogo.svg"
            alt="Speech Clinic Logo"
            width={200}
            height={200}
            priority
            className="cursor-pointer lg:-mt-6 -mt-0"
          />
        </Link>

        {/* Desktop Menu + Contact Info */}
        <div className="hidden lg:flex flex-col">
          <div className="container mx-auto px-6">
            {/* Top Bar */}
            <div className="flex justify-between items-center gap-6 py-2">
              <div className="flex gap-10 text-white text-sm">
                <span className="flex items-center gap-2">
                  <FaEnvelope /> info@thespeechclinic.ae
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone /> +971-5088571468
                </span>
                <span className="flex items-center gap-2">
                  <FaClock /> Mon - Sat (09AM - 7PM)
                </span>
              </div>
              <div className="flex gap-4 text-white text-lg">
                <Link href="#">
                  <FaLinkedin />
                </Link>
                <Link href="#">
                  <FaYoutube />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaFacebook />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center py-4">
              <ul className="flex gap-8 text-white text-base">
                <li>
                  <Link href="./">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="">Our Products</Link>
                </li>
                <li>
                  <Link href="">Services</Link>
                </li>




                <li>
                  <Link href="/team">Teams</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>

              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md text-white px-4 py-2 rounded-2xl flex items-center gap-2"
                >
                  Let&apos;s Talk <FaComments />
                </Link>

                <button
                  onClick={toggleWideMenu}
                  aria-label="Close Menu"
                  className="text-white text-xl"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="text-white text-xl p-2 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

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
          <li className="text-lg font-bold">
            <Link href="./" onClick={handleMobileLinkClick}>
              Home
            </Link>
          </li>
          <li className="text-lg font-bold">
            <Link href="#" onClick={handleMobileLinkClick}>
              About
            </Link>
          </li>

          <li className="text-lg font-bold">
          <Link href =''>Services</Link>
          </li>

          <li className="text-lg font-bold">
          <Link href="/team" onClick={handleMobileLinkClick}>
              Our Products
            </Link>
          </li>

          <li className="text-lg font-bold">
            <Link href="/team" onClick={handleMobileLinkClick}>
              Teams
            </Link>
          </li>
    
        </ul>
        <hr />
        <div className="space-y-2 mt-8">
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaEnvelope />
            </span>
            info@thespeechclinic.ae
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaPhone />
            </span>{" "}
            +971-5088571468
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaClock />
            </span>{" "}
            Mon - Sat (09AM - 7PM)
          </span>
        </div>
        <h1 className=" my-3 py-3 h-6  font-extrabold text-lg">Follow Us</h1>
        <div className="flex gap-3 text-lg py-3 ">
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaLinkedin />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaYoutube />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaInstagram />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaFacebook />
            </Link>
          </span>
        </div>
        <div className="mt-6">
          <Link
            href="#"
            className="bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* ✅ CHANGED: Add ref to this Wide Menu Sidebar */}
      <div
        ref={wideMenuRef} // ✅ CHANGED
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white p-6 transform ${isWideMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-100`}
      >
        <button
          onClick={toggleWideMenu}
          aria-label="Close Menu"
          className=" text-xl absolute top-4 my-4 right-4"
        >
          <FaTimes />
        </button>
        <Link href="/"> <Image
          src="/speechcliniclogo.svg"
          alt="Speech Clinic Logo"
          width={130}
          height={200}
          priority
        /></Link>
        <h1 className=" my-6 py-3 h-6  font-extrabold text-lg">About Us</h1>
        <p>
          There are many variations of passages available sure there majority
          have suffered alteration in some form...
        </p>
        <div className="space-y-2 mt-8">
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaEnvelope />
            </span>
            info@thespeechclinic.ae
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaPhone />
            </span>{" "}
            +971-5088571468
          </span>
          <span className="flex items-center gap-3 text-gray-800">
            <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
              <FaClock />
            </span>{" "}
            Mon - Sat (09AM - 7PM)
          </span>
        </div>
        <h1 className=" my-3 py-3 h-6  font-extrabold text-lg">Follow Us</h1>
        <div className="flex gap-3 text-lg py-3 ">
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaLinkedin />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaYoutube />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaInstagram />
            </Link>
          </span>
          <span className="bg-gradient-to-r from-[#DA159B] to-[#54169C] rounded-full p-2 text-white">
            <Link href="#">
              <FaFacebook />
            </Link>
          </span>
        </div>
        <div className="mt-6">
          <Link
            href="#"
            className="bg-gradient-to-r from-[#DA159B] to-[#54169C] text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      {/* Sticky Navbars... (no changes here) */}
      {showStickyNav && (
        <div className="hidden lg:block fixed top-0 left-0 w-full bg-white shadow-md z-[60] transition duration-300">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/"> <Image
              src="/speechcliniclogo.svg"
              alt="Speech Clinic Logo"
              width={120}
              height={60}
              priority
            /></Link>
            <ul className="flex gap-6 text-gray-800 text-sm font-medium">
              <li>
                <Link href="./">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="">Products</Link>
              </li>
              <li>
                <Link href="/team">Teams</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md text-white px-4 py-2 rounded-2xl flex items-center gap-2"
              >
                Let&apos;s Talk <FaComments />
              </Link>
              <button
                onClick={toggleWideMenu}
                aria-label="Toggle Menu"
                className="text-dark text-xl p-2 rounded-full"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      )}
      {showStickyNav && (
        <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-[60] transition duration-300">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/"> <Image
              src="/speechcliniclogo.svg"
              alt="Speech Clinic Logo"
              width={120}
              height={60}
              priority
            /></Link>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
              className="text-white text-xl p-2 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
