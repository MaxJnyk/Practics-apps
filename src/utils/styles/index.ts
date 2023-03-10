import styled, { createGlobalStyle } from "styled-components";
import { PageProps } from "./stylesTypes";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;;
  }
`;

export const Page = styled.div<PageProps>`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: 1140px;
  height: 100%;
  margin: 0 auto;
`;
