import { Helmet } from "react-helmet";
import gridArea from "../../base/constants/grid-area";
import Card from "../../components/card";
import IntroSection from "../../components/introSection";
import helmetInfo from "../../data/helmet";
import skillsInfo from "../../data/skills";
import useImage from "../../hooks/useImage";
import GridArea from "../../layouts/grids/gridArea";
import GridTemplate from "../../layouts/grids/gridTemplate";
import Main from "../../layouts/main";

import HTML_LOGO from "../../assets/logo/html-css-js.png";
import REACT_LOGO from "../../assets/logo/react.png";
import SASS_LOGO from "../../assets/logo/sass.png";
import TYPESCRIPT_LOGO from "../../assets/logo/typescript.png";

const Skills = () => {
  useImage([HTML_LOGO, REACT_LOGO, SASS_LOGO, TYPESCRIPT_LOGO]);

  const {
    skills: { title, desc, keywords, ogTitle, ogDescription },
  } = helmetInfo;

  const { stack } = skillsInfo;

  const {
    skills: { lg, sm },
  } = gridArea;

  const introTitle = "배우고 싶은 것이 가득한 프론트엔드 개발자";

  const introSubtitle =
    "React와 TypeScript를 주로 사용하고 있으며, next.js를 학습하고 있습니다.";

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

      <Main title="skills">
        <IntroSection title={introTitle} subtitle={introSubtitle} />
        <GridTemplate
          smTemplateStyle={sm.template}
          lgTemplateStyle={lg.template}
          lgColumns={lg.columns}
        >
          {stack.map((item, index) => (
            <GridArea key={index} areaName={item.name}>
              <Card url={item.img} lang={item.lang} />
            </GridArea>
          ))}
        </GridTemplate>
      </Main>
    </>
  );
};

export default Skills;
