import { css } from "@emotion/react";

export const greyscaleToColor = css`
  filter: grayscale(1);
  transition: filter 0.1s ease;

  &:hover {
    filter: grayscale(0);
  }
`;
