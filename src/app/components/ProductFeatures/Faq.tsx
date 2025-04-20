"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const faqData = [
  {
    question: "What is SpeechSync?",
    answer: "SpeechSync is a communication app designed to support specially-abled children in expressing themselves clearly and comfortably.",
  },
  {
    question: "Can I use SpeechSync on multiple devices?",
    answer: "Yes, you can use the same account on multiple devices seamlessly.",
  },
  {
    question: "How do I download Speech Sync?",
    answer: "You can download it from both the App Store and Google Play Store.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We prioritize your privacy and security with robust encryption.",
  },
  {
    question: "Do I need to create an account to use the app?",
    answer: "No, you can use most features without an account, but some advanced options require login.",
  },
  {
    question: "Are there any in-app purchases?",
    answer: "The core app is free, but we offer optional in-app purchases for enhanced features.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="  px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center mb-3">
          <Image
            src="/verified.png"
            alt="Verified Icon"
            className="w-8 h-8 mr-1"
            width={800}
            height={500}
          />
          <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
            FAQ
          </div>
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          If you don’t see an answer to your question,<br />
          you can send us an email from our contact form.
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-lg font-medium text-left text-[#54169C]"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 transition-all">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
