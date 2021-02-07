import styles from "../styles/pages/success.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Link from "next/link";
import { IoSend } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function success() {
  return (
    <div className={styles.success}>
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
