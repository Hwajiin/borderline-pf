import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import Interactive from "../base/mixins/interactive";

interface ALinkProps {
  path: string;
  name: string;
}

const A = styled.a`
  min-width: 100px;
  height: 40px;
  text-align: center;
  line-height: 30px;
  padding: 5px 10px;
  border-radius: 30px;
  background-color: ${colors.variable.black};
  color: ${colors.variable.white};
  ${Interactive.transition("all")}

  &:active,
  &:hover {
    color: black;
    background-color: ${colors.variable.green};
  }
`;

const ALink: React.FC<ALinkProps> = ({ path, name }) => {
  return (
    <A href={path} target="_blank">
      {name}
    </A>
  );
};

export default ALink;
