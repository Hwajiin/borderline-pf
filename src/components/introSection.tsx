import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";
import { TitleBoxProps } from "../modules/titleBox";

interface IntroProps extends TitleBoxProps {}

const SIntroSection = styled.section`
  width: 100%;
  min-height: 200px;
  ${flexbox("center", "center", "column")}
  border-bottom: 1px solid ${colors.variable.black};
  padding: ${whitespace.base.padding.sm}px;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Subtitle = styled.p`
  display: inline-block;
  width: 80%;
  text-align: center;
  font-size: ${fonts.size.sm};
  margin-top: 20px;
`;

const IntroSection: React.FC<IntroProps> = ({ title, subtitle, children }) => {
  return (
    <SIntroSection>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </SIntroSection>
  );
};

export default IntroSection;
