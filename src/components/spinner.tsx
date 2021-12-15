import React from "react";
import styled, { keyframes } from "styled-components";
import colors from "../base/constants/colors";
import flexbox from "../base/mixins/flexbox";
import global from "../base/constants/global";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Background = styled.div`
  width: 100vw;
  height: calc(100vh - ${global.navHeight}px);
  ${flexbox()}
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid ${colors.variable["gray-dark"]};
  border-top: 8px solid ${colors.variable.pink};
  animation: ${spin} 1s infinite linear;
`;

const Spinner = () => {
  return (
    <Background>
      <Circle />
    </Background>
  );
};

export default Spinner;
