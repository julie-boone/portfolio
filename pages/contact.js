import react from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Contact() {
  const email = "julieboone@live.be";
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Contact me</h1>
        <p>+324 94 85 70 63</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </>
  );
}
