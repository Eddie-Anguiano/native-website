// Global Imports
import Head from "next/head";
import Link from "next/link";
import { IoSend } from "react-icons/io5";
import { IconContext } from "react-icons";
// Component Imports
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
// Styles Imports
import styles from "../styles/pages/success.module.scss";

export default function success() {
  return (
    <div className={styles.success}>
      <Head>
        <title>Message Sent!</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Message sent successfully"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
      </Head>

      <Header />

      <main className={styles.main}>
        <Wrapper>
          <div className={styles.container}>
            <h2 className={styles.header}>
              Messege Sent&nbsp;&nbsp;
              <IconContext.Provider
                value={{ style: { verticalAlign: "bottom" } }}>
                <IoSend />
              </IconContext.Provider>
            </h2>
            <Link href="/">
              <button className={styles.homeBtn}>Home Page</button>
            </Link>
          </div>
        </Wrapper>
      </main>

      <Footer />
    </div>
  );
}
