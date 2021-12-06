import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import flexbox from "../base/mixins/flexbox";

const SWrapper = styled.div`
  width: 100%;
  height: 100%;

  ${responsive.device["above-tablet"]} {
    ${flexbox()}
  }
`;

const Wrapper: React.FC = ({ children }) => {
  return <SWrapper>{children}</SWrapper>;
};

export default Wrapper;
