import styles from "../styles/pages/ecosystem.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ecosystem() {
  return (
    <div>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>The Ecosystem</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/ecosystem/eco-bird.png"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          Every part of the Los Cerritos Wetlands is alive with insects, birds,
          animals, marine life and native and non-native plants. Each dependent
          on a specific habitat, including salt flats, seasonal brackish
          wetlands, and uplands for their survival. ​The proposed expansion of
          salt marshes across the Los Cerritos Wetlands ignores evidence that
          the area was never a full tidal salt marsh and that added tidal
          influence is neither historic nor desirable, especially in light of
          projected sea level rise. ​“Restoration” plans fail to protect the
          complex wetlands ecosystem, including the ancient salt marsh which
          will be exposed to pollution when the existing berm is breached.
          Destroying non-native plants, will eliminate nesting and foraging
          sites of native species, who, considering the scope and length of
          multiple proposed restorations, are not likely to survive.
        </p>
        <p className={styles.paragraph}>
          <figure className={styles.figureRight}>
            <img
              className={styles.imgWater}
              src="/images/ecosystem/eco-rabbit.png"
              alt="oil in water"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          Funded by its​ Upper Los Cerritos Wetlands Mitigation Bank,​ Beach Oil
          Minerals “restoration” will expand an ancient salt marsh across
          seasonal wetlands, by breaching the existing berm and building a new
          one to protect its oil operations. The wetlands will be scraped and
          reshaped to encourage tidal flow and non-native plants will be removed
          and/or sprayed with herbicides. Existing habitat will also be replaced
          by new trails, a visitor center and parking lot. The ​LCWA now intends
          to expand this 30 acre “restoration” across the entire ​Los Cerritos
          Wetlands. The ​Los Cerritos Wetlands Restoration Program PEIR​ will
          not only accommodate BOM’s new oil pipeline, but also the existing
          drilling rigs and storage tanks of three other oil companies. Two
          visitors centers and 18’ high berms and roads will cut across and
          border the wetlands on both the Long Beach and the Seal Beach side.
          New salt marshes will double as flood control basins open to polluted
          overflow from the San Gabriel River channel during storm events.
          Additionally, ​ there is no coordinated or sustainable maintenance
          plan for wetlands. Oil operators pollute air, water, and drilling
          sites as well as disrupt wildlife and remove habitat. In February,
          2021, the Coastal Commission granted the City of Long Beach a permit
          to remove native tule reeds from the only freshwater marsh on the
          wetlands using a herbicide known to migrate and poison non-targeted
          plants.
        </p>
        <p className={styles.paragraph}>
          Puvunga Wetlands Protectors works to oppose these ongoing threats, and
          supports actions taken by other organizations and community members as
          well.
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
