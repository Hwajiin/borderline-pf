import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import flexbox from "../base/mixins/flexbox";
import typography from "../base/mixins/typography";

type SizeName = "sm" | "md" | "lg" | "xl";

export interface TitleBoxProps {
  title?: string;
  subtitle?: string;
  titleSize?: SizeName;
  subtitleSize?: SizeName;
  center?: boolean;
}

type TitleBoxStyleProps = Pick<
  TitleBoxProps,
  "titleSize" | "subtitleSize" | "center"
>;

const Box = styled.div<TitleBoxStyleProps>`
  ${({ center }) =>
    center
      ? `
${flexbox("center", "center", "column")}
`
      : `${flexbox("flex-start", "flex-start", "column")}`}
`;

const Title = styled.h2<TitleBoxStyleProps>`
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
  title = "",
  subtitle,
  titleSize = "lg",
  subtitleSize = "sm",
  center = true,
}) => {
  return (
    <Box center={center}>
      <Title titleSize={titleSize}>{title}</Title>
      <Subtitle subtitleSize={subtitleSize}>{subtitle}</Subtitle>
    </Box>
  );
};

export default TitleBox;
