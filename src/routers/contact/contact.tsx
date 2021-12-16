import React from "react";
import styled from "styled-components";
import colors from "../../base/constants/colors";
import gridArea from "../../base/constants/grid-area";
import flexbox from "../../base/mixins/flexbox";
import Interactive from "../../base/mixins/interactive";
import contactInfo from "../../data/contact";
import GridArea from "../../layouts/grids/gridArea";
import GridTemplate from "../../layouts/grids/gridTemplate";
import Main from "../../layouts/main";
import ALink from "../../modules/aLink";
import TitleBox from "../../modules/titleBox";

const LinkWrapper = styled.a`
  width: 100%;
  height: 100%;
  ${flexbox()}
  ${Interactive.transition("background-color")}

  &:active,
  &:hover {
    background-color: ${colors.variable.green};
  }
`;

const Contact = () => {
  const {
    contact: { lg, sm },
  } = gridArea;

  const { email, github, velog, resume } = contactInfo;

  return (
    <Main title="contact">
      <GridTemplate
        smTemplateStyle={sm.template}
        lgTemplateStyle={lg.template}
        lgColumns={lg.columns}
      >
        <GridArea areaName="email">
          <TitleBox title="email" subtitle={email.summary} />
          <ALink name="메일 보내기" path={`mailto:${contactInfo.email.path}`} />
        </GridArea>

        <GridArea areaName="github">
          <LinkWrapper href={github.path} target="_blank">
            <TitleBox title="github" subtitle={github.summary} />
          </LinkWrapper>
        </GridArea>

        <GridArea areaName="velog">
          <LinkWrapper href={velog.path} target="_blank">
            <TitleBox title="velog" subtitle={velog.summary} />
          </LinkWrapper>
        </GridArea>

        <GridArea areaName="resume">
          <LinkWrapper href={resume.path} target="_blank">
            <TitleBox title="resume" subtitle={resume.summary} />
          </LinkWrapper>
        </GridArea>
      </GridTemplate>
    </Main>
  );
};

export default Contact;
