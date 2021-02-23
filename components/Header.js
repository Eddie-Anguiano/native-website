import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  hamburgerTop,
  hamburgerMiddle,
  hamburgerBottom,
} from "../utils/animations";

// Components
import Link from "next/link";
import Wrapper from "./Wrapper";
import styles from "../styles/components/Header.module.scss";
import MobileNav from "./MobileNav";

export default function Header({ color }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  function toggleHamburger() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <AnimatePresence>{isOpen && <MobileNav />}</AnimatePresence>

      <div className={styles.Header} style={{ backgroundColor: color }}>
        <Wrapper>
          <div className={styles.container}>
            <Link href="/">
              <img
                className={styles.logo}
                src="/images/lightning-logo.png"
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
                animate={isOpen ? "open" : ""}
                variants={hamburgerTop}
                className={styles.line__top}></motion.div>
              <motion.div
                transition={{ ease: "easeIn" }}
                animate={isOpen ? "open" : ""}
                variants={hamburgerMiddle}
                className={styles.line__middle}></motion.div>
              <motion.div
                transition={{ ease: "easeIn" }}
                animate={isOpen ? "open" : "closed"}
                variants={hamburgerBottom}
                className={styles.line__bottom}></motion.div>
            </nav>
          </div>
        </Wrapper>
      </div>
    </>
  );
}
