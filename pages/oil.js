import styles from "../styles/pages/oil.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function oil() {
  return (
    <div className={styles.learnMore}>
      <Head>
        <title>Drilling is Killing!</title>
        <link rel="icon" href="/images/favicon.ico" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="Because its existing oil wells on the Los Cerritos Wetlands are drying
          up and cannot legally be salvaged,​ ​
          Beach Oil Minerals/Los Cerritos Wetlands, LLC ​seeks
          to “consolidate” oil operations on lands bordering, but no longer
          considered to be a part of, the Los Cerritos Wetlands."></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Drilling is Killing!</h2>
        <figure className={styles.figureLeft}>
          <img
            className={styles.imgOil}
            src="/images/big-oil/oil-fire.png"
            alt="oil fire"
          />
          <figcaption className={styles.caption}>
            A natural gas flare and 160ft drilling rig will be on site
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          Because its existing oil wells on the Los Cerritos Wetlands are drying
          up and cannot legally be salvaged,​ ​
          <strong>Beach Oil Minerals/Los Cerritos Wetlands, LLC</strong>​ ​seeks
          to “consolidate” oil operations on lands bordering, but no longer
          considered to be a part of, the Los Cerritos Wetlands. “Enhanced”
          directional drilling methods that have caused earthquakes, oil spills,
          and pollution will be used t​o extract 200 million barrels of oil,
          upping current production by 8000%, from 300 to 24,000 barrels daily.
          120 new oil and water wells will be drilled next to the Newport
          Inglewood Fault. Billions of gallons of water will be extracted, laced
          with toxic chemicals, forced back underground to bring up oil, and
          then reinjected beneath the wetlands and surrounding area. A new
          pipeline will transport oil over the faultline and across the
          wetlands, methane gas will be burned off on site, and GHG emissions
          will increase by 70,000 tons a year.
        </p>

        <p className={styles.paragraph}>
          <strong>Beach Oil Minerals/LCW LLC</strong>​ ​presents themselves as
          benefactors who offer the last, best, chance to “save” and “restore”
          the Los Cerritos Wetlands. Although a land swap with the ​​
          <strong>Los Cerritos Wetlands Authority​ (LCWA)</strong>​ grants the
          public ownership of 170 acres of wetlands, the oil company will retain
          all mineral rights and continue to operate existing wells for twenty
          years. BOM’s{" "}
          <strong>​​Upper Los Cerritos Wetlands Mitigation Bank</strong>​​ will
          sell credits to other polluters to fund a thirty acre “restoration”
          which will in fact ​destroy the existing ecosystem and all evidence of
          tribal culture by bulldozing, dredging, and flooding seasonal wetlands
          to create a new salt marsh. Adding bike trails, a visitor center, and
          flood control barriers to protect oil operations will increase the
          human footprint at the expense of wetlands and wildlife.
        </p>
        <figure className={styles.figureRight}>
          <img
            className={styles.imgWater}
            src="/images/big-oil/oil-water.png"
            alt="oil in water"
          />
          <figcaption className={styles.caption}>
            Consequences of an oil spill in wetlands
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          <strong>The Los Cerritos Wetlands Authority</strong>​​ and Beach OIl
          Minerals/LCW LLC have formed a public/private partnership ​which ​sets
          a precedent for increasing fossil fuel production along the coast. The
          LCWA is a state agency empowered to acquire property in the Los
          Cerritos Wetlands in order to protect and enhance the wetlands
          ecosystem. It has four members: the{" "}
          <strong>
            ​California Coastal Conservancy, the San Gabriel and Lower Los
            Angeles Rivers and Mountains Conservancy (RMC)
          </strong>
          ​, and the cities of <strong>Long Beach</strong>​ ​and{" "}
          <strong>Seal Beach</strong>​​. The only public outreach for the
          project has been Beach Oil Minerals’ greenwashing campaign, while the
          concerns of environmentalists, Native Americans, and the community
          have been ignored. That state environmental protection agencies are
          enabling the expansion of oil operations in and around coastal
          wetlands, along an earthquake fault in a tsunami zone subject to
          liquefaction, is criminal.
        </p>
        <Quote
          text="Now is a critical time for those of us who seek to reduce our society’s dependence on
fossil fuels and transition to a green economy. We must work together to prevent further
destruction by those private and public interests whose actions devalue our lives, our
homes, and the natural world."
          cite="Tahesha Knapp-Christensen"
          title="Omaha, Water Protector"
        />
      </main>

      <Footer />
    </div>
  );
}
