import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import flexbox from "../base/mixins/flexbox";
import TitleBox, { TitleBoxProps } from "../modules/titleBox";

interface IntroProps extends TitleBoxProps {}

const SIntro = styled.section`
  width: 100%;
  min-height: 200px;
  ${flexbox()}
  border-bottom: 1px solid ${colors.variable.black};
`;

const Intro: React.FC<IntroProps> = (props, { children }) => {
  return (
    <SIntro>
      <TitleBox {...props} />
      {children}
    </SIntro>
  );
};

export default Intro;
