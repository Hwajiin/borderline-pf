import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";

interface TagProps {
  word: string;
}

const STag = styled.span`
  width: auto;
  height: 40px;
  padding: 5px;
  color: ${colors.variable["gray-dark"]};
  border: 2px solid ${colors.variable.gray};
  border-radius: 5px;
`;

const Tag: React.FC<TagProps> = ({ word }) => {
  return <STag>{word}</STag>;
};

export default Tag;
