import { Box, Container } from "@mui/material";

import { styled } from "../../styles";

/**
 * Simple container with default margins to separate
 * sections on a page.
 */
export const PageSection = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

/**
 * Simple container with default margins and a border.
 */
export const BorderedPageSection = styled(PageSection)`
  border: solid 1px ${({ theme }) => theme.palette.border.default};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;

/**
 * Container for the content of a page. It has responsive
 * vertical margins.
 */
export const PageContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: ${({ theme }) => theme.spacing(7)};
    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
`;

/**
 * Empty placeholder box. Useful to visually show the
 * layout of a page before the real content is available.
 */
export const Placeholder = styled(Box)`
  border: dashed 2px ${({ theme }) => theme.palette.border.default};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  min-height: 300px;
  display: grid;
  place-items: center;

  &:before {
    font-size: ${({ theme }) => theme.typography.overline.fontSize};
    font-family: ${({ theme }) => theme.typography.overline.fontFamily};
    font-weight: ${({ theme }) => theme.typography.overline.fontWeight};
    color: ${({ theme }) => theme.palette.grey[500]};
    content: "PLACEHOLDER";
  }
`;

/**
 * Container used to create correct dimensions for preview images.
 * Wrap the entirety of the share page content in this container and
 * add the className "screenshot" to this element.
 */
export const ScreenshotWrapper = styled(Box)`
  margin: 100px auto;
  width: 1200px;
  height: 630px;
  overflow: hidden;
  background-color: white;
`;

/**
 * Container used to create correctly format map previews.
 * Wrap the map in this container.
 */
export const MapShareWrapper = styled(Box)`
  margin: auto;
  width: 515px;
  transform: scale(2);
  transform-origin: top center;

  /* HACK to remove box-shadow from SocialLocationPreview component. */
  div:first-child {
    box-shadow: none;
  }
`;
