import { useEffect } from "react";
import { fadeUpIn } from "../utils/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//components
import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IconSection from "../components/IconSection";
import InfoSection from "../components/InfoSection";
import TakeAction from "../components/TakeAction";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

export default function Home() {
  // Intersection Observer for quote
  const controlQuote = useAnimation();
  const [quoteRef, quoteInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  // quote controller
  useEffect(() => {
    if (quoteInView) {
      controlQuote.start("animate");
    }
  }, [controlQuote, quoteInView]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/favicon.ico" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="Puvunga Wetlands Protectors is a 501(c)(3) non-profit organization,
          formed to defend the Puvungna/Los Cerritos Wetlands from expanding oil
          and gas operations and to preserve the wetlands ecosystem and tribal
          sites from destruction."></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Header />
      <Hero />

      <section className={styles.iconSection}>
        <IconSection />
        <InfoSection
          header="Our lawsuit to stop the Los Cerritos Wetlands Restoration and Oil Consolidation Project"
          subheader="Drilling is Killing"
          content="In December, 2018, the ​California Coastal Commission​ approved the ​Los Cerritos Wetlands Restoration and Oil Consolidation Project, ​a massive expansion of oil drilling masquerading as wetlands restoration.​ ​Acknowledging that ​the project violated Coastal Act provisions protecting​ public health, the environment, and tribal culture, the Commission used an override provision giving special treatment to oil and gas development along the shoreline. In February, 2019, ​Puvungna Wetlands Protectors​ sued the Commission for misapplying the override because adverse impacts were not mitigated to the maximum extent feasible and because the public would not be harmed if the project was denied. The Los Cerritos Wetlands Restoration and Oil Consolidation Project ​will put the community at greater risk for oil spills and a “worst case scenario” seismic event, pollute local air and water, add to global warming, and erase tribal history. ​The case will be heard in LA Superior Court on March 11, 2021."
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
          content="Tongva and Acjachemen tribal nations, environmentalists, and community members have struggled for decades to protect and preserve the Los Cerritos Wetlands, now under assault from Beach Oil Minerals and the Los Cerritos Wetlands Authority. 2400 acres of lagoons, tidal salt marshes, and alkali meadows once formed a coastal wetlands supporting the Tongva communities of Puvungna and Motuucheyngna. In the past 250 years, ranching, agriculture, flood control, oil drilling, industrial, commercial, and residential development have erased all but 500 acres. Although degraded, the remaining Los Cerritos Wetlands support plants, wildlife, marine life, and local and migratory birds, and continue to be central to the physical and spiritual well being of tribal members."
          contentOrder="-1"
          image="/images/slough.jpg"
          alt="wetlands"
          url="/ecosystem"
        />
      </section>

      <section className={styles.nativeSection}>
        <Wrapper>
          <motion.blockquote
            className={styles.quote}
            ref={quoteRef}
            initial="initial"
            animate={controlQuote}
            variants={fadeUpIn}>
            <p className={styles.quote__text}>
              We’re saying that the Los Cerritos Wetlands constitutes a Tribal
              Cultural Property. Puvunga was a community, a spiritual gathering
              place for many tribes, birthplace of Chingishnish, law giver and
              god.
            </p>
            <cite className={styles.quote__cite}>
              &mdash; Chief Anthony Morales
            </cite>
            <div className={styles.quote__title}>
              Chair, Gabrieleno/Tongva San Gabriel Band of Mission Indians
            </div>
          </motion.blockquote>
        </Wrapper>

        <InfoSection
          header="Puvunga and Motuucheyngna, Sacred Then and Now"
          subheader="Stewards of the Land"
          content="For 10,000 years a ​vast wetlands sustained the coastal communities of ​Puvunga and Motuucheyngna​, central to the spiritual traditions of the Tongva, Acjachemen, and numerous other Southern California Tribes. ​The remaining 500 acre Los Cerritos Wetlands allow a connection to homelands, ancestors and culture. ​Drilling, digging, bulldozing and building on these wetlands is opposed by tribal culture keepers and violates​ tribal beliefs which understand all life to be related and deserving of respect. Relocating tribal burials and preserving tribal “artifacts” for research or exhibition will not “mitigate” this destruction. ​The connection of tribal peoples to Puvungna cannot be determined piecemeal, as it is timeless and inclusive of all manifestations of being. This relationship to place defines tribes as peoples who seek to live in balance through the gifts given by all relations."
          contentOrder="2"
          image="/images/salt-pan.jpg"
          alt="tongva portrait"
          url="/native"
        />
      </section>
      <TakeAction />
      <Footer />
    </div>
  );
}
