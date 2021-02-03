import { useState, useEffect } from "react";
import styles from "../styles/components/Hero.module.scss";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";

const parentVar = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1,
    },
  },
};

const childVar = {
  initial: {
    y: "30px",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

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
          variants={parentVar}
          className={styles.container}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <motion.h1 variants={childVar} className={styles.header}>
            Puvunga Wetlands Protectors
          </motion.h1>
          <motion.p variants={childVar} className={styles.content}>
            Stop the extraction of 200 million barrels of oil from beneath the
            Los Cerritos Wetlands and neighboring communities, putting them at
            risk. Preserve the existing wetlands ecosystem and Tribal
            Traditional Landscape of Puvunga.
          </motion.p>
        </motion.div>
      </Wrapper>
    </div>
  );
}
