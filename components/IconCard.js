import styles from "../styles/components/IconCard.module.scss";

export default function IconCard({ icon, content }) {
  return (
    <div className={styles.IconCard}>
      <img src={icon} alt="icon" className={styles.icon} />
      <div className={styles.content}>{content}</div>
    </div>
  );
}
