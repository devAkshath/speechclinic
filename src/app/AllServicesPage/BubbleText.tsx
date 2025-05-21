import React from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
return (
  <h2 className="text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-700">
    {"Services".split("").map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char}
      </span>
    ))}
  </h2>
);

};

export default BubbleText;
