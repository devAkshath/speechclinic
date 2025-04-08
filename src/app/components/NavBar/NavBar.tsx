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
    FaChevronDown,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isWideMenuOpen, setIsWideMenuOpen] = useState(false);
    const [showStickyNav, setShowStickyNav] = useState(false);

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

    return (
        <nav className="max-w-screen-xl mx-auto p-8 bg-transparent w-full relative">
            {/* Main Navbar */}
            <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <Image
                    src="/speechcliniclogo.svg"
                    alt="Speech Clinic Logo"
                    width={200}
                    height={200}
                    priority
                    className="lg:-mt-6 -mt-0"
                />

                {/* Desktop Menu + Contact Info */}
                <div className="hidden lg:flex flex-col">
                    <div className="container mx-auto px-6">
                        {/* Top Bar */}
                        <div className="flex justify-between items-center gap-6 py-2">
                            <div className="flex gap-10 text-white text-sm">
                                <span className="flex items-center gap-2"><FaEnvelope /> info@thespeechclinic.ae</span>
                                <span className="flex items-center gap-2"><FaPhone /> +971-5088571468</span>
                                <span className="flex items-center gap-2"><FaClock /> Mon - Sat (09AM - 7PM)</span>
                            </div>
                            <div className="flex gap-4 text-white text-lg">
                                <Link href="#"><FaLinkedin /></Link>
                                <Link href="#"><FaYoutube /></Link>
                                <Link href="#"><FaInstagram /></Link>
                                <Link href="#"><FaFacebook /></Link>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-between items-center py-4">
                            <ul className="flex gap-8 text-white text-base">
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>

                                <li className="relative group">
                                    <button className="hover:text-purple-300">Our Products</button>
                                    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-lg w-48 z-50">
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Product A</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Product B</a></li>
                                    </ul>
                                </li>

                                <li className="relative group">
                                    <button className="hover:text-purple-300">Services</button>
                                    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-lg w-48 z-50">
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Speech Therapy</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Occupational Therapy</a></li>
                                    </ul>
                                </li>

                                <li><Link href="#">Teams</Link></li>
                                <li><Link href="#">Contact</Link></li>
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
                                    className="text-white text-xl p-2 rounded-full"
                                >
                                    {isWideMenuOpen ? <FaTimes /> : <FaBars />}
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

            {/* Mobile Menu Sidebar */}
            {/* <div
                className={`fixed top-0 left-0 h-full w-full bg-white p-6 transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-100`}
            > */}

            <div
                className={`fixed top-0 right-0 h-full 
                            w-full 
                            sm:w-3/4 sm:max-w-xs 
                            bg-white p-6 transform 
                            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} 
                            transition-transform duration-300 ease-in-out z-100`}
            >
                <button onClick={toggleMobileMenu} aria-label="Close Menu" className="text-gray-800 text-xl absolute top-4 right-4"><FaTimes /></button>
                <div className="space-y-2 mt-8">
                    <span className="flex items-center gap-3 text-gray-800"><FaEnvelope /> info@thespeechclinic.ae</span>
                    <span className="flex items-center gap-3 text-gray-800"><FaPhone /> +971-5088571468</span>
                    <span className="flex items-center gap-3 text-gray-800"><FaClock /> Mon - Sat (09AM - 7PM)</span>
                </div>
                <div className="flex gap-4 text-lg mt-4">
                    <Link href="#"><FaLinkedin className="text-gray-800" /></Link>
                    <Link href="#"><FaYoutube className="text-gray-800" /></Link>
                    <Link href="#"><FaInstagram className="text-gray-800" /></Link>
                    <Link href="#"><FaFacebook className="text-gray-800" /></Link>
                </div>
                <ul className="space-y-4 mt-6 text-gray-800">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li>
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer py-2">Services <FaChevronDown className="group-open:rotate-180 transition" /></summary>
                            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700">
                                <li><a href="#">Speech Therapy</a></li>
                                <li><a href="#">Occupational Therapy</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer py-2">Our Products <FaChevronDown className="group-open:rotate-180 transition" /></summary>
                            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700">
                                <li><a href="#">Product A</a></li>
                                <li><a href="#">Product B</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="#">Teams</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
                <div className="mt-6">
                    <Link
                        href="#"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 justify-center w-full"
                    >
                        Let&apos;s Talk <FaComments />
                    </Link>
                </div>
            </div>

            {/* Wide Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white p-6 transform ${isWideMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-100`}
            >
                <button onClick={toggleWideMenu} aria-label="Close Menu" className="text-gray-800 text-xl absolute top-4 right-4"><FaTimes /></button>
                <Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={200} height={200} priority />
                <h2 className="font-bold my-4">About Us</h2>
                <p className="my-4">There are many variations of passages available sure there majority have suffered alteration in some form by inject humour or randomised words which don't look even slightly believable.</p>
                <div className="space-y-2 mt-8">
                    <span className="flex items-center gap-3 text-gray-800"><FaEnvelope /> info@thespeechclinic.ae</span>
                    <span className="flex items-center gap-3 text-gray-800"><FaPhone /> +971-5088571468</span>
                    <span className="flex items-center gap-3 text-gray-800"><FaClock /> Mon - Sat (09AM - 7PM)</span>
                </div>
                <div className="flex gap-3 text-lg mt-4">
                    <Link href="#"><FaLinkedin className="text-gray-800" /></Link>
                    <Link href="#"><FaYoutube className="text-gray-800" /></Link>
                    <Link href="#"><FaInstagram className="text-gray-800" /></Link>
                    <Link href="#"><FaFacebook className="text-gray-800" /></Link>
                </div>
                <div className="mt-6">
                    <Link
                        href="#"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-1 w-full justify-center"
                    >
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>

            {/* Sticky Navbar for Desktop */}
            {showStickyNav && (
                <div className="hidden lg:block fixed top-0 left-0 w-full bg-white shadow-md z-[60] transition duration-300">
                    <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
                        <Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={120} height={60} priority />
                        <ul className="flex gap-6 text-gray-800 text-sm font-medium">
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Products</Link></li>
                            <li><Link href="#">Teams</Link></li>
                            <li><Link href="#">Contact</Link></li>
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
                                {isWideMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sticky Navbar for Mobile */}
            {showStickyNav && (
                <div className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-[60] transition duration-300">
                    <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
                        <Image src="/speechcliniclogo.svg" alt="Speech Clinic Logo" width={120} height={60} priority />
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
