import React from "react";
import styled from "styled-components";
import global from "../base/constants/global";
import responsive from "../base/constants/responsive";
import MetaDataBox from "../components/metaDataBox";
import Sidebar from "../components/sidebar";
import { ProjectType } from "../data/projects";
import ImgBox from "../modules/imgBox";

interface ProjectPageProps {
  projectData: ProjectType;
}

const ProjectContainer = styled.section`
  width: 100%;
  padding-left: ${global.headerHeight}px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${global.navHeight}px);

  ${responsive.device["above-desktop"]} {
    display: flex;
  }
`;

const ProjectPage: React.FC<ProjectPageProps> = ({ projectData }) => {
  const IMAGE_SIZE = 40;
  const METADATA_SIZE = 100 - IMAGE_SIZE;

  return (
    <ProjectContainer>
      <Sidebar title={projectData.title} />
      <Wrapper>
        <ImgBox />
        <MetaDataBox size={METADATA_SIZE} projectData={projectData} />
      </Wrapper>
    </ProjectContainer>
  );
};

export default ProjectPage;
