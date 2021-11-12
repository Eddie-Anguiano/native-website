// Global Imports
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
// Styles Imports
import styles from "../styles/components/PopUp.module.scss";

export default function PopUp({ setPopUpIsOpen }) {
  // Sets duration of Pop up notification
  useEffect(() => {
    setTimeout(() => setPopUpIsOpen(false), 20000);
  }, []);

  return (
    <motion.div
      initial={{ y: "-200%", x: "-50%" }}
      animate={{ y: "0%", x: "-50%" }}
      exit={{ y: "-200%", x: "-50%" }}
      transition={{ duration: 1 }}
      className={styles.PopUp}>
      <img
        onClick={() => setPopUpIsOpen(false)}
        className={styles.close}
        src="/icons/x-square.svg"
        alt="close"
      />

      <div className={styles.triangle}>
        <img
          src="/icons/alert-triangle.svg"
          alt="alert"
          className={styles.triangle__icon}
        />
      </div>

      <h4 className={styles.header}>Orange County Oil Spill Town Hall</h4>

      <p className={styles.content}>
        Saturday, November 20th, 4-6pm (Online and in person)
      </p>

      <Link href="/lawsuit">
        <div className={styles.btn}>Learn More</div>
      </Link>
    </motion.div>
  );
}
