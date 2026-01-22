import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: #bdbdbd;
  }

  p { margin: 0; }
`;

export default GlobalStyle;
