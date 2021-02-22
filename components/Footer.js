import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <Wrapper>
        <div className={styles.container}>
          <div>
            <Link href="/">
              <a className={styles.header}>
                Puvunga Wetlands Protectors &#169;
              </a>
            </Link>
            {/* To be determined by client */}
            {/* <Link href="https://www.facebook.com/groups/ProtectLosCerritosWetlands/">
              <button className={styles.social}>
                <img src="/icons/facebook.svg" alt="" />
              </button>
            </Link> */}
          </div>
          <div className={styles.linkSection}>
            <div className={styles.header}>Links</div>
            <ul className={styles.list}>
              <Link href="/oil">
                <li>Drilling is Killing!</li>
              </Link>
              <Link href="/ecosystem">
                <li>Conservation vs. "Restoration"</li>
              </Link>
              <Link href="/native">
                <li>Stewards of the Land</li>
              </Link>
              <Link href="/lawsuit">
                <li>Take Action</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/* Waiting for client approval */}
          {/* <div></div> */}
        </div>
      </Wrapper>
    </div>
  );
}
