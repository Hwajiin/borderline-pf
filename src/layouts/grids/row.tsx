import React from "react";
import styled from "styled-components";

const SRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Row: React.FC = ({ children }) => {
  return <SRow>{children}</SRow>;
};

export default Row;
