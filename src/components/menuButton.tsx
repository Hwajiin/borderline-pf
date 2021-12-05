import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import flexbox from "../base/mixins/flexbox";
import Interactive from "../base/mixins/interactive";

export interface MenuButtonProps {
  toggleHandler?: MouseEventHandler<HTMLButtonElement>;
  open: boolean;
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  ${flexbox()}
`;

const Hamburger = styled.div<MenuButtonProps>`
  position: relative;
  width: 25px;
  height: 1px;
  background-color: ${colors.variable.black};
  box-shadow: 0px -7px 0px ${colors.variable.black};
  ${Interactive.transition("transform", 200)}
  ${({ open }) => {
    return open
      ? `
      transform: rotate(45deg);
      box-shadow: 0px 0px 0px ${colors.variable.black};
    `
      : null;
  }}

  &::after {
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${colors.variable.black};
    content: "";
    ${Interactive.transition("transform", 200)}
    ${({ open }) => {
      return open
        ? `
      transform: rotate(90deg);
      top: 0;
    `
        : null;
    }}
  }
`;

const MenuButton: React.FC<MenuButtonProps> = ({ toggleHandler, open }) => {
  return (
    <Button
      type="button"
      aria-label="menu toggle button"
      onClick={toggleHandler}
    >
      <Hamburger open={open} aria-hidden />
    </Button>
  );
};

export default MenuButton;
