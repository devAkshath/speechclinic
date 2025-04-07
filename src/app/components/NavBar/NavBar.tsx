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
import { useState } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isWideMenuOpen, setIsWideMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const togglWideMenu = () => {
        setIsWideMenuOpen(!isWideMenuOpen);
    };

    return (
        <nav className="p-8 bg-transparent w-full relative">
            {/* Contact Info Bar (Visible only on Laptop/Desktop) */}
            <div className="hidden lg:flex justify-between items-center text-white text-sm mb-2">
                <div className="flex gap-6">

                </div>

                {/* Social Media Links */}
                <div className="flex gap-4">
                    <div className="flex gap-6">
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
                    <Link href="#" aria-label="LinkedIn">
                        <FaLinkedin className="text-white" />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                        <FaYoutube className="text-white" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <FaInstagram className="text-white" />
                    </Link>
                    <Link href="#" aria-label="Facebook">
                        <FaFacebook className="text-white" />
                    </Link>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex justify-between items-center 5">
                {/* Logo */}
                <Image
                    src="/speechcliniclogo.svg"
                    alt="Speech Clinic Logo"
                    width={200}
                    height={200}
                    priority
                />

                {/* Laptop/Desktop Navigation (Visible Only on Large Screens) */}
                <div className="hidden lg:flex justify-between items-center px- ">
                    <ul className="flex gap-8 list-none">
                        <li><Link href="#" className="text-white">Home</Link></li>
                        <li><Link href="#" className="text-white">About</Link></li>
                        <li><Link href="#" className="text-white">Services</Link></li>
                        <li><Link href="#" className="text-white">Our Products</Link></li>
                        <li><Link href="#" className="text-white">Teams</Link></li>
                        <li><Link href="#" className="text-white">Contact</Link></li>
                    </ul>
                    &nbsp; &nbsp;
                    <Link
                        href="#"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-1"
                    >
                        Let&apos;s Talk <FaComments />
                    </Link>

                    <div className="Sm:hidden px-6  py-3">
                        <button
                            onClick={togglWideMenu}
                            aria-label="Toggle Menu"
                            className="text-white text-xl p-2 rounded-full bg-gradient-to-r from-[#DA159B] to-[#54169C] shadow-md"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                </div>

                {/* Mobile & Tablet Menu Button (Visible Only on Small and Medium Screens) */}
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

            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white p-6 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMobileMenu}
                    aria-label="Close Menu"
                    className="text-gray-800 text-xl absolute top-4 right-4"
                >
                    <FaTimes />
                </button>

                {/* Contact Info (For Mobile Sidebar) */}
                <div className="space-y-2 mt-8">
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaEnvelope /> info@thespeechclinic.ae
                    </span>
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaPhone /> +971-5088571468
                    </span>
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaClock /> Mon - Sat (09AM - 7PM)
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 text-lg mt-4">
                    <Link href="#" aria-label="LinkedIn">
                        <FaLinkedin className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                        <FaYoutube className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <FaInstagram className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="Facebook">
                        <FaFacebook className="text-gray-800" />
                    </Link>
                </div>

                {/* Navigation Links (Inside Sidebar) */}
                <ul className="space-y-4 list-none mt-6">
                    <li><Link href="#" className="text-gray-800">Home</Link></li>
                    <li><Link href="#" className="text-gray-800">About</Link></li>
                    <li><Link href="#" className="text-gray-800">Services</Link></li>
                    <li><Link href="#" className="text-gray-800">Our Products</Link></li>
                    <li><Link href="#" className="text-gray-800">Teams</Link></li>
                    <li><Link href="#" className="text-gray-800">Contact</Link></li>
                </ul>

                {/* CTA Button */}
                <div className="mt-6">
                    <Link
                        href="#"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>

            {/* wide screen toogle */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white p-6 transform ${isWideMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                {/* Close Button */}
                <button
                    onClick={togglWideMenu}
                    aria-label="Close Menu"
                    className="text-gray-800 text-xl absolute top-4 right-4"
                >
                    <FaTimes />
                </button>

                <Image
                    src="/speechcliniclogo.svg"
                    alt="Speech Clinic Logo"
                    width={150}
                    height={200}
                    priority
                />
                
                <h2 className="font-bold my-4">About Us
                </h2>
                <p className="my-4">There are many variations of passages available sure there majority have suffered alteration in some form by inject humour or randomised words which don&rsquo;t look even slightly believable.</p>

                {/* Contact Info (For Mobile Sidebar) */}
                <div className="space-y-2 mt-8">
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaEnvelope /> info@thespeechclinic.ae
                    </span>
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaPhone /> +971-5088571468
                    </span>
                    <span className="flex items-center gap-3 text-gray-800">
                        <FaClock /> Mon - Sat (09AM - 7PM)
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 text-lg mt-4">
                    <Link href="#" aria-label="LinkedIn">
                        <FaLinkedin className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="YouTube">
                        <FaYoutube className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <FaInstagram className="text-gray-800" />
                    </Link>
                    <Link href="#" aria-label="Facebook">
                        <FaFacebook className="text-gray-800" />
                    </Link>
                </div>


                {/* CTA Button */}
                <div className="mt-6">
                    <Link
                        href="#"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>

        </nav>
    );
}
