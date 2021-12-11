import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";

interface ImgBoxProps {
  height?: number;
  size?: number;
  path?: string;
  alt?: string;
}

type ImgBoxStyleProps = Pick<ImgBoxProps, "size" | "height">;

const Img = styled.img<ImgBoxStyleProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  object-fit: contain;
  background-color: pink;

  ${responsive.device["above-desktop"]} {
    width: ${({ size }) => size}%;
    height: 100%;
  }
`;

const ImgBox: React.FC<ImgBoxProps> = ({
  height = 400,
  size = 40,
  path,
  alt,
}) => {
  return <Img height={height} size={size} src={path} alt={alt} />;
};

export default ImgBox;
