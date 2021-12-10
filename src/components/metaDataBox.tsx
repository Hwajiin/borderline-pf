import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import Border from "../modules/border";
import TitleBox from "../modules/titleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import StackList from "./stackList";
import { ProjectType } from "../data/projects";

interface MetaDataBoxProps {
  size: number;
  projectData: ProjectType;
}

type MetaDataBoxStyleProps = Pick<MetaDataBoxProps, "size">;

const Section = styled.section<MetaDataBoxStyleProps>`
  width: 100%;
  padding: ${whitespace.base.padding.sm}px;

  ${responsive.device["above-desktop"]} {
    width: ${({ size }) => size}%;
    padding: ${whitespace.base.padding.lg}px;
  }
`;

const Description = styled.p`
  margin: 30px 0;
`;

const LinkList = styled.ul`
  width: 100%;
  margin-top: 10px;
`;

const Item = styled.li``;

const Span = styled.span`
  margin-left: 10px;
`;

const MetaDataBox: React.FC<MetaDataBoxProps> = ({ size, projectData }) => {
  return (
    <Section size={size}>
      <TitleBox
        title={projectData.title}
        subtitle={projectData.subtitle}
        center={false}
      />

      <StackList stackList={projectData.stack} />

      <Description>{projectData.description}</Description>

      <Border />

      <LinkList>
        <Item>
          <FontAwesomeIcon icon={faPaperclip} />
          <Span>Deployment: {projectData.deployment}</Span>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faPaperclip} />
          <Span>Github: {projectData.github}</Span>
        </Item>
        <Item>
          <FontAwesomeIcon icon={faPaperclip} />
          <Span>Velog: {projectData.velog}</Span>
        </Item>
      </LinkList>
    </Section>
  );
};

export default MetaDataBox;
