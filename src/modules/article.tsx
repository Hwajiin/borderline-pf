import React from "react";
import styled from "styled-components";
import global from "../base/constants/global";

interface ArticleProps {
  title: string;
  hidden?: boolean;
}

type ArticleStyleProps = Pick<ArticleProps, "hidden">;

const SArticle = styled.article`
  height: 100%;
  margin-bottom: 30px;
`;

const Title = styled.h2<ArticleStyleProps>`
  ${({ hidden }) => hidden && global["visually-hidden"]};
  font-size: 16px;
  margin-bottom: 10px;
`;

const Article: React.FC<ArticleProps> = ({
  title,
  hidden = false,
  children,
}) => {
  return (
    <SArticle>
      <Title hidden={hidden}>{title}</Title>
      {children}
    </SArticle>
  );
};

export default Article;
