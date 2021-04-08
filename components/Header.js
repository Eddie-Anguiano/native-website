// Global Imports
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// Utils Imports
import {
  hamburgerTop,
  hamburgerMiddle,
  hamburgerBottom,
} from "../utils/animations";
// Component Imports
import MobileNav from "./MobileNav";
import Wrapper from "./Wrapper";
// Styles Imports
import styles from "../styles/components/Header.module.scss";

export default function Header({ color }) {
  const [mobileNavIsOpen, setmobileNavIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileNavIsOpen ? "hidden" : "unset";
  }, [mobileNavIsOpen]);

  function toggleHamburger() {
    setmobileNavIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <AnimatePresence>{mobileNavIsOpen && <MobileNav />}</AnimatePresence>

      <div className={styles.Header} style={{ backgroundColor: color }}>
        <Wrapper>
          <div className={styles.container}>
            <Link href="/">
              <img
                className={styles.logo}
                src="/images/lightning-logo-green.png"
                alt=""
              />
            </Link>

            <nav className={styles.nav}>
              <Link href="/contact">
                <a className={styles.nav__contact}>Contact</a>
              </Link>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y"
                className={styles.nav__donate}>
                Donate
              </a>
            </nav>

            <nav className={styles.hamburger} onClick={toggleHamburger}>
              <motion.div
                transition={{ ease: "easeIn" }}
                animate={mobileNavIsOpen ? "open" : ""}
                variants={hamburgerTop}
                className={styles.line__top}></motion.div>
              <motion.div
                transition={{ ease: "easeIn" }}
                animate={mobileNavIsOpen ? "open" : ""}
                variants={hamburgerMiddle}
                className={styles.line__middle}></motion.div>
              <motion.div
                transition={{ ease: "easeIn" }}
                animate={mobileNavIsOpen ? "open" : "closed"}
                variants={hamburgerBottom}
                className={styles.line__bottom}></motion.div>
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
