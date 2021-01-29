import Link from "next/link";
import Wrapper from "./Wrapper.js";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Wrapper>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}></a>
          </Link>

          <nav className={styles.nav}>
            <Link href="/contact">
              <a className={styles.nav__contact}>Contact</a>
            </Link>
            <Link href="https://www.google.com">
              <a className={styles.nav__donate}>Donate</a>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </div>
  );
}
