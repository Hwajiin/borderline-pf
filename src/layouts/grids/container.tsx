import React from "react";
import styled from "styled-components";
import responsive from "../../base/constants/responsive";

const SContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;

  ${responsive.device["above-tablet"]} {
    max-width: ${responsive["max-container-size"].md}px;
    padding: 0 ${responsive.margin.md}px;
  }

  ${responsive.device["above-desktop"]} {
    max-width: ${responsive["max-container-size"].lg}px;
    padding: 0;
  }
`;

const Container: React.FC = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
