'use client';

// import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Person One',
    designation: 'Parent',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    name: 'Person Two',
    designation: 'Father',
    text: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
  },
  // Add more if needed
];

const Testimonial = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 py-12">
      {/* === Top Info Section === */}
      <div className="text-center max-w-2xl w-full space-y-4">
        {/* Row 1: Label */}
        <div className="inline-flex items-center justify-center mb-2">
          <img src="/verified.png" alt="Verified Icon" className="w-8 h-8 mr-2" />
          <div className="text-md font-light text-white bg-gradient-to-r from-[#54169C] to-[#DA159B] px-6 py-1 rounded-2xl">
            Testimonials
          </div>
        </div>

        {/* Row 2: Heading */}
        <h2 className="text-3xl font-semibold text-gray-700 leading-snug">
          What Parents Say
        </h2>

        {/* Row 3: Description */}
        <p className="text-md text-gray-500">
          Hear from families about how our Speech Clinic has helped improve their <br />
          children&lsquo;s communication and confidence.
        </p>

    
      </div>

      {/* === Bottom Slider Section === */}
      <div className="mt-16 w-full max-w-6xl">
    <div className="relative">
    <div className="flex flex-col md:flex-row gap-4 w-full px-4">
      {testimonials.slice(0, 2).map((testimonial, idx) => (
        <div
          key={idx}
          className="flex-1 border rounded-2xl p-6 relative bg-white"
          style={{ borderColor: '#DA159B' }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between px-0 text-white text-lg font-semibold">
  {/* Gradient Header on Left */}
  <div className="h-full w-3/4 bg-gradient-to-r from-[#54169C] to-[#DA159B] flex items-center px-4 rounded-br-[270px] rounded-tr-xl rounded-tl-4xl">
    <div>
      {testimonial.name}
      <div className="text-sm font-light">{testimonial.designation}</div>
    </div>
  </div>

  {/* Stars Outside on Right */}
  <div className="text-yellow-400 text-xl flex items-center gap-1 px-5">
    {[...Array(5)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
</div>

          {/* Body */}
          <div className="mt-24 text-gray-600 text-sm">{testimonial.text}</div>
        </div>
      ))}
    </div>

    <div className="text-center mt-4"> 
      <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm">
        Get in Touch
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Testimonial;
