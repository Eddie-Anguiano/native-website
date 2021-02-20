import styles from "../styles/pages/oil.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function oil() {
  return (
    <div className={styles.learnMore}>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Drilling is killing!</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/big-oil/oil-fire.png"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          Because its existing oil wells on the Los Cerritos Wetlands are drying
          up and cannot legally be salvaged.​{" "}
          <strong>Beach Oil Minerals/Los Cerritos Wetlands, LLC</strong> ​seeks
          to “consolidate” oil operations on lands bordering, but no longer
          considered to be a part of, the Los Cerritos Wetlands. “Enhanced”
          directional drilling methods that have caused earthquakes, oil spills,
          water and air pollution will be used t​o extract 200 million barrels
          of oil, upping current production by 8000%, from 300 to 24,000 barrels
          daily. 120 new oil and water wells will be drilled next to the Newport
          Inglewood Fault. Billions of gallons of water will be extracted, laced
          with toxic chemicals, forced back underground to bring up oil, and
          then reinjected beneath the wetlands and surrounding area. A new
          pipeline will transport oil over the faultline and across the
          wetlands, methane gas will be burned off on site, and GHG emissions
          will increase by 70,000 tons a year.
        </p>
        <p className={styles.paragraph}>
          <strong>Beach Oil Minerals</strong> ​presents themselves as
          benefactors who offer the last, best, chance to “save” and “restore”
          the Los Cerritos Wetlands. Although BOM’s land swap with the ​
          <strong>Los Cerritos Wetlands Authority</strong>​ grants the public
          ownership of 170 acres of wetlands, the oil company will retain all
          mineral rights and continue to operate existing wells for 20 years.
          BOM’s ​<strong>Upper Los Cerritos Wetlands Mitigation Bank​</strong>{" "}
          will sell credits to other polluters to fund a 30 acre “restoration”
          which will in fact ​destroy the existing ecosystem and all evidence of
          tribal culture by bulldozing, dredging, and flooding seasonal wetlands
          to create a new salt marsh. New bike trails, a visitor center, and
          flood control barriers to protect oil operations will increase the
          human footprint at the expense of wetlands and wildlife.
        </p>
        <p className={styles.paragraph}>
          <figure className={styles.figureRight}>
            <img
              className={styles.imgWater}
              src="/images/big-oil/oil-water.png"
              alt="oil in water"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          <strong>The Los Cerritos Wetlands Authority</strong>​ and Beach OIl
          Minerals(Los Cerritos Wetlands LLC) have formed a public/private
          partnership ​which ​sets a precedent for increasing fossil fuel
          production along the coast. The LCWA is a state agency empowered to
          acquire property in the Los Cerritos Wetlands in order to protect and
          enhance the wetlands ecosystem. It has four members: the California
          Coastal Conservancy, the San Gabriel and Lower Los Angeles Rivers and
          Mountains Conservancy (RMC), and the cities of Long Beach and Seal
          Beach. The only public outreach for the project has been Beach Oil
          Minerals’ greenwashing campaign, while the concerns of
          environmentalists, Native Americans, and the community have been
          ignored. That state environmental protection agencies are enabling the
          expansion of oil operations in and around coastal wetlands, along an
          earthquake fault in a tsunami zone subject to liquefaction, is
          criminal.
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
