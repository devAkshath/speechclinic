export default function TeamWaveBackground() {
  return (
    <>
      {/* SVG for small screens */}
      {/* <div className="block md:hidden w-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 390 844"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mobileGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stopColor="#54169C" />
              <stop offset="80%" stopColor="#DA159B" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C100,300 300,100 390,300 L390,844 L0,844 Z"
            fill="url(#mobileGradient)"
            opacity="1"
          />
        </svg>
      </div> */}

<div className="block md:hidden w-full">
<svg
          width="100%"
          height="100%"
          viewBox="0 0 390 899"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mobileGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stopColor="#54169C" />
              <stop offset="80%" stopColor="#DA159B" />
            </linearGradient>
          </defs>
    <path
      d="
        M0,100
        C100,300 300,100 390,300
        L390,790
        C390,820 300,844 195,944
        C90,844 0,820 0,790
        Z
      "
      fill="url(#mobileGradient)"
      opacity="1"
    />
  </svg>
</div>


      {/* SVG for medium and up screens */}
      <div className="hidden md:block w-full mt-[-2px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="blurEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
            </filter>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="20%" stopColor="#54169C" />
              <stop offset="80%" stopColor="#DA159B" />
            </linearGradient>
          </defs>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="rgba(255, 255, 255, 0.1)"
            filter="url(#blurEffect)"
            style={{ backdropFilter: "blur(10px)" }}
          />

          <path
            d="M -196 281 C -100 300 596 533 820 -197 H 1800 C 1900 -200 2100 -200 2100 -200 C 2100 100 2100 400 2097 533 C 1390 1217 128 973 -193 592"
            fill="url(#gradient)"
            opacity="1"
          />

          <path
            d="M0,200 C400,500 800,100 1200,300 C1600,500 1920,250 1920,600 L1920,1080 L0,1080 Z"
            fill="url(#gradient)"
            className="sm:hidden"
          />
        </svg>
      </div>
    </>
  );
}
