'use client';
import React, { useEffect } from 'react';
import '../herocurve/wavemotion'; 

export default function GradientBackground() {
  useEffect(() => {
    const interBubble = document.querySelector('.interactive') as HTMLDivElement;
    let curX = 0, curY = 0, tgX = 0, tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const onMouseMove = (e: MouseEvent) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move();

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="gradient-bg">
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="17" result="blur" />
          <feColorMatrix in="blur" mode="matrix"
            values="
              1 0 0 0 0  
              0 1 1 0 0  
              0 0 1 1 0  
              0 0 0 10 -20"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
}
