import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";

interface TagProps {
  word: string;
}

const STag = styled.span`
  display: inline-block;
  padding: 5px;
  font-size: ${fonts.size.md};
  color: ${colors.variable["gray-dark"]};
  border: 2px solid ${colors.variable.gray};
  border-radius: 5px;
`;

const Tag: React.FC<TagProps> = ({ word }) => {
  return <STag>{word}</STag>;
};

export default Tag;
