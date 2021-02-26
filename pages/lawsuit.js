import styles from "../styles/pages/lawsuit.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

export default function lawsuit() {
  return (
    <div className={styles.lawsuit}>
      <Head>
        <title>Take Action</title>
        <link rel="icon" href="/images/favicon.ico" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="Our lawsuit to stop the Los Cerritos Wetlands Restoration and Oil Consolidation Project"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Header color="#3e4d5c" />
      <main className={styles.main}>
        <h2 className={styles.header}>Take Action</h2>
        <img
          src="/icons/heart-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Fund the Lawsuit</h3>
        <p className={styles.paragraph}>
          We have a $5000 Matching Fund! Citizens About Resposible Pllanning
          (CARP) will match all donations dollar for dollar. Our Paypal account
          allows donations to be tax deductible. Checks can also be sent
          directly to our attorney, Coast Law Group, LLP, 1140 S Coast Hwy 101,
          Encinitas, CA 92024 (write <em>for PWP Lawsuit</em> on check).
        </p>
        <p className={styles.paragraph}>
          While PWP is suing the Coastal Commission, Beach Oil Minerals is also
          a party to the lawsuit. Our attorney, Livia Borak Beaudin, succeeded
          in defeating a motion by BOM to have our case dismissed for lack of
          legal standing and also convinced the judge to rule against BOM’s
          request to have the project’s permit deadline extended indefinitely.
          These court battles, while successful, have added to the projected
          $20,000 cost of the lawsuit. We plan to hold fundraisers (raffles,
          performance/art events, and speakers). If you would like to help with
          these or have ideas of your own, please contact us.
        </p>
        <img
          src="/icons/phone-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Contact Decision Makers</h3>
        <p className={styles.paragraph}>
          The Coastal Commission must answer to both the Governor and the
          Secretary of Natural Resources - let them know what you think!
        </p>
        <ol className={styles.list}>
          <li className={styles.item}>
            <h4>1. Governor Gavin Newsom</h4>
            <div>Phone: (916) 445-2841</div>
            <div>
              Email: ​
              <a href="https://govapps.gov.ca.gov/gov40mail/index.php">
                Link to email form
              </a>
            </div>
          </li>
          <li>
            <h4>2. WadeCrowfoot, CA Secretary of Natural Resources</h4>
            <div>Phone: (916) 653-5656</div>
            <div>Email: secretary@resources.ca.gov</div>
          </li>
        </ol>
        <h4>Sample letter</h4>
        <p className={`${styles.paragraph} ${styles.sampleLetter}`}>
          I/We support the lawsuit filed by Puvunga Wetlands Protectors against
          the California Coastal Commission for approving the Los Cerritos
          Wetlands Restoration and Oil Consolidation Project. ​Because ​the
          project violated Coastal Act provisions protecting​ public health, the
          environment, and tribal culture, the Commission misused an ​override
          provision to expand fossil fuel extraction and destroy the Los
          Cerritos Wetlands, a Traditional Tribal Landscape within the Sacred
          Site of Puvungna. The Coastal Commission and the Los Cerritos Wetlands
          Authority must reverse their approach to oil “consolidation,” and
          “restoration,” which erases wetlands and tribal sites. I/we also
          oppose the Upper Los Cerritos Wetlands Mitigation Bank, the Los
          Cerritos Wetlands Restoration Plan PEIR, The Southern Los Cerritos
          Wetlands Restoration Project, the Hellman Ranch Gas Plant, and
          poisoning the tules in Marketplace Marsh!
        </p>
        <img
          src="/icons/book-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Educate Yourself and Others</h3>
        <p className={styles.paragraph}>
          Review these documents, slide shows, and articles to learn more about
          threats to the Los Cerritos Wetlands and Puvungna and the impacts of
          fossil fuel extraction to the region.
        </p>
        <h4>Downloadable resources</h4>
        <ul className={styles.resources}>
          <li className={styles.resources__item}>
            <a href="/data/drilling-down.pdf" download>
              drilling-down.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/verified-petition.pdf" download>
              verified-petition.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/lawsuit-opening-brief.pdf" download>
              lawsuit-opening-brief.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/sierra-club-letter.pdf" download>
              sierra-club-letter.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/Bermzerk.pptx" download>
              Bermzerk.pptx
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/los-cerritos.ppt" download>
              los-cerritos.ppt
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/marketplace-marsh.pptx" download>
              marketplace-marsh.pptx
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/mitigation-bank.pptx" download>
              mitigation-bank.pptx
            </a>
          </li>
        </ul>
        <img
          src="/icons/users-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Connect</h3>
        <ul className={styles.unorderedList}>
          <li>
            <a href="https://www.facebook.com/groups/ProtectLosCerritosWetlands/">
              Protect the Long Beach/Los Cerritos on Facebook
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com/explore/tags/protectpuvungna
">
              Friends of Puvungna on Instagram #protectpuvungna
            </a>
          </li>
          <li>
            <a href="http://ccrpa.com/">
              California Cultural Resources Protection Alliance
            </a>
          </li>
          <li>
            <a href="https://www.stand.la/">STAND LA</a>
          </li>
          <li>
            <a href="https://socal350.org/">SoCal 350 Climate Action</a>
          </li>
          <li>
            <a href="https://sogoreate-landtrust.org/">Sogorea Te Land Trust</a>
          </li>
          <li>
            <a href="http://www.stopline3.org">Stop Line 3</a>
          </li>
          <li>
            <a href="https://algalita.org">
              Algalita Marine Research and Education Foundation
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ProtectBallonaWetlandsandWildlife">
              Protect Ballona Wetlands & Wildlife
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/StopFrackingLongBeach/">
              Stop Fracking Long Beach
            </a>
          </li>
        </ul>

        <Quote
          text="The Los Cerritos Wetlands is our church, this is where we pray, this is where we go to remind people of who we are. We constantly struggle to keep these parcels of land in a natural state. We get very few wins when it comes to land. Allow people to have these sacred sites. The Coastal Commission should not be afraid of developers and their money."
          cite="Gloria Arellanes"
          title="Tongva Elder and Activist"
        />
      </main>

      <Footer />
    </div>
  );
}
