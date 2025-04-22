'use client';

import { useEffect } from 'react';
import "./floatingbutton.css";

export default function ScrollProgress() {
  useEffect(() => {
    const progressWrap = document.querySelector('.progress-wrap') as HTMLElement;
    const progressPath = document.querySelector('.progress-wrap path') as SVGPathElement;

    if (!progressWrap || !progressPath) return;

    const pathLength = progressPath.getTotalLength();
    const offset = 50;

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = `${progress}`;

      if (scroll >= offset) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    window.addEventListener('scroll', updateProgress);

    progressWrap.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateProgress(); 

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="progress-wrap">
      <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="progress-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DA159B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </div>
    </div>
  );
}
