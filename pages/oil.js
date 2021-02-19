import styles from "../styles/pages/oil.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";

export default function oil() {
  return (
    <div className={styles.oil}>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Big Oil</h2>
        <p className={styles.paragraph}>
          <figure className={styles.figureLeft}>
            <img
              className={styles.imgOil}
              src="/images/big-oil/oil-fire.png"
              alt="oil fire"
            />
            <figcaption className={styles.caption}>caption</figcaption>
          </figure>
          The Los Cerritos Wetlands Restoration and Oil Consolidation Project
          will put us at greater risk for oil spills and a “worst case scenario”
          seismic event, pollute local air and water and add to global warming,
          and erase tribal history. Because existing oil wells on the Los
          Cerritos Wetlands are drying up and cannot legally be salvaged. Beach
          Oil Minerals/Los Cerritos Wetlands, LLC seeks to “consolidate” its
          operations on lands bordering, but no longer considered to be a part
          of, the Los Cerritos Wetlands. “Enhanced” directional drilling methods
          that have caused earthquakes, oil spills, water and air pollution will
          be used to extract 200 million barrels of oil, upping current
          production by 8000%, from 300 to 24,000 barrels daily. 120 new oil and
          water wells will be drilled next to the Newport Inglewood Fault.
          Billions of gallons of water will be extracted, laced with toxic
          chemicals, forced back underground to bring up oil, and then
          reinjected beneath the wetlands and surrounding area. A new pipeline
          will transport oil over the faultline and across the wetlands, methane
          gas will be burned off on site, and GHG emissions will increase by
          70,000 tons a year.
        </p>
        <p className={styles.paragraph}>
          Beach Oil Minerals presents themselves as benefactors who offer the
          last, best, chance to “save” and “restore” the Los Cerritos Wetlands.
          BOM’s land swap with the Los Cerritos Wetlands Authority grants the
          public ownership of 170 acres of wetlands, although the oil company
          will retain all mineral rights, operate existing wells for 20 years.
          BOM’s Upper Los Cerritos Wetlands Mitigation Bank will sell credits to
          other polluters to fund a 30 acre “restoration” which will in fact
          destroy the existing ecosystem and all evidence of tribal culture by
          bulldozing, dredging, and flooding seasonal wetlands to create a new
          salt marsh. New bike trails, a visitor center, and flood control
          barriers to protect oil operations will increase the human footprint
          at the expense of wetlands and wildlife.
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
          The Los Cerritos Wetlands Authority has four members: the California
          Coastal Conservancy, the Rivers and Mountains Conservancy, and the
          cities of Long Beach and Seal Beach. It is empowered to acquire
          property in the Los Cerritos Wetlands in order to protect and enhance
          the wetlands ecosystem, conduct maintenance and restoration, and
          provide educational activities. The Los Cerritos Wetlands Restoration
          and Oil Consolidation Project allows oil interests, city governments,
          and state agencies to exploit vulnerable communities and sets a
          precedent for increasing fossil fuel production along the coast. and
          That oil operations should expand in a wetlands wildlife preserve,
          along an earthquake fault in a tsunami zone subject to liquefaction is
          preposterous. That environmental protection agencies enable increased
          oil drilling and allow water to be polluted and used to extract oil is
          intolerable. That the only public outreach has been Beach Oil
          Minerals’ greenwashing campaign, while the concerns of
          environmentalists, Native Americans, and the community have been
          ignored, is criminal.
        </p>
      </main>

      <Footer />
    </div>
  );
}
