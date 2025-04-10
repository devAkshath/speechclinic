"use client";
import { useState } from "react";

import Image from "next/image";
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white text-center rounded-2xl p-4 space-y-2 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer max-w-xs "
        onClick={() => setOpen(true)}
      >
        <div className="rounded-xl overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            width={320}
            height={200}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        <div className="p-2">
          <h2 className="text-base font-semibold">{member.name}</h2>
          <p className="text-purple-600 text-xs">{member.role}</p>
        </div>

        {/* Bottom line on hover */}
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
                  <p>
                    <span className="font-semibold text-purple-700">
                      Masters in Pediatric Speech & Language Therapy
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Experience:
                    </span>{" "}
                    10 Years
                  </p>
                  <p className="font-semibold text-gray-800">Certified in:</p>
                  <ul className="list-disc list-inside pl-2 space-y-1 text-gray-700">
                    <li>
                      <span className="text-green-600 font-bold">✓</span> PROMPT
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span> OPT
                      LEVEL 3
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Sensory Motor Apraxia of Speech
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span> DIR
                      FLOOR TIME
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Feeding Therapy
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Assessor - ADOS 2
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Nuffield Dyspraxia Program
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Sensory Integration Level 2
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Certified Sensory Speech Therapist from Inside Out
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Trained in Gestalt Processing and Hanen Approach
                    </li>
                    <li>
                      <span className="text-green-600 font-bold">✓</span>{" "}
                      Therapeutic Listening & Movement Program
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
