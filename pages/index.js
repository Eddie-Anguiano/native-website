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

      <section className={styles.iconSection}>
        <IconSection />
        <InfoSection
          header="Our lawsuit to stop the Los Cerritos Wetlands Restoration and Oil Consolidation Project"
          subheader="Drilling is killing"
          content="In December, 2018, the ​California Coastal Commission​ approved the ​Los Cerritos Wetlands Restoration and Oil Consolidation Project, ​a massive expansion of oil drilling masquerading as wetlands restoration.​ ​Acknowledging that ​the project violated Coastal Act provisions protecting​ public health, the environment, and tribal culture, the Commission used an ​override provision​ reserved for oil and gas operations. In February, 2019, ​Puvungna Wetlands Protectors​ sued the Commission for misapplying the override because adverse impacts were not mitigated to the maximum extent feasible and because the public would not be harmed if the project was denied. The Los Cerritos Wetlands Restoration and Oil Consolidation Project ​will put the community at greater risk for oil spills and a “worst case scenario” seismic event, pollute local air and water, add to global warming, and erase tribal history. ​The case will be heard in LA Superior Court on March 11, 2021."
          contentOrder="2"
          image="/images/oil.png"
          alt="oil rig"
          url="/oil"
        />
      </section>

      <section className={styles.oilSection}>
        <InfoSection
          header="Conserving the lands and waters on which life depends"
          subheader="The Los Cerritos Wetlands"
          content="Tongva and Acjachemen tribal nations, environmentalists, and community members have struggled for decades to protect and preserve the Los Cerritos Wetlands, now under assault from Beach Oil Minerals and the Los Cerritos Wetlands Authority. 2400 acres of lagoons, tidal salt marshes and alkali meadows one formed a coastal wetlands supporting the Tongva communities of Puvungna and Motuucheyngna. In the past 250 years, ranching, agriculture, flood control, oil drilling, industrial, commercial, and residential development have erased all but 500 acres. Although degraded, the remaining Los Cerritos Wetlands support plants, wildlife, marine life, and local and migratory birds, and continue to be central to the physical and spiritual well being of tribal members."
          contentOrder="-1"
          image="/images/ecosystem.jpg"
          alt="wetlands"
          url="/ecosystem"
        />
      </section>

      <section className={styles.nativeSection}>
        <InfoSection
          header="Puvunga and Motuucheyngna, sacred then and now"
          subheader="Stewards of the land"
          content="For 10,000 years a ​vast wetlands sustained the coastal communities of ​Puvungna and Motuucheyngna​, central to the spiritual traditions of the Tongva, Acjachemen, and numerous other Southern California Tribes. ​The remaining 500 acre Los Cerritos Wetlands allow a connection to homelands, ancestors and culture. ​Drilling, digging, bulldozing and building on these wetlands is opposed by tribal culture keepers and violates​ tribal beliefs which understand all life to be related and deserving of respect. Relocating tribal burials and preserving tribal “artifacts” for research or exhibition will not “mitigate” this destruction. ​The connection of tribal peoples to Puvungna cannot be determined piecemeal, as it is timeless and inclusive of all manifestations of being. This relationship to place defines tribes as peoples who seek to live in balance through the gifts given by all relations."
          contentOrder="2"
          image="/images/tonga.jpg"
          alt="tongva portrait"
          url="/native"
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
              <Link href="https://www.paypal.com/donate/?hosted_button_id=7J9QBLZWT6M6Y&fbclid=IwAR2M_8o051cwf9nh2iD5KNRqECinzS_LuiyGY-P3ZOpDYJd-d98UbOWoWw4">
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
