'use client';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';

// Define the animation variants
const anim = {
  initial: { width: 0 },
  open: {
    width: 'auto',
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  },
  closed: { width: 0 }
};

// Define the project prop type
interface ProjectProps {
  project: {
    title1: string;
    title2: string;
    src: string;
      link: string; 
  };
}

// Component name changed from `index` to `ProjectCard`
export default function ProjectCard({ project }: ProjectProps) {
  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src , link } = project;

  return (
   
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={styles.project}
    >
      <Link href={link} passHref>  <p className='text-transparent bg-clip-text bg-gradient-to-br  from-[#DA159B] to-[#54169C]'>{title1}</p></Link>
       <Link href={link} passHref> 
      <motion.div
        variants={anim}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className={styles.imgContainer}
      >
        <Image
        width={500} height={500} src={`${src}`} alt={title1} />
      </motion.div>
      </Link>
      <Link href={link} passHref>  <p className="text-transparent bg-clip-text bg-gradient-to-tr font-medium from-[#DA159B] to-[#54169C]">{title2}</p></Link>
    </div>
  
  );
}

