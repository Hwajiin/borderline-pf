import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";
import Interactive from "../base/mixins/interactive";

interface StackItemProps {
  size: number;
  to: string;
  title: string;
}

type StackItemStylesProps = Pick<StackItemProps, "size">;

const Container = styled.li<StackItemStylesProps>`
  width: 100%;
  height: ${({ size }) => size}%;
  border-top: 1px solid ${colors.variable.black};
  transition: all 300ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${colors.variable.green};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 7px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  ${responsive.device["above-tablet"]} {
    width: ${({ size }) => size}%;
    height: 100%;
    border-top: 1px solid transparent;
    border-left: 1px solid ${colors.variable.black};

    &:hover,
    &:active {
      box-shadow: rgba(50, 50, 93, 0.25) 7px 0px 12px -2px,
        rgba(0, 0, 0, 0.3) 3px 0px 7px -3px;
    }
  }
`;

const SLink = styled(Link)`
  ${flexbox("flex-end", "flex-start")}
  width: 100%;
  height: 100%;
  padding: ${whitespace.base.padding.sm}px;
`;

const Title = styled.h4`
  font-size: ${fonts.size.md};
  text-transform: capitalize;

  ${responsive.device["above-tablet"]} {
    writing-mode: vertical-rl;
  }
`;

const StackItem: React.FC<StackItemProps> = ({ size, to, title, children }) => {
  return (
    <Container size={size}>
      <SLink to={to}>
        <Title>{title}</Title>
        {children}
      </SLink>
    </Container>
  );
};

export default StackItem;
