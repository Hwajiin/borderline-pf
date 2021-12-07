import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import TitleBox from "../modules/titleBox";

interface ContentsBoxProps {
  size: number;
}

const SContentsBox = styled.section<ContentsBoxProps>`
  width: 100%;
  height: ${({ size }) => size}%;
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 7px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  ${responsive.device["above-tablet"]} {
    width: ${({ size }) => size}%;
    height: 100%;

    &:hover,
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 7px 0px 12px -2px,
        rgba(0, 0, 0, 0.3) 3px 0px 7px -3px;
    }
  }
`;

const ContentsBox: React.FC<ContentsBoxProps> = ({ size }) => {
  return (
    <SContentsBox size={size}>
      <TitleBox title="contents" />
    </SContentsBox>
  );
};

export default ContentsBox;
