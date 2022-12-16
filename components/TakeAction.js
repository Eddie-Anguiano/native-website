// Global Imports
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// Component Imports
import Wrapper from '../components/Wrapper';
import PayPalBtn from './PayPalBtn';
// Utils Imports
import { parentStagger, fadeUpIn } from '../utils/animations';
// Styles Imports
import styles from '../styles/components/TakeAction.module.scss';

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
      controlText.start('animate');
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
            src="/images/home/flower.svg"
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
              {/* <Link href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y&fbclid=IwAR2M_8o051cwf9nh2iD5KNRqECinzS_LuiyGY-P3ZOpDYJd-d98UbOWoWw4"> */}
                {/* <a className={styles.donateBtn}>Donate</a> */}
                <PayPalBtn/>
              {/* </Link> */}
            </div>
          </motion.div>

          <motion.div className={styles.right} variants={fadeUpIn}>
            <img
              src="/icons/heart.svg"
              alt="heart icon"
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3 className={styles.content__header}>
                Fund PWP’s investigative and legal actions to protect the Los
                Cerritos Wetlands, and support our community outreach and
                educational events.
              </h3>
              <p className={styles.text}>
                Support Puvunga Wetlands Protectors’ Lawsuit against the
                California Coastal Commission. Dollar for dollar matching fund
                in progress!
              </p>
            </div>

            <img
              src="/icons/zap.svg"
              alt="heart icon"
              className={styles.icon}
            />

            <div className={styles.content}>
              <h3 className={styles.content__header}>Actions and Events</h3>
              <p className={styles.text}>
                Collaborative, community actions to benefit the Los Cerritos
                Wetlands including rallys, music and spoken word performances,
                and outreach campaigns.
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
                Find allies that protect wetlands, empower tribal peoples and
                stop the fossil fuel industry from destroying our health, our
                communities, and Mother Earth.
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
