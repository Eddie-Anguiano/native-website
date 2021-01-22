import styles from "../styles/components/Footer.module.scss";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <Wrapper>
        <div className={styles.container}>
          <div>
            <div className={styles.header}>
              Puvugna Wetlands Protectors &#169;
            </div>
            <div className={styles.social}>
              <img src="/icons/facebook.svg" alt="" />
            </div>
          </div>
          <div className={styles.linkSection}>
            <div className={styles.header}>Links</div>
            <ul className={styles.list}>
              <li>Ecosystem</li>
              <li>Native Cultures</li>
              <li>Big Oil</li>
              <li>Lawsuit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div></div>
        </div>
      </Wrapper>
    </div>
  );
}
