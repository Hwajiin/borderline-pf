import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import Border from "../modules/border";
import TitleBox from "../modules/titleBox";
import StackList from "./stackList";
import { ProjectType } from "../data/projects";
import fonts from "../base/constants/fonts";
import flexbox from "../base/mixins/flexbox";
import colors from "../base/constants/colors";

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
  margin: 40px 0;
  font-size: ${fonts.size.md};
  line-height: 1.5em;
`;

const LinkList = styled.ul`
  width: 100%;
  margin-top: 10px;

  ${responsive.device["above-tablet"]} {
    display: flex;
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${responsive.device["above-tablet"]} {
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 10px;
    }
  }
`;

const SLink = styled.a`
  ${flexbox()}
  font-size: ${fonts.size.md};
  height: 48px;
  color: ${colors.variable.white};
  background-color: ${colors.variable.green};
  transition: all 200ms ease-in-out;

  &:active,
  &:hover {
    opacity: 0.8;
  }

  ${responsive.device["above-tablet"]} {
    width: 200px;
  }
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
          <SLink href={projectData.deployment} target="_blank">
            Deployment
          </SLink>
        </Item>
        <Item>
          <SLink href={projectData.github} target="_blank">
            Github
          </SLink>
        </Item>
        <Item>
          <SLink href={projectData.velog} target="_blank">
            Velog
          </SLink>
        </Item>
      </LinkList>
    </Section>
  );
};

export default MetaDataBox;
