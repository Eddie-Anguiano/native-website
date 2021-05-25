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
        <h3 className={styles.subheader}>Upcoming Events/Actions</h3>
        <h4 className={styles.paragraph}>
          Attend virtual Los Cerritos Wetlands Authority Board Meeting
        </h4>
        <p className={styles.paragraph}>
          Thursday, June 3rd at 12:30 pm
          <br />
          <a href="https://intoloscerritoswetlands.org/our-governing-board/next-meeting/">
            Click Here{" "}
          </a>
          for agenda!
        </p>
        {/* <p className={styles.paragraph}>
          <strong>Puvungna/Los Cerritos Wetlands Healing Walk and Rally</strong>
          <br />
          <strong>Saturday, April 24th from 9am - 4pm.</strong>
          <br /> <strong>9am</strong> Meet at Hellman Ranch Trail, Heron Pointe
          and Seal Beach Blvd, Seal Beach <br />
          <strong>1pm - 2pm</strong>, lunch and speakers
          <br /> <strong>2pm - 4pm</strong> Rally at 2nd and PCH <br />
          <strong>Park</strong> at Hellman Ranch Trail or on Adolfo Lopez Drive
        </p>
        <figure className={styles.figureLeft}>
          <img
            className={styles.imgOil}
            src="/images/lawsuit/walk-poster.png"
            alt="bird"
          />
        </figure>
        <p className={styles.paragraph}>
          The Los Cerritos Wetlands, a tribal cultural landscape within the
          Sacred Site of Puvungna, that have sustained generations, now bear the
          scars of abuse. Plants, animals, and people continue to suffer as
          Illegal toxic fumes from current wetlands drilling sites poison the
          air. Bulldozers have been digging in the wetlands and have torn into a
          tribal witness area at Gum Grove Park. Plans to drill for oil, build a
          new gas plant, poison tules, and erase tribal culture and remaining
          wildlife habitat in the name of “restoration” move forward. We hope
          you will join us as we walk from Motuucheyngna through the wetlands to
          heal the land and ourselves.
        </p>
        <br />
        <br />
        <figure className={styles.figureLeft}>
          <img
            className={styles.imgOil}
            src="/images/lawsuit/music-poster.png"
            alt="bird"
          />
        </figure>
        <p className={styles.paragraph}>
          <strong>
            An Evening of Music for the Los Cerritos Wetlands, Saturday, April
            24th from from 7pm to 8:30 pm.
          </strong>{" "}
          We will make and share music to heal the collective heart, so that we
          may be inspired to continue to protect the Los Cerritos Wetlands,
          knowing that they were and still are a part of Puvungna, sacred to the
          Acjachemen and Tongva people. We are honored to hold space for all to
          learn from Indigenous Culture Keepers and community members. Through
          the turbulence and heartache caused by resisting big oil we find
          strength in unity. As people have always done we gather, celebrate,
          and resist through healing words and sounds. Host: Malila Hollow
          <br />
          <strong>Register online event here: </strong>
          <a href="https://act.sierraclub.org/events/details?formcampaignid=7013q000001lGWDAA2">
            click to register
          </a>
        </p>

        <br />
        <p className={styles.paragraph}>
          <strong>Sponsored by:</strong> Puvunga Wetlands Protectors and the Los
          Cerritos Wetlands Task Force
          <br />
          <strong>Supporters include:</strong> Friends of Puvungna, Citizens
          About Responsible Planning, California Cultural Resources Protection
          Alliance, ICAN Foundation, Idle No More SoCal, SoCal350 Action
          Committee, Long Beach Environmental Alliance, Climate Reality Project
          LA, Bear Tracks Magazine, SoCal350 Action Committee, Citizens for
          Breathable Air, Poor People’s Campaign OC, OC Peace Coalition, Stop
          Fracking Long Beach, Veterans for Peace Horace Coldman Chapter 110,
          Grassroots Coalition.
        </p> */}

        <img
          src="/icons/heart-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
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
          While PWP is suing the Coastal Commission, Beach Oil Minerals is also
          a party to the lawsuit. Our attorney, Livia Borak Beaudin of Coast Law
          Group succeeded in defeating a motion by BOM to have our case
          dismissed for lack of legal standing and has also twice convinced the
          judge to rule against BOM’s requests to have the project’s permit
          deadline extended indefinitely. Unfortunately, in her final ruling on
          the merits of our case the Judge found for the Coastal Commission. The
          decision may be appealed.
        </p>
        <img
          src="/icons/phone-black.svg"
          alt="heart icon"
          className={styles.icon}
        />
        <h3 className={styles.subheader}>Contact Decision Makers</h3>
        <p className={styles.paragraph}>
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
