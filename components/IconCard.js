// Global Imports
import { motion } from "framer-motion";
// Utils Imports
import { fadeUpIn } from "../utils/animations";
// Styles Imports
import styles from "../styles/components/IconCard.module.scss";

export default function IconCard({ icon, content }) {
  return (
    <motion.div variants={fadeUpIn} className={styles.IconCard}>
      <img src={icon} alt="icon" className={styles.icon} />
      <div className={styles.content}>{content}</div>
    </motion.div>
  );
}
