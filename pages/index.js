import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IconSection from "../components/IconSection";
import InfoSection from "../components/InfoSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <div className={styles.mud}>
        <IconSection />
        <InfoSection
          header="Conserving the lands and waters on which life depends"
          subheader="The Los Cerritos Wetlands"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="-1"
          image="/images/placeholder.jpg"
        />
      </div>
      <div className={styles.nativeSection}>
        <InfoSection
          header="Tongva coastal communities of Puvunga and Motuucheyngna"
          subheader="Stewards of the land"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="2"
          image="/images/placeholder.jpg"
        />
      </div>
      <div className={styles.oilSection}>
        <InfoSection
          header="So what exactly is the Los Cerritos Wetlands Restoration and Oil Consolidation Project?"
          subheader="Big Oil"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit cras laoreet nec nam habitant habitant. Cursus blandit quam adipiscing lectus magna purus ac eget. Turpis nunc nunc mauris metus. Id scelerisque quis metus elit consectetur purus consequat blandit netus."
          contentOrder="-1"
        />
      </div>
    </div>
  );
}
