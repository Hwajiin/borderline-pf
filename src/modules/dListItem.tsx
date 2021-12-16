import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";

interface DListItemProps {
  term: string;
  value: string;
}

const Div = styled.div`
  display: flex;
  font-size: ${fonts.size.md};
  margin: 5px 0;
`;

const DTerm = styled.dt`
  &::after {
    content: ":";
    margin-right: 3px;
  }
`;

const DD = styled.dd``;

const DListItem: React.FC<DListItemProps> = ({ term, value }) => {
  return (
    <Div>
      <DTerm>{term}</DTerm>
      <DD>{value}</DD>
    </Div>
  );
};

export default DListItem;
