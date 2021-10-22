// Global Imports
import Head from "next/head";
// Component Imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Quote from "../components/Quote";
// Styles Imports
import styles from "../styles/pages/lawsuit.module.scss";

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
          src="/icons/alert-triangle.svg"
          alt="heart icon"
          className={styles.icon}
        />
        {/* <h3 className={styles.subheader}>Upcoming Events/Actions</h3>
        <h4 className={styles.paragraph}>
          Circle of Life - Protecting local sacred sites and costal wetlands.
        </h4>
        <p className={styles.paragraph}>
          <div>July 12, 2021 via zoom</div>
          <a href="https://www.eventbrite.com/e/circle-of-life-protecting-local-sacred-sites-and-coastal-wetlands-tickets-161715682961">
            { " "}Click here to register
            </a>
        </p>
        <figure className={styles.figureMiddle}>
          <img
            className={styles.imgWater}
            src="/images/lawsuit/circleOfLifePoster.jpg"
            alt="circle of life poster"
          />
        </figure>
        <img
          src="/icons/heart-black.svg"
          alt="heart icon"
          className={styles.icon}
        /> */}
        <h3 className={styles.subheader}>Fund the Lawsuit</h3>
        <p className={styles.paragraph}>
          We have a $5000 Matching Fund! Citizens About Responsible Planning
          (CARP) will match all donations dollar for dollar. Our Paypal account
          allows donations to be tax deductible. Checks can also be sent
          directly to our attorney, Coast Law Group, LLP, 1140 S Coast Hwy 101,
          Encinitas, CA 92024 (write <em>for PWP Lawsuit</em> on check). Thanks
          to your generous donations we have raised over $4000 which is being
          matched by CARP dollar for dollar. We are very grateful for your
          support.
        </p>
        <p className={styles.paragraph}>
          While PWP sued the Coastal Commission, Beach Oil Minerals is also a
          party to the lawsuit. Our attorney, Livia Borak Beaudin of Coast Law
          Group succeeded in defeating a motion by BOM to have our case
          dismissed for lack of legal standing and also twice convinced the
          judge to rule against BOM’s requests to have the project’s permit
          deadline extended indefinitely. Unfortunately, in her final ruling on
          the merits of our case the Judge found for the Coastal Commission and
          dismissed the lawsuit. Until further notice, all donations will fund
          court costs and legal fees. PWP will continue to investigate and
          challenge wetlands restoration projects, plans for a new gas plant,
          and other threats to the Los Cerritos Wetlands.
        </p>
        <img
          src="/icons/phone-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Contact Decision Makers</h3>
        <h4 className={styles.allies}>
          Public Comment Period on BOM’s Request for a Coastal Permit Extension
          now open
        </h4>
        <p className={styles.paragraph}>
          Beach Oil Minerals has applied for an extension of its Coastal
          Development Permit for the Los Cerritos Wetlands Restoration and Oil
          Consolidation Project which expires this December. The Coastal
          Commission’s permit extension process allows for the consideration of
          <strong> "changed circumstances"</strong> that might affect the
          consistency of BOM’s Project with the Coastal Act.{" "}
          <strong>
            The Commission must identify not only the changes, but also how
            these changes could lead to a different conclusion.
          </strong>
        </p>
        <p className={styles.paragraph}>
          This review will likely focus on changes that might alter the
          conclusions made in evaluating and allowing the use of the Coastal
          Act’s <strong>Override Provision</strong> in approving the project in
          2018. The Commission may consider the following:
        </p>
        <ul className={styles.resources}>
          <li className={styles.resources__item}>
            Additional state-level policy changes and directions on climate
            change and CO2 emissions, and scientific info about this, that would
            change the conclusions made three years ago.
          </li>
          <li className={styles.resources__item}>
            Insights and concerns about tribal interests that were not available
            or addressed at the time.
          </li>
          <li className={styles.resources__item}>
            New evidence about the urgency of addressing climate change (IPCC
            reports, Paris thresholds).
          </li>
          <li className={styles.resources__item}>
            Increased understanding about the loss of wetlands from sea level
            rise.
          </li>
          <li className={styles.resources__item}>
            The urgency of pursuing alternative energy sources such as offshore
            wind.
          </li>
          <li className={styles.resources__item}>
            Changes in the environmental quality of the project site.
          </li>
          <li className={styles.resources__item}>
            The degree to which the applicant has “diligently” pursued the
            project.
          </li>
        </ul>
        <h4 className={styles.allies}>Email comments to Kate Hucklebridge</h4>
        <div>kate.huckelbridge@coastal.ca.gov</div>
        <div>
          <strong>Subject Line:</strong> Comment on CDP No. 9-18-0395 BOM
          Request for a One Year Extension
        </div>
        <h4 className={styles.allies}>Sample email</h4>
        <p className={`${styles.paragraph} ${styles.indent}`}>
          I/We value the Coastal Commission’s role in evaluating all changed
          circumstances when considering BOM’s request for a one-year extension
          of its 3 year CDP, and support a full public hearing should three
          Commissioners request it. We understand that you may focus on
          investigating changes with respect to the use of the Override
          Provision, including new data on the loss of wetlands due to sea level
          rise. We welcome the Commission’s efforts to address the impacts of
          climate change and CO2 emissions, environmental justice issues, and
          the historic and ongoing marginalization of tribal voices.
        </p>{" "}
        {/* <p className={styles.paragraph}>
          <strong>
            Should BOM’s Coastal Permit Extension be Granted? Allow the public
            to comment!{" "}
          </strong>
          Ask that the Coastal Commission hold a public hearing on CDP No.
          9-18-0395, Beach Oil MInerals request for a one-year extension of
          their Coastal Development Permit for the Los Cerritos Wetlands
          Restoration and Oil Consolidation Project. Substantial changes in the
          project itself, in our understanding of the impacts of the project,
          and in the speed and severity of climate change and sea level rise,
          must be considered before concluding that the project is currently in
          compliance with the Coastal Act. See BOM’s permit extension request
          under Documents.
        </p>
        <ol className={styles.list}>
          <li className={styles.item}>
            <h4>Email comments to Kate Hucklebridge</h4>
            <div>kate.huckelbridge@coastal.ca.gov</div>
            <div>
              <strong>Subject Line:</strong> Comment on CDP No. 9-18-0395 BOM
              Request for a One Year Extension
            </div>
          </li>
        </ol>
        <h4>Sample letter</h4>
        <p className={`${styles.paragraph} ${styles.indent}`}>
          I/We question granting a one year extension of the CDP for the Los
          Cerritos Wetlands Restoration and Oil Consolidation Project and
          request that a full public hearing be held to consider the multiple
          changes in the project and the circumstances that have taken place
          since 2018. Because the project could not not comply with Coastal Act
          provisions protecting public health, the environment, and tribal
          culture, the CDP expanding fossil fuel operations is dependent on BOM
          providing an overriding public benefit. However, the so-called public
          benefit of wetlands “restoration” will be increasingly irrelevant and
          short-lived as sea level rise is predicted to turn a now-diverse
          ecosystem into mudflats more rapidly than was estimated in 2018.
          Additionally, dredging and flooding existing salt flats and seasonal
          wetlands to create salt marshes will now require building giant berms
          on three sides of the Synergy wetlands property. Thirty feet wide and
          eighteen feet high, these berms will decrease wetlands size and
          connectivity, especially as they may also serve as roads for vehicles
          servicing oil operations.. The risk of climate change to coastal
          communities and the planet as a whole confronts an entrenched but
          increasingly toxic and irrelevant fossil fuel industry. A moratorium
          on permitting new oil and gas drilling is under consideration at the
          state level. The benefit and liability of increasing oil extraction
          from 300 to 24,000 barrels daily must also be re-examined.
        </p> */}
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
        <h4>Downloadable resources, videos, and images</h4>
        <ul className={styles.resources}>
          <li className={styles.resources__item}>
            <a href="/data/drilling-down.pdf" download>
              drilling-down.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/sierra-club-letter.pdf" download>
              sierra-club-letter.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/bermzerk.pptx" download>
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
          <li className={styles.resources__item}>
            <a href="https://www.youtube.com/watch?v=BH_g5RION1s">
              An Evening of Music for the Los Cerritos Wetlands (YouTube video)
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="https://www.youtube.com/watch?v=6POiSsTp-S0">
              The Gathering Place (YouTube video)
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/images/lawsuit/walk-poster.png" download>
              Event Posters by Cassandra Rowden (Los Cerritos Wetlands Healing
              Walk)
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/images/lawsuit/music-poster.png" download>
              Event Posters by Cassandra Rowden (An Evening of Music for the Los
              Cerritos Wetlands)
            </a>
          </li>
        </ul>
        <h4 className={styles.events}>Legal Arguments in Lawsuit</h4>
        <ul className={styles.resources}>
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
            <a href="/data/respondent.pdf" download>
              Respondent-Coastal-Commission's-Opposition-to-Petition.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/reply-brief.pdf" download>
              Reply-Brief.pdf
            </a>
          </li>
          <li className={styles.resources__item}>
            <a href="/data/final-judgement.pdf" download>
              PWP vs CCP Final Judgement
            </a>
          </li>
        </ul>
        <h4 className={styles.events}>Documents</h4>
        <ul className={styles.resources}>
          <li className={styles.resources__item}>
            <a href="/data/bom-request.pdf" download>
              BOM Request for Extension of CDP Permit
            </a>
          </li>
        </ul>
        <img
          src="/icons/users-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Connect</h3>
        <h4 className={styles.allies}>Allies:</h4>
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
          <li>
            <a href="https://www.facebook.com/TongvaLanguage">
              Tongva Language
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
