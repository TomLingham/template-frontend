import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  body {
    font-family: Merriweather, Helvetica, Arial, sans-serif;
    background: #efefef;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Lora, serif;
  }
`;
