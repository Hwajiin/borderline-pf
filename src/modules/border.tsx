import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";

const SBorder = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.variable.gray};
`;

const Border = () => {
  return <SBorder aria-hidden />;
};
export default Border;
