import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";

interface ImgBoxProps {
  height?: number;
  size?: number;
  path?: string | string[];
  alt?: string;
}

type ImgBoxStyleProps = Pick<ImgBoxProps, "size" | "height" | "path">;

const Image = styled.div<ImgBoxStyleProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: pink;
  background: center/cover url(${({ path }) => (path ? `${path[0]}` : "")});

  ${responsive.device["above-tablet"]} {
    height: 500px;
    background: center/cover url(${({ path }) => (path ? `${path[1]}` : "")});
  }

  ${responsive.device["above-desktop"]} {
    width: ${({ size }) => size}%;
    height: 100%;
    background: center/cover url(${({ path }) => (path ? `${path[1]}` : "")});
  }
`;

const ImgBox: React.FC<ImgBoxProps> = ({ height = 300, size = 40, path }) => {
  return <Image height={height} size={size} path={path}></Image>;
};

export default ImgBox;
