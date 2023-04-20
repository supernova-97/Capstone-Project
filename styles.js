import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #004643;
    color: #fffffe;
    --primary-color: #abd1c6;
    --button-color: #f9bc60;
    --button-text-color: #001e1d;
  
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
