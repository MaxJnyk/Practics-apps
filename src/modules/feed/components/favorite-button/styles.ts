import styled from "styled-components";

export const Button = styled.button`
  color: rebeccapurple;
  background: none;
  border: 1px solid rebeccapurple;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background: rebeccapurple;
    color: #fff;
  }
`;
