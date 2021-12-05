import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import flexbox from "../base/mixins/flexbox";
import Interactive from "../base/mixins/interactive";

interface ButtonProps {
  name: string;
  label?: string;
}

const SButton = styled.button`
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

const Button: React.FC<ButtonProps> = ({ name, label }) => {
  return (
    <SButton type="button" aria-label={label}>
      {name}
    </SButton>
  );
};

export default Button;
