// Global Imports
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import type { NextPage } from 'next';
// Component Imports
import Footer from "../components/Footer";
import Header from "../components/Header";
import Quote from "../components/Quote";
// Styles Imports
import styles from "../styles/pages/ecosystem.module.scss";
import { cfGet, resolveIncludes } from "@/api/contentful";
import { EntryCollection } from "contentful";

interface ContentfulAsset {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
}

interface ContentfulQuote {
  fields: {
    quote: {
      content: Array<{
        content: Array<{
          value: string;
        }>;
      }>;
    };
    citation: string;
    position: string;
  };
}

interface ContentfulPost {
  fields: {
    header: string;
    body: {
      content: Array<{
        content: Array<{
          value: string;
          marks?: Array<{ type: string }>;
        }>;
      }>;
    };
  };
}

interface EcosystemProps {
  data: {
    items: ContentfulPost[];
    includes: {
      Asset?: ContentfulAsset[];
      Entry?: ContentfulQuote[];
    };
  };
}

const Ecosystem: NextPage<EcosystemProps> = ({ data }) => {
  const post = data.items[0];
  const firstAsset = data.includes?.Asset?.[0];
  const secondAsset = data.includes?.Asset?.[1];
  const quote = data.includes?.Entry?.[0];

  if (!post || !firstAsset || !secondAsset || !quote) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.learnMore}>
      <Head>
        <title>{post.fields.header}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content={post.fields.body.content[1].content[0].value}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Header color="#3e4d5c" />

      <main className={styles.main}>
        <h2 className={styles.header}>{post.fields.header}</h2>
        <figure className={styles.figureLeft}>
          <img
            className={styles.imgOil}
            src={`https:${firstAsset.fields.file.url}`}
            alt={firstAsset.fields.title}
          />
          <figcaption className={styles.caption}>
            {firstAsset.fields.description}
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          {post.fields.body.content[1].content[0].value}
          <strong>{post.fields.body.content[1].content[1].value}</strong>
          {post.fields.body.content[1].content[2].value}
        </p>

        <figure className={styles.figureRight}>
          <img
            className={styles.imgWater}
            src={`https:${secondAsset.fields.file.url}`}
            alt={secondAsset.fields.title}
          />
          <figcaption className={styles.caption}>
            {secondAsset.fields.description}
          </figcaption>
        </figure>
        <p className={styles.paragraph}>
          <strong>{post.fields.body.content[3].content[0].value}</strong>
          {post.fields.body.content[3].content[1].value}
          <strong>{post.fields.body.content[3].content[2].value}</strong>
          {post.fields.body.content[3].content[3].value}
        </p>

        <p className={styles.paragraph}>
          <strong>{post.fields.body.content[4].content[0].value}</strong>
          {post.fields.body.content[4].content[1].value}
        </p>

        <Quote
          text={quote.fields.quote.content[0].content[0].value}
          cite={quote.fields.citation}
          title={quote.fields.position}
        />
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const data = await cfGet<EntryCollection<any>>("/entries", {
    searchParams: {
      content_type: "blog",
      include: 2,
      order: "-sys.createdAt",
      limit: 20,
      locale: "en-US",
    },
  });
  console.log('data', data)

  // const posts = resolveIncludes(data.items, data.includes);

  return {
    props: { data },
  };
}

export default Ecosystem;
