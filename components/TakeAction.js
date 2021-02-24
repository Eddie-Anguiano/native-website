import { useEffect } from "react";
import { parentStagger, fadeUpIn } from "../utils/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/components/TakeAction.module.scss";
import Wrapper from "../components/Wrapper";
import Link from "next/link";

export default function TakeAction() {
  // Intersection Observer for text
  const controlText = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  // Text controller
  useEffect(() => {
    if (textInView) {
      controlText.start("animate");
    }
  }, [controlText, textInView]);

  return (
    <section className={styles.TakeAction}>
      <Wrapper>
        <motion.div
          ref={textRef}
          animate={controlText}
          initial="initial"
          variants={parentStagger}
          className={styles.grid}>
          <img
            className={styles.flowerImg}
            src="/images/flower.svg"
            alt="flower"
          />

          <motion.div variants={fadeUpIn} className={styles.left}>
            <h2 className={styles.header}>
              By taking action you can make a difference!
            </h2>
            <div
              className={`${styles.btnContainer} ${styles.btnContainer__desktop}`}>
              <Link href="/lawsuit">
                <a className={styles.lrnBtn}>Learn More</a>
              </Link>
              <Link href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y&fbclid=IwAR2M_8o051cwf9nh2iD5KNRqECinzS_LuiyGY-P3ZOpDYJd-d98UbOWoWw4">
                <a className={styles.donateBtn}>Donate</a>
              </Link>
            </div>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUpIn}>
            <img
              src="/icons/heart.svg"
              alt="heart icon"
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.content__header}>Fund the Lawsuit</h3>
              <p className={styles.text}>
                Support Puvunga Wetlands Protectors’ Lawsuit against the
                California Coastal Commission
              </p>
            </div>

            <img
              src="/icons/phone.svg"
              alt="heart icon"
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.content__header}>
                Contact Decision Makers
              </h3>
              <p className={styles.text}>
                Contact your local, state, and federal representatives. Oil tax
                dollars are not worth the risk of losing our wetlands and our
                quality of life. Erasing existing ecosystems is not restoration.
              </p>
            </div>

            <img
              src="/icons/book.svg"
              alt="heart icon"
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.content__header}>
                Educate Yourself and Others
              </h3>
              <p className={styles.text}>
                Learn why we need to protect the Los Cerritos Wetlands and the
                true cost of fossil fuel extraction, global warming, and sea
                rise. Connect with indigenous peoples’ perspectives, histories,
                and struggles.
              </p>
            </div>

            <img
              src="/icons/users.svg"
              alt="users icon"
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.content__header}>Connect with Allies</h3>
              <p className={styles.text}>
                Join and support Protect the Long Beach/Los Cerritos Wetlands
                Coalition, other organizations, and tribal nations working to
                stop the fossil fuel industry from destroying communities,
                indigenous cultures, and our Mother Earth.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUpIn}
            className={`${styles.btnContainer} ${styles.btnContainer__mobile}`}>
            <Link href="/lawsuit">
              <a className={styles.lrnBtn}>Learn More</a>
            </Link>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y&fbclid=IwAR2M_8o051cwf9nh2iD5KNRqECinzS_LuiyGY-P3ZOpDYJd-d98UbOWoWw4"
              className={styles.donateBtn}>
              Donate
            </a>
          </motion.div>
        </motion.div>
      </Wrapper>
    </section>
  );
}
