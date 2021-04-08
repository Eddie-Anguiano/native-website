// Global Imports
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// Component Imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Quote from "../components/Quote";
// Styles Imports
import styles from "../styles/pages/ecosystem.module.scss";

export default function ecosystem() {
  return (
    <div className={styles.learnMore}>
      <Head>
        <title>Conservation vs. "Restoration"</title>
        <link rel="icon" href="/images/favicon.ico" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="The proposed expansion of salt marshes across the Los Cerritos
          Wetlands ignores evidence that the area was never a full tidal salt
          marsh and that added tidal influence is neither historic nor
          desirable, especially in light of projected sea level rise."></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Header color="#3e4d5c" />

      <main className={styles.main}>
        <h2 className={styles.header}>Conservation vs. "Restoration"</h2>
        <figure className={styles.figureLeft}>
          <img
            className={styles.imgOil}
            src="/images/ecosystem/eco-bird.png"
            alt="oil fire"
          />
          <figcaption className={styles.caption}>
            Endangered Belding’s Savannah Sparrow and Pickleweed
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
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
          Oil Mineral's “restoration” will expand the existing salt marsh across
          seasonal brackish wetlands, by breaching the berm and building a new
          one to protect its oil operations. The wetlands will be scraped and
          reshaped to encourage tidal flow and non-native plants will be removed
          and/or sprayed with herbicides. Existing habitat will also be replaced
          by new trails, a visitor center and parking lot.
        </p>

        <figure className={styles.figureRight}>
          <img
            className={styles.imgWater}
            src="/images/ecosystem/bulldozer.jpg"
            alt="oil in water"
          />
          <figcaption className={styles.caption}>
            Backhoe begins “restoration” of Los Cerritos Wetlands, 2021
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          <strong>The Los Cerritos Wetlands Authority</strong>​ is working to
          expand BOM’s thirty acre “restoration” across the entire ​Los Cerritos
          Wetlands.
          <strong> The Los Cerritos Wetlands Restoration Project​</strong>​
          accommodates the new oil pipeline across the wetlands and enhanced
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
          <strong>Puvunga Wetlands Protectors</strong> works to oppose these
          ongoing threats, and supports actions taken by other organizations and
          community members to do so as well.
        </p>
        <Carousel showArrows="true">
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.001.jpeg"
              alt="slide 1"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.002.jpeg"
              alt="slide 2"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.003.jpeg"
              alt="slide 3"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.004.jpeg"
              alt="slide 4"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.005.jpeg"
              alt="slide 5"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.006.jpeg"
              alt="slide 6"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.007.jpeg"
              alt="slide 7"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.008.jpeg"
              alt="slide 8"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.009.jpeg"
              alt="slide 9"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.010.jpeg"
              alt="slide 10"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.011.jpeg"
              alt="slide 11"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.012.jpeg"
              alt="slide 12"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.013.jpeg"
              alt="slide 13"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.014.jpeg"
              alt="slide 14"
            />
          </div>
          <div>
            <img
              src="/images/Bermzerk-slides/Bermzerk.015.jpeg"
              alt="slide 15"
            />
          </div>
        </Carousel>

        <Quote
          text="They’re just about tearing, tearing, tearing - constantly tearing up the land, constantly coming to us to take more, more, more minerals out of the earth."
          cite="Julia Bogony"
          title="Cultural Director, Tongva/Gabrieleno San Gabriel Band of Mission Indians "
        />
      </main>
      <Footer />
    </div>
  );
}
