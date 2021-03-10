import { useEffect } from "react";
import styles from "../styles/components/PopUp.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PopUp({ setPopUpIsOpen }) {
  useEffect(() => {
    setTimeout(() => setPopUpIsOpen(false), 10000);
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

      <h4 className={styles.header}>See Us in Court!</h4>
      <p className={styles.content}>
        Attend the hearing virtually. Click the link below for details on how to
        sign up.
      </p>
      <Link href="/lawsuit">
        <div className={styles.btn}>Learn More</div>
      </Link>
    </motion.div>
  );
}
