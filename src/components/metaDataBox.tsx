import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
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

type LinkType = {
  isHref?: boolean;
};

const Section = styled.section<MetaDataBoxStyleProps>`
  width: 100%;
  padding: ${whitespace.base.padding.sm}px;

  ${responsive.device["above-desktop"]} {
    width: ${({ size }) => size}%;
    padding: ${whitespace.base.padding.lg}px;
  }

  ${responsive.device["above-desktop"]} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Data = styled.div``;

const Description = styled.p`
  margin: 40px 0;
  font-size: ${fonts.size.md};
  line-height: 1.5em;
`;

const LinkList = styled.ul`
  width: 100%;
  margin-top: 10px;
  border-top: 2px solid ${colors.variable.gray};
  padding-top: 10px;

  ${responsive.device["above-tablet"]} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  ${responsive.device["above-tablet"]} {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const SLink = styled.a<LinkType>`
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

  ${({ isHref }) =>
    !isHref
      ? `
    pointer-events: none;
    opacity: 0.5;
  `
      : ""}
`;

const MetaDataBox: React.FC<MetaDataBoxProps> = ({ size, projectData }) => {
  return (
    <Section size={size}>
      <Data>
        <TitleBox
          title={projectData.title}
          subtitle={projectData.subtitle}
          center={false}
        />

        <StackList stackList={projectData.stack} />

        <Description>{projectData.description}</Description>
      </Data>

      <LinkList>
        <Item>
          <SLink
            href={projectData.deployment}
            target="_blank"
            isHref={projectData.deployment === "" ? false : true}
          >
            Deployment
          </SLink>
        </Item>
        <Item>
          <SLink
            href={projectData.github}
            target="_blank"
            isHref={projectData.github === "" ? false : true}
          >
            Github
          </SLink>
        </Item>
        <Item>
          <SLink
            href={projectData.velog}
            target="_blank"
            isHref={projectData.velog === "" ? false : true}
          >
            Velog
          </SLink>
        </Item>
      </LinkList>
    </Section>
  );
};

export default MetaDataBox;
