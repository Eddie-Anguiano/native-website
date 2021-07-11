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

      <h4 className={styles.header}>Circle of Life - Protecting local sacred sites and costal wetlands.</h4>

      <p className={styles.content}>
        Join us as we learn about and discuss these very real issues that are happening in our own backyard, and connect with others to come together and help protect local sacred sites and coastal wetlands- July 12, 2021 via zoom
      </p>

      <Link href="/lawsuit">
        <div className={styles.btn}>Learn More</div>
      </Link>
    </motion.div>
  );
}
