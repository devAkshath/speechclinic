"use client";
import React, { useState } from "react";
import NavBarSecond from "../components/NavBar/NavBarSecond";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    guardianName: "",
    guardianEmail: "",
    childName: "",
    childAge: "",
    guardianMobile: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <header>
        <NavBarSecond />
      </header>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-pink-500 to-purple-600 pattern-dots pattern-gray-400 pattern-bg-white pattern-size-4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#DA159B] to-purple-600">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 text-center mt-6 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Whether you have a question about
            our services, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
        </div>
      </section>
      {/* Contact Information Block */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/gallery1.svg"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Our Office
              </h3>
              <p className="text-gray-600">
                <a
                  href="https://www.google.com/maps?ll=25.229031,55.322413&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=14517416241218903551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors"
                >
                  Dubai healthcare city
                  <br />
                  Building 47
                  <br />
                  Unit 301 & 302
                </a>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/gallery2.svg"
                  alt="Email Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Email Us
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:info@thespeechclinic.ae"
                  className="hover:text-purple-600 transition-colors"
                >
                  info@thespeechclinic.ae
                </a>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src="/gallery4.svg"
                  alt="Call Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">
                Call Us
              </h3>
              <p className="text-gray-600">
                <a
                  href="tel:+971508857146"
                  className="hover:text-purple-600 transition-colors"
                >
                  +971-508857146
                </a>
                <br />
                <a
                  href="tel:+97144339891"
                  className="hover:text-purple-600 transition-colors"
                >
                  +971-4433 9891
                </a>
                <br />
                Mon - Sat (9AM - 7PM)
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 bg-gradient-to-tr from-[#DA159B] to-[#54169C] flex items-center justify-center">
                <div>
                  <h3 className="text-white text-3xl font-medium mb-6">
                    Get in Touch
                  </h3>
                  <p className="text-pink-100 mb-8">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </p>

                  {/* Location */}
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <img
                        src="/gallery1.svg"
                        alt="Location Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white">
                      <a
                        href="https://www.google.com/maps?ll=25.229031,55.322413&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=14517416241218903551"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-200 transition-colors"
                      >
                        Dubai healthcare city, Building 47
                      </a>
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <img
                        src="/gallery2.svg"
                        alt="Phone Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white">
                      <a
                        href="tel:+971508857146"
                        className="hover:text-pink-200 transition-colors"
                      >
                        +971-508857146
                      </a>
                      <br />
                      <a
                        href="tel:+97144339891"
                        className="hover:text-pink-200 transition-colors"
                      >
                        +971-4433 9891
                      </a>
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      <img
                        src="/gallery3.svg"
                        alt="Email Icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white">
                      <a
                        href="mailto:info@thespeechclinic.ae"
                        className="hover:text-pink-200 transition-colors"
                      >
                        info@thespeechclinic.ae
                      </a>
                    </span>
                  </div>

                </div>
              </div>
              <div className="full p-10">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="guardianName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Guardian Name
                      </label>
                      <input
                        type="text"
                        id="guardianName"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        placeholder="Enter guardian's full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="guardianEmail"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Guardian Email
                      </label>
                      <input
                        type="email"
                        id="guardianEmail"
                        name="guardianEmail"
                        value={formData.guardianEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        placeholder="guardian@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="childName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Child Name
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                        placeholder="Enter child's full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="childAge"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Child Age
                      </label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        min="0"
                        max="18"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="Enter child's age"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="guardianMobile"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Guardian Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="guardianMobile"
                      name="guardianMobile"
                      value={formData.guardianMobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                      placeholder="Any additional information or questions?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-tl from-[#54169C] to-[#DA159B] text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 relative">
            <iframe
              title="The Speech Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7218.468674642141!2d55.322413!3d25.229031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0c9a8d4fd9%3A0xc9783927a256ddff!2sThe%20Speech%20Clinic%20Dubai!5e0!3m2!1sen!2sin!4v1748097006542!5m2!1sen!2sin"
              className="w-full h-full border-2 border-pink-300 shadow-sm rounded-3xl"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* Social Media Section */}
      {/* <section className="py-16 bg-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">
      Connect With Us
    </h2>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      Stay updated with our latest news, promotions, and announcements by
      following us on social media.
    </p>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Facebook */}
      {/* <a href="#" className="group cursor-pointer">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg">
          <i className="fab fa-facebook text-white text-2xl"></i>
        </div>
        <p className="mt-2 text-gray-700 font-medium">Facebook</p>
      </a> */}
      {/* Twitter */}
      {/* <a href="#" className="group cursor-pointer">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg">
          <i className="fab fa-twitter text-white text-2xl"></i>
        </div>
        <p className="mt-2 text-gray-700 font-medium">Twitter</p>
      </a> */}
      {/* Instagram */}
      {/* <a href="#" className="group cursor-pointer">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg">
          <i className="fab fa-instagram text-white text-2xl"></i>
        </div>
        <p className="mt-2 text-gray-700 font-medium">Instagram</p>
      </a> */}
      {/* LinkedIn */}
      {/* <a href="#" className="group cursor-pointer">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg">
          <i className="fab fa-linkedin text-white text-2xl"></i>
        </div>
        <p className="mt-2 text-gray-700 font-medium">LinkedIn</p>
      </a> */}
      {/* YouTube */}
      {/* <a href="#" className="group cursor-pointer">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-lg">
          <i className="fab fa-youtube text-white text-2xl"></i>
        </div>
        <p className="mt-2 text-gray-700 font-medium">YouTube</p>
      </a>
    </div> */}
      {/* </div>
</section> */}
    </div>
  );
};
export default App;
