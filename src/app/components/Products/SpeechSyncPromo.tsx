import Image from "next/image";

const SpeechSyncCard: React.FC = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden rounded-lg ">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 7780 3378"
        className="absolute inset-0 -z-10"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
      >
        <defs>
          <linearGradient
            id="id0"
            gradientUnits="userSpaceOnUse"
            x1="3573.52"
            y1="2652.89"
            x2="4206.29"
            y2="725.169"
          >
            <stop offset="0" style={{ stopOpacity: 1, stopColor: "#DA159B" }} />
            <stop offset="1" style={{ stopOpacity: 1, stopColor: "#54169C" }} />
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#id0)"
            d="M7340 2l-7047 535c-240,18 -318,116 -286,337l241 1665c24,165 132,273 297,287l6475 546c210,18 368,10 402,-249l353 -2703c40,-307 -182,-437 -435,-418z"
          />
        </g>
        <g transform="translate(7200,700) scale(5) ">
        <path
          d="M38 169c-27,-36 -19,-87 17,-114 36,-27 87,-19 114,17 27,36 19,87 -17,114 -36,27 -88,19 -114,-17z"
          fill="none"
          stroke="#FF1CB7"
          strokeWidth="52.496"
          strokeOpacity="0.49"
        />
        <path
          d="M6 51c-10,-14 -7,-34 7,-45 14,-10 34,-7 45,7 10,14 7,34 -7,45 -14,10 -34,7 -45,-7z"
          fill="none"
          stroke="#BF87FF"
          strokeWidth="6.56154"
          strokeOpacity="0.49"
        />
      </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-start p-10 gap-0 bg-transparent">
        {/* Column 1: Image */}
        <div
          className="relative"
          style={{
            top: "clamp(-2rem, -4vw, -4.25rem)",
            left: "clamp(1rem, 8vw, 9.5rem)",
          }}
        >
          <Image
            src="/speechsyncipad.png"
            alt="Speech Sync iPad"
            width={500}
            height={400}
            className="rounded-lg"
            style={{
              width: "clamp(300px, 50vw, 500px)",
              height: "auto",
            }}
          />
        </div>

        {/* Column 2: Text Content */}
        <div className=" flex-col space-y-5 text-left  w-2xl ml-30 pr-0 pt-20">
          {/* Row 1: Badge */}
          <div className="inline-flex items-center justify-start mb-3 ">
            {/* <Image
              src="/verified.png"
              alt="Verified Icon"
              className="w-8 h-8 mr-2 "
              width={800}
              height={500}
            /> */}
            <div
              style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
              className="text-lg text-gray-800 bg-white px-6 py-1 rounded-2xl"
            >
              
              Our Products
            </div>
          </div>

          {/* Row 2: Heading */}
          <h2
            style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
            className="text-3xl text-white leading-snug "
          >
            Breaking Barriers in
            <br />
            Communication
          </h2>

          {/* Row 3: Description */}
          <p
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="text-md text-white  "
          >
            Empowering communication with advanced speech therapy tools. Our
            products are designed to support children with autism and speech
            impairments, providing engaging and effective solutions for language
            development.
          </p>

          {/* Row 4: Button */}
          <button
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="cursor-pointer inline-flex items-center justify-start bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-2 px-6 rounded-[40px] font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300 "
          >
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechSyncCard;
