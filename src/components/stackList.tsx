import React from "react";
import styled from "styled-components";
import Tag from "../modules/tag";

interface StackListProps {
  stackList: string[];
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Item = styled.li`
  margin-bottom: 5px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const StackList: React.FC<StackListProps> = ({ stackList }) => {
  return (
    <List>
      {stackList.map((item, index) => (
        <Item key={index}>
          <Tag word={item} />
        </Item>
      ))}
    </List>
  );
};

export default StackList;
