import styles from "../styles/pages/native.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function native() {
  return (
    <div className={styles.learnMore}>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Stewards of the Land</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/native/shadows.jpg"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>
              Water Protectors on the Los Cerritos Wetlands
            </figcaption>
          </figure>
          <strong>Puvungna​</strong> is the place of emergence where the world
          began, where <strong>Ouiot</strong>, the original Capitan, lived and
          died and where his funeral was held. Until Ouiot was murdered, all
          beings were immortal, now no one could escape death. Puvunga means
          “the gathering place,” and it is here that{" "}
          <strong>Chingishnish</strong>, Lawgiver and God, gave the instructions
          which form the basis of spiritual teachings and ceremonies that endure
          to this day. The
          <strong> Tongva, Acjachemen, Payomkawichum, Yuhaviatam,</strong> and
          <strong> Tataviam</strong> have shared connections to Ouiot and to
          Chinigchinich and to the spiritual traditions and practices, past and
          present, related to these first Gods.
        </p>
        <Quote
          text="This is a continuation of the genocide that is happening everywhere. Many of us are saying it, not just one or two, and we keep saying it. It is our creation spot. Somehow, someone has to acknowledge that this is sacred land, including the only ancient salt marsh left. We’re saying NO! This will harm people, we will not continue to exist."
          cite="Rebecca Robles"
          title="Acjachemen Elder and Activist"
        />
        <p className={styles.paragraph}>
          Tribal peoples, colonizers, historians, ethnologists, archaeologists,
          anthropologists, and others have documented the history of Puvungna
          through testimony, writings, and physical evidence. Mission Records
          confirm that residents of Puvungna were baptised at Mission San
          Gabriel and the area was referred to as Puvungna well into the 1800‘s.
          After it became Rancho Los Alamitos, tribal members continued to work
          here well into the 20th century. Since the 1970’s, Puvungna has become
          increasingly relevant to those that have fought to preserve its
          cultural and burial sites and remaining open lands. Puvungna is listed
          with the{" "}
          <strong>California Native American Heritage Commission</strong> as a
          <strong> Sacred Site</strong> and on the{" "}
          <strong>National Register of Historic Places</strong>. Tribal members
          have reburied Ancestors here and reintroduced traditional practices,
          including building and using ti’ats and tule boats. Ceremonies,
          meetings, and social gatherings held at Puvungna unite a diverse and
          expanding tribal community and local residents as well.
        </p>
        <p className={styles.paragraph}>
          <figure className={styles.figureRight}>
            <img
              className={styles.imgWater}
              src="/images/native/native-boat.jpg"
              alt="oil in water"
            />
            <figcaption className={styles.caption}>
              Michele Castillo, Acjachemen, pilots tule boat in to Los Cerritos
              Wetlands
            </figcaption>
          </figure>
          California Native Americans did not freely cede the right to protect
          homelands, waters, children, languages, or spiritual practices to
          Spain, Mexico, the California Republic, or the United States. ​It is
          challenging to respond to ongoing threats justified and legalized by
          state actors. They come as Environmental Impact Reports and Local
          Coastal Plans and include public and private projects - dams,
          highways, oil and gas infrastructure, power plants, massive
          residential and commercial sprawl, and so-called “restorations.” ​When
          tribal peoples are denied the agency to act as sovereign nations, the
          legacy of conquest and genocide continues. ​Nevertheless, all
          Indigenous peoples retain the inherent right to seek resolutions that
          are most protective of <strong>Traditional Tribal Landscapes</strong>{" "}
          and <strong>Sacred Sites</strong>.
        </p>

        {/* To be determined my client */}
        {/* <h4>Additional Resources</h4> */}

        {/* <ul className={styles.resources}>
          <li className={styles.resources__item}>resource1</li>
          <li className={styles.resources__item} resources-item>
            resource2
          </li>
          <li className={styles.resources__item}>resource3</li>
        </ul> */}
      </main>
      <Footer />
    </div>
  );
}
