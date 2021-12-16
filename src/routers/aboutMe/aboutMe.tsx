import React from "react";
import styled from "styled-components";
import colors from "../../base/constants/colors";
import fonts from "../../base/constants/fonts";
import responsive from "../../base/constants/responsive";
import whitespace from "../../base/constants/whitespace";
import Introduce from "../../components/introduce";
import aboutmeInfo from "../../data/aboutme";
import Col from "../../layouts/grids/col";
import Container from "../../layouts/grids/container";
import Row from "../../layouts/grids/row";
import Main from "../../layouts/main";
import Article from "../../modules/article";
import DListItem from "../../modules/dListItem";
import Wrapper from "../../modules/wrapper";

const Img = styled.img`
  width: 100%;
  display: flex;
  object-fit: contain;
`;

const Section = styled.section`
  ${responsive.device["above-tablet"]} {
    margin-top: 50px;
  }
`;

const Date = styled.time`
  font-size: ${fonts.size.md};
  font-weight: ${fonts.weight.bold};
`;

const P = styled.p`
  font-size: ${fonts.size.md};
  margin: 5px 0;
`;

const DList = styled.dl``;

const Border = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.variable.gray};
  margin-bottom: 30px;

  ${responsive.device["above-tablet"]} {
    height: 0px;
    /* margin-bottom: 0px; */
  }
`;

const AboutMe = () => {
  return (
    <Main title="About Me">
      <Section>
        <Container>
          <Row>
            <Col sm={4} md={5} lg={4}>
              <Img src={aboutmeInfo.avatar[1]} alt="profile" />
            </Col>

            <Col sm={4} md={7} lg={8}>
              <Wrapper>
                <Article title="Introduce" hidden={true}>
                  <Introduce />
                </Article>
              </Wrapper>
            </Col>
          </Row>
          <Border />
          <Row>
            <Col sm={4} md={6}>
              <Wrapper padding={whitespace.base.padding.lg}>
                <Article title="Personal Information">
                  <DList>
                    <DListItem term="이름" value="화지인" />
                    <DListItem term="생년월일" value="1995.10.02" />
                    <DListItem term="주소" value="경상남도 진주시" />
                    <DListItem term="좋아하는 것" value="하이큐, 돼지국밥" />
                  </DList>
                </Article>
              </Wrapper>
            </Col>

            <Col sm={4} md={6}>
              <Wrapper padding={whitespace.base.padding.lg}>
                <Article title="Education">
                  <Date>2021.01 ~</Date>
                  <P>프로그래밍 독학</P>
                  <Date>2014.03 ~ 2020.02</Date>
                  <P>부산대학교 경영학과</P>
                </Article>
              </Wrapper>
            </Col>
          </Row>
        </Container>
      </Section>
    </Main>
  );
};

export default AboutMe;