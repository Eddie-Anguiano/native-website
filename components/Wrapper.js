import React from "react";
import styles from "../styles/components/Wrapper.module.scss";

export default function Wrapper({ children }) {
  return <div className={styles.Wrapper}>{children}</div>;
}
