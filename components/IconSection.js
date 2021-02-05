import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { fadeUpIn, parentStagger } from "../utils/animations";
import { useInView } from "react-intersection-observer";
// Components
import Wrapper from "./Wrapper";
import styles from "../styles/components/IconSection.module.scss";
import IconCard from "./IconCard";

export default function IconSection() {
  // Intersection Observer for text
  const controlText = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  // Intersection Observer for Icons
  const controlIcons = useAnimation();
  const [iconsRef, iconsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Icons controller
  useEffect(() => {
    if (iconsInView) {
      controlIcons.start("animate");
    }
  }, [controlIcons, iconsInView]);

  // Text controller
  useEffect(() => {
    if (textInView) {
      controlText.start("animate");
    }
  }, [controlText, textInView]);

  return (
    <Wrapper>
      <div className={styles.IconSection}>
        <h3 className={styles.subheader}>Who we are...</h3>
        <motion.p
          ref={textRef}
          animate={controlText}
          initial="initial"
          variants={fadeUpIn}
          className={styles.content}>
          Puvunga Wetlands Protectors is a 501(c)(3) non-profit organization,
          formed to defend the Puvungna/Los Cerritos Wetlands from expanding oil
          and gas operations and to preserve the wetlands ecosystem and tribal
          sites from destruction. We take direction from Tongva and Acjachemen
          culture keepers working to preserve sacred sites and ensure the
          survival of all our relations.
        </motion.p>
        <h3>What we fight for...</h3>
        <motion.div
          ref={iconsRef}
          animate={controlIcons}
          initial="initial"
          variants={parentStagger}
          className={styles.cards__container}>
          <IconCard
            icon="/icons/oil-icon.svg"
            content="An end to Los Cerritos Wetland Oil Drilling"
          />
          <IconCard
            icon="/icons/bird-icon.svg"
            content="Preserve local land, waters, and wildlife"
          />
          <IconCard
            icon="/icons/native-icon.svg"
            content="Protect tribal cultural landscape"
          />
        </motion.div>
      </div>
    </Wrapper>
  );
}
