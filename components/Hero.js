import styles from "../styles/components/Hero.module.scss";
import Wrapper from "./Wrapper";

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <img
        src="/images/background-part.png"
        alt=""
        className={styles.parallax}
      />
      <Wrapper>
        <div className={styles.container}>
          <h1 className={styles.header}>
            Puvugna Wetland
            <br /> Protectors
          </h1>
          <p className={styles.content}>
            Stop the extradition of 200 million barrels of oil from beneath the
            Los Cerritos / Long Beach Wetlands and neighboring communities,
            putting them at risk.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
