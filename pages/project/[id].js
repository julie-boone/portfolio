import { projects } from "@/data/projects";
import react from "react";

// posts will be populated at build time by getStaticProps()
export default function Project({ project }) {
  return (
    <>
      <h1>{project.name}</h1>
      <ul>
        {project.technologies.map((technology, i) => (
          <li key={i}>{technology}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return { paths, fallback: true };
};

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const project = projects.find((project) => project.id === params.id);

  // By returning { props: { project } }, the Project component
  // will receive `project` as a prop at build time
  return {
    props: {
      project,
    },
  };
}
