import Main from "../../layouts/main";
import { Helmet } from "react-helmet";
import helmetInfo from "../../data/helmet";
import styled from "styled-components";
import global from "../../base/constants/global";
import colors from "../../base/constants/colors";
import whitespace from "../../base/constants/whitespace";
import responsive from "../../base/constants/responsive";
import { Link } from "react-router-dom";
import imagePath from "../../data/image_path";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - ${global.navHeight}px);
  background: left/cover no-repeat url(${imagePath.home.bg.sm});

  ${responsive.device["above-tablet"]} {
    background: left/cover no-repeat url(${imagePath.home.bg.md});
  }

  ${responsive.device["above-desktop"]} {
    background: left/cover no-repeat url(${imagePath.home.bg.lg});
  }
`;

const Box = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: ${whitespace.base.padding.sm}px;

  ${responsive.device["above-tablet"]} {
    padding: ${whitespace.base.padding.lg}px;
  }
`;

const Strong = styled.strong`
  display: block;
  font-size: 3em;
  color: ${colors.variable.pink};
  margin-top: 20px;

  ${responsive.device["above-tablet"]} {
    font-size: 4em;
  }
`;

const P = styled.p`
  font-weight: 700;
  font-size: 3em;
  color: ${colors.variable.white};

  ${responsive.device["above-tablet"]} {
    font-size: 4em;
  }
`;

const SLink = styled(Link)`
  color: ${colors.variable.white};
  border: 1px solid ${colors.variable.white};
  padding: 10px;
  transition: opacity 300ms ease-in-out;

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const Home = () => {
  const {
    home: { title, desc, keywords, ogTitle, ogDescription },
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
          { name: "twitter:card", content: "summary" },
        ]}
      />

      <Main isHeader={false}>
        <Wrapper>
          <Box>
            <SLink to="/projects">프로젝트 보기</SLink>
            <Strong>욕심 많은</Strong>
            <P>개발자의</P>
            <P>포트폴리오</P>
          </Box>
        </Wrapper>
      </Main>
    </>
  );
};

export default Home;
