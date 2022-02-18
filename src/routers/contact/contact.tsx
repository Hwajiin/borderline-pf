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
import helmetInfo from "../../data/helmet";
import { Helmet } from "react-helmet";

const LinkWrapper = styled.a`
  width: 100%;
  height: 100%;
  ${flexbox()}
  ${Interactive.transition("all")}

  &:active,
  &:hover {
    h2,
    p {
      color: ${colors.variable.white};
    }

    background-color: ${colors.variable.green};
  }
`;

const Contact = () => {
  const {
    contact: { title, desc, keywords, ogTitle, ogDescription },
  } = helmetInfo;

  const {
    contact: { lg, sm },
  } = gridArea;

  const { means } = contactInfo;

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: "description", content: desc },
          { name: "keywords", content: keywords },
          { property: "og:title", content: ogTitle },
          { property: "og:description", content: ogDescription },
        ]}
      />

      <Main title="contact">
        <GridTemplate
          smTemplateStyle={sm.template}
          lgTemplateStyle={lg.template}
          lgColumns={lg.columns}
        >
          {Object.keys(means).map((key) => (
            <GridArea areaName={key} key={key}>
              {key !== "email" && (
                <LinkWrapper href={means[key].path} target="_blank">
                  <TitleBox title={key} subtitle={means[key].summary} />
                </LinkWrapper>
              )}

              {key === "email" && (
                <>
                  <TitleBox title={key} subtitle={means[key].summary} />
                  <ALink
                    name="메일 보내기"
                    path={`mailto:${means[key].path}`}
                  />
                </>
              )}
            </GridArea>
          ))}
        </GridTemplate>
      </Main>
    </>
  );
};

export default Contact;
