import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 20px 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1 {
    text-align: center;
  }
`;

export const MoviesContainerWrapper = styled.main`
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;