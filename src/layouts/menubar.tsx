import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import global from "../base/constants/global";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import zIndex from "../base/constants/z-index";
import NavList from "../components/navList";

interface MenubarProps {
  open: boolean;
}

const Wrapper = styled.div<MenubarProps>`
  ${responsive.range["sm-only"]}
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  padding: ${global.navHeight + whitespace.base.padding.sm}px
    ${whitespace.base.padding.sm}px;
  background-color: ${colors.variable.ivory};
  border-left: 1px solid ${colors.variable.black};
  z-index: ${zIndex.menubar};
  transition: transform 300ms ease-in;
  transform: translate3d(100%, 0, 0);

  ${({ open }) => (open ? `transform: translate3d(0, 0, 0)` : "")};
`;

const Menubar: React.FC<MenubarProps> = ({ open }) => {
  return (
    <Wrapper open={open}>
      <NavList kind="menu" />
    </Wrapper>
  );
};

export default Menubar;
