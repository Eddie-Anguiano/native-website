import styles from "../styles/components/MobileNav.module.scss";
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
        className={styles.nav}></motion.div>
    </>
  );
}
