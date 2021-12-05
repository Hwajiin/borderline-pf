import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import global from "../base/constants/global";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import Col from "./grids/col";
import Container from "./grids/container";
import Row from "./grids/row";

interface MainProps {
  title?: string;
}

const SMain = styled.main`
  width: 100%;
  padding-top: ${global.navHeight}px;
`;

const Header = styled.header`
  padding: ${whitespace.base.padding.sm}px;
  border-bottom: 1px solid ${colors.variable.black};

  ${responsive.device["above-tablet"]} {
    padding: ${whitespace.base.padding.sm}px 0;
  }
`;

const Title = styled.h1`
  font-size: ${fonts.size.xl};
  text-transform: capitalize;
`;

const Main: React.FC<MainProps> = ({ title, children }) => {
  return (
    <SMain>
      <Header>
        <Container>
          <Row>
            <Col sm={4}>
              <Title>{title}</Title>
            </Col>
          </Row>
        </Container>
      </Header>
      {children}
    </SMain>
  );
};

export default Main;
