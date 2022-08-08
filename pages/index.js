// Global Imports
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Component Imports
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import InfoSection from '../components/InfoSection';
import PopUp from '../components/PopUp';
import TakeAction from '../components/TakeAction';
import Wrapper from '../components/Wrapper';
// Utils Imports
import { fadeUpIn } from '../utils/animations';
// Styles Imports
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  // Intersection Observer for quote
  const controlQuote = useAnimation();
  const [quoteRef, quoteInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  // quote controller
  useEffect(() => {
    if (quoteInView) {
      controlQuote.start('animate');
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
          formed to defend the Puvunga/Los Cerritos Wetlands from expanding oil
          and gas operations and to preserve the wetlands ecosystem and tribal
          sites from destruction."></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Header />
      <AnimatePresence>
        {popUpIsOpen && <PopUp setPopUpIsOpen={setPopUpIsOpen} />}
      </AnimatePresence>

      <Hero />

      <section className={styles.iconSection}>
        <IconSection />
        <InfoSection
          header="Conserving the lands and waters on which life depends"
          subheader="The Los Cerritos Wetlands"
          content="Tongva and Acjachemen tribal nations, environmentalists, and community members have struggled for decades to protect and preserve the Los Cerritos Wetlands, now under assault from Beach Oil Minerals and the Los Cerritos Wetlands Authority. 2400 acres of lagoons, tidal salt marshes, and alkali meadows once formed a coastal wetlands supporting the Tongva communities of Puvunga and Motuucheyngna. In the past 250 years, ranching, agriculture, flood control, oil drilling, industrial, commercial, and residential development have erased all but 500 acres. Although degraded, the remaining Los Cerritos Wetlands support plants, wildlife, marine life, and local and migratory birds, and continue to be central to the physical and spiritual well being of tribal members."
          contentOrder="-1"
          image="/images/home/slough.jpg"
          alt="wetlands"
          url="/ecosystem"
        />
      </section>

      <section className={styles.oilSection}>
        <InfoSection
          header="Puvunga/Puvuu'nga and Motuucheynga, Sacred Then and Now"
          subheader="Stewards of the Land"
          content="For 10,000 years a ​vast wetlands sustained the coastal communities of ​Puvunga and Motuucheynga​, central to the spiritual traditions of the Tongva, Acjachemen, and numerous other Southern California Tribes. ​The remaining 500 acre Los Cerritos Wetlands allow a connection to homelands, ancestors and culture. ​Drilling, digging, bulldozing and building on these wetlands is opposed by tribal culture keepers and violates​ tribal beliefs which understand all life to be related and deserving of respect. Relocating tribal burials and preserving tribal “artifacts” for research or exhibition will not “mitigate” this destruction. ​The connection of tribal peoples to Puvunga cannot be determined piecemeal, as it is timeless and inclusive of all manifestations of being. This relationship to place defines tribes as peoples who seek to live in balance through the gifts given by all relations."
          contentOrder="2"
          image="/images/home/salt-pan.jpg"
          alt="tongva portrait"
          url="/native"
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
              place for many tribes, birthplace of Chengiichngich, law giver and
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
          header="What began with a lawsuit to stop the Los Cerritos Wetlands
          Restoration and Oil Consolidation Project, continues to this day"
          subheader="Drilling is Killing"
          content="In December, 2018, the ​California Coastal Commission​ approved the ​Los Cerritos Wetlands Restoration and Oil Consolidation Project, ​a massive expansion of oil drilling masquerading as wetlands restoration.​ ​Acknowledging that ​the project violated Coastal Act provisions protecting​ public health, the environment, and tribal culture, the Commission used an override provision giving special treatment to oil and gas development along the shoreline. In February, 2019, ​Puvunga Wetlands Protectors​ sued the Commission for misapplying the override because adverse impacts were not mitigated to the maximum extent feasible and because the public would not be harmed if the project was denied. The Los Cerritos Wetlands Restoration and Oil Consolidation Project ​will put the community at greater risk for oil spills and a “worst case scenario” seismic event, pollute local air and water, add to global warming, and erase tribal history."
          contentOrder="2"
          image="/images/home/oil.png"
          alt="oil rig"
          url="/oil"
        />
      </section>
      <TakeAction />
      <Footer />
    </div>
  );
}
