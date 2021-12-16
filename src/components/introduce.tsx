import React from "react";
import styled from "styled-components";
import fonts from "../base/constants/fonts";
import responsive from "../base/constants/responsive";
import whitespace from "../base/constants/whitespace";

const Div = styled.div`
  margin: ${whitespace.base.padding.lg}px;

  ${responsive.device["above-tablet"]} {
    margin: 0;
  }
`;

const P = styled.p`
  font-size: ${fonts.size.lg};
  line-height: 1.5em;
  text-align: right;

  ${responsive.device["above-desktop"]} {
    font-size: ${fonts.size.xl};
  }
`;

const Name = styled.span``;

const Summary = styled.p`
  margin: 30px 0 50px 0;
  text-align: right;
  font-size: ${fonts.size.sm};

  ${responsive.device["above-desktop"]} {
    font-size: ${fonts.size.md};
  }
`;

const Introduce = () => {
  return (
    <Div>
      <div>
        <P>채팅창 테마를 꾸미다가</P>
        <P>프론트엔드 개발을 하게 된</P>
        <P>
          <Name>화지인</Name>입니다
        </P>
      </div>
      <Summary>
        도전하는 것을 두려워하지 않고, 새로운 것을 배우기를 좋아합니다
      </Summary>
    </Div>
  );
};

export default Introduce;
