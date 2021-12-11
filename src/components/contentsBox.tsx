import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";

type ProjectsType = {
  title: string;
  summary: string;
};

interface ContentsBoxProps {
  size: number;
  projects: ProjectsType[];
}

const SContentsBox = styled.section<ContentsBoxProps>`
  width: 100%;
  height: ${({ size }) => size}%;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 7px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  ${responsive.device["above-tablet"]} {
    width: ${({ size }) => size}%;
    height: 100%;

    &:hover,
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 7px 0px 12px -2px,
        rgba(0, 0, 0, 0.3) 3px 0px 7px -3px;
    }
  }
`;

const Header = styled.header`
  width: 100%;
  padding: ${whitespace.base.padding.sm}px 0;
  margin-bottom: 50px;
  ${flexbox()}
`;

const Title = styled.h2``;

const List = styled.ul`
  padding: 0 20px;

  ${responsive.device["above-tablet"]} {
    padding: 0 40px;
  }
`;

const Item = styled.li`
  ${flexbox("flex-start", "flex-start")}

  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

const Number = styled.span`
  margin-right: 20px;
  font-size: 2em;
  line-height: 0.8em;
  color: ${colors.variable["gray-dark"]};

  ${responsive.device["above-tablet"]} 
    font-size: 3em;
  }
`;

const ItemTitle = styled.h3`
  font-size: 16px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: ${fonts.size.sm};
`;

const ContentsBox: React.FC<ContentsBoxProps> = ({ size, projects }) => {
  return (
    <SContentsBox size={size} projects={projects}>
      <Header>
        <Title>Contents</Title>
      </Header>

      <List>
        {projects.map((project, index) => (
          <Item key={index}>
            <Number>{index + 1 < 10 ? `0${index + 1}` : index + 1}</Number>
            <div>
              <ItemTitle>{project.title}</ItemTitle>
              <Description>{project.summary}</Description>
            </div>
          </Item>
        ))}
      </List>
    </SContentsBox>
  );
};

export default ContentsBox;
