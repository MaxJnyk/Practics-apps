import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleContainer = styled.article`
  width: 800px;
  margin-top: 40px;
  padding: 12px;
  border-bottom: 1px solid #bdbebd;
`;

export const ArticleBody = styled.div``;

export const AuthorInfoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ArticleDescription = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #d3d3d3;
  line-height: 1.3rem;

  &:hover {
    color: lightslategray;
    transition: 3ms;
  }
`;

export const ArticleTitle = styled.h1`
  color: #000;
  margin-top: 5px;
`;
