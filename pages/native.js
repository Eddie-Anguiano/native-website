import styles from "../styles/pages/native.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function native() {
  return (
    <div>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Native Cultures</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/native/native-painting.png"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          Puvungna is “the place of emergence” where the Tongva world began, the
          place where Ouiot, the original “Capitan,” lived and died and where
          his funeral was held. Until Ouiot was murdered, all beings were
          immortal, now no one could escape death. At that time,
          Chinigchinich,”Lawgiver and God,” appeared at Puvungna to give the
          instructions which formed the basis of spiritual teachings and
          ceremonies that endure to this day. The Tongva, Acjachemen,
          Payomkawichum, Yuhaviatam, and Tataviam have shared connections to
          Ouiot and to Chinigchinich and to spiritual traditions and practices,
          past and present, related to these first Gods.
        </p>
        <p className={styles.paragraph}>
          The history of Puvungna is well-documented in testimony and writings
          by tribal peoples, colonizers, historians, ethnologists,
          archaeologists, anthropologists, and others. Mission Records confirm
          that residents of Puvungna were baptised at Mission San Gabriel and
          the area was referred to as Puvungna well into the 1800‘s. From the
          Spanish Rancho period through its existence as a ranch owned by the
          Bixby family, tribal members continued to work and likely lived at or
          near Puvungna. ​Multiple burials and tribal materials have been
          discovered and removed throughout the wetlands and uplands and more
          will be destroyed as proposed oil drilling and “restoration” projects
          move forward.
        </p>
        <p className={styles.paragraph}>
          <figure className={styles.figureRight}>
            <img
              className={styles.imgWater}
              src="/images/native/native-boat.png"
              alt="oil in water"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          The history of Puvungna is well-documented in testimony and writings
          by tribal peoples, colonizers, historians, ethnologists,
          archaeologists, anthropologists, and others. Mission Records confirm
          that residents of Puvungna were baptised at Mission San Gabriel and
          the area was referred to as Puvungna well into the 1800‘s. From the
          Spanish Rancho period through its existence as a ranch owned by the
          Bixby family, tribal members continued to work and likely lived at or
          near Puvungna. ​Multiple burials and tribal materials have been
          discovered and removed throughout the wetlands and uplands and more
          will be destroyed as proposed oil drilling and “restoration” projects
          move forward.
        </p>
        <p className={styles.paragraph}>
          California Native Americans did not freely cede the right or the
          responsibility to protect homelands, waters, children,languages,
          histories, spiritual practices, or ancestors remains to Spain, Mexico,
          the California Republic, or to the United States. When state actors
          deny tribal entities the agency to act as sovereign nations, they
          engage in environmental racism and continue a legacy of conquest and
          state-sponsored genocide.
        </p>

        <h4>Additional Resources</h4>
        <ul className={styles.resources}>
          <li className={styles.resources__item}>resource1</li>
          <li className={styles.resources__item} resources-item>
            resource2
          </li>
          <li className={styles.resources__item}>resource3</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
