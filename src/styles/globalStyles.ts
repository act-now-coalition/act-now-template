import { css } from '@emotion/react';

const globalStyles = css`
  html {
    scroll-behavior: smooth;

    // AppBar height + fuzz
    scroll-padding-top: 100px;
  }

  body {
    overflow-x: hidden;
  }
`;

export default globalStyles;
