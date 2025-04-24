'use client';

import { useEffect, useRef } from 'react';
import './animatedcurveline.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCurveLine() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
  start: 'top 45%',
    end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="line-container">
      <svg width="2000" height="2000" viewBox="0 0  700 2000" fill="none" xmlns="http://www.w3.org/2000/svg ">
      
        <g clipPath="url(#clip0_5_2)">
          <path
            ref={pathRef}
            className="path"
            d="M 1235 117 C 745 121 102 361 144.223 631.238 C 169 765 559.515 782.846 608.808 617.456 C 819 254 516 329 406.298 426.797 C 228 581 941 474 1020 564 C 1180 756 45 1143 -371 935"
            stroke="#DA159B"
            strokeWidth="5"  preserveAspectRatio="xMidYMid slice"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5_2">
            <rect width="3000" height="3000" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
