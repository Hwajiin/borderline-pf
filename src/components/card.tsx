import React from "react";
import styled from "styled-components";
import colors from "../base/constants/colors";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";
import flexbox from "../base/mixins/flexbox";

interface CardProps {
  lang?: string;
  path?: string | null;
}

const Box = styled.div`
  width: 100%;
  height: 250px;

  ${responsive.device["above-tablet"]} {
    height: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
  padding: 30px;
`;

const Detail = styled.div`
  width: 100%;
  height: 20%;
`;

const Data = styled.p`
  ${flexbox("flex-end")}
  width: 100%;
  height: 100%;
  font-size: ${fonts.size.md};
  font-weight: 700;
  padding: 0 ${whitespace.base.padding.sm}px;
  border-top: 1px solid ${colors.variable.black};
`;

const Card: React.FC<CardProps> = ({ lang, path }) => {
  return (
    <Box>
      {path && (
        <>
          <Img src={path} alt="" />
          <Detail>
            <Data>{lang}</Data>
          </Detail>
        </>
      )}
    </Box>
  );
};

export default Card;
