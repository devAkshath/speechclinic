import Link from 'next/link';

const ServicesList = () => {
  const services = [
    { name: 'Vocabulary Support', href: '/services/vocabulary-support' },
    { name: 'Language Therapy', href: '/services/language-therapy' },
    { name: 'Hearing Screenings', href: '/services/hearing-screenings' },
    { name: 'Expressive Language', href: '/services/expressive-language' },
    { name: 'Therapeutic Listening', href: '/services/therapeutic-listening' },
    { name: 'Evaluations Speech', href: '/services/evaluations-speech' },
    { name: 'Occupational Therapy', href: '/occupational-therapy' },
    { name: 'Pediatric Hand Therapy', href: '/services/pediatric-hand-therapy' },
    { name: 'First Steps Therapy', href: '/services/first-steps-therapy' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-white text-center bg-pink-500 py-4 rounded-lg">
        Our Service
      </h2>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 ${
              service.name === 'Expressive Language' ? 'text-pink-500' : 'text-[#54169C]'
            } ${index !== services.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <span className="text-lg">{service.name}</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesList; 