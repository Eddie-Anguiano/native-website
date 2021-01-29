import styles from "../styles/pages/native.module.scss";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function native() {
  return (
    <div>
      <Header />
      native
      <Footer />
    </div>
  );
}
