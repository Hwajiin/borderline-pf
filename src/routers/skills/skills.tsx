import React from "react";
import styled from "styled-components";
import gridArea from "../../base/constants/grid-area";
import Card from "../../components/card";
import Intro from "../../components/intro";
import skillsInfo from "../../data/skills";
import GridArea from "../../layouts/grids/gridArea";
import GridTemplate from "../../layouts/grids/gridTemplate";
import Main from "../../layouts/main";

const Skills = () => {
  const { stack } = skillsInfo;

  const {
    skills: { lg, sm },
  } = gridArea;

  return (
    <Main title="skills">
      <Intro title="lorem" />
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
  );
};

export default Skills;
