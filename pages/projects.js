import react from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Recent projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Recent projects</h1>
        <ul className={styles.ul}>
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/project/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
