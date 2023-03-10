import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorAvatarImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const AuthorUsername = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const AuthorPublishData = styled.span`
  font-size: 12px;
  color: #d3d3d3;
  font-weight: 300;
`;
