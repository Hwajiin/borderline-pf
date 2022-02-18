import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import helmetInfo from "../../../data/helmet";
import projectInfo from "../../../data/projects";
import Main from "../../../layouts/main";
import ProjectPage from "../../../layouts/projectPage";

const Project = () => {
  const location = useLocation();
  const path = location.pathname.split("/projects/")[1];
  const {
    projects: {
      project: {
        [`${path}`]: { title, desc, keywords, ogTitle, ogDescription },
      },
    },
  } = helmetInfo;

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: desc },
          { name: "keywords", content: keywords },
          { property: "og:title", content: ogTitle },
          { property: "og:description", content: ogDescription },
          { name: "twitter:card", content: "summary" },
        ]}
      />

      <Main isHeader={false}>
        <ProjectPage
          projectData={projectInfo.projects[`${path}`]}
        ></ProjectPage>
      </Main>
    </>
  );
};

export default Project;
