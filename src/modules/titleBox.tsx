import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import flexbox from "../base/mixins/flexbox";
import typography from "../base/mixins/typography";

type SizeName = "sm" | "md" | "lg" | "xl";

interface TitleBoxProps {
  title: string;
  subtitle?: string;
  titleSize?: SizeName;
  subtitleSize?: SizeName;
}

type TitleBoxStyleProps = Pick<TitleBoxProps, "titleSize" | "subtitleSize">;

const Box = styled.div`
  ${flexbox("center", "center", "column")}

  ${responsive.device["above-tablet"]} {
  }
`;

const Title = styled.h1<TitleBoxStyleProps>`
  font-family: ${fonts.family.en.point};
  text-transform: capitalize;
  ${({ titleSize }) => typography(titleSize)}
`;

const Subtitle = styled.p<TitleBoxStyleProps>`
  font-family: ${fonts.family.kr.base};
  ${({ subtitleSize }) => typography(subtitleSize)}
  margin: 20px 0 30px 0;
`;

const TitleBox: React.FC<TitleBoxProps> = ({
  title,
  subtitle,
  titleSize = "lg",
  subtitleSize = "sm",
}) => {
  return (
    <Box>
      <Title titleSize={titleSize}>{title}</Title>
      <Subtitle subtitleSize={subtitleSize}>{subtitle}</Subtitle>
    </Box>
  );
};

export default TitleBox;
