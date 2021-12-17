import React from "react";
import { Helmet } from "react-helmet";
import helmetInfo from "../../../data/helmet";
import projectInfo from "../../../data/projects";
import Main from "../../../layouts/main";
import ProjectPage from "../../../layouts/projectPage";

const CovidInfo = () => {
  const {
    projects: {
      covidInfo: { title, desc, keywords, ogTitle, ogDescription, ogImage },
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
          { property: "og:image", content: ogImage },
          { name: "twitter:card", content: "summary" },
        ]}
      />

      <Main isHeader={false}>
        <ProjectPage
          projectData={projectInfo.projects["covid19-info"]}
        ></ProjectPage>
      </Main>
    </>
  );
};

export default CovidInfo;
