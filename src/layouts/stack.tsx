import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import global from "../base/constants/global";
import responsive from "../base/constants/responsive";
import Hopscotch from "../base/func/hopscotch";
import ContentsBox from "../components/contentsBox";
import StackItem from "../components/stackItem";
import projectInfo from "../data/projects";

interface StackListProps {
  size: number;
}

const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  border-bottom: 1px solid ${colors.variable.black};
  overflow: hidden;

  ${responsive.device["above-tablet"]} {
    flex-direction: row;
    min-height: 0;
    height: calc(100vh - ${global.navHeight + global.headerHeight}px);
  }
`;

const StackList = styled.ul<StackListProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ size }) => size}%;

  ${responsive.device["above-tablet"]} {
    width: ${({ size }) => size}%;
    flex-direction: row;
    height: calc(100vh - ${global.navHeight + global.headerHeight}px);
  }
`;

const Stack: React.FC = () => {
  const PROJECT_LENGTH = projectInfo.projects.length;
  const CONTENTSBOX_SIZE = 60;
  const STACKLIST_SIZE = 100 - CONTENTSBOX_SIZE;

  const hopscotch = new Hopscotch(PROJECT_LENGTH);

  return (
    <StackContainer>
      <ContentsBox size={CONTENTSBOX_SIZE} />
      <StackList size={STACKLIST_SIZE}>
        {projectInfo.projects.map((item, index) => (
          <StackItem
            key={index}
            size={hopscotch.getPortion(index)}
            to={`/projects${item.route}`}
            title={item.title}
          ></StackItem>
        ))}
      </StackList>
    </StackContainer>
  );
};

export default Stack;
