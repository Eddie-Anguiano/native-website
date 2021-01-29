import Link from "next/link";
import styles from "../styles/components/InfoSection.module.scss";
import Wrapper from "./Wrapper";

export default function InfoSection({
  header,
  subheader,
  content,
  contentOrder,
  image,
  alt,
  url,
}) {
  return (
    <Wrapper>
      <div className={styles.InfoSection}>
        <div className={styles.contentSection} style={{ order: contentOrder }}>
          <div className={styles.subheader}>{subheader}</div>
          <h2 className={styles.header}>{header}</h2>
          <div className={styles.content}>{content}</div>
          <Link href={url}>
            <a className={styles.link}>Learn More</a>
          </Link>
        </div>
        <div className={styles.imgContainer}>
          {image ? <img src={image} alt={alt} className={styles.img} /> : null}
        </div>
      </div>
    </Wrapper>
  );
}
