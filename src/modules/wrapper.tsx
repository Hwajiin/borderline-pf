import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import flexbox from "../base/mixins/flexbox";

interface WrapperProps {
  flex?: boolean;
  padding?: number;
}

const SWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => `0 ${padding}px`};

  ${responsive.device["above-tablet"]} {
    ${({ flex }) => flex && flexbox("space-around")};
    padding: ${({ padding }) => `${padding}px 0`};
  }
`;

const Wrapper: React.FC<WrapperProps> = ({
  flex = false,
  padding = 0,
  children,
}) => {
  return (
    <SWrapper flex={flex} padding={padding}>
      {children}
    </SWrapper>
  );
};

export default Wrapper;
