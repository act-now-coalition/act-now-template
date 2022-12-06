import { css } from "@emotion/react";

const globalStyles = css`
  html {
    scroll-behavior: smooth;

    // The AppBar component (src/components/AppBar/AppBar.tsx) uses sticky
    // positioning to always be at the top of the screen. To make sure that anchor
    // links scroll into view appropriately we need to add extra scroll padding to
    // compensate for the AppBar height.  You may need to adjust this padding if
    // you make changes to the AppBar.
    scroll-padding-top: 64px;
  }

  body {
    overflow-x: hidden;
  }
`;

export default globalStyles;
