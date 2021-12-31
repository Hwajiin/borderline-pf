import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";

const SFooter = styled.footer`
  width: 100%;
  padding: ${whitespace.base.padding.sm}px 0;

  ${responsive.device["above-tablet"]} {
    position: absolute;
    bottom: 0;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: ${fonts.size.sm};
`;

const Footer = () => {
  return (
    <SFooter>
      <Copyright>Copyright 2021. borderline0px all rights reserved.</Copyright>
    </SFooter>
  );
};

export default Footer;
