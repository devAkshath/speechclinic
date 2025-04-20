import NavBarSecond from "../components/NavBar/NavBarSecond";
import "./contact.css";
import Image from "next/image";

export default function Contact() {
  const features = [
    {
      icon: "/gallery1.svg",
      title: "Office Address",
      desc: "Dubai healthcare city, Building 47, Unit 301 & 302",
    },
    {
      icon: "/gallery2.svg",
      title: "Call Us",
      desc: "+971-508857146\n+971-4433 9891",
    },
    {
      icon: "/gallery3.svg",
      title: "Email Us",
      desc: "info@thespeechclinic.ae",
    },
    {
      icon: "/gallery4.svg",
      title: "Open Time",
      desc: "Mon - Sat\n(09.00AM - 07.00PM)",
    },
  ];

  return (
    <div className="contact-container text-left bg-white">
      <header>
        <NavBarSecond />
      </header>
      {/* Row 1: Title */}
      <h1 className="contact-title mb-8 bg-gradient-to-b  from-[#DA159B] to-[#54169C] bg-clip-text text-transparent">
        Contact US
      </h1>

      {/* Row 2: Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <p className="contact-description text-xl lg:text-2xl mb-8">
            Got a question? Fill in your details. We’re here to help! Reach out
            to us for inquiries about speech therapy services, appointments, and
            more. We look forward to connecting.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-white p-3 rounded-[30px] shadow-sm relative overflow-hidden text-left border-2 border-pink-300 h-full"
            >
              <div className="flex flex-col h-full">
                <div className="bg-pink-50 text-black w-20 h-20 flex items-center justify-center rounded-[10px] rounded-tr-[40px] mb-4">
                  <Image
                    src={feature.icon}
                    alt={`feature-${index}`}
                    width={80}
                    height={80}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-950">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-900 whitespace-pre-line">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white p-8 rounded-[30px] shadow-sm w-full border-2 border-pink-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Contact The Speech Clinic
          </h2>

          <form className="grid grid-cols-1 gap-4">
            {/* Guardian Name */}
            <div className="group">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Guardian Name"
                className="input"
              />
            </div>

            {/* Guardian Email */}
            <div className="group">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16v16H4z"
                  fill="none"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="M4 4l8 8 8-8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="email"
                placeholder="Guardian Email"
                className="input"
              />
            </div>

            {/* Child Name */}
            <div className="group">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14.5c4 0 7.5 2 7.5 5v.5H4.5V19.5c0-3 3.5-5 7.5-5z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <input type="text" placeholder="Child Name" className="input" />
            </div>

            {/* Child Age */}
            <div className="group">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8v4l3 2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <input type="text" placeholder="Child Age" className="input" />
            </div>

            {/* Guardian Mobile Number */}
            <div className="group md:col-span-2">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5h2l3.5 7L6 16.5 10.5 21H15v-5l-3-3.5L17 9l2-4H3z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Guardian Mobile Number"
                className="input"
              />
            </div>

            {/* Message */}
            <div className="group md:col-span-2">
              <svg
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <textarea
                placeholder="Write Your Message"
                className="input resize-none"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="custom-button type1 relative overflow-hidden border-1 border-[#252525] text-[#333] font-medium tracking-widest w-[180px] h-[40px] rounded-2xl transition-all duration-500 ease-in-out  hover:text-white"
              >
                <span className="btn-txt relative z-10">Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Google Map Row */}
      <div className="w-full h-[70vh] mt-12 rounded-4xl">
        <iframe
          title="The Speech Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.473867723274!2d55.3161399!3d25.2297218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347e5d3f0c3%3A0xa6f1ae6b3fbd55bb!2sDubai%20Healthcare%20City%2C%20Building%2047!5e0!3m2!1sen!2sae!4v1713500000000!5m2!1sen!2sae"
          className="w-full h-full border-2  border-pink-300 shadow-sm rounded-3xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
