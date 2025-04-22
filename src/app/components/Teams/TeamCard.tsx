"use client";
import { useState } from "react";
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

  return (
    <>
      <div
        className="group relative bg-white text-center rounded-2xl p-4 space-y-2 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer max-w-xs"
        onClick={() => setOpen(true)}
      >

        <div className="relative rounded-xl overflow-hidden">
   
          <div className="w-24 h-24 rounded-full absolute -right-5 -top-7">
            <FaEye className="text-black text-xl" />
          </div>

          <Image
            src={member.image}
            alt={member.name}
            width={320}
            height={200}
            className="rounded-xl w-full h-auto object-cover"

          />

          {/* Eye Icon - bottom right corner, styled like a carved detail popup button */}
          <div
            className="w-20 h-20 bg-gradient-to-r from-[#DA159B]/98 to-[#54169C]/90 rounded-full absolute -bottom-8 -right-7 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
       
          >
            <FaEye className="text-white text-3xl  absolute bottom-10 left-4" />
          </div>


        </div>

        <div className="p-2">
          <h2 className="text-base font-semibold">{member.name}</h2>
          <p className="text-purple-600 text-xs">{member.role}</p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full bg-gradient-to-r from-[#DA159B] to-[#54169C]" />
      </div>


      {open && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-4xl p-6 rounded-2xl relative overflow-y-auto max-h-[90vh] shadow-xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-purple-600 hover:text-purple-800"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Image */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-md object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-gray-700 space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {member.name}
                  </h2>
                  <p className="text-lg text-gray-600">{member.role}</p>
                </div>

                <div className="text-sm md:text-base space-y-1">
                  {member.qualification && (
                    <p>
                      <span className="font-semibold text-purple-700">
                        {member.qualification}
                      </span>
                    </p>
                  )}
                  {member.experience && (
                    <p>
                      <span className="font-semibold text-gray-800">
                        Experience:
                      </span>{" "}
                      {member.experience}
                    </p>
                  )}
                  {member.certifications?.length > 0 && (
                    <>
                      <p className="font-semibold text-gray-800">
                        Certified in:
                      </p>
                      <ul className="pl-2 space-y-2 text-gray-700">
                        {member.certifications.map((cert, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="min-w-[32px] mt-1">
                              <div className="bg-pink-300 rounded-full w-6 h-6 flex items-center justify-center">
                                <svg
                                  className="w-4 h-4 text-pink-950"
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
