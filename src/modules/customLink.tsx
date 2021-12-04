import React from "react";
import { Link, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import styled from "styled-components";
import colors from "../base/constants/colors";
import Interactive from "../base/mixins/interactive";
import typography from "../base/mixins/typography";

interface CustomLinkProps extends LinkProps {
  current: string;
}

const SLink = styled(Link)<CustomLinkProps>`
  display: inline-block;
  text-transform: capitalize;
  padding: 10px 0;
  ${typography()}
  ${Interactive.transition()}

  &:hover,
  &:active {
    color: ${colors.variable.white};
  }
`;

const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <SLink to={to} current={match ? "active" : ""} {...props}>
      {children}
    </SLink>
  );
};

export default CustomLink;
