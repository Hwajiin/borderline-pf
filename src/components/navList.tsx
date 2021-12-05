import React from "react";
import styled from "styled-components";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";
import category from "../data/category";
import CustomLink from "../modules/customLink";

interface NavListProps {
  kind?: "nav" | "menu";
}

const List = styled.ul<NavListProps>`
  ${flexbox("flex-start")}
  flex-direction: ${({ kind }) => (kind === "menu" ? "column" : "")};
  height: 100%;
`;

const Item = styled.li`
  width: 100%;
  white-space: nowrap;
  text-align: right;
  &:not(:last-child) {
    margin-bottom: ${whitespace.base.margin.sm}px;
  }

  ${responsive.device["above-tablet"]} {
    text-align: justify;
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: ${whitespace.base.margin.lg}px;
    }
  }
`;

const NavList: React.FC<NavListProps> = ({ kind = "nav" }) => {
  return (
    <List kind={kind}>
      {category.map((item, index) => (
        <Item key={index}>
          <CustomLink to={item.path}>{item.title}</CustomLink>
        </Item>
      ))}
    </List>
  );
};

export default NavList;
