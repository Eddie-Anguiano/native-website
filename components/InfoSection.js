import { useEffect } from "react";
import { parentStagger, fadeUpIn, fadeLeftIn } from "../utils/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Components
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
  // Intersection Observer for text
  const controlText = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Intersection Observer for Image
  const controlImage = useAnimation();
  const [imageRef, imageInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Image controller
  useEffect(() => {
    if (imageInView) {
      controlImage.start("animate");
    }
  }, [controlImage, imageInView]);

  // Text controller
  useEffect(() => {
    if (textInView) {
      controlText.start("animate");
    }
  }, [controlText, textInView]);

  return (
    <Wrapper>
      <div className={styles.InfoSection}>
        <motion.div
          ref={textRef}
          animate={controlText}
          initial="initial"
          variants={parentStagger}
          className={styles.contentSection}
          style={{ order: contentOrder }}>
          <motion.div variants={fadeUpIn} className={styles.subheader}>
            {subheader}
          </motion.div>
          <motion.h2 variants={fadeUpIn} className={styles.header}>
            {header}
          </motion.h2>
          <motion.div variants={fadeUpIn} className={styles.content}>
            {content}
          </motion.div>
          <Link href={url}>
            <motion.a variants={fadeUpIn} className={styles.link}>
              Learn More
            </motion.a>
          </Link>
        </motion.div>
        <motion.div
          ref={imageRef}
          animate={controlImage}
          initial="initial"
          variants={fadeLeftIn}
          className={styles.imgContainer}>
          {image ? <img src={image} alt={alt} className={styles.img} /> : null}
        </motion.div>
      </div>
    </Wrapper>
  );
}
