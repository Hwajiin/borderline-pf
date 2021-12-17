import React from "react";
import styled from "styled-components";
import colors from "../../base/constants/colors";
import responsive from "../../base/constants/responsive";
import flexbox from "../../base/mixins/flexbox";

interface GridAreaProps {
  areaName: string;
  border?: boolean;
}

const Area = styled.div<GridAreaProps>`
  width: 100%;
  height: 100%;
  ${flexbox("center", "center", "column")}
  grid-area: ${({ areaName }) => areaName};
  border-bottom: 1px solid ${colors.variable.black};

  ${responsive.device["above-tablet"]} {
    &:not(:first-child) {
      border-left: ${({ border }) =>
        border && `1px solid ${colors.variable.black}`};
    }
  }
`;

const GridArea: React.FC<GridAreaProps> = ({
  areaName,
  border = true,
  children,
}) => {
  return (
    <Area areaName={areaName} border={border}>
      {children}
    </Area>
  );
};

export default GridArea;
