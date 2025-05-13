import React from "react";

const HeroRecMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ width: "100%", overflow: "hidden" , paddingTop: 'clamp(5rem, 2vw, 5rem)',}}
      className="relative w-full h-auto  pl-3 pr-3 "
      
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -480 3149 6019"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
             style={{
          padding: 'clamp(0.001rem, 0vw, 5rem)',
          paddingTop: 'clamp(0rem, 0vw, 0rem)',
        }}
      >
        <defs>
          <linearGradient
            id="id0"
            gradientUnits="userSpaceOnUse"
            x1="1879.13"
            y1="1256.27"
            x2="1270.26"
            y2="2962.3"
          >
            <stop offset="0" stopColor="#54169C" />
            <stop offset="1" stopColor="#DA159B" />
          </linearGradient>
        </defs>
        <path
          fill="url(#id0)"
          d="M2590 4218l-2238 -35c-302,-17 -359,-144 -351,-424l88 -3371c6,-209 174,-357 382,-360l1976 -27c266,-4 480,-13 499,313l202 3379c23,388 -240,530 -558,525zm30 -212c216,16 345,-88 335,-322l-154 -3383c-8,-184 -127,-219 -293,-215l-2063 49c-114,3 -210,76 -215,189l-140 3477c-7,169 35,284 202,279l2328 -74z"
        />{" "}
                 <g transform="translate(1700,3400) scale(3.3) ">
        <path
          d="M299 111c61,43 75,127 32,188 -43,61 -127,75 -187,32 -61,-43 -76,-127 -33,-187 43,-61 127,-76 188,-33z"
          fill="none"
          stroke="#FF1CB7"
          strokeWidth="62.496"
          strokeOpacity="0.49"
        />
        <path
          d="M313 419c-71,33 -154,25 -217,-20 -99,-69 -122,-205 -53,-303 69,-99 205,-122 304,-53 47,33 79,84 89,141"
          fill="none"
          stroke="#BF87FF"
          strokeWidth="6.56154"
          strokeOpacity="0.49"
        />
      </g>
       <g transform="translate(150,-270)  scale(4)  ">
        <path
          d="M94 19c42,0 75,34 75,75 0,42 -33,75 -75,75 -41,0 -75,-33 -75,-75 0,-41 34,-75 75,-75z"
          fill="none"
          stroke="#54169C"
          strokeWidth="42.496"
          strokeOpacity="0.39"
        />
     
      </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center mb-50 ml-3.5 mr-4.5">
        {children}
      </div>
    </div>
  );
};

export default HeroRecMobile;
