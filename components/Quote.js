import styles from "../styles/components/Quote.module.scss";

export default function Quote({ text, cite, title }) {
  return (
    <blockquote className={styles.Quote}>
      <p className={styles.Quote__text}>{text}</p>
      <cite className={styles.Quote__cite}>&mdash; {cite}</cite>
      <div className={styles.Quote__title}>{title}</div>
    </blockquote>
  );
}
