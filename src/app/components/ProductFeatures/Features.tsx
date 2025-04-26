"use client";
import {FaThLarge,FaGamepad, FaBell,FaFolder,FaMicrophone,FaPaintBrush    } from "react-icons/fa";




export default function Productfeatures() {

        const features = [
            {
                title: "AAC Board",
                icon:     <div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaThLarge />
              </div>,
                description: "Empower communication with customizable AAC boards.",
            },
            {
                title: "Language Games",
                icon:   <div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaGamepad />
              </div>,
                description: "Interactive games to boost language skills and enhance communication in a fun.",
            },
            {
                title: "Emergency Alarm",
                icon:<div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaBell />
              </div>,
                description: "A safety feature enabling users to send an emergency alert instantly with just one tap.",
            },
            {
                title: "Customizable Folders",
                icon:   <div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaFolder />
              </div>,
                description: "Organize words and phrases into folders tailored to individual needs, enhancing usability and accessibility.",
            },
            {
                title: "Voice Commander with Multi-Voice Options",
                icon:     <div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaMicrophone />
              </div>,
                description: "Empowers children with voice options and command navigation for a personalized, independent AAC experience.",
            },
            {
                title: "Interactive Whiteboard",
                icon:     <div className="w-14 h-14 bg-gradient-to-br from-[#DA159B] to-[#54169C] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <FaPaintBrush />
              </div>,
                description: "A playful space where children can draw, express ideas, and communicate visually in their own way",
            },
        ];
 

  return (
    <section className="text-black bg-gradient-to-br from-[#DA159B]/75 to-[#54169C]/90 py-20 md:py-24 px-4 md:px-10 overflow-hidden relative"  id="">
    {/* Background Bubbles */}
    <div className="absolute -top-16 -left-16 w-60 h-60 bg-[#45465B] rounded-full opacity-30 blur-3xl" />
    <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl" />
    <div className="relative max-w-6xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wide text-pink-300 font-semibold">Features</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
        Explore the Unique Features of SpeechSync
        </h2>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
                <div
                    key={idx}
                    className="bg-white  rounded-xl p-6 text-left hover:shadow-xl transition-shadow"
                >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className=" font-semibold text-2xl sm:text-2xl  text-black">{feature.title}</h3>
                    <p className="mt-2 text-sm text-black">{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
    .
</section>


 
  );
}
