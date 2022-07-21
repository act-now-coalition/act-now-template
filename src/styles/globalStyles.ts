import { css } from "@emotion/react";
import palette from "./palette";

const globalStyles = css`
  html {
    scroll-behavior: smooth;

    // AppBar height + fuzz
    scroll-padding-top: 100px;
  }

  body {
    background-color: ${palette.secondary.main};
    overflow-x: hidden;
  }
`;

export default globalStyles;
