import React from "react";

const RectangleSvg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ width: '100%', overflow: 'hidden' }} className="relative w-full h-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8902 5700"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        style={{
          padding: 'clamp(1rem, 10vw, 15rem)',
          paddingTop: 'clamp(1rem, 3vw, 2rem)',
        }}
      >
        <defs>
          <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="3992.81" y1="4231.3" x2="4909.4" y2="1438.93">
            <stop offset="0" stopColor="#54169C" />
            <stop offset="1" stopColor="#DA159B" />
          </linearGradient>
        </defs>
        <path
          d="M538 255l8009 -255c297,-9 366,142 354,418l-200 4480c-9,206 -164,344 -367,355l-7715 413c-261,14 -489,14 -498,-308l-121 -4586c-10,-383 225,-507 538,-517zm-25 205c-242,13 -381,75 -375,340l100 4562c4,194 143,213 304,205l7822 -421c116,-6 216,-70 221,-196l166 -4595c6,-170 -75,-239 -259,-231l-7979 336z"
          fill="url(#id0)"
        />
           <g transform="translate(500,700) scale(3) ">
        <path
          d="M299 111c61,43 75,127 32,188 -43,61 -127,75 -187,32 -61,-43 -76,-127 -33,-187 43,-61 127,-76 188,-33z"
          fill="none"
          stroke="#FF1CB7"
          strokeWidth="52.496"
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
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default RectangleSvg;
