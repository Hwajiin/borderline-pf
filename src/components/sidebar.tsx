import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import global from "../base/constants/global";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";
import GoBackBtn from "../modules/goBackBtn";

interface SidebarProps {
  title: string;
}

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${global.headerHeight}px;
  height: 100vh;
  padding: ${global.navHeight}px ${whitespace.base.padding.sm}px
    ${whitespace.base.padding.sm}px;
  ${flexbox("space-between", "center", "column")}
  background-color: ${colors.variable.white};
  border-right: 1px solid ${colors.variable.black};
`;

const Title = styled.h2`
  writing-mode: vertical-rl;
  text-transform: capitalize;
  font-size: ${fonts.size.md};
`;

const Sidebar: React.FC<SidebarProps> = ({ title }) => {
  return (
    <Aside>
      <GoBackBtn />
      <Title>{title}</Title>
    </Aside>
  );
};

export default Sidebar;
