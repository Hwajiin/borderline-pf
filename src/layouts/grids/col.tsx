import React from "react";
import styled from "styled-components";
import responsive from "../../base/constants/responsive";

export interface ColProps {
  sm?: number;
  md?: number;
  lg?: number;
}

const SCol = styled.div<ColProps>`
  ${(props) =>
    props.sm ? `width: ${(props.sm / responsive.columns.sm) * 100}%;` : null}

  ${(props) =>
    props.md
      ? `${responsive.device["above-tablet"]} {
                width: ${(props.md / responsive.columns.md) * 100}%; 
            } `
      : null}

    ${(props) =>
    props.lg
      ? `${responsive.device["above-desktop"]} {
        width: ${(responsive.gutter + responsive.unit.lg) * props.lg}px;
    }`
      : null}
`;

const Col: React.FC<ColProps> = (props) => {
  const { sm, md, lg } = props;

  return sm || md || lg ? (
    <SCol sm={sm} md={md} lg={lg}>
      {props.children}
    </SCol>
  ) : null;
};

export default Col;
