import React from "react";
import Wrapper from "./Wrapper.js";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.logo}></div>
          <nav className={styles.nav}>
            <div className={styles.nav__contact}>Contact</div>
            <div className={styles.nav__donate}>Donate</div>
          </nav>
        </div>
      </Wrapper>
    </div>
  );
}
