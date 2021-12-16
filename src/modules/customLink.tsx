import React from "react";
import { Link, LinkProps, useResolvedPath, useMatch } from "react-router-dom";
import styled from "styled-components";
import colors from "../base/constants/colors";
import Interactive from "../base/mixins/interactive";

interface CustomLinkProps extends LinkProps {
  current: "active" | "";
}

const SLink = styled(Link)<CustomLinkProps>`
  display: inline-block;
  text-transform: capitalize;
  padding: 10px 0;
  font-size: 16px;
  ${Interactive.transition()}
  ${({ current }) => current === "active" && `text-decoration: underline;`}

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
