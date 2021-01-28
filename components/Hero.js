import { useState, useEffect } from "react";
import styles from "../styles/components/Hero.module.scss";
import Wrapper from "./Wrapper";

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
        className={styles.test}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}></div>
      <img
        src="/images/background-part.png"
        alt=""
        className={styles.parallax}
      />
      <Wrapper>
        <div
          className={styles.container}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <h1 className={styles.header}>
            Puvugna Wetland
            <br /> Protectors
          </h1>
          <p className={styles.content}>
            Stop the extradition of 200 million barrels of oil from beneath the
            Los Cerritos / Long Beach Wetlands and neighboring communities,
            putting them at risk.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
