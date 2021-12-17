import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import gridArea from "../../base/constants/grid-area";
import Card from "../../components/card";
import Intro from "../../components/intro";
import helmetInfo from "../../data/helmet";
import skillsInfo from "../../data/skills";
import GridArea from "../../layouts/grids/gridArea";
import GridTemplate from "../../layouts/grids/gridTemplate";
import Main from "../../layouts/main";

const Skills = () => {
  const { stack } = skillsInfo;

  const {
    skills: { lg, sm },
  } = gridArea;

  const introTitle = "배우고 싶은 것이 넘치는 프론트엔드 개발자";

  const introSubtitle =
    "React와 TypeScript를 주로 사용하고 있으며, three.js를 학습하고 있습니다.";

  const {
    skills: { title, desc, keywords, ogTitle, ogDescription, ogImage },
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

      <Main title="skills">
        <Intro title={introTitle} subtitle={introSubtitle} />
        <GridTemplate
          smTemplateStyle={sm.template}
          lgTemplateStyle={lg.template}
          lgColumns={lg.columns}
        >
          {stack.map((item, index) => (
            <GridArea key={index} areaName={item.name}>
              <Card path={item.img} lang={item.lang} />
            </GridArea>
          ))}
        </GridTemplate>
      </Main>
    </>
  );
};

export default Skills;
