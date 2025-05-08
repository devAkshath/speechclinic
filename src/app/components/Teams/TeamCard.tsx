"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  qualification: string;
  experience: string;
  certifications: string[];
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  

  return (
    <>
      <div className="group relative bg-white text-center rounded-2xl p-4 space-y-2 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer max-w-xs"
        onClick={() => setOpen(true)}>
        {/* Image Section */}
        <div className="relative">
          <Image
            src={member.image}
            alt={member.name}
            width={320}
            height={200}
            className="w-full h-auto object-cover"
          />

          {/* Bottom Curve - SVG Carve */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
            <svg
              viewBox="0 0 500 50"
              preserveAspectRatio="none"
              className="w-full h-[60px]"
            >
              <path
                d="M0,0 C150,60 350,60 500,0 L500,50 L0,50 Z"
                className="fill-white "
              />
            </svg>
          </div>
        </div>
        {/* Info & Eye Icon - overlapping with curve */}
        <div className="relative -mt-3 px-5 pb-5 pt-8 z-30 bg-white ">
          <div className="flex items-center justify-between">
            {/* Text Info */}
            <div className="text-left ">
              <h1 className="text-[1.3rem] font-normal text-gray-800 leading-snug">
                {member.name}
              </h1>
              <p className="text-sm text-purple-600">{member.role}</p>
            </div>
            {/* Floating Glass Eye Icon */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              className="absolute -top-13 right-4 w-11 h-11 rounded-full  bg-[#6E1FB8] text-white shadow-lg backdrop-blur-md flex items-center justify-center  hover:bg-pink-600 hover:scale-105 transition z-10"
              aria-label="View Details"
            >
              <FaEye className="text-xl" />
            </button>
          </div>
        </div>
        {/* Gradient underline on hover */}
        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#DA159B] to-[#54169C]" />
      </div>
      {open && (
       <div className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center px-4">
       <div ref={modalRef} className="bg-white w-full max-w-4xl p-1 rounded-3xl relative overflow-hidden max-h-[90vh] shadow-xl transition-all duration-500 ">
     
         {/* Stylish Header with Close Button on the Right */}
         <div className="w-full bg-fuchsia-900  p-4 rounded-t-3xl flex justify-between items-center shadow-lg">
           {/* Empty space to push the button to the right */}
           <p className="text-lg text-white font-meduim">{member.name}</p>
           <div className="flex-grow"></div>
     
           <button
             className="text-3xl font-meduim text-white hover:text-gray-300 transition-all duration-200 ease-in-out transform hover:scale-125"
             onClick={() => setOpen(false)}
           >
             ×
           </button>
         </div>
     
         {/* Modal Content */}
         <div className="flex flex-col md:flex-row gap-8 p-8 items-start mt-6 overflow-y-auto max-h-[75vh]">
           {/* Image */}
           <div className="flex-shrink-0 mx-auto md:mx-0">
             <Image
               src={member.image}
               alt={member.name}
               width={300}
               height={400}
               className="rounded-2xl shadow-lg transition-transform transform hover:scale-105"
             />
           </div>
     
           {/* Info Section */}
           <div className="flex-1 text-gray-700 space-y-6">
             <div>
               <p className="text-lg text-gray-600 font-meduim old">{member.role}</p>
             </div>
     
             <div className="text-sm md:text-base space-y-2 my-4">
               {member.qualification && (
                 <p>
                   <span className="font-normal text-purple-700">{member.qualification}</span>
                 </p>
               )}
               {member.experience && (
                 <p>
                   <span className="font-meduim text-gray-800">Experience:</span> {member.experience}
                 </p>
               )}
               {member.certifications?.length > 0 && (
                 <>
                   <p className="font-light text-gray-800">Certified in:</p>
                   <ul className="pl-4 space-y-3 text-gray-700">
                     {member.certifications.map((cert, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <div className="min-w-[32px] mt-1">
                           <div className="bg-purple-300 rounded-full w-6 h-6 flex items-center justify-center">
                             <svg
                               className="w-4 h-4 text-purple-800"
                               fill="none"
                               stroke="currentColor"
                               strokeWidth="6"
                               viewBox="0 0 24 24"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M5 13l4 4L19 7"
                               />
                             </svg>
                           </div>
                         </div>
                         <span className="pt-0.5">{cert}</span>
                       </li>
                     ))}
                     <hr />
                   </ul>
                 </>
               )}
             </div>
           </div>
         </div>
       </div>
     </div>
     
      )}
    </>
  );
}
