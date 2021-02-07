import styles from "../styles/pages/contact.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";

export default function contact() {
  return (
    <div className={styles.viewport}>
      <Header />
      <section className={styles.contact}>
        <Wrapper>
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.socialContainer}>
                <p className={styles.header}>Contact Us!</p>
                {/* <div className={styles.email}>placeholder@gmail.com</div> */}
              </div>
            </div>

            <form
              action="/success"
              className={styles.form}
              name="contact"
              method="POST"
              data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.nameContainer}>
                <div className={styles.firstName}>
                  <label htmlFor="first_name" className={styles.label}>
                    First Name
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    className={styles.input}
                  />
                </div>
                <div className={styles.lastName}>
                  <label htmlFor="last_name" className={styles.label}>
                    last Name
                  </label>
                  <input
                    name="last_name"
                    id="last_name"
                    type="text"
                    className={styles.input}
                  />
                </div>
                <div className={styles.lastName}></div>
              </div>

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
              />

              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                type="text"
                className={styles.textarea}
                name="message"
              />

              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </Wrapper>
      </section>
      <Footer />
    </div>
  );
}
