import React from "react";
import styles from "../styles/components/Hero.module.scss";
import Wrapper from "./Wrapper";

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <Wrapper>
        <h1 className={styles.header}>Puvugna Wetland Protectors</h1>
        <p className={styles.content}>
          Stop the extradition of 200 million barrels of oil from beneath the
          Los Cerritos / Long Beach Wetlands and neighboring communities,
          putting them at risk.
        </p>
      </Wrapper>
    </div>
  );
}
