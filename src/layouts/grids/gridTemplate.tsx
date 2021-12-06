import React from "react";
import styled from "styled-components";
import responsive from "../../base/constants/responsive";

interface GridTemplateProps {
  smTemplateStyle: string;
  lgTemplateStyle: string;
  lgColumns: string;
}

const Grid = styled.div<GridTemplateProps>`
  display: grid;
  width: 100%;
  grid-auto-rows: minmax(200px, auto);
  grid-template-columns: 1fr;
  grid-template-areas: ${({ smTemplateStyle }) => smTemplateStyle};

  ${responsive.device["above-tablet"]} {
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: ${({ lgColumns }) => lgColumns};
    grid-template-areas: ${({ lgTemplateStyle }) => lgTemplateStyle};
  }
`;

const GridTemplate: React.FC<GridTemplateProps> = ({
  smTemplateStyle,
  lgTemplateStyle,
  lgColumns,
  children,
}) => {
  return (
    <Grid
      smTemplateStyle={smTemplateStyle}
      lgTemplateStyle={lgTemplateStyle}
      lgColumns={lgColumns}
    >
      {children}
    </Grid>
  );
};

export default GridTemplate;
