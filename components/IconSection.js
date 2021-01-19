import React from "react";
import Wrapper from "./Wrapper";
import styles from "../styles/components/IconSection.module.scss";

export default function IconSection() {
  return (
    <Wrapper>
      <div className={styles.IconSection}>
        <h3 className={styles.subheader}>Who we are...</h3>
        <p className={styles.content}>
          Puvugna Wetland Protectors is a coalition of tribal enviornmental ,
          and social justice organizations and concerned citizens saying NO to
          the Los Cerritos Wetlands Restoration and Oil Consolidation Project.
        </p>
        <h3>What we fight for...</h3>
        <div className={styles.cards__container}></div>
      </div>
    </Wrapper>
  );
}
