// Global Imports
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Component Imports
import Wrapper from "./Wrapper";
// Util Imports
import { fadeUpIn, parentStaggerDelay } from "../utils/animations";
// Styles Imports
import styles from "../styles/components/Hero.module.scss";

export default function Hero() {
  // Background Paralax Effect
  const [offsetY, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.Hero}>
      <div
        className={styles.backgroundFull}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}></div>
      <img
        src="/images/home/background-part.png"
        alt=""
        className={styles.parallax}
      />

      <Wrapper>
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentStaggerDelay}
          className={styles.container}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <motion.h1 variants={fadeUpIn} className={styles.header}>
            Puvunga Wetlands Protectors
          </motion.h1>
          <motion.p variants={fadeUpIn} className={styles.content}>
            Prevent the extraction of 200 million barrels of oil from beneath
            the Los Cerritos Wetlands! Preserve the Traditional Tribal Landscape
            and Sacred Site of Puvunga.
          </motion.p>
        </motion.div>
      </Wrapper>
    </div>
  );
}
