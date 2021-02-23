import styles from "../styles/components/MobileNav.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function mobileNav() {
  return (
    <>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.MobileNav}></motion.div>
      <motion.div
        key="nav"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.1, stiffness: 100, type: "tween" }}
        className={styles.nav}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.item}>Home</li>
          </Link>
          <Link href="/oil">
            <li className={styles.item}>Drilling is killing</li>
          </Link>
          <Link href="/ecosystem">
            <li className={styles.item}>Conservation vs "restoration"</li>
          </Link>
          <Link href="/native">
            <li className={styles.item}>Stewards of the land</li>
          </Link>
          <Link href="/lawsuit">
            <li className={styles.item}>Lawsuit</li>
          </Link>
          <Link href="/contact">
            <li className={styles.item}>Contact</li>
          </Link>
          <li>
            <a
              className={styles.donate}
              href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y">
              Donate
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
