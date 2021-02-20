import styles from "../styles/pages/ecosystem.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ecosystem() {
  return (
    <div className={styles.learnMore}>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Conservation vs "restoration"</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/ecosystem/eco-bird.png"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          The proposed expansion of salt marshes across the Los Cerritos
          Wetlands ignores evidence that the area was never a full tidal salt
          marsh and that added tidal influence is neither historic nor
          desirable, especially in light of projected sea level rise.
          “Restoration” plans fail to protect the complex wetlands ecosystem,
          including the ancient salt marsh which will be exposed to pollution
          when the existing berm is breached. Every part of the Los Cerritos
          Wetlands is alive with insects, birds, animals, marine life and native
          and non-native plants. Each is dependent on a specific habitat,
          including salt flats, seasonal brackish wetlands, and uplands, for
          their survival. The proposed destruction of all non-native plants,
          will eliminate nesting and foraging sites of native species, who,
          considering the scope and length of multiple proposed restorations,
          are not likely to survive.​ ​Funded by its​{" "}
          <strong>Upper Los Cerritos Wetlands Mitigation Bank</strong>,​ Beach
          Oil Minerals “restoration” will expand an existing salt marsh across
          seasonal brackish wetlands, by breaching the existing berm and
          building a new one to protect its oil operations. The wetlands will be
          scraped and reshaped to encourage tidal flow and non-native plants
          will be removed and/or sprayed with herbicides. Existing habitat will
          also be replaced by new trails, a visitor center and parking lot.
        </p>
        <p className={styles.paragraph}>
          <figure className={styles.figureRight}>
            <img
              className={styles.imgWater}
              src="/images/ecosystem/bulldozer.png"
              alt="oil in water"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          The ​LCWA is working to expand BOM’s 30 acre “restoration” across the
          entire ​Los Cerritos Wetlands. The{" "}
          <strong>Los Cerritos Wetlands Restoration Project​</strong>​
          accommodates BOM’s oil pipeline across the wetlands and enhanced
          drilling beneath them. It will also allow the three other oil
          companies now operating on the wetlands to remain indefinitely. The
          construction of two visitors centers, walking and bike trails, and 18’
          high berms and roads cutting across and bordering the wetlands on both
          the Long Beach and the Seal Beach side will reduce wetlands acreage.
          New salt marshes doubling as flood control basins will be subject to
          polluted overflow from the San Gabriel River channel during storm
          events. The wetlands will become a construction site for decades as
          they are bulldozed, trenched and flooded and buried. Currently, there
          is no coordinated or sustainable maintenance plan. Oil operators
          remove habitat, disrupt wildlife, and emit toxins that impact the
          health of the community. In February, 2021, the Coastal Commission
          granted the City of Long Beach a permit to remove native tule reeds
          from the only freshwater marsh on the wetlands using a herbicide known
          to migrate and poison non-targeted plants.
        </p>
        <p className={styles.paragraph}>
          Puvunga Wetlands Protectors works to oppose these ongoing threats, and
          supports actions taken by other organizations and community members to
          do so as well.
        </p>

        {/* to be determined later by client */}
        {/* <h4>Additional Resources</h4>
        <ul className={styles.resources}>
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
