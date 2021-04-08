// Global Imports
import React from "react";
// Styles Imports
import styles from "../styles/components/Wrapper.module.scss";

export default function Wrapper({ children }) {
  return <div className={styles.Wrapper}>{children}</div>;
}
