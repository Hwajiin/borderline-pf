import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import flexbox from "../base/mixins/flexbox";
import Interactive from "../base/mixins/interactive";

interface ALinkProps {
  path: string;
  name: string;
}

const A = styled.a`
  ${flexbox()}
  min-width: 100px;
  height: 40px;
  padding: 5px;
  border-radius: 30px;
  background-color: ${colors.variable.black};
  color: ${colors.variable.ivory};
  ${Interactive.transition("all")}

  &:active,
  &:hover {
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
