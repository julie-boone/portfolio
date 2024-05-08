import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Julie Boone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="JB Logo"
            width={120}
            height={100}
            priority
          />
        </div>
        <h1>Julie Boone</h1>
        <h2>Junior Frontend Developer</h2>
        <div className={styles.card}>
          <p>
            I&apos;m a junior developer based in Ghent, about to graduate from
            Syntra as frontend developer, but with a broad interest in all
            development processes. I&apos;m a quick learner and I&apos;m not
            afraid to take on new challenges.
          </p>
        </div>

        <div className={styles.grid}>
          <Link
            href="/projects"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Projects <span>-&gt;</span>
            </h2>
            <p>Have a look at what I&apos;ve been working on.</p>
          </Link>
          <Link
            href="/contact"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Contact me <span>-&gt;</span>
            </h2>
            <p>Let&apos;s talk!</p>
          </Link>
        </div>
      </main>
    </>
  );
}
