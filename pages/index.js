import { useEffect } from "react";
import { parentStagger, fadeUpIn } from "../utils/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//components
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IconSection from "../components/IconSection";
import InfoSection from "../components/InfoSection";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      <section className={styles.mud}>
        <IconSection />
        <InfoSection
          header="Conserving the lands and waters on which life depends"
          subheader="The Los Cerritos Wetlands"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="-1"
          image="/images/ecosystem.jpg"
          alt="wetlands"
          url="/ecosystem"
        />
      </section>

      <section className={styles.nativeSection}>
        <InfoSection
          header="Tongva coastal communities of Puvunga and Motuucheyngna"
          subheader="Stewards of the land"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="2"
          image="/images/tonga.jpg"
          alt="tongva portrait"
          url="/native"
        />
      </section>

      <section className={styles.oilSection}>
        <InfoSection
          header="So what exactly is the Los Cerritos Wetlands Restoration and Oil Consolidation Project?"
          subheader="Big Oil"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="-1"
          image="/images/oil.jpg"
          alt="oil rig"
          url="/oil"
        />
      </section>

      <section className={styles.actionSection}>
        <Wrapper>
          <motion.div
            ref={textRef}
            animate={controlText}
            initial="initial"
            variants={parentStagger}
            className={styles.actionSection__container}>
            <motion.h2
              variants={fadeUpIn}
              className={styles.actionSection__header}>
              By taking action you can make a difference!
            </motion.h2>
            <motion.p
              variants={fadeUpIn}
              className={styles.actionSection__content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sociis mi tincidunt sed. Mi laoreet morbi senectus eget tortor
              congue aliquet cursus neque. Etiam pulvinar et integer eget purus.
              Nisl aliquet ultricies sed pharetra turpis consectetur curabitur
              ac scelerisque.
            </motion.p>
            <motion.div
              variants={fadeUpIn}
              className={styles.actionSection__buttonContainer}>
              <Link href="/lawsuit">
                <a className={styles.actionSection__learnButton}>Learn More</a>
              </Link>
              <Link href="https://www.google.com">
                <a className={styles.actionSection__donateButton}>Donate</a>
              </Link>
            </motion.div>
          </motion.div>
        </Wrapper>
      </section>

      <Footer />
    </div>
  );
}
