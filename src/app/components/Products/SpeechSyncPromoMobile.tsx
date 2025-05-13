import Image from "next/image";

const SpeechSyncPromoMobile: React.FC = () => {
  return (
    <div
     style={{ width: "100%",overflow: "hidden" ,}}
     className="relative w-full h-full">
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="100%"
          height="100%"
          viewBox="0 0 3180 5999"
        >
          <defs>
            <linearGradient
              id="id0"
              gradientUnits="userSpaceOnUse"
              x1="1318.15"
              y1="2852.32"
              x2="1861.46"
              y2="1197.13"
            >
              <stop
                offset="0"
                style={{ stopOpacity: 1, stopColor: "#54169C" }}
              />
              <stop
                offset="1"
                style={{ stopOpacity: 1, stopColor: "#DA159B" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#id0)"
            d="M2724 2l-2426 231c-249,23 -305,118 -297,350l109 4069c6,173 138,283 308,297l2092 -59c219,-7 397,11 417,-259l248 -4195c41,-319 -189,-454 -451,-434z"
          />
        </svg>
      </div>
      <div className="relative flex flex-col items-center justify-start p-7  space-y-4">
        <div className="inline-flex items-center justify-start mb-3 mt-8">
          <div
            style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
            className="text-lg text-gray-800 bg-white px-6 py-1  rounded-2xl"
          >
            Our Products
          </div>
        </div>
        <h2
          style={{ fontFamily: "HuluStyle", fontWeight: 500 }}
          className="text-3xl text-white leading-snug"
        >
          Breaking Barriers in
          <br />
          Communication
        </h2>
        <p
          style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
          className=" text-white text-base"
        >
          Empowering communication with advanced speech therapy tools. Our
          products are designed to support children with autism and speech
          impairments, providing engaging and effective solutions for language
          development.
        </p>
        <button
          style={{ fontFamily: "HuluStyle", fontWeight: 400 }}
          className="inline-flex items-center justify-start bg-gradient-to-br from-[#DA159B] to-[#54169C] text-white py-1.5 px-4 rounded-[40px] font-medium hover:from-purple-600 hover:to-pink-600 transition duration-300"
        >
          Discover More
        </button>

        <div className="relative">
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
      </div>
    </div>
  );
};

export default SpeechSyncPromoMobile;
