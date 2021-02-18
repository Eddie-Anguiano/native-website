import { useState, useEffect } from "react";
import styles from "../styles/components/Hero.module.scss";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { fadeUpIn, parentStaggerDelay } from "../utils/animations";

export default function Hero() {
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
        src="/images/background-part.png"
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
            and Sacred Site of Puvungna.
          </motion.p>
        </motion.div>
      </Wrapper>
    </div>
  );
}
